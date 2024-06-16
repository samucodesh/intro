# Potenciadores de Mantenedores

Los mantenedores tienen una variedad de tareas diarias. A menudo se enfrentan a la priorización de nuevos problemas, la revisión de solicitudes de extracción, las pruebas de los cambios y la gestión y moderación de la comunidad, como dar la bienvenida a nuevos contribuidores y agradecer a los contribuidores por sus contribuciones. La mayoría de las veces, se espera que respondan a estas tareas con prontitud. A veces, estas tareas interminables llevan demasiado tiempo y son abrumadoras. Sería útil si fueras eficiente en lo que haces.

La buena noticia es que algunas herramientas y funciones en GitHub te permiten automatizar tareas, lo que puede ayudarte a ahorrar tiempo y hacer tu trabajo más ligero. En este capítulo, hablaremos sobre estos potenciadores de mantenedores de GitHub.

## Acciones de GitHub

Digamos que tu proyecto recibe más problemas y solicitudes de extracción nuevos a diario. Quieres darle la bienvenida a cada nuevo colaborador, agradecerles por sus contribuciones y decirles que vas a priorizar sus problemas y revisar sus solicitudes de extracción. Quieres hacer más, pero no tienes tiempo para responderles porque todavía estás ocupado con otra cosa.

Configurar acciones para automatizar estas tareas te ahorrará tiempo respondiendo a las contribuciones individualmente. Puedes decidir qué acciones incluir en cada repositorio.

![Crear acción de GitHub](../../../_assets/images/gh-actions.png)

### Tipos de acciones

Hay muchos tipos de acciones que puedes configurar para tu proyecto, dependiendo de lo que necesites. A continuación, se presentan algunas Acciones de GitHub que normalmente encuentras en los repositorios:

#### Linter

La mayoría de los repositorios Open Source tienen linters que se ejecutan en cada solicitud de extracción. Linter es una herramienta para detectar errores potenciales y mantener un estilo de código consistente en un proyecto. [Super-Linter](https://github.com/marketplace/actions/super-linter) es una de las acciones más utilizadas. Esta acción puede ayudarte a mantener la calidad del código y lograr un estilo más legible y consistente.

#### Previsualizaciones desplegadas

Deseas poder ver los cambios, especialmente los visuales, sin enviarlos a producción. Tener estas previsualizaciones en cada solicitud de extracción con [Netlify](https://docs.netlify.com/site-deploys/deploy-previews/) o [Vercel](https://vercel.com/features/previews/) te permite previsualizar los cambios antes de fusionar la solicitud de extracción.

#### Scripts de problemas y solicitudes de extracción

Tener scripts para dar la bienvenida a nuevos problemas y solicitudes de extracción y hacer saber a los contribuidores que los vas a priorizar y revisar te ahorrará más tiempo que escribirlos manualmente, uno por uno. Puedes utilizar la acción [Crear o actualizar comentario](https://github.com/marketplace/actions/create-or-update-comment), como lo hacemos aquí en OpenSauced, para [dar la bienvenida a nuevos problemas](https://github.com/open-sauced/app/blob/beta/.github/workflows/issue.yml).

#### Herramientas de análisis de código

El análisis de código es una herramienta para detectar vulnerabilidades de seguridad, posibles bugs y errores en el código. Puedes utilizar la función de [análisis de código](https://docs.github.com/en/code-security/code-scanning) de GitHub y configurar herramientas como [CodeQL](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql), que GitHub mantiene, o herramientas de análisis de terceros como [SonarQube](https://github.com/marketplace/actions/official-sonarqube-scan).

#### Pruebas

Configurar acciones para ejecutar pruebas es útil para garantizar que tu aplicación funciona y se desempeña como debería y que no se producen regresiones con los nuevos cambios. [Acción de GitHub para Cypress](https://docs.cypress.io/guides/continuous-integration/github-actions) es uno de los ejemplos de acciones para pruebas E2E. También puedes consultar [Is Website Vulnerable](https://github.com/marketplace/actions/is-website-vulnerable) para encontrar vulnerabilidades de seguridad conocidas públicamente en los sitios web de las bibliotecas de JavaScript o [Step CI Action](https://github.com/marketplace/actions/step-ci-action) para el control de calidad de la API.

### Creación y personalización de acciones

Puedes buscar Acciones de GitHub disponibles en el [GitHub Marketplace](https://github.com/marketplace?type=actions). Pero si no puedes encontrar la que necesitas, puedes crear o personalizar tus propias acciones a partir de las Acciones de GitHub existentes.

Brian Douglas, el fundador de OpenSauced, creó [Take Action](https://github.com/marketplace/actions/contributor-takes-action). Esta acción permite a los contribuidores asignarse a sí mismos a un problema escribiendo el comando `.take` en el comentario del problema, lo que permite a los mantenedores centrarse en tareas más importantes que la asignación de problemas.

Sin embargo, queremos que los contribuidores solo puedan tomar problemas que hayan pasado nuestra priorización o que no estén destinados a ser trabajados por el equipo central. Por lo tanto, creamos la [Acción de Priorización](https://github.com/open-sauced/app/blob/beta/.github/workflows/triage.yml) que bloqueará Take Action cuando exista una etiqueta `needs triage` o `core team work`.

Puedes leer más sobre las Acciones de GitHub y cómo crear una en [la documentación oficial](https://github.com/features/actions).

Aquí tienes algunos recursos adicionales para ofrecerte más información sobre las Acciones de GitHub y cómo configurar una:

- [Acciones de GitHub: El mejor amigo de un mantenedor](https://dev.to/opensauced/github-actions-a-maintainers-best-friend-488n)
- [Configuración de tu primera acción de GitHub](https://dev.to/opensauced/setting-up-your-first-github-action-for-specific-contributions-33a4)

## Pipelines de CI/CD

Aprovechar las Acciones de GitHub para llevar la Integración Continua / Entrega o Despliegue Continuos (CI/CD) a tu flujo de trabajo directamente en tu repositorio te permitirá ejecutar código, probar, construir y entregar o desplegar software con flujos de trabajo simples y seguros. Automatizar estas tareas acelerará tu proceso de despliegue.

Utilizar Git, GitHub y Acciones de GitHub para construir un Pipeline de CI/CD debería darte confianza en tu código.

### Entrega continua vs. despliegue continuo

De los recursos oficiales de [GitHub](https://resources.github.com/ci-cd/):

> En un Pipeline de CI/CD que utiliza la _entrega_ continua, la automatización se pausa cuando los desarrolladores envían a producción. Un humano, tu equipo de operaciones, seguridad o cumplimiento, todavía necesita aprobar manualmente antes de la publicación final, agregando más demoras.
>
> Por otro lado, el _despliegue_ continuo automatiza todo el proceso de lanzamiento. Los cambios de código se despliegan a los clientes tan pronto como pasan todas las pruebas necesarias.

Un proyecto generalmente comienza con la entrega continua e integra más pruebas automatizadas con el tiempo.

### Construir un Pipeline de CI/CD con Acciones de GitHub

A continuación, se presentan algunos recursos útiles para ayudarte a construir un Pipeline de CI/CD con Acciones de GitHub:

- [Documentación de GitHub: La solución CI/CD completa](https://github.com/solutions/ci-cd/)
- [Cómo construir un Pipeline de CI/CD con Acciones de GitHub en cuatro sencillos pasos](https://github.blog/2022-02-02-build-ci-cd-pipeline-github-actions-four-steps/)

## GitHub CLI

[GitHub CLI](https://cli.github.com/) es una herramienta Open Source que te permite utilizar GitHub desde la línea de comandos de tu computadora. Te permite:

- bifurcar y clonar repositorios,
- comprobar una solicitud de extracción y revisarla localmente,
- crear problemas y solicitudes de extracción,
- ver una solicitud de extracción, problema o repositorio directamente desde tu terminal.

Utilizar GitHub CLI te ahorrará tiempo y aumentará tu productividad como mantenedor. No necesitas cambiar entre el sitio web de GitHub y tu terminal.

Visita el [repositorio de GitHub CLI](https://github.com/cli/cli#installation) para obtener información sobre la instalación de GitHub CLI en tu máquina y lee [esta entrada de blog](https://dev.to/opensauced/boost-productivity-with-the-github-cli-2mne) para empezar.

## Plantillas de problemas y solicitudes de extracción

¿Alguna vez te has encontrado en una situación en la que estás revisando solicitudes de extracción o priorizando problemas, pero no puedes entender qué está sucediendo porque los contribuidores no proporcionaron información suficiente? O, ¿has tenido que cerrar un problema o una solicitud de extracción porque faltaba la descripción, la captura de pantalla u otra información crucial?

La buena noticia es que puedes solucionar estos problemas creando plantillas de problemas y solicitudes de extracción. Estas plantillas te permiten personalizarlas y estandarizarlas para incluir la información necesaria. Puedes verlas como guías que los contribuidores deben seguir al escribir un problema o una solicitud de extracción para tu proyecto. Crear plantillas ahorra tiempo en la priorización de problemas, la revisión de solicitudes de extracción y la garantía de que obtienes toda la información que necesitas de tus contribuidores. Además, los futuros contribuidores pueden beneficiarse de estas plantillas al comprender el historial de cambios realizados, lo que puede ayudarles a depurar o comprender el código involucrado.

Puedes obtener más información sobre [cómo configurar plantillas de problemas](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository) y [cómo crear una plantilla de solicitud de extracción](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository) en la documentación oficial de GitHub.

## Respuestas guardadas

A veces, escribes repetidamente la misma respuesta a problemas o solicitudes de extracción. La comunicación clara entre los mantenedores y los contribuidores es crucial. Por lo tanto, cuando escribes todos los comentarios manualmente, tus mensajes ya no serán consistentes y pueden ser poco claros. Puedes crear respuestas guardadas cuando respondes con frecuencia a problemas y solicitudes de extracción con los mismos comentarios.

Las [respuestas guardadas](https://docs.github.com/en/get-started/writing-on-github/working-with-saved-replies/about-saved-replies) te permiten crear una respuesta reutilizable a problemas, solicitudes de extracción y discusiones, y utilizarla en todos los repositorios. Te ahorrará tiempo respondiendo a los contribuidores, a la vez que se mantiene la coherencia de tu mensaje. Siempre puedes modificar tus respuestas si es necesario.

Lee la documentación de GitHub para obtener instrucciones completas sobre cómo [crear respuestas guardadas](https://docs.github.com/en/get-started/writing-on-github/working-with-saved-replies/creating-a-saved-reply).

![Gif de respuestas guardadas](../../../_assets/gifs/saved-replies.gif)

## Propietarios de código

La mayoría de las veces, los contribuidores no conocen a los mantenedores de un proyecto, por lo que no saben a quién recurrir para que revisen sus solicitudes de extracción. Cuando crean una solicitud de extracción, suelen dejar un comentario sin etiquetar a nadie, como: "Puedes revisar mi solicitud de extracción, por favor". Sin ser etiquetados, los mantenedores no reciben notificaciones sobre esta nueva solicitud de extracción y comentario, lo que hace que se pase por alto. Agregar el archivo CODEOWNERS al repositorio te ayudará a automatizar y abordar este problema.

De la [documentación oficial de GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners):

> Puedes utilizar un archivo CODEOWNERS para definir personas o equipos que son responsables del código en un repositorio.

Aquí tienes un ejemplo de un [archivo CODEOWNERS](https://github.com/open-sauced/docs/blob/main/.github/CODEOWNERS) en el repositorio de documentación de OpenSauced que contiene código como el siguiente:

```text
* @open-sauced/docs
```

Esta sintaxis significa que el equipo `@open-sauced/docs` será el propietario predeterminado de todo en el repositorio y se agregará automáticamente como revisor cuando alguien crea una solicitud de extracción.

!> Si quieres hacer coincidir dos o más propietarios de código con el mismo patrón, todos los propietarios de código deben estar en la misma línea.

Hay algunos beneficios de tener este archivo en tu repositorio:

- **Notificación de solicitud de revisión**

  Una vez que hayas especificado quién puede revisar y mantener un repositorio, estos propietarios de código se notifican automáticamente y se les solicita la revisión cuando alguien abre una solicitud de extracción que modifica el código que poseen. De esta manera, no necesitas agregar revisores manualmente.

- **Prevenir que los contribuidores agreguen revisores manualmente**

  Configurar el archivo CODEOWNERS evita que los contribuidores externos agreguen revisores manualmente porque los agrega automáticamente. De esta manera, los contribuidores no tienen que comentar y etiquetar a nadie en el comentario para que revise su solicitud de extracción. También te ayuda a evitar que agreguen a revisores a personas que no son mantenedores, como contribuidores habituales.

- **Protección de la rama**

  Si optas por "Requerir aprobación" y "Requerir revisión de los propietarios de código" para proteger una rama, un cierto número de propietarios de código debe aprobar cualquier solicitud de extracción antes de que pueda fusionarse con la rama protegida. Esto puede reducir la posibilidad de fusionar solicitudes de extracción que pueden romper producción.

Ahora que comprendes los conceptos básicos de lo que hacen los mantenedores y las herramientas, el [próximo capítulo](tu-equipo.md) te enseñará cómo construir tu equipo.
