# Cómo manejar problemas y solicitudes de extracción abiertas

Una de las responsabilidades principales de un mantenedor de Open Source es priorizar los problemas abiertos y revisar las solicitudes de extracción. En este capítulo, hablaremos sobre cómo manejar mejor los problemas, las solicitudes de extracción y las vulnerabilidades de seguridad abiertas.

## Priorización y gestión de problemas

La priorización de problemas implica revisar una lista existente de problemas abiertos y priorizarlos en orden de importancia. Las siguientes secciones analizarán los tipos más comunes de problemas y cómo priorizarlos y responder mejor a los colaboradores.

### Problemas etiquetados como errores

Al priorizar problemas de errores, debes dedicar tiempo a reproducir el error para comprender el problema. Si no puedes reproducir el error, comunícate con otros miembros del equipo para ver si pueden reproducirlo. Si eres un mantenedor solitario, responde al autor original del problema para obtener más información y contexto.

Luego, debes definir si el error se considera crítico, medio o pequeño.

#### Errores críticos

Cuando un problema abierto contiene un error que es un bloqueador importante y ha afectado la funcionalidad de toda la aplicación o sitio web, puedes considerarlo como alta prioridad o crítico. Este tipo de error debe corregirse de inmediato.

Etiquetar estos problemas como `críticos` o `alta prioridad` es lo mejor para que el equipo sepa que deben abordarlos primero. Considera usar etiquetas en diferentes colores. Los colores de etiqueta rojo brillante o naranja son una buena opción porque indican el nivel de gravedad y son más fáciles de detectar en una lista de problemas.

Para las correcciones críticas de errores, es mejor que los miembros del equipo central o los colaboradores habituales trabajen en estos problemas para garantizar que se hagan bien y con prontitud. Puedes usar una etiqueta como `core team work` para indicar que este problema solo está abierto para miembros selectos.

#### Errores de pequeños a medianos

Un error que no afecta la funcionalidad de tu aplicación no se considera crítico. Puedes categorizar los errores como de nivel medio cuando puedes corregirlos después de desplegar un lanzamiento próximo. Aquellos que puedas o no incluir en el desarrollo se consideran errores pequeños.

Puedes abrir estos problemas para que cualquiera trabaje en ellos. Algunos de estos problemas pueden ser tan pequeños que serían una buena oportunidad para un nuevo colaborador. Etiqueta el problema con un `good first issues` o `help wanted` en esta situación.

### Problemas etiquetados como características

Al priorizar las solicitudes de características, debes asegurarte de que sean adecuadas para tu proyecto y que te interese agregarlas. Comunícate con el autor original del problema para ver si quiere trabajar en él. Si están de acuerdo, continúa y asígnale ese problema. De lo contrario, agrega una etiqueta `help wanted` o `accepting PRs`.

Supongamos que la función es adecuada para el proyecto pero es compleja. Considera trabajar en ella tú mismo o hacer que un miembro del equipo central la asigne. Las funciones grandes que afectan muchos archivos y partes móviles de tu aplicación deben ser manejadas por alguien experimentado con la base de código y no crearán más problemas.

A veces, los usuarios pedirán funciones que ya están en la hoja de ruta o que ya están siendo trabajadas por otro colaborador. Si es así, puedes responder cortésmente para informarles sobre el estado. Aquí hay una plantilla que puedes usar para una respuesta:

> Gracias por tomarte el tiempo para abrir este problema. Otro miembro del equipo está trabajando en esta función, que se agregará pronto. Como resultado, vamos a cerrar este problema.

Si una solicitud de característica no suena como una buena opción para tu proyecto, puedes responder al autor original y cerrar el problema. Aquí hay una plantilla que puedes usar para una respuesta:

> Gracias por estar tan interesado en nuestro proyecto. La función que has propuesto no sería una buena opción para el alcance y la dirección actuales de este proyecto. En este momento, no vamos a avanzar con esta función.

### Problemas etiquetados como documentación

Si el problema tiene que ver con errores tipográficos o gramaticales menores, agrega una etiqueta `good first issues` para abrirlo a nuevos colaboradores. Si el problema es más complejo, deberás evaluar el nivel de prioridad y agregar una etiqueta `help wanted`. Además, en estas situaciones, es posible que debas obtener más información del autor original antes de abrirlo para la contribución.

### Problemas de spam

Si un problema es claramente spam o un mensaje inútil, no necesitas interactuar con el autor. En cambio, cierra el problema y agrega una etiqueta `spam`. Aquí hay un ejemplo de un mensaje de spam:

> ¡Este proyecto es terrible! Nada funciona y tu código es basura. No puedo creer que alguien use esto. ¡Arrglalo YA!!!111!!1!

No hay detalles concretos sobre los problemas en esa situación, y el autor es claramente combativo. Es importante abstenerse de interactuar con este tipo de usuarios. Puedes cerrar el problema y seguir adelante.

### Problemas con información insuficiente

Si el usuario no proporciona detalles concretos sobre el problema, responde amablemente pidiéndole más información. Si es un informe de error, solicita más detalles sobre cómo reproducirlo. Si es una solicitud de característica, solicita aclaraciones sobre los cambios de estilo o funcionalidad.

Algunos usuarios responderán rápidamente a las respuestas, mientras que otros pueden tardar más. Si no recibes una respuesta en una semana, puedes enviarle un mensaje nuevamente para obtener más detalles. Si pasan algunas semanas y el problema no se considera crítico, continúa y cierra el problema.

### Problemas obsoletos

Los problemas que no se han trabajado durante meses se consideran obsoletos. A veces, es posible que te interese resucitar este problema y convertirlo en un elemento de mayor prioridad. Si ese es el caso, entonces sigue el proceso normal de priorización y agrega las etiquetas apropiadas.

Pero otras veces, es posible que te des cuenta de que este es un problema en el que prefieres no trabajar. Si ese es el caso, continúa y ciérralo para siempre. Algunos mantenedores automatizan este proceso utilizando acciones como [Cerrar problemas y PR obsoletos](https://github.com/actions/stale).

## Revisiones de solicitudes de extracción

Hay muchas cosas a considerar al revisar las solicitudes de extracción. Esta siguiente sección discutirá cómo proporcionar buena retroalimentación y trabajar con colaboradores en sus solicitudes de extracción.

### Revisiones de código efectivas

Las revisiones de código deben ser informativas, constructivas y útiles para el revisor y el autor. Recuerda que los colaboradores han ofrecido su tiempo para ayudar a tu proyecto. Debes asegurarte de que tu revisión sea generalmente positiva e informativa. Sería mejor si consideraras usar frases como esta:

> "Usemos nombres de variables más descriptivos para una mejor legibilidad. En lugar de la variable d aquí, usemos days_until_deadline".

Si bien es importante proporcionar revisiones detalladas, debes especificar qué cambios son correcciones absolutas y cuáles son sugerencias y detalles minuciosos. Si algo está roto o es difícil de leer/entender, entonces eso debería ser algo que se corrija en la solicitud de extracción. Considera decir algo como lo siguiente:

> "Este es un cambio que rompe el código, y deberíamos cambiarlo a esto en su lugar".

Si tus sugerencias de cambios son sugerencias menores o detalles minuciosos, asegúrate de indicarlo en tu revisión. Esto le permite al autor decidir si incorporar esos cambios en su solicitud de extracción.

### Pruebas manuales

Si una solicitud de extracción implica un cambio pequeño en la documentación o el código, no es necesario probar manualmente los cambios. Pero si la solicitud de extracción implica cambios importantes en el proyecto, es mejor probar los cambios tú mismo para asegurarte de que todo funcione correctamente.

Si has configurado previsualizaciones de despliegue a través de un servicio como [Netlify](https://docs.netlify.com/site-deploys/deploy-previews/) o [Vercel](https://vercel.com/docs/deployments/preview-deployments), ese es un buen primer paso para probar manualmente los cambios. Si no tienes previsualizaciones configuradas, debes extraer el proyecto localmente para probar manualmente los cambios. Es esencial tomarse el tiempo para probar manualmente todo porque eres la última línea de defensa antes de que se fusione una solicitud de extracción. Un nuevo conjunto de cambios puede romper la aplicación sin pruebas adecuadas.

Cuando la solicitud de extracción ha roto una parte de la aplicación, responde al autor con una descripción detallada de lo que salió mal. A veces, ayuda incluir una captura de pantalla o una grabación de pantalla para mostrar lo que está roto. Si tus pruebas automatizadas no detectaron el cambio que rompe el código, debes abrir un problema separado para actualizar tu conjunto de pruebas. Y si no tienes un conjunto de pruebas configurado para ejecutarse en cada solicitud de extracción, este es el momento perfecto para configurarlo.

### Pruebas faltantes

No todas las solicitudes de extracción necesitarán pruebas porque son cambios pequeños de código o actualizaciones de documentación. Sin embargo, para funciones o refactorizaciones más grandes, se deben agregar pruebas para ayudar a garantizar que todo funciona como se espera. Si el autor de la solicitud de extracción no ha configurado las pruebas, comunícate con ellos en la solicitud de extracción para informarles qué partes necesitan ser probadas. También ayuda describir la adición de pruebas en tu documentación como una expectativa.

### Pruebas automatizadas fallidas

A veces, los colaboradores abrirán una solicitud de extracción que falla algunas de tus pruebas automatizadas. Es mejor esperar unos días después de que se abra la solicitud de extracción para permitir que el colaborador aborde las pruebas fallidas y resuelva el problema de forma independiente. Si no están abordando el problema, comunícate con ellos en la solicitud de extracción y pregunta si necesitan ayuda. Cuando lo hagan, investiga por qué la prueba está fallando y proporciona retroalimentación constructiva sobre cómo pueden solucionarlo. Si la prueba fallida no está relacionada con sus cambios, hazles saber que es seguro ignorarla y que se solucionará en otra solicitud de extracción.

Si el autor no soluciona el problema o no responde a tu comentario inicial, responde con las correcciones sugeridas y reitera que estás aquí para ayudar. Después de varias semanas o meses sin la respuesta del autor, cierra la solicitud de extracción y sigue adelante.

Si varios colaboradores fallan el mismo conjunto de pruebas, las pruebas pueden ser defectuosas o estar rotas y necesitan tu atención. En esas situaciones, debes aclarar al colaborador que la prueba fallida no es culpa suya y que se resolverá.

![Pruebas automatizadas fallidas](../../../_assets/images/failed-automated-tests.png)

### Solicitudes de extracción de spam

Puede haber momentos en los que recibas una solicitud de extracción de spam para tu proyecto. En estas situaciones, es mejor no responder al autor. En cambio, ciérrala y agrega una etiqueta `spam`.

Aquí tienes algunos ejemplos de solicitudes de extracción de spam:

- Cambios de espacio en blanco en el archivo README u otros archivos
- Cambios aleatorios en los archivos sin un problema o explicación adjuntos
- Numerosos enlaces a sitios web no relacionados o que promocionan productos/servicios
- Contenido plagiado de otras fuentes sin permiso o atribución adecuada

### Solicitudes de extracción de baja calidad

Las solicitudes de extracción de baja calidad, desafortunadamente, requieren mucho tiempo y energía del mantenedor. Aquí tienes algunos ejemplos de solicitudes de extracción de baja calidad:

- Solicitudes de extracción sin terminar que no abordan todo el problema
- Código que no encaja dentro de la guía de estilo establecida para el proyecto
- Formularios de solicitud de extracción incompletos que no proporcionan suficiente información sobre los cambios realizados
- Abordar varios problemas a la vez y hacer que sea difícil de revisar

Si recibes una solicitud de extracción que es de menor calidad, comunícate con el autor y explícale qué debe agregarse y qué cambios deben hacerse. La mayoría de las veces, los colaboradores pueden no ser conscientes de estos problemas y necesitan una explicación adicional y tiempo para mejorar sus solicitudes de extracción.

### Solicitudes de extracción obsoletas

A veces, las solicitudes de extracción pueden permanecer abiertas durante semanas o meses. No se consideran solicitudes de extracción obsoletas si tienen actualizaciones y conversaciones regulares. Si ha habido poca o ninguna actividad durante varias semanas, debes comunicarte con el colaborador para ver si necesita ayuda o todavía está interesado en trabajar en ella.

Si has intentado comunicarte repetidamente y no has recibido respuesta, debes cerrar la solicitud de extracción o hacerla tú mismo. Si la haces tú mismo, dile al colaborador que la estás llevando a la línea de meta porque está bloqueando otras solicitudes de extracción.

## Aspectos destacados de problemas y solicitudes de extracción con OpenSauced

La función [Aspectos destacados](https://docs.opensauced.pizza/features/highlights/) en OpenSauced es un lugar para que muestres los logros recientes con la comunidad de Open Source. Este es un lugar para presentar tu proyecto a posibles nuevos colaboradores y hablar sobre los problemas que necesitan atención de la comunidad.

![GIF de Aspectos destacados](../../../_assets/gifs/highlight.gif)

### Aspectos destacados de problemas

Al escribir aspectos destacados de problemas, debes hablar sobre el problema, cómo el colaborador lo resolvió y cómo la solución impactó el proyecto. Una vez que publiques un aspecto destacado en OpenSauced, compártelo nuevamente en otras plataformas como Twitter o LinkedIn para aumentar la visibilidad. Reconocer y agradecer regularmente a tus colaboradores, especialmente en público, fortalecerá su lealtad al proyecto y atraerá nuevos colaboradores.

### Aspectos destacados de solicitudes de extracción

Al escribir aspectos destacados de solicitudes de extracción, debes hablar sobre los cambios realizados, reconocer al autor y mostrar cómo esto mejora el proyecto. Vincula la solicitud de extracción en tu aspecto destacado para aquellos que estén interesados en ver más de cerca los cambios realizados. Esta es otra forma de llamar la atención sobre el proyecto porque es una mirada de primera mano a los tipos de contribuciones que estás buscando y qué tan bien trabajas con los colaboradores.

Para obtener más información sobre cómo funciona la función Aspectos destacados, lee la [documentación de OpenSauced](https://docs.opensauced.pizza/features/highlights/).

## Responde con prontitud y aborda las inquietudes

Cuando tengas problemas y solicitudes de extracción entrantes, es esencial programar tiempo para priorizarlos y revisarlos. Diseña un cronograma regular que funcione para ti para priorizar los problemas de los colaboradores y proporcionar revisiones detalladas de las solicitudes de extracción durante la semana.

No debes sentirte presionado para responder a nuevos problemas o solicitudes de extracción abiertas de inmediato. Está bien si se dejan sin leer durante unos días. Si un colaborador te presiona para que revises o comentes un problema o una solicitud de extracción, responde cortésmente que lo harás cuando tengas tiempo. También puedes configurar tus propias [Acciones de GitHub](https://docs.github.com/en/actions) para automatizar las respuestas a nuevos problemas y solicitudes de extracción, haciendo saber a los colaboradores que lo harás cuando esté disponible. Puedes aprender cómo configurar uno en [este artículo](https://dev.to/opensauced/github-actions-a-maintainers-best-friend-488n).

Si los colaboradores tienen inquietudes sobre el proyecto, debes crear un espacio seguro para que se sientan cómodos hablando sobre estos problemas. Si tienen inquietudes sobre el código o los aspectos de seguridad, no dudes en discutirlo en un problema abierto o incluso en privado a través de Discord o Slack.

## Priorización de tareas y cronogramas realistas

Hacer malabares con todas las tareas para mantener un proyecto de Open Source puede ser difícil a veces. Reserva tiempo cada semana para priorizar problemas y revisar el backlog del proyecto para priorizar el trabajo que se debe realizar. Elige cuándo etiquetar problemas y solicitudes de extracción como alta prioridad. Realísticamente, siempre habrá problemas que deben considerarse de alta prioridad, mientras que puedes abordar los demás más adelante.

Al establecer cronogramas realistas, agrega unos días adicionales a tu estimación de trabajo. Si crees que un nuevo conjunto de funciones tardará un par de semanas, agrega una semana a cada semana. Los problemas surgen todo el tiempo en los proyectos. Por lo tanto, debes evitar limitarte a un plazo muy estricto cuando no fue realista en primer lugar.

Al trabajar con otros colaboradores voluntarios, permite tiempo adicional para completar el trabajo. Si ofrecen su tiempo, es posible que se encuentren con otros compromisos que retrasarán su disponibilidad para ti. Es crucial liderar con empatía y comprensión y no exigir que se adhieran a un plazo estricto como lo haría un empleado.

## Manejo de vulnerabilidades de seguridad

En caso de que surjan problemas de seguridad dentro de tu proyecto, tus colaboradores deben estar al tanto de los métodos óptimos para informarlos. Lo mejor sería tener una política para informar vulnerabilidades de seguridad almacenadas en el archivo `SECURITY.md`. Este archivo generalmente se agrega al directorio raíz o al directorio `.github` del proyecto. También sería bueno vincular al archivo de seguridad en tu archivo README para facilitar el acceso de la comunidad.

Muchos mantenedores optarán por usar esta plantilla de política de seguridad:

> El [programa de recompensas de errores](https://bounty.github.com) de GitHub recompensa a los investigadores por descubrir vulnerabilidades de seguridad en una serie de repositorios. La lista completa de proyectos que son elegibles para recompensas está [disponible en nuestro sitio de recompensas de errores](https://bounty.github.com/#scope).
>
> Si el repositorio es elegible para recompensas, puedes enviar un informe a través de [HackerOne](https://hackerone.com/github). Puedes encontrar más información útil en nuestras [reglas](https://bounty.github.com/#rules) y [preguntas frecuentes](https://bounty.github.com/#faqs).
>
> Para los repositorios no cubiertos por el programa de recompensas de errores, abre un problema.

### Dependabot

Dependabot es una función de GitHub que monitorea las dependencias de tu proyecto e informa sobre posibles vulnerabilidades de seguridad. Puedes configurar Dependabot para informar problemas o crear solicitudes de extracción para actualizar las dependencias con vulnerabilidades de seguridad. Para obtener más información sobre esta función, lee la [documentación de GitHub](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide).

Pasemos al [próximo capítulo](comunicacion-y-colaboracion.md), que discutirá cómo comunicarse y colaborar de manera efectiva.