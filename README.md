# Espacio Español · Bac Pro

Web pedagógica estática para alumnado francés de Seconde, Première y Terminale Bac Professionnel.

## Web pública

https://cginerbernet-sys.github.io/espacio-espanol-bac-pro/

## Ver la web

Abra `index.html` en un navegador. Para una comprobación más fiable, puede iniciar un servidor local en esta carpeta.

## Organización

- `index.html`: estructura de la página.
- `styles.css`: diseño, colores y adaptación móvil.
- `enriched.css`: presentación de las prácticas y producciones ampliadas.
- `content.js`: contenidos pedagógicos originales de todas las unidades.
- `media-content.js`: textos de comprensión, glosarios, preguntas y modelos de pronunciación.
- `app.js`: niveles, unidades, ejercicios y progreso local.

La web no envía datos a ningún servidor. El progreso se conserva únicamente en el navegador del alumno mediante almacenamiento local.

## Contenidos

Los temas siguen la progresión general del manual, pero los textos, instrucciones y actividades son originales. Cada enunciado aparece primero en español y después, en un tamaño secundario, en francés.

La versión actual contiene 15 unidades temáticas y un recorrido transversal de preparación del Bac, con 128 tarjetas de léxico, 48 herramientas gramaticales y 64 prácticas autocorrectivas.

Cada recorrido incluye además un texto original de comprensión, un glosario francés, una pregunta autocorrectiva y una frase de pronunciación. El botón de escucha utiliza la voz española disponible en el navegador; si el dispositivo no ofrece síntesis de voz, el texto permanece disponible como alternativa accesible.

La Caja de herramientas abre cuatro bancos completos: vocabulario, gramática, pronunciación y cultura. Cada banco enlaza con las unidades correspondientes. También hay 32 ejercicios de completar frases, con pistas, corrección inmediata y aviso pedagógico cuando la respuesta es correcta pero falta una tilde.

Las unidades y herramientas tienen direcciones recuperables (`#unidad/...`, `#nivel/...` y `#herramienta/...`). Esto permite recargar, utilizar el botón Atrás y compartir un recorrido concreto sin perder la vista actual.
