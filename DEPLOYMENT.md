# Guía de Deploy - Landing Page Sancor Salud

Esta guía te llevará paso a paso para publicar tu landing page en internet.

## 🚀 Opción 1: Deploy con Netlify (Más Fácil - Recomendado)

### Requisitos
- Cuenta de email
- Los archivos de tu landing page

### Pasos

1. **Crear cuenta en Netlify**
   - Ve a [https://www.netlify.com/](https://www.netlify.com/)
   - Click en "Sign up"
   - Registrate con email (o GitHub si tienes)

2. **Subir tu sitio**
   - Una vez logueado, verás un área de "Drag and drop"
   - Arrastra TODA la carpeta del proyecto (Roma)
   - Netlify comenzará a subir y publicar

3. **¡Sitio online!**
   - En 30-60 segundos tu sitio estará online
   - URL: `random-name-12345.netlify.app`
   - Copia este link y pruébalo

4. **Cambiar el nombre del sitio (opcional)**
   - En el dashboard, click en "Site settings"
   - Click en "Change site name"
   - Elige un nombre: `sancor-salud-amba.netlify.app`

5. **Conectar dominio propio (opcional)**
   - En el dashboard, click en "Domain settings"
   - Click en "Add custom domain"
   - Sigue las instrucciones para conectar tu dominio

### Ventajas de Netlify
- ✅ Deploy en minutos
- ✅ HTTPS automático (SSL gratis)
- ✅ CDN global (sitio rápido en todo el mundo)
- ✅ Actualizar es solo arrastra y suelta nuevamente
- ✅ Gratis para siempre para sitios estáticos

---

## 🚀 Opción 2: Deploy con Vercel

### Pasos

1. **Crear cuenta**
   - Ve a [https://vercel.com/](https://vercel.com/)
   - Sign up con email o GitHub

2. **Deploy**
   - Click en "Add New" > "Project"
   - Arrastra los archivos o conecta GitHub
   - Click en "Deploy"

3. **URL generada**
   - `tu-proyecto.vercel.app`
   - Puedes cambiar el nombre o conectar dominio propio

---

## 🚀 Opción 3: Deploy con GitHub Pages (Gratis)

### Requisitos
- Cuenta de GitHub

### Pasos

1. **Crear repositorio en GitHub**
   ```bash
   # En tu terminal, dentro de la carpeta Roma
   git init
   git add .
   git commit -m "Initial commit - Landing page Sancor Salud"
   ```

2. **Crear repo en GitHub.com**
   - Ve a [https://github.com/new](https://github.com/new)
   - Nombre: `sancor-salud-landing`
   - Público o Privado (tu elección)
   - No inicialices con README
   - Click "Create repository"

3. **Subir código**
   ```bash
   git remote add origin https://github.com/TU_USUARIO/sancor-salud-landing.git
   git branch -M main
   git push -u origin main
   ```

4. **Activar GitHub Pages**
   - En tu repo, ve a "Settings"
   - Scroll hasta "Pages" (menú izquierdo)
   - Source: Selecciona "main" branch
   - Folder: / (root)
   - Click "Save"

5. **URL del sitio**
   - Después de unos minutos: `https://TU_USUARIO.github.io/sancor-salud-landing`

---

## 🚀 Opción 4: Hosting Tradicional (cPanel)

Si compraste hosting tradicional con cPanel:

1. **Acceder a cPanel**
   - URL: `tudominio.com/cpanel`
   - Usuario y contraseña (te los dio tu proveedor)

2. **File Manager**
   - Busca "File Manager" en cPanel
   - Navega a `public_html/`

3. **Subir archivos**
   - Click en "Upload"
   - Selecciona todos los archivos: `index.html`, `styles.css`, `script.js`, etc.
   - Espera que se suban

4. **Verificar**
   - Ve a `https://tudominio.com`
   - Deberías ver tu landing page

---

## 📝 Checklist Post-Deploy

Después de publicar, verifica:

- [ ] El sitio carga correctamente
- [ ] Todas las imágenes se ven (si agregaste alguna)
- [ ] El formulario funciona
- [ ] El botón de WhatsApp funciona
- [ ] El sitio se ve bien en móvil
- [ ] No hay errores en la consola (F12)

## 🔧 Configurar Formulario (IMPORTANTE)

### Con FormSubmit

1. **Actualizar email en el código**
   - Abre `script.js`
   - Línea ~40: Cambia `TU_EMAIL@EJEMPLO.COM` por tu email real

2. **Primera activación**
   - Ve a tu sitio publicado
   - Llena el formulario con datos de prueba
   - Envía el formulario
   - **Recibirás un email de FormSubmit**
   - Click en el link de confirmación

3. **¡Listo!**
   - Ahora todos los formularios llegarán a tu email
   - Sin límites, gratis

### Características adicionales de FormSubmit

Puedes agregar más configuraciones en el objeto que se envía:

```javascript
{
    _subject: "Nueva consulta - Sancor Salud",
    _captcha: "false",           // true para activar captcha
    _template: "table",          // formato de email
    _next: "https://tudominio.com/gracias.html", // redirigir después de enviar
    _cc: "otro@email.com",       // enviar copia a otro email
    // ... tus campos del formulario
}
```

---

## 🌐 Conectar Dominio Propio

### Si usas Netlify

1. **Comprar dominio**
   - NIC.ar para .com.ar (Argentina)
   - Namecheap/GoDaddy para .com

2. **En Netlify**
   - Domain settings > Add custom domain
   - Ingresa tu dominio: `sancorsaludamba.com.ar`

3. **Configurar DNS**
   - En tu proveedor de dominio, agrega:
   ```
   Tipo: A
   Host: @
   Valor: 75.2.60.5 (IP de Netlify)
   
   Tipo: CNAME
   Host: www
   Valor: tu-sitio.netlify.app
   ```

4. **Esperar propagación**
   - Puede tardar 1-48 horas
   - HTTPS se activará automáticamente

---

## 📊 Configurar Analytics (Recomendado)

### Google Analytics 4

1. **Crear cuenta**
   - [https://analytics.google.com/](https://analytics.google.com/)
   - "Empezar a medir"
   - Nombre de la cuenta: "Sancor Salud AMBA"

2. **Crear propiedad**
   - Nombre: "Landing Page"
   - Zona horaria: Argentina
   - Moneda: ARS

3. **Configurar recopilación de datos**
   - Plataforma: "Web"
   - URL del sitio web
   - Nombre de la emisión: "Landing Page"

4. **Copiar código**
   - Obtendrás un ID: `G-XXXXXXXXXX`
   - Y un código de script

5. **Agregar a tu sitio**
   
   En `index.html`, dentro del `<head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

6. **Volver a deployar**
   - Sube los archivos actualizados
   - En 24-48 horas verás las primeras métricas

---

## 🎯 Google Search Console

Para aparecer en Google:

1. **Registrarse**
   - [https://search.google.com/search-console](https://search.google.com/search-console)
   - "Agregar propiedad"

2. **Verificar dominio**
   - Opción: Prefijo de URL
   - Ingresa: `https://tudominio.com`
   - Sigue el método de verificación (HTML tag es más fácil)

3. **Agregar sitemap**
   - Después de verificar, ve a "Sitemaps"
   - Agrega: `https://tudominio.com/sitemap.xml`
   - (Netlify genera el sitemap automáticamente)

---

## 🔍 SEO Post-Deploy

1. **Probar en Google**
   - Después de 3-7 días, busca: `site:tudominio.com`
   - Deberías ver tu página indexada

2. **Keywords principales**
   - "sancor salud amba"
   - "medicina privada buenos aires"
   - "prepaga sancor"

3. **Google My Business**
   - Si tienes ubicación física o atiendes presencial
   - [https://www.google.com/business/](https://www.google.com/business/)

---

## 📱 Compartir en Redes Sociales

Una vez online:

1. **Facebook/Instagram**
   - Crea posts con el link
   - Usa: "Conocé nuestros planes de salud"
   - Agrega imagen llamativa

2. **WhatsApp Business**
   - Configura respuestas automáticas
   - Incluye link a tu landing

3. **LinkedIn** (si aplica)
   - Para planes corporativos

---

## 🆘 Problemas Comunes

### "El sitio no carga"
- Verifica que todos los archivos estén en la raíz
- Asegúrate que `index.html` esté en la carpeta principal

### "El formulario no funciona"
- Revisa que hayas activado FormSubmit (email de confirmación)
- Verifica la consola del navegador (F12)
- FormSubmit requiere HTTPS (Netlify lo da automáticamente)

### "No aparezco en Google"
- Google tarda 1-2 semanas en indexar
- Usa Google Search Console
- Comparte en redes para generar tráfico

---

## 🎉 ¡Felicitaciones!

Tu landing page está online. Ahora:

1. Comparte el link con tu cliente
2. Monitorea las consultas que lleguen
3. Ajusta contenido según feedback
4. Considera publicidad en Google Ads para más visibilidad

---

## 📞 Próximos Pasos

- [ ] Deploy completado
- [ ] Dominio conectado (si corresponde)
- [ ] Formulario testeado y funcionando
- [ ] Google Analytics configurado
- [ ] Google Search Console verificado
- [ ] Sitio compartido en redes sociales
- [ ] Primera consulta recibida 🎊

**¿Necesitas ayuda?** Revisa el README.md principal o busca tutoriales específicos de la plataforma que elegiste.


