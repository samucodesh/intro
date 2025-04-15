// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // Manually create sidebars for each course
  
    introToOSS: [
      {
        type: 'category',
        label: 'Intro to Open Source',
        items: [
          'intro-to-oss/Contributor-README',
          'intro-to-oss/what-is-open-source',
          'intro-to-oss/why-open-source',
          'intro-to-oss/tools-to-be-successful',
          'intro-to-oss/how-to-contribute-to-open-source',
          'intro-to-oss/the-secret-sauce',
          'intro-to-oss/types-of-contributions',
          'intro-to-oss/conclusion',
          'intro-to-oss/additional-resources',
          'intro-to-oss/glossary',
        ],
      },
    ],
  
    becomingAMaintainer: [
      {
        type: 'category',
        label: 'Becoming a Maintainer',
        items: [
          'becoming-a-maintainer/Maintainer-README',
          'becoming-a-maintainer/intro',
          'becoming-a-maintainer/how-to-setup-your-project',
          'becoming-a-maintainer/issues-and-pull-requests',
          'becoming-a-maintainer/communication-and-collaboration',
          'becoming-a-maintainer/maintaining-code-quality',
          'becoming-a-maintainer/building-community',
          'becoming-a-maintainer/maintainer-powerups',
          'becoming-a-maintainer/your-team',
          'becoming-a-maintainer/metrics-and-analytics',
          'becoming-a-maintainer/getting-practical',
          'becoming-a-maintainer/maintainers-guestbook',
          'becoming-a-maintainer/additional-resources',
          'becoming-a-maintainer/glossary',
        ],
      },
    ],

    esIntroToOSS: [
      {
        type: 'category',
        label: 'Introducción al Open Source',
        items: [
          'intro-to-oss/translations/es/introes-README',
          'intro-to-oss/translations/es/que-es-open-source',
          'intro-to-oss/translations/es/por-que-open-source',
          'intro-to-oss/translations/es/herramientas-para-tener-exito',
          'intro-to-oss/translations/es/como-contribuir-al-open-source',
          'intro-to-oss/translations/es/la-salsa-secreta',
          'intro-to-oss/translations/es/tipos-de-contribuciones',
          'intro-to-oss/translations/es/conclusion',
          'intro-to-oss/translations/es/recursos-adicionales',
          'intro-to-oss/translations/es/glosario',
        ],
      },
    ],

    becomingAMaintainerES: [
      {
        type: 'category',
        label: 'Conviértete en mantenedor',
        items: [
          'becoming-a-maintainer/translations/es/README',
          'becoming-a-maintainer/translations/es/introduccion',
          'becoming-a-maintainer/translations/es/como-configurar-tu-proyecto',
          'becoming-a-maintainer/translations/es/problemas-y-solicitudes-de-extraccion',
          'becoming-a-maintainer/translations/es/comunicacion-y-colaboracion',
          'becoming-a-maintainer/translations/es/manteniendo-la-calidad-del-codigo',
          'becoming-a-maintainer/translations/es/construyendo-comunidad',
          'becoming-a-maintainer/translations/es/potenciadores-para-mantenedores',
          'becoming-a-maintainer/translations/es/tu-equipo',
          'becoming-a-maintainer/translations/es/metricas-y-analisis',
          'becoming-a-maintainer/translations/es/ponerse-practico',
          'becoming-a-maintainer/translations/es/libro-de-visitas-de-mantenedores',
          'becoming-a-maintainer/translations/es/recursos-adicionales',
          'becoming-a-maintainer/translations/es/glosario',
        ],
      },
    ],
  };
  

  export default sidebars;