# Cómo configurar tu proyecto de Open Source

Hay muchas cosas a considerar al configurar tu proyecto de Open Source. En esta parte del curso, revisaremos los componentes clave que todos los proyectos necesitan para tener éxito.

## README detallado

Un archivo README contiene una introducción a tu proyecto de Open Source. Un buen README debe ser claro, conciso, actualizado y detallado. Este archivo se encuentra en tu directorio raíz y sirve como la primera impresión para tus colaboradores.

Aquí hay algunas cosas a considerar dentro de tu README:

- Título y resumen del proyecto
- Breves instrucciones sobre cómo configurar el proyecto
- Imágenes de la aplicación y ejemplos de código
- Tecnología y herramientas utilizadas en el proyecto
- Enlace a las pautas de contribución
- Enlace al código de conducta
- Enlace a la licencia Open Source
- Enlace a la comunidad de Discord, grupo de Slack o Discusiones de GitHub

Un archivo README está escrito en un lenguaje de marcado llamado [Markdown](https://www.markdownguide.org/), un lenguaje popular utilizado en la documentación Open Source como READMEs.

Aquí hay algunos ejemplos de buenos READMEs:

- [OpenSauced App](https://github.com/open-sauced/app/blob/beta/README.md)
- [Documentación de Astro](https://github.com/withastro/astro/blob/main/README.md)
- [freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/README.md)

## Guía de instalación

Esta guía debe incluir instrucciones para lo siguiente:

- Bifurcar el repositorio
- Clonar el repositorio
- Instalar las dependencias
- Configurar las variables de entorno
- Configurar la base de datos, si corresponde
- Ejecutar el proyecto localmente
- Configurar contenedores Docker, si corresponde

La mejor manera de probar tu guía es configurando el proyecto localmente usando tu guía. Si encuentras problemas para que tu proyecto funcione, lo descubrirás rápidamente y puedes actualizar la documentación para agregar o aclarar la parte faltante.

La guía de instalación se coloca mejor en la parte superior del archivo README de tu proyecto, ya que es el archivo más accesible para tus colaboradores.

Otro buen lugar sería en el archivo CONTRIBUTING. Además de proporcionar pautas sobre cómo contribuir a tu proyecto, este archivo puede incluir la configuración de la instalación, las pruebas, la herramienta de linting, los flujos de trabajo, etc. Puedes colocar las instrucciones de instalación hacia la parte superior o inferior de tu archivo CONTRIBUTING. Puedes echar un vistazo a las [Pautas de contribución de OpenSauced](https://docs.opensauced.pizza/contributing/introduction-to-contributing/) como inspiración.

Si tu proyecto es más grande, considera tener un sitio de documentación separado y dedicar una sección para la instalación allí. Puedes usar generadores de sitios de documentación como [Docusaurus](https://docusaurus.io/), [Starlight](https://starlight.astro.build/), o [docsify](https://docsify.js.org/#/).

## Licencia de Open Source Software

Debes saber que un proyecto de Open Source sin una licencia no está disponible para que nadie lo use y lo distribuya. Echa un vistazo a estas explicaciones sobre [El lado legal del Open Source](https://opensource.guide/legal/) en Open Source Guides:

> Hacer que tu proyecto de GitHub sea público no es lo mismo que licenciar tu proyecto. Los proyectos públicos están cubiertos por [los Términos de servicio de GitHub](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service#3-ownership-of-content-right-to-post-and-license-grants), que permite a otros ver y bifurcar tu proyecto, pero tu trabajo de otra manera no viene con ningún permiso.
>
> Si quieres que otros usen, distribuyan, modifiquen o contribuyan a tu proyecto, debes incluir una licencia Open Source. Por ejemplo, alguien no puede utilizar legalmente ninguna parte de tu proyecto de GitHub en su código, incluso si es público, a menos que explícitamente le des el derecho a hacerlo.

Por lo tanto, cada proyecto de Open Source debe tener una licencia escrita en un archivo LICENSE para otorgar más derechos a otros usuarios. Este archivo generalmente se encuentra en el directorio raíz para que todos puedan acceder a él fácilmente.

### Elegir una licencia

Una licencia de Open Source Software es un acuerdo legalmente vinculante entre el creador del software y los usuarios finales. Dicta cómo otros pueden usar, modificar o distribuir tu software.

Algunas licencias son más restrictivas, como la GNU GPL (Licencia Pública General), mientras que otras son menos restrictivas, como la licencia MIT. Aquí hay algunos ejemplos de licencias para proyectos de OpenSauced:

- [OpenSauced Docs - Licencia MIT](https://github.com/open-sauced/docs/blob/main/LICENSE)
- [OpenSauced App - Licencia Apache 2.0](https://github.com/open-sauced/app/blob/beta/LICENSE)

Para comprender mejor qué licencia funcionaría mejor para tu proyecto, consulta estos recursos útiles:

- [Cómo funcionan las licencias Open Source y cómo agregarlas a tus proyectos](https://www.freecodecamp.org/news/how-open-source-licenses-work-and-how-to-add-them-to-your-projects-34310c3cf94/).
- [tl;dr Legal](https://www.tldrlegal.com/)

Para obtener una lista completa de las licencias aprobadas por la Open Source Initiative (OSI), consulta [su lista](https://opensource.org/licenses/).

## Código de conducta

Un código de conducta es un conjunto establecido de reglas y comportamientos que todos los participantes Open Source acuerdan respetar. Este documento ayuda a garantizar un entorno saludable e inclusivo para todos los involucrados con el proyecto.

Este conjunto de reglas y expectativas se incluirá en un archivo CODE_OF_CONDUCT en el directorio raíz de tu proyecto. Los códigos de conducta generalmente se dividen en tres categorías principales: promesa, estándares y cumplimiento.

?> La mayoría de los mantenedores Open Source no escribirán su código de conducta desde cero. En cambio, tomarán prestado o copiarán de otros códigos de conducta y proporcionarán atribución.

### Promesa del proyecto

La promesa inicial es una declaración del tipo de entorno que el proyecto quiere crear. Aquí hay un extracto del [Código de conducta de OpenSauced](https://github.com/open-sauced/.github/blob/main/CODE_OF_CONDUCT.md):

> Con el interés de fomentar un entorno abierto y acogedor, nosotros, como colaboradores y mantenedores, nos comprometemos a hacer que la participación en nuestro proyecto y nuestra comunidad sea una experiencia libre de acoso para todos, independientemente de la edad, el tamaño corporal, la discapacidad, la etnia, las características sexuales, la identidad y la expresión de género, el nivel de experiencia, la educación, el estado socioeconómico, la nacionalidad, la apariencia personal, la raza, la religión o la identidad y orientación sexual.

### Estándares del proyecto

La sección de estándares describe explícitamente lo que se considera un comportamiento aceptable y no aceptable por parte de todos los participantes del proyecto.

Aquí hay un ejemplo del [Código de conducta de OpenSauced](https://github.com/open-sauced/.github/blob/main/CODE_OF_CONDUCT.md):

> Ejemplos de comportamiento que contribuyen a crear un ambiente positivo incluyen:
>
> - Usar un lenguaje acogedor e inclusivo
> - Ser respetuoso con los diferentes puntos de vista y experiencias
> - Aceptar con gracia las críticas constructivas
> - Centrarse en lo que es mejor para la comunidad
> - Mostrar empatía hacia otros miembros de la comunidad
>
> Ejemplos de comportamiento inaceptable por parte de los participantes incluyen:
>
> - El uso de lenguaje o imágenes sexualizadas y atención o avances sexuales no deseados
> - Trolling, comentarios insultantes/despectivos y ataques personales o políticos
> - Acoso público o privado
> - Publicación de información privada de otros, como una dirección física o electrónica, sin permiso explícito
> - Otra conducta que razonablemente podría considerarse inapropiada en un entorno profesional

###  Cumplimiento del proyecto

Querrás indicar explícitamente la consecuencia de lo que sucederá si algún miembro del proyecto se comporta de una manera inaceptable que viole tu código de conducta.

Aquí hay un ejemplo del [Código de conducta de OpenSauced](https://github.com/open-sauced/.github/blob/main/CODE_OF_CONDUCT.md):

> Las instancias de comportamiento abusivo, acosador o inaceptable de otra manera pueden denunciarse poniéndose en contacto con el equipo del proyecto en hello@opensauced.pizza. Todas las quejas serán revisadas e investigadas y darán lugar a una respuesta que se considere necesaria y apropiada para las circunstancias. El equipo del proyecto está obligado a mantener la confidencialidad con respecto al denunciante de un incidente. Se pueden publicar por separado más detalles sobre las políticas de aplicación específicas.
>
> Los mantenedores del proyecto que no sigan o apliquen el Código de conducta de buena fe pueden enfrentar repercusiones temporales o permanentes según lo determine el resto del liderazgo del proyecto.

### Pacto de colaboradores

El Pacto de colaboradores es un código de conducta que puedes usar y adaptar para tus proyectos Open Source. Para obtener más información, visita el [sitio web oficial](https://www.contributor-covenant.org/).

## Pautas de contribución

Un archivo CONTRIBUTING contiene pautas sobre cómo los colaboradores pueden ayudar con tu proyecto. Generalmente se encuentra en el directorio raíz del proyecto para que todos puedan acceder a él fácilmente.

Tu guía debe incluir las siguientes secciones:

- Instrucciones de configuración del proyecto
- Pautas para crear nuevos problemas como informes de errores y solicitudes de características
- Información sobre qué problemas están disponibles para la contribución
- Pautas para convenciones de commit para solicitudes de extracción
- Pautas para convenciones de código y estilo
- Pautas para crear solicitudes de extracción

Para una mirada en profundidad a la creación de un archivo CONTRIBUTING sólido, lee [este artículo](https://dev.to/opensauced/how-to-make-a-delicious-contributing-guide-4bp3) de OpenSauced.

## Plantillas de problema

Las plantillas de problema ayudan a guiar a los colaboradores a proporcionar la información específica y estructurada necesaria al abrir problemas del proyecto. Tener estas plantillas en tu repositorio garantizará que recibas la información deseada para priorizar el problema correctamente.

Puedes crear varias plantillas de problema, como informes de errores, solicitudes de características, actualizaciones de documentación, etc. Dentro de estas plantillas, puedes tener campos obligatorios como los pasos para reproducir el error o una sección de detalles para una solicitud de característica. También puedes adjuntar etiquetas específicas como `feature`, `needs triage`, o `bug` para informar los tipos de plantillas de problema.

### Creación de plantillas de problema

Hay dos formas de crear plantillas de problema en GitHub.

#### 1. Usando el generador de plantillas de GitHub

Para crear plantillas de problema usando el generador de plantillas de GitHub, deberás:

- Ir a la configuración de tu proyecto,
- Navegar a la sección "Features",
- Haz clic en "Set up templates" debajo de "Issues".

Puedes seguir la [guía detallada](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-templates) en la documentación de GitHub para crear una.

![GIF de plantilla de problema](../../../_assets/gifs/issues-template.gif)

#### 2. Usando archivos YAML

También puedes crear plantillas de problema personalizadas usando la sintaxis de YAML:

- Crea una carpeta llamada `.github` en el directorio raíz.
- Agrega una carpeta llamada `ISSUE_TEMPLATE` dentro de la carpeta `.github`.

  !> El nombre de esta carpeta debe estar en mayúsculas, de lo contrario no funcionará en GitHub.

- Crea un archivo YAML como un archivo `bug.yml` o `feature.yml` dentro de la carpeta `ISSUE_TEMPLATE`.

Aquí está la [plantilla de informe de error](https://raw.githubusercontent.com/open-sauced/.github/main/.github/ISSUE_TEMPLATE/bug_report.yml) que usamos en OpenSauced. Para obtener más información sobre cómo configurar plantillas de problema, visita la [documentación oficial](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository) en GitHub.

## Plantillas de solicitud de extracción

Al igual que las plantillas de problema, las plantillas de solicitud de extracción te permiten guiar a tus colaboradores a proporcionar información específica y estructurada al abrir solicitudes de extracción en tu proyecto. Esta plantilla estará en un archivo llamado `PULL_REQUEST_TEMPLATE.md`, que generalmente se encuentra en el directorio raíz o en el directorio `.github`.

Aquí hay algunas cosas a considerar dentro de tu plantilla de solicitud de extracción:

- Sección para que los colaboradores describan los detalles de los cambios que se realizaron y por qué
- Sección para el tipo de cambio realizado (por ejemplo, corrección de errores, característica, actualización de estilo, etc.)
- Sección para vincular los tickets de problemas correspondientes a la solicitud de extracción (por ejemplo, closes #123 o fixes #456)
- Sección para colocar capturas de pantalla y grabaciones de pantalla, si corresponde

Aquí tienes un ejemplo de una [plantilla de solicitud de extracción](https://raw.githubusercontent.com/open-sauced/.github/main/.github/PULL_REQUEST_TEMPLATE.md) utilizada por OpenSauced. Lee la [documentación de GitHub](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository) para obtener más información sobre cómo crear plantillas de solicitud de extracción.

![Ejemplo de plantilla de PR](../../../_assets/images/pr-template.png)

## Proyectos en GitHub

Mantener un seguimiento de tus problemas se vuelve más desafiante a medida que tu proyecto avanza. Una gran herramienta que puede ayudarte a organizar y rastrear tus problemas es [Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) en GitHub. Con Projects, puedes administrar de manera eficiente las funciones, las hojas de ruta o los lanzamientos de tu proyecto a medida que se construyen y se integran con los problemas y las solicitudes de extracción que agregas.

Puedes elegir una plantilla para tu proyecto. Una de las plantillas es la plantilla "Kanban". Aquí, puedes crear notas y colocar los problemas y solicitudes de extracción existentes en las columnas "Backlog", "Ready", "In progress", "In review" y "Done". Esto facilitará que tú y tu equipo rastreen el progreso de tu proyecto.

Para crear un nuevo proyecto:

1. Navega a tu perfil de GitHub y haz clic en la pestaña "Projects".
2. Haz clic en el botón verde "New project".
3. Elige una plantilla.
4. Nombra tu proyecto y haz clic en el botón "Create project" en la parte inferior.

?> Los proyectos son privados de forma predeterminada. Puedes hacerlos privados para los mantenedores principales o públicamente visibles para todos.

Lee la [documentación de GitHub](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project) para obtener más información sobre cómo agregar elementos a tu proyecto.

![GIF de tableros de proyectos de GitHub](../../../_assets/gifs/create-github-project.gif)

El [próximo capítulo](problemas-y-solicitudes-de-extraccion.md) analizará el manejo de problemas y solicitudes de extracción abiertas.
