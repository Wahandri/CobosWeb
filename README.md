# Guía para Desarrolladores de CobosWeb

Este documento explica la estructura del proyecto CobosWeb y ofrece instrucciones de instalación, organización de archivos y sugerencias para su mejora. Está escrito pensando en cualquier desarrollador que tenga que trabajar con el proyecto, ya sea para continuar su desarrollo o para realizar ajustes puntuales.

## Descripción general

CobosWeb es una aplicación construida con **Next.js (v16)** y **React (v19)**. Utiliza el sistema de rutas de la carpeta `app` de Next.js, por lo que cada subcarpeta dentro de `src/app` define una página. Los estilos se gestionan mediante **CSS Modules** y un archivo global con variables CSS. La aplicación se distribuye como un sitio estático optimizado para SEO y se despliega en Vercel (o cualquier hosting compatible con Next.js).

## Tecnologías empleadas

*   **Next.js 16** – Framework de React que permite renderizado en servidor, rutas automáticas y optimización de recursos. Las dependencias principales (`next`, `react` y `react‑dom`) se declaran en `package.json`.
*   **React 19** – Biblioteca de UI. Se utiliza de forma funcional con hooks para los componentes interactivos.
*   **CSS Modules** – Cada componente tiene su propio fichero `.module.css` para estilos encapsulados. Para estilos globales y variables se usa `src/app/globals.css`.
*   **Eslint** – Está configurado con `eslint-config-next` para mantener un código consistente y de alta calidad. Se ejecuta con el script `npm run lint`.
*   **Inter Font** – A través de `next/font/google` se carga la familia Inter en el layout general.

## Instalación y ejecución

**Requisitos previos:** Este proyecto utiliza Next 16, por lo que requiere **Node.js 20.9 o superior**. Asegúrate de tener la versión correcta instalada antes de continuar.

1.  Clonar el repositorio y entrar en la carpeta del proyecto.
2.  Instalar dependencias con:
    ```bash
    npm install
    ```
3.  Para iniciar el entorno de desarrollo ejecuta:
    ```bash
    npm run dev
    ```
    Esto lanzará el servidor en [http://localhost:3000](http://localhost:3000).

4.  Para construir la versión de producción usa `npm run build` y para arrancarla `npm start`.
5.  Ejecuta `npm run lint` para comprobar la calidad del código.

## Configuración adicional

*   El archivo `jsconfig.json` define un alias `@` que apunta a la carpeta `src`. Esto permite importar componentes y módulos mediante rutas más cortas, por ejemplo `import Button from '@/components/Button/Button'`.
*   `next.config.mjs` está presente aunque vacío, preparado para configurar características como imágenes remotas, reglas de redirección o internacionalización. Añade aquí cualquier ajuste avanzado que necesites.

## Estructura de carpetas

```
├── package.json             # Dependencias y scripts del proyecto
├── next.config.mjs          # Configuración de Next.js
├── jsconfig.json            # Alias de rutas para importaciones con '@'
├── public/                  # Recursos estáticos accesibles mediante la URL raíz
│   ├── logoCobos.png        # Logotipo utilizado en Header y Footer
│   ├── hero-placeholder.jpg # Imagen por defecto del Hero
│   └── projects/            # Carpeta con imágenes de proyectos (p1.jpg, p2.jpg…)
├── src/
│   ├── app/                 # Páginas y layouts de Next.js (sistema de rutas)
│   │   ├── layout.js        # Layout raíz con cabecera, pie y fuente global
│   │   ├── page.js          # Página de inicio (home) que usa componentes Hero, Section y CTA
│   │   ├── servicios/       # Página de listado de servicios
│   │   ├── proyectos/       # Página de proyectos con galería filtrable
│   │   ├── sobre-nosotros/  # Página “Sobre nosotros”
│   │   ├── contacto/        # Página de contacto con formulario
│   │   └── legal/           # Páginas legales (aviso legal, privacidad, cookies)
│   ├── components/          # Componentes reutilizables (Hero, Card, FAQ, etc.)
│   │   ├── Header/          # Cabecera fija con navegación y logotipo
│   │   ├── Footer/          # Pie de página con enlaces y datos de contacto
│   │   ├── Hero/            # Sección principal con título, subtítulo e imagen de fondo
│   │   ├── Section/         # Contenedor semántico `<section>` para agrupar contenidos
│   │   ├── Container/       # Contenedor centrado con ancho máximo
│   │   ├── Card/            # Tarjetas para servicios y proyectos
│   │   ├── CTABox/          # Caja de llamada a la acción
│   │   ├── FAQ/             # Acordeón de preguntas frecuentes con estado interno
│   │   ├── GridGallery/     # Galería filtrable de proyectos
│   │   └── ContactForm/     # Formulario de contacto con validación básica
│   ├── data/                # Datos estáticos usados por las páginas
│   │   ├── services.js      # Lista de servicios que se muestra en home y servicios
│   │   └── projects.js      # Lista de proyectos con etiquetas e imágenes
│   └── app/globals.css      # Variables CSS globales y clases utilitarias
```

## Gestión de imágenes y recursos estáticos

*   **Carpeta public:** Cualquier archivo aquí se sirve directamente desde la raíz del sitio (`/logoCobos.png` se accede como `/logoCobos.png`). Coloca aquí imágenes, iconos o documentos descargables. En este proyecto existen subcarpetas como `/projects` que contienen las imágenes usadas en la galería de proyectos.
*   **Uso de next/image:** Para optimizar las imágenes, se recomienda importarlas mediante el componente `next/image`. En el Header y el Footer ya se usa esta técnica para el logotipo, ya que permite generar diferentes tamaños y servir formatos WebP adaptados al dispositivo. Si añades nuevas imágenes a páginas o componentes, considera usar `next/image` en lugar de `<img>`.
*   **Imágenes de fondo:** El componente `Hero` admite una propiedad `image` que coloca una foto de fondo mediante CSS. Puedes cambiarla indicando la ruta relativa desde public, por ejemplo `image="/services-hero.jpg"`. Asegúrate de que la imagen exista en public.

## Componentes principales

Los componentes viven en `src/components`. Cada uno dispone de su correspondiente hoja de estilos (`*.module.css`) para mantener la encapsulación.

*   **Hero:** Sección hero con título, subtítulo, imagen de fondo y botones de llamada a la acción. Puedes personalizar el texto y la imagen mediante propiedades como `title`, `subtitle`, `image`, `ctaText` y `ctaLink`. El diseño se ajusta en `Hero.module.css`.
*   **Card:** Tarjeta versátil que admite título, descripción, icono e imagen. Para proyectos, se utiliza la propiedad `image` para mostrar una foto. Al pasarle elementos hijos (`children`), puedes incluir información extra como etiquetas o localización.
*   **GridGallery:** Componente que muestra una cuadrícula de proyectos filtrable por etiquetas. Obtiene los datos de `src/data/projects.js` y genera botones de filtros a partir de los tags disponibles.
*   **FAQ:** Acordeón de preguntas frecuentes. Las preguntas y respuestas están codificadas en un array interno dentro del componente. Puedes modificar o añadir preguntas editando ese array.
*   **ContactForm:** Formulario de contacto funcional en el que se gestionan estados con React. Actualmente simula el envío con un `setTimeout` y muestra un mensaje de éxito. Para integrarlo con un backend real, sustituye esa lógica por una llamada `fetch` a tu API.
*   **Header y Footer:** El Header contiene la navegación principal y el logotipo, y es sensible al scroll: oculta o muestra la barra y cambia el fondo según la posición. El Footer ofrece enlaces rápidos, datos de contacto y el menú legal.

## Datos y contenidos

*   **Servicios:** La lista de servicios se define en `src/data/services.js`. Cada entrada tiene un `id`, `title`, `description` e `icon`. Añade más servicios o modifica los existentes para actualizar las páginas de inicio y servicios.
*   **Proyectos:** En `src/data/projects.js` se define la galería de proyectos, cada uno con `id`, `title`, `location`, `description`, `image` y `tags`. Las etiquetas se utilizan para los filtros en `GridGallery`.
*   **Textos de las páginas legales:** Los archivos dentro de `src/app/legal/` contienen el aviso legal, política de privacidad y cookies. Personaliza estos textos con los datos reales de la empresa.
*   **Preguntas frecuentes:** Edita el array `faqs` en `src/components/FAQ/FAQ.jsx` para actualizar preguntas y respuestas.
*   **Datos de contacto:** La información se encuentra en `src/app/contacto/page.js` y en el Footer. Cambia aquí la dirección, email y teléfono.

## Estilos y personalización

Las variables de color, radios de borde y sombras se definen en `src/app/globals.css`. Puedes ajustar la identidad visual de la web modificando estas variables:

*   `--color-bg`: color de fondo global.
*   `--color-text` y `--color-muted`: colores de texto principales.
*   `--color-primary`, `--color-primary-hover` y `--color-secondary`: colores corporativos (ámbar y marrón) usados en botones y fondos.
*   `--radius` y `--shadow-*`: radios de borde y sombras para componentes.

Recuerda que los estilos globales también definen clases utilitarias como `.container`, `.section` o `.btn` y variantes para los botones.

## Buenas prácticas y sugerencias de mejora

*   **Uso de imágenes optimizadas:** Asegúrate de que todas las imágenes se guardan en WebP o JPEG comprimido. Utiliza siempre que sea posible `<Image>` de Next.js para aprovechar su optimización y lazy loading.
*   **Separación de datos y presentación:** Mantén los datos en ficheros del directorio `src/data` o consúmelos desde una API. Así se facilita actualizar textos sin tocar los componentes.
*   **SEO y metadatos:** Cada página define un objeto `metadata` con `title` y `description`. Ajusta estos valores para mejorar el posicionamiento en buscadores. Puedes añadir campos como `keywords` u `openGraph` para redes sociales.
*   **Rutas dinámicas:** Si en el futuro necesitas páginas detalladas de cada servicio o proyecto, considera crear rutas dinámicas en `src/app/servicios/[slug]/page.js` y `src/app/proyectos/[id]/page.js`, obteniendo los datos desde `src/data` o una base de datos.
*   **Integración de formularios:** Conecta el formulario de contacto a un servicio real (por ejemplo, enviar correos, almacenar en base de datos o integrar con un CRM). Maneja el estado de carga, éxito y error de manera adecuada.
*   **Accesibilidad (a11y):** Verifica que los componentes tengan etiquetas ARIA cuando corresponda y que el contraste de colores sea adecuado. Asegura que el sitio sea navegable con teclado.
*   **Refactorizar componentes compartidos:** Componentes como `Section`, `Container` y `Card` están diseñados para reusar. Sigue esa filosofía para nuevos componentes, evitando duplicación de código.
*   **Gestor de estados y servicios externos:** Si el proyecto crece, puedes incorporar un gestor de estados (como Redux o Zustand) o un cliente para API (como axios o React Query) para manejar peticiones.

---

Esta guía pretende ofrecer una visión clara del funcionamiento de CobosWeb y servir de referencia para futuros desarrolladores. Si se introducen nuevas funcionalidades o estructuras, recuerda actualizar este archivo para mantenerlo útil y actual.
