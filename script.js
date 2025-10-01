// ============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Offset for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// FORM SUBMISSION HANDLER
// ============================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        telefono: formData.get('telefono'),
        localidad: formData.get('localidad'),
        plan: formData.get('plan'),
        mensaje: formData.get('mensaje'),
        acepto: formData.get('acepto')
    };
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.btn-submit');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    formMessage.style.display = 'none';
    
    try {
        // ==============================================================
        // OPCIÓN 1: Enviar por Email usando FormSubmit (Recomendado)
        // ==============================================================
        // Para usar FormSubmit:
        // 1. Visita https://formsubmit.co/
        // 2. Reemplaza "pablobasconesbusch@gmail.com" con el email real
        // 3. La primera vez, tendrás que confirmar el email
        
        const response = await fetch('https://formsubmit.co/ajax/pablobasconesbusch@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: `Nueva consulta de ${data.nombre} - Sancor Salud`,
                _template: 'table',
                _captcha: 'false',
                Nombre: data.nombre,
                Email: data.email,
                Teléfono: data.telefono,
                Localidad: data.localidad,
                'Tipo de Plan': data.plan,
                Mensaje: data.mensaje || 'Sin mensaje adicional'
            })
        });
        
        if (response.ok) {
            // Success
            formMessage.textContent = '¡Gracias! Tu consulta fue enviada correctamente. Te contactaremos a la brevedad.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            contactForm.reset();
            
            // Optional: Send to Google Analytics or tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submission', {
                    'event_category': 'Contact',
                    'event_label': data.plan
                });
            }
        } else {
            throw new Error('Error al enviar el formulario');
        }
        
        // ==============================================================
        // OPCIÓN 2: Enviar a un Backend Propio
        // ==============================================================
        // Si tienes un backend, descomenta esto y comenta la opción 1:
        /*
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            formMessage.textContent = result.message || '¡Gracias! Tu consulta fue enviada correctamente.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            contactForm.reset();
        } else {
            throw new Error(result.error || 'Error al enviar el formulario');
        }
        */
        
        // ==============================================================
        // OPCIÓN 3: Simular envío (SOLO PARA TESTING)
        // ==============================================================
        // Esta opción solo muestra el mensaje sin enviar nada
        // Útil para probar el diseño antes de configurar el backend
        /*
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simular delay
        
        console.log('Datos del formulario:', data);
        
        formMessage.textContent = '¡Gracias! Tu consulta fue enviada correctamente. Te contactaremos a la brevedad.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        contactForm.reset();
        */
        
    } catch (error) {
        console.error('Error:', error);
        formMessage.textContent = 'Hubo un error al enviar tu consulta. Por favor, intenta nuevamente o contactanos directamente por WhatsApp.';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
    } finally {
        // Remove loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

// ============================================
// PHONE NUMBER FORMATTING (ARGENTINA)
// ============================================
const phoneInput = document.getElementById('telefono');

phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    
    // Basic Argentina phone formatting
    if (value.length > 0) {
        if (value.startsWith('54')) {
            // International format
            value = '+' + value;
        } else if (!value.startsWith('+')) {
            // Local format
            if (value.length <= 10) {
                // Format: (011) 1234-5678
                if (value.length > 3) {
                    value = '(' + value.substring(0, 3) + ') ' + value.substring(3);
                }
                if (value.length > 9) {
                    value = value.substring(0, 9) + '-' + value.substring(9);
                }
            }
        }
    }
    
    e.target.value = value;
});

// ============================================
// FORM VALIDATION
// ============================================
const formInputs = contactForm.querySelectorAll('input, select, textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        validateInput(this);
    });
});

function validateInput(input) {
    const value = input.value.trim();
    
    // Remove previous error
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    input.style.borderColor = '';
    
    // Validate required fields
    if (input.required && !value) {
        showError(input, 'Este campo es obligatorio');
        return false;
    }
    
    // Validate email
    if (input.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(input, 'Por favor, ingresa un email válido');
            return false;
        }
    }
    
    // Validate phone
    if (input.type === 'tel' && value) {
        const phoneRegex = /[\d\s\-\+\(\)]{8,}/;
        if (!phoneRegex.test(value)) {
            showError(input, 'Por favor, ingresa un teléfono válido');
            return false;
        }
    }
    
    return true;
}

function showError(input, message) {
    input.style.borderColor = '#dc3545';
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.benefit-card, .plan-card, .discount-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// GOOGLE ANALYTICS (Optional)
// ============================================
// Uncomment and add your GA4 tracking ID
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Replace with your tracking ID
*/

// ============================================
// TRACK CLICKS ON IMPORTANT ELEMENTS
// ============================================
document.querySelectorAll('.btn, .whatsapp-float').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.textContent.trim() || this.getAttribute('aria-label') || 'Button Click';
        
        // Log to console (replace with actual analytics)
        console.log('Button clicked:', action);
        
        // If using Google Analytics:
        if (typeof gtag !== 'undefined') {
            gtag('event', 'button_click', {
                'event_category': 'Engagement',
                'event_label': action
            });
        }
    });
});


