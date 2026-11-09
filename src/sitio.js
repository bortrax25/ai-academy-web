// Datos del sitio que no dependen del idioma. Los textos van en src/contenido/<idioma>.js.
export const sitio = {
  nombre: 'AI Academy',
  slug: 'ai-academy-web',
  url: 'https://bortrax25.github.io',            // origen público, sin barra final. Ej: https://bortrax25.github.io
  base: '/ai-academy-web',          // '/' si es dominio propio; '/<repo>' en GitHub Pages de proyecto
  idiomas: ['es'],           // el primero es el principal (sin prefijo). Ej: ['es', 'en']
  empresa: 'AI Academy',    // nombre legal para el © y los textos legales
  contacto: 'bortrax25@users.noreply.github.com',  // email de contacto
  github: '',
  whatsapp: '',              // número con código de país, solo dígitos (ej. 51999888777). Vacío = se usa el correo                // URL o vacío
  formulario: {
    // Endpoint que acepte POST JSON y responda 2xx (Formspree, Basin, una función propia…).
    // Vacío = el formulario abre el cliente de correo con el email ya escrito (mailto).
    endpoint: '',
  },
  tema: { claro: '#F5F2E9', oscuro: '#0B1230' }, // igual que --paper en tokens.css
};
