import type { Localized } from './i18n'

export type Block =
  | { type: 'p'; text: Localized }
  | { type: 'list'; items: Localized[] }
  | { type: 'h3'; text: Localized }

export interface CaseStudySection {
  id: string
  title: Localized
  blocks: Block[]
}

export interface CaseStudy {
  /** Last URL segment; the same in every language. */
  slug: string
  title: Localized
  summary: Localized
  facts: { label: Localized; value: Localized }[]
  sections: CaseStudySection[]
}

/** Case study of the Tenerife Comercio platform. Figures come from the project's own documentation. */
export const tenerifeComercio: CaseStudy = {
  slug: 'tenerife-comercio',
  title: {
    en: 'Tenerife Comercio: a georeferenced commercial atlas',
    es: 'Tenerife Comercio: un atlas comercial georreferenciado'
  },
  summary: {
    en: "Redesign and extension of the Cabildo de Tenerife's commercial atlas: an interactive map of about 40,000 businesses with socioeconomic layers, downloadable reports and a data pipeline built on official statistics.",
    es: 'Rediseño y ampliación del atlas comercial del Cabildo de Tenerife: un mapa interactivo de unos 40.000 comercios con capas socioeconómicas, informes descargables y un pipeline de datos basado en estadísticas oficiales.'
  },
  facts: [
    {
      label: { en: 'Role', es: 'Rol' },
      value: {
        en: 'Developer and maintainer; the only developer on the codebase',
        es: 'Desarrollador y responsable del mantenimiento; único desarrollador del código'
      }
    },
    {
      label: { en: 'Client', es: 'Cliente' },
      value: {
        en: 'Cabildo de Tenerife, Data Bank and Documentation Centre unit',
        es: 'Cabildo de Tenerife, Unidad de Banco de Datos y Centro de Documentación'
      }
    },
    {
      label: { en: 'Period', es: 'Periodo' },
      value: { en: 'January to September 2026', es: 'De enero a septiembre de 2026' }
    },
    {
      label: { en: 'Stack', es: 'Tecnologías' },
      value: {
        en: 'Joomla 6, PHP 8.2, vanilla JavaScript (ES modules), Leaflet, Chart.js, jsPDF, Python, Figma',
        es: 'Joomla 6, PHP 8.2, JavaScript puro (módulos ES), Leaflet, Chart.js, jsPDF, Python, Figma'
      }
    }
  ],
  sections: [
    {
      id: 'context',
      title: { en: 'Context', es: 'Contexto' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The Data Bank and Documentation Centre of the Cabildo de Tenerife has spent more than 30 years collecting information about the island. Its Commercial Atlas, created in 2012, gathers the commercial, industrial and socioeconomic activity of Tenerife and shows it on a georeferenced map. Its purpose is to promote local commerce and to help people start a business.',
            es: 'La Unidad de Banco de Datos y Centro de Documentación del Cabildo de Tenerife lleva más de 30 años recopilando información sobre la isla. Su Atlas Comercial, creado en 2012, reúne la actividad comercial, industrial y socioeconómica de Tenerife y la muestra en un mapa georreferenciado. Su objetivo es promover el comercio local y facilitar el emprendimiento.'
          }
        }
      ]
    },
    {
      id: 'challenge',
      title: { en: 'The challenge', es: 'El reto' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: 'Bring content that was spread across several places (aid and subsidies, business data, guidance for starting a company, application forms) into one coherent site.',
              es: 'Reunir en un único sitio contenidos que estaban dispersos (ayudas y subvenciones, datos de comercios, guía para crear una empresa, formularios de solicitud).'
            },
            {
              en: "Give the map the socioeconomic context needed to judge a business's viability in each area, with data that anyone can verify.",
              es: 'Dar al mapa el contexto socioeconómico necesario para valorar la viabilidad de un negocio en cada zona, con datos que cualquiera pueda verificar.'
            },
            {
              en: 'Make the tool usable for people with no technical training.',
              es: 'Hacer la herramienta accesible para personas sin formación técnica.'
            },
            {
              en: 'Keep the platform stable and documented, so it does not depend on a single person.',
              es: 'Mantener la plataforma estable y documentada, para que no dependa de una sola persona.'
            }
          ]
        }
      ]
    },
    {
      id: 'work',
      title: { en: 'What I did', es: 'Qué hice' },
      blocks: [
        { type: 'h3', text: { en: 'Redesign and integration', es: 'Rediseño e integración' } },
        {
          type: 'list',
          items: [
            {
              en: 'Designed the new interface in Figma, validated with the unit, and built it in Joomla with HTML, CSS and JavaScript: modular components, responsive layouts and shared colour variables for a consistent look.',
              es: 'Diseñé la nueva interfaz en Figma, la validé con la unidad y la construí en Joomla con HTML, CSS y JavaScript: componentes modulares, diseño responsive y variables de color compartidas para mantener la coherencia visual.'
            },
            {
              en: 'Merged scattered content into one site, including the contents of a separate small-business website, and upgraded the portal to Joomla 6.',
              es: 'Integré en un solo sitio los contenidos dispersos, incluidos los de otra web para autónomos y micropymes, y actualicé el portal a Joomla 6.'
            },
            {
              en: 'Built three custom Joomla components: the map and its data pipeline, a business-plan form that generates a PDF, and a form to suggest new businesses.',
              es: 'Desarrollé tres componentes propios de Joomla: el mapa con su pipeline de datos, un formulario de plan de empresa que genera un PDF y un formulario para sugerir nuevos comercios.'
            }
          ]
        },
        { type: 'h3', text: { en: 'The interactive map', es: 'El mapa interactivo' } },
        {
          type: 'list',
          items: [
            {
              en: 'A Leaflet map with search and filters over about 40,000 businesses.',
              es: 'Un mapa con Leaflet, con búsqueda y filtros sobre unos 40.000 comercios.'
            },
            {
              en: 'Selectable socioeconomic layers: average income, population density, ageing, country of birth of the foreign-born population, nearby facilities, tourist accommodation, public transport traffic and accessibility for people with reduced mobility.',
              es: 'Capas socioeconómicas seleccionables: renta media, densidad de población, envejecimiento, país de nacimiento de la población extranjera, equipamientos de proximidad, alojamiento turístico, tráfico de transporte público y accesibilidad para personas con movilidad reducida.'
            },
            {
              en: 'A redesigned layer selector (grouped by type, with icons and contextual help showing the source of each dataset) and a toggle for street and place names, useful over the satellite view.',
              es: 'Un selector de capas rediseñado (agrupado por tipo, con iconos y ayuda contextual que indica la fuente de cada dato) y un interruptor de nombres de calles y lugares, útil sobre la vista de satélite.'
            },
            {
              en: 'A "selectable area" tool: draw any zone on the map and get the report for the businesses inside it, instead of being limited to a municipality.',
              es: 'Una herramienta de "área seleccionable": se delimita libremente una zona sobre el mapa y se obtiene el informe de los comercios de esa zona, en lugar de limitarse a un municipio.'
            },
            {
              en: 'A downloadable report (screen, CSV and PDF) with comparative charts per municipality and a citation of the source for each figure.',
              es: 'Un informe descargable (pantalla, CSV y PDF) con gráficos comparativos por municipio y la cita de la fuente de cada dato.'
            }
          ]
        },
        { type: 'h3', text: { en: 'Data and verification', es: 'Datos y verificación' } },
        {
          type: 'list',
          items: [
            {
              en: 'Python scripts that download statistical data from the Spanish national statistics institute (INE) and the Canary Islands institute (ISTAC) and turn it into the JSON the map reads.',
              es: 'Scripts en Python que descargan datos estadísticos del INE y del ISTAC y los convierten en el JSON que lee el mapa.'
            },
            {
              en: "Cross-checked each variable across official open-data sources, including the Cabildo's own data portal, before publishing it on the map.",
              es: 'Verificación cruzada de cada variable entre fuentes oficiales de datos abiertos, incluido el portal de datos del propio Cabildo, antes de publicarla en el mapa.'
            },
            {
              en: 'Fixed data-quality problems found along the way, such as municipality names that did not match between sources, and assigned a municipality to records that had none by computing it geographically.',
              es: 'Corrección de problemas de calidad de datos detectados por el camino, como nombres de municipio que no coincidían entre fuentes, y asignación de municipio a registros que no lo traían calculándolo geográficamente.'
            }
          ]
        }
      ]
    },
    {
      id: 'decisions',
      title: { en: 'Technical decisions', es: 'Decisiones técnicas' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: 'Vanilla JavaScript, no jQuery or frameworks. The five third-party libraries are served from the site itself rather than from a CDN, and the heavy ones (Chart.js and jsPDF) are only downloaded when someone opens the report or exports a PDF.',
              es: 'JavaScript puro, sin jQuery ni frameworks. Las cinco librerías de terceros se sirven desde el propio sitio y no desde una CDN, y las más pesadas (Chart.js y jsPDF) solo se descargan cuando alguien abre el informe o exporta un PDF.'
            },
            {
              en: 'File-based data instead of custom database tables: the map reads static JSON generated from CSV files, and that data is read-only at runtime.',
              es: 'Datos en ficheros en lugar de tablas propias: el mapa lee JSON estático generado a partir de CSV, y esos datos son de solo lectura en ejecución.'
            },
            {
              en: 'WebP thumbnails for the business photos: 24,132 images about 36% lighter on average. I also tested AVIF and discarded it: roughly 40% smaller, but about 870 ms per image to generate in PHP for only about 7 KB more saved per popup.',
              es: 'Miniaturas WebP para las fotos de los comercios: 24.132 imágenes, de media un 36 % más ligeras. También probé AVIF y lo descarté: pesa un 40 % menos, pero tarda unos 870 ms por imagen en generarse en PHP para ahorrar solo unos 7 KB más por ventana emergente.'
            },
            {
              en: "A report variable (available premises) was removed at the unit's explicit request once it stopped being relevant to the analysis.",
              es: 'Una variable del informe (locales y naves disponibles) se retiró a petición expresa de la unidad cuando dejó de ser relevante para el análisis.'
            }
          ]
        }
      ]
    },
    {
      id: 'maintenance',
      title: { en: 'Quality and maintenance', es: 'Calidad y mantenimiento' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: 'Fixed a caching problem that could make returning users see an outdated version of the map after an update, and several display details on mobile devices.',
              es: 'Corregí un problema de caché que podía hacer que las personas usuarias recurrentes vieran una versión desactualizada del mapa tras una actualización, y varios detalles de visualización en dispositivos móviles.'
            },
            {
              en: 'Wrote headless smoke tests for the PDF generator and for the map modules.',
              es: 'Escribí pruebas de humo en modo headless para el generador de PDF y para módulos del mapa.'
            },
            {
              en: 'Documented the project (development manual, changelog and a feature catalogue) so any technical person can maintain it.',
              es: 'Documenté el proyecto (manual de desarrollo, registro de cambios y catálogo de funcionalidades) para que cualquier persona técnica pueda mantenerlo.'
            }
          ]
        }
      ]
    },
    {
      id: 'numbers',
      title: { en: 'By the numbers', es: 'En cifras' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'From a snapshot of the repository in September 2026 (version 0.8.0):',
            es: 'De una fotografía del repositorio en septiembre de 2026 (versión 0.8.0):'
          }
        },
        {
          type: 'list',
          items: [
            { en: 'About 40,000 businesses on the map.', es: 'Unos 40.000 comercios en el mapa.' },
            {
              en: '602 commits in about 8.5 months, all by one developer.',
              es: '602 commits en unos 8,5 meses, todos de un solo desarrollador.'
            },
            {
              en: 'About 35,000 lines of own code in 148 files: JavaScript 36%, PHP 26%, CSS 21% and Python 16%.',
              es: 'Unas 35.000 líneas de código propio en 148 ficheros: JavaScript 36 %, PHP 26 %, CSS 21 % y Python 16 %.'
            },
            {
              en: 'Five third-party libraries, all served from the same domain, and no custom database tables.',
              es: 'Cinco librerías de terceros, todas servidas desde el mismo dominio, y ninguna tabla propia en la base de datos.'
            }
          ]
        }
      ]
    },
    {
      id: 'result',
      title: { en: 'Result', es: 'Resultado' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: 'The atlas now includes the socioeconomic variables planned for it from the start.',
              es: 'El atlas incluye ya las variables socioeconómicas previstas desde el inicio del proyecto.'
            },
            {
              en: 'Every variable shows its source, on screen and in the report, so anyone can check where a figure comes from.',
              es: 'Cada variable indica su fuente, en pantalla y en el informe, para que cualquiera pueda comprobar de dónde sale una cifra.'
            },
            {
              en: 'The layer selector and the area tool make the map easier to use for people without technical training.',
              es: 'El selector de capas y la herramienta de área hacen el mapa más fácil de usar para personas sin formación técnica.'
            },
            {
              en: 'The project is documented, so its knowledge does not depend on one person.',
              es: 'El proyecto está documentado, de modo que su conocimiento no depende de una sola persona.'
            }
          ]
        }
      ]
    }
  ]
}

export const caseStudies: CaseStudy[] = [tenerifeComercio]
