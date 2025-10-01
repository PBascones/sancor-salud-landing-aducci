# Landing Page Sancor Salud AMBA

Landing page profesional para asesor de planes de medicina privada Sancor Salud en el Área Metropolitana de Buenos Aires.

## 🎯 Características

- ✅ **Diseño moderno y responsive** (móvil, tablet, desktop)
- ✅ **SEO optimizado** para búsquedas de Sancor Salud en AMBA
- ✅ **Formulario de contacto funcional** con validación
- ✅ **Botón flotante de WhatsApp**
- ✅ **Animaciones suaves** al hacer scroll
- ✅ **Performance optimizado** para carga rápida
- ✅ **Schema.org markup** para mejor indexación en Google

## 📁 Estructura del Proyecto

```
Roma/
├── index.html      # Página principal con toda la estructura
├── styles.css      # Estilos completos y responsive
├── script.js       # JavaScript para interactividad y formulario
├── README.md       # Esta guía
└── robots.txt      # Configuración para buscadores (opcional)
```

## 🚀 Guía de Implementación

### Paso 1: Personalizar el Contenido

#### 1.1 Datos de Contacto

Edita estos valores en `index.html`:

- **Número de WhatsApp**: Busca `5491112345678` y reemplaza con el número real (formato: 549 + código de área sin 0 + número)
- **Email**: Busca `contacto@sancorsalud-amba.com` y reemplaza con el email real
- **Horarios**: Ajusta los horarios de atención si es necesario

#### 1.2 Contenido y Textos

- **Beneficios**: Modifica la sección "¿Por Qué Elegir Sancor Salud?" según los beneficios específicos
- **Planes**: Ajusta los planes ofrecidos y sus características
- **Descuentos**: Actualiza los porcentajes y condiciones de descuentos

#### 1.3 Meta Tags para SEO

En `index.html`, personaliza:

```html
<meta name="description" content="TU DESCRIPCIÓN AQUÍ">
<meta property="og:url" content="https://tudominio.com">
<meta property="og:image" content="https://tudominio.com/imagen-preview.jpg">
```

### Paso 2: Configurar el Formulario

El formulario tiene **3 opciones de configuración** en `script.js`:

#### Opción 1: FormSubmit (Recomendado - Gratis y Fácil)

1. Visita [https://formsubmit.co/](https://formsubmit.co/)
2. En `script.js` (línea ~40), reemplaza `TU_EMAIL@EJEMPLO.COM` con tu email real
3. Sube el sitio y envía el primer formulario de prueba
4. Confirma tu email (recibirás un mail de FormSubmit)
5. ¡Listo! Los formularios llegarán a tu email

**Ventajas:**
- ✅ Gratis y sin límites
- ✅ No requiere backend
- ✅ Protección anti-spam incluida
- ✅ Configuración en 2 minutos

#### Opción 2: Backend Propio

Si tienes un servidor/backend:

1. Descomenta la sección "OPCIÓN 2" en `script.js`
2. Crea un endpoint `/api/contact` que reciba los datos
3. Procesa y envía los emails desde tu backend

#### Opción 3: Testing Local

Para probar el diseño sin enviar emails reales:

1. Descomenta la sección "OPCIÓN 3" en `script.js`
2. Los datos se mostrarán en la consola del navegador
3. **Recuerda cambiar a una opción real antes de publicar**

### Paso 3: SEO y Posicionamiento

#### 3.1 Configuración Básica

1. **Title y Description**: Ya están optimizados en el HTML
2. **Keywords**: Incluye variaciones como:
   - "sancor salud amba"
   - "medicina privada buenos aires"
   - "prepaga sancor"
   - "planes de salud caba"

#### 3.2 Google Search Console

1. Crea una cuenta en [Google Search Console](https://search.google.com/search-console)
2. Verifica tu dominio
3. Envía el sitemap (se genera automáticamente en la mayoría de los hostings)

#### 3.3 Google Analytics (Opcional pero Recomendado)

1. Crea una cuenta en [Google Analytics](https://analytics.google.com/)
2. Crea una propiedad para tu sitio
3. Copia el ID de medición (formato: G-XXXXXXXXXX)
4. En `script.js`, descomenta la sección de Google Analytics y pega tu ID
5. Agrega este código en el `<head>` de `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

#### 3.4 Google My Business

Para aparecer en Google Maps y búsquedas locales:

1. Crea un perfil en [Google My Business](https://www.google.com/business/)
2. Verifica tu ubicación o área de servicio
3. Agrega fotos, horarios y servicios
4. Vincula tu sitio web

### Paso 4: Hosting y Dominio

#### Opciones de Hosting Gratuitas

**Netlify (Recomendado):**
1. Crea una cuenta en [Netlify](https://www.netlify.com/)
2. Arrastra toda la carpeta del proyecto
3. Tu sitio estará online en minutos
4. Dominio: `tunombre.netlify.app` (puedes conectar uno propio)

**GitHub Pages:**
1. Crea un repositorio en GitHub
2. Sube los archivos
3. Ve a Settings > Pages
4. Activa GitHub Pages
5. Dominio: `tuusuario.github.io/repositorio`

**Vercel:**
1. Crea una cuenta en [Vercel](https://vercel.com/)
2. Importa desde GitHub o sube archivos
3. Deploy automático

#### Dominio Propio

Para un dominio personalizado (ej: `sancorsaludamba.com.ar`):

1. Compra un dominio en:
   - [NIC.ar](https://nic.ar/) (para .com.ar)
   - [Namecheap](https://www.namecheap.com/)
   - [GoDaddy](https://www.godaddy.com/)

2. Conecta el dominio a tu hosting (Netlify/Vercel/GitHub Pages tienen guías)

### Paso 5: Publicidad en Google (Opcional)

Para aparecer más arriba en búsquedas:

#### Google Ads

1. Crea una cuenta en [Google Ads](https://ads.google.com/)
2. Crea una campaña de "Búsqueda"
3. Palabras clave sugeridas:
   - "sancor salud"
   - "medicina privada amba"
   - "prepaga buenos aires"
   - "planes de salud"
4. Presupuesto: Empieza con $500-1000 ARS/día y ajusta según resultados
5. Segmentación: Solo AMBA (Buenos Aires + GBA)

#### Meta Ads (Facebook/Instagram)

1. Crea una cuenta en [Meta Business](https://business.facebook.com/)
2. Crea anuncios dirigidos a personas en AMBA
3. Intereses: Salud, seguros, bienestar
4. Formatos: Carrusel con beneficios o video corto

## 📱 Testing

### Prueba en Diferentes Dispositivos

1. **Desktop**: Abre en Chrome, Firefox, Safari
2. **Móvil**: 
   - Usa Chrome DevTools (F12 > Toggle Device Toolbar)
   - Prueba en tu celular real
3. **Tablet**: Prueba en landscape y portrait

### Checklist de Funcionalidad

- [ ] Todos los links del menú funcionan
- [ ] El botón de WhatsApp abre la app/web de WhatsApp
- [ ] El formulario valida campos requeridos
- [ ] El formulario envía correctamente (prueba con tu email)
- [ ] El sitio carga rápido (< 3 segundos)
- [ ] Se ve bien en móvil
- [ ] No hay errores en la consola (F12)

## 🔧 Mantenimiento y Actualizaciones

### Cambiar Contenido

- **Precios/Descuentos**: Edita la sección `#descuentos` en `index.html`
- **Planes**: Modifica la sección `#planes` en `index.html`
- **Colores**: Cambia las variables CSS en `styles.css` (líneas 1-15)

### Agregar Google Fonts

Si quieres cambiar la tipografía:

1. Ve a [Google Fonts](https://fonts.google.com/)
2. Elige una fuente
3. Copia el `<link>` en el `<head>` de `index.html`
4. Actualiza `font-family` en `styles.css`

### Agregar Favicon

1. Crea un favicon en [Favicon.io](https://favicon.io/)
2. Descarga los archivos
3. Colócalos en la carpeta raíz
4. El HTML ya tiene la referencia: `<link rel="icon" type="image/x-icon" href="favicon.ico">`

## 🎨 Personalización Avanzada

### Cambiar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #0066cc;      /* Color principal (azul) */
    --secondary-color: #00a86b;    /* Color secundario (verde) */
    --accent-color: #ff6b35;       /* Color de acento (naranja) */
}
```

### Agregar Sección Nueva

1. Copia una sección existente en `index.html`
2. Cambia el `id` y el contenido
3. Agrega el link en el menú de navegación
4. Estiliza si es necesario en `styles.css`

## 📊 Mejoras Futuras Sugeridas

- [ ] Agregar testimonios de clientes
- [ ] Incluir comparador de planes interactivo
- [ ] Agregar blog con artículos sobre salud
- [ ] Implementar chat en vivo
- [ ] Agregar calculadora de costos
- [ ] Incluir video explicativo
- [ ] Multi-idioma (español/inglés)

## ⚡ Performance

El sitio está optimizado para:
- **Carga rápida**: Sin librerías pesadas, solo HTML/CSS/JS vanilla
- **SEO**: Meta tags, Schema.org, HTML semántico
- **Mobile-first**: Responsive desde 320px hasta 4K
- **Accesibilidad**: Labels, ARIA attributes, contraste adecuado

## 🆘 Solución de Problemas

### El formulario no envía

1. Verifica que hayas reemplazado `TU_EMAIL@EJEMPLO.COM` en `script.js`
2. Verifica la consola del navegador (F12) para ver errores
3. Asegúrate de estar usando HTTPS (FormSubmit requiere HTTPS en producción)

### El WhatsApp no funciona

1. Verifica el número: formato correcto es `5491112345678`
2. No incluyas espacios ni caracteres especiales en el link
3. Prueba primero el link en un navegador

### El sitio no aparece en Google

1. **Tiempo**: Google puede tardar 1-2 semanas en indexar
2. **Search Console**: Verifica que no haya errores
3. **Contenido**: Asegúrate de tener contenido único y relevante
4. **Backlinks**: Comparte el sitio en redes sociales

## 📞 Soporte

Si necesitas ayuda:

1. Revisa esta guía completa
2. Busca en Google el error específico
3. Consulta la documentación de las herramientas:
   - [FormSubmit Docs](https://formsubmit.co/)
   - [Netlify Docs](https://docs.netlify.com/)
   - [Google Search Console](https://support.google.com/webmasters)

## 📄 Licencia

Este proyecto es de uso libre. Puedes modificarlo y usarlo como quieras.

---

**¡Éxito con tu landing page de Sancor Salud!** 🚀

Si necesitas agregar funcionalidades más avanzadas (sistema de citas, integración con CRM, etc.), considera contratar un desarrollador full-stack.


