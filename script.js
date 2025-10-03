// ============================================
// PLAN DETAILS DATA
// ============================================
const plansData = [
    {
        id: 's1000',
        name: 'Plan S1000',
        subtitle: 'Plan con Copagos',
        features: [
            'Plan Con Copagos',
            'Farmacia: 40% en el interior y 50% en AMBA',
            'Habitación compartida',
            'PMI: 100% cobertura de vacunas dentro del calendario oficial',
            'Cobertura del 100% en Pastillas Anticonceptivas dentro de la Resolución 310',
            'Reintegros solo para Ortodoncia de 6 años en función y Ortopedia (un par zapatos ó de plantillas por año)',
            '25 sesiones de fisiatría, kinesiología y fonoaudiología',
            '30 sesiones de psicología c/c',
            'Óptica: cristales comunes blancos',
            'Reconocimiento del 30% en extracción de Células Madre en Protectia, con una permanencia de 12 meses en el Plan'
        ]
    },
    {
        id: 's1500',
        name: 'Plan S1500',
        subtitle: 'Plan Sin Copagos',
        features: [
            'Plan Sin Copagos',
            'Habitación individual',
            'Cobertura del 70% en pastillas anticonceptivas de marcas comerciales no incluidas en la Resolución 310',
            'Ortodoncia de 6 a 16 años (cobertura por reintegro ó por sistema cerrado)',
            'Sesiones de kinesiología ST y SL',
            '25 sesiones de fonoaudiología',
            'Óptica: 100% en cristales lejos/cerca, 50% en bifocales/multifocales, 50% en lentes de contacto y armazones',
            'PMI: ecografía 3D una por embarazo',
            'Cirugía refractiva: 100% de cobertura a partir de 3,5 dioptrías, con 12 meses de permanencia en el plan',
            'Nutrición: cobertura en dieta y 12 consultas anuales (hasta 2 por mes)',
            'Asistencia al viajero en países limítrofes, a través de ASSIST CARD'
        ]
    },
    {
        id: 's3000',
        name: 'Plan S3000',
        subtitle: 'Cobertura Ampliada',
        features: [
            'Cobertura al 100% de todas las pastillas anticonceptivas',
            'Ortodoncia hasta los 30 años (Por reintegro ó por sistema cerrado)',
            '35 sesiones de rehabilitación en fonoaudiología y terapia Ocupacional',
            '40 sesiones de psicología',
            'Cirugía refractiva: cobertura al 100% a partir de 3 dioptrías, con 12 meses de permanencia en el plan',
            'PMI: ecografía 3D, 4D ó 5D una por embarazo',
            'Cobertura en Cremas nutritivas durante el embarazo (4 envases de 200grs.)',
            'Cobertura de prótesis odontológica al 50% valores Sancor, con 12 meses de permanencia',
            'Asistencia al viajero internacional, a través de ASSIST CARD',
            'Reconocimiento del 40% en extracción de Células Madre en Protectia'
        ]
    },
    {
        id: 's3500',
        name: 'Plan S3500',
        subtitle: 'Plan Premium',
        features: [
            '50 sesiones de rehabilitación en fonoaudiología y terapia Ocupacional',
            'Óptica: 100% en cristales lejos/cerca, 100% en bifocales/multifocales, 100% en lentes de contacto y armazones',
            'Cobertura de prótesis odontológica al 100% valores Sancor, con 12 meses de permanencia'
        ]
    },
    {
        id: 's4500',
        name: 'Plan S4500',
        subtitle: 'Plan Superior',
        features: [
            '75 sesiones de rehabilitación en fonoaudiología y terapia Ocupacional',
            '50 sesiones de psicología',
            'Cobertura de implantes odontológicos, con 12 meses de permanencia',
            'Cobertura en Cremas nutritivas durante el embarazo (6 envases de 200grs.)',
            'Reconocimiento del 75% en extracción de Células Madre, con una permanencia de 12 meses en el Plan',
            'Cobertura en cirugía estética con un reconocimiento de hasta $20.000, mediante reintegro, 1 cada 3 años con 12 meses de permanencia en el plan',
            'Reintegro en tratamientos estéticos: 1 tratamiento por año hasta $5.000, con un mínimo de permanencia de 12 meses',
            'Los tratamientos disponibles serán: Rellenos, Luz Pulsada, Pixei, Peelings, Terapia fotodinámica, Toxina Botulínica, Infrarrojo, Mesoliting, Plasma Rico, Láser'
        ]
    },
    {
        id: 's5000',
        name: 'Plan S5000 - Línea Exclusive',
        subtitle: 'Línea Exclusive',
        features: [
            'Habitación VIP',
            'Farmacia: 60% de cobertura',
            'Cobertura 30/100 una por embarazo, con un tope de hasta una por mes',
            'Sesiones de rehabilitación en fonoaudiología, sin tope, sin límite',
            'Reintegros Especiales: blanqueamiento dental, acupuntura, homeopatía y quiropraxia',
            'Cobertura por reintegro de Cirugía Estética, una cada dos años con 12 meses de permanencia en el plan'
        ]
    }
];

let currentPlanIndex = 0;

// ============================================
// PLAN MODAL FUNCTIONALITY
// ============================================
const planModal = document.getElementById('planModal');
const modalClose = document.getElementById('modalClose');
const modalPlanName = document.getElementById('modalPlanName');
const modalPlanDetails = document.getElementById('modalPlanDetails');
const planCounter = document.getElementById('planCounter');
const planPrev = document.getElementById('planPrev');
const planNext = document.getElementById('planNext');
const detailButtons = document.querySelectorAll('.btn-details');

// Open modal
detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const planId = parseInt(btn.getAttribute('data-plan-id'));
        openPlanModal(planId);
    });
});

function openPlanModal(planIndex) {
    currentPlanIndex = planIndex;
    updateModalContent();
    planModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closePlanModal() {
    planModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
}

function updateModalContent() {
    const plan = plansData[currentPlanIndex];
    
    // Update header
    modalPlanName.textContent = plan.name;
    planCounter.textContent = `Plan ${currentPlanIndex + 1} de ${plansData.length}`;
    
    // Update body
    const featuresList = plan.features.map(feature => `<li>${feature}</li>`).join('');
    modalPlanDetails.innerHTML = `
        <h3 style="margin-bottom: 1.5rem; color: var(--primary-color);">${plan.subtitle}</h3>
        <ul>${featuresList}</ul>
    `;
    
    // Reset scroll to top - both modal and body
    // Use setTimeout to ensure it happens after content is rendered
    setTimeout(() => {
        modalPlanDetails.scrollTop = 0;
        planModal.scrollTop = 0;
        
        const modalContent = document.querySelector('.plan-modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }, 0);
    
    // Update navigation buttons
    planPrev.disabled = currentPlanIndex === 0;
    planNext.disabled = currentPlanIndex === plansData.length - 1;
}

// Navigation
planPrev.addEventListener('click', () => {
    if (currentPlanIndex > 0) {
        currentPlanIndex--;
        updateModalContent();
    }
});

planNext.addEventListener('click', () => {
    if (currentPlanIndex < plansData.length - 1) {
        currentPlanIndex++;
        updateModalContent();
    }
});

// Close modal
modalClose.addEventListener('click', closePlanModal);

// Close on background click
planModal.addEventListener('click', (e) => {
    if (e.target === planModal) {
        closePlanModal();
    }
});

// Close on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && planModal.classList.contains('active')) {
        closePlanModal();
    }
});

// Keyboard navigation (arrow keys)
document.addEventListener('keydown', (e) => {
    if (!planModal.classList.contains('active')) return;
    
    if (e.key === 'ArrowLeft' && currentPlanIndex > 0) {
        currentPlanIndex--;
        updateModalContent();
    } else if (e.key === 'ArrowRight' && currentPlanIndex < plansData.length - 1) {
        currentPlanIndex++;
        updateModalContent();
    }
});

// Touch swipe for mobile
let touchStartX = 0;
let touchEndX = 0;

planModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

planModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentPlanIndex < plansData.length - 1) {
            // Swipe left - next plan
            currentPlanIndex++;
            updateModalContent();
        } else if (diff < 0 && currentPlanIndex > 0) {
            // Swipe right - previous plan
            currentPlanIndex--;
            updateModalContent();
        }
    }
}

// Update "Cotizar este Plan" link in modal
document.getElementById('modalCotizar').addEventListener('click', closePlanModal);

// "Ver todos los planes" button
document.getElementById('viewAllPlans').addEventListener('click', () => {
    openPlanModal(0); // Open first plan (S1000)
});

// ============================================
// HAMBURGER MENU TOGGLE
// ============================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

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
        areaInteres: formData.get('area-interes'),
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
                'Área de Interés': data.areaInteres || 'No especificada',
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
// NAVBAR SCROLL EFFECT & MOBILE CTA
// ============================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const mobileCTA = document.getElementById('mobileCTA');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Navbar shadow
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    // Mobile CTA show/hide (only on mobile)
    if (window.innerWidth <= 768) {
        // Show after scrolling past hero (around 400px)
        // Hide when near contact form (check if #contacto is in viewport)
        const contactSection = document.getElementById('contacto');
        const contactPosition = contactSection.getBoundingClientRect().top;
        
        if (currentScroll > 400 && contactPosition > 200) {
            mobileCTA.classList.add('visible');
        } else {
            mobileCTA.classList.remove('visible');
        }
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


