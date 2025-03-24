---
id: ponerse-practico
title: "Seamos prácticos: cómo comenzar su proyecto"
sidebar_label: "Seamos prácticos"
keywords: ["getting practical by creating a new open source project", "creating an open source project", "creating an open source project tutorial", "creating an open source project for beginners", "creating a repository", "creating a README", "adding an open source license", "creating contributing guidelines for an open source project", "adding an open source code of conduct", "creating open source issue forms", "creating an open source pull request template", "promoting open source projects", "recognizing open source contributors", "monitoring open source projects", "open source maintainers", "Open Source", "Open Source Community"]
---

Ahora que ha completado el curso y comprende lo que se necesita para ser un mantenedor exitoso, ¡seamos prácticos y comencemos su primer proyecto de Open Source como mantenedor!

## Requisitos previos

Necesitará tener lo siguiente:

- Una [Cuenta GitHub](https://github.com)

## Elegir tu proyecto

A veces, la parte más difícil es decidir en qué trabajarás. Aquí hay algunas ideas generales para comenzar:

- Identificar un problema o necesidad en la comunidad de Open Source.
- Piensa en un tema que te apasione y que pueda interesar a otros.
- Piensa en un problema que hayas tenido que resolver y del que otros puedan beneficiarse.

No pienses demasiado en ello ahora. Siempre puedes regresar y actualizar las cosas más tarde. Por ahora, si necesita un punto de partida, creemos un repositorio sobre sus recursos de Open Source favoritos.

## Creando su repositorio

Seguiremos los pasos para configurar su proyecto en GitHub. Aunque no es la única manera de comenzar con un proyecto, es la que usaremos en esta demostración.

- Vaya a [GitHub](https://github.com) e inicie sesión.
- Haga clic en el icono "+" en la esquina superior derecha y seleccione "New repository".
- Ingrese un nombre y una descripción del repositorio y elija si el repositorio debe ser público o privado.
- Inicialice el repositorio con un archivo README y agregue una licencia.
- Haga clic en el botón "Create repository".

![configurando un repositorio](../../../_assets/gifs/set-up-repo.gif)

Si está utilizando nuestra idea inicial, podría utilizar lo siguiente:

    - Name: favorite-open-source-resources
    - Description: A markdown file of resources I've found most helpful.

## Agregar documentación del repositorio

Ahora que tienes el repositorio, puedes editarlo directamente en GitHub o clonar el proyecto y trabajar en él localmente. Anteriormente aprendimos cómo crear archivos README detallados, guías de contribución y códigos de conducta en "[Cómo configurar tu proyecto de Open Source](como-configurar-tu-proyecto.md)". Si necesita un recordatorio, revise ese capítulo.

### Creando tu README

Su proyecto ya tiene un archivo README, pero es una buena idea actualizarlo con información sobre su proyecto. Aquí tienes una plantilla que puedes utilizar:

```markdown
# Nombre del proyecto

## Descripción general

Proporcione una breve descripción general de alto nivel de su proyecto. Incluya los objetivos y valores centrales del proyecto. Explique cómo contribuye a la comunidad de Open Source y cualquier problema específico que pretenda resolver.

## Tabla de contenido

- [Descripción general](#descripción-general)
- [Empezando](#empezando)
  - [Instalación](#instalación)
  - [Uso](#uso)
- [Contribuyendo al proyecto](#contribuyendo-al-proyecto)
- [Expresiones de gratitud](#expresiones-de-gratitud)
- [Licencia](#licencia)

## Empezando

### Instalación

Instrucciones sobre cómo instalar el proyecto. Incluya cualquier requisito previo o dependencia.

### Uso

Guía sobre cómo utilizar el proyecto, incluidos los pasos de configuración o ejemplos básicos.

## Contribuyendo al proyecto

Instrucciones generales sobre cómo enviar contribuciones al proyecto con un enlace a su archivo CONTRIBUTING.md. Además, incluya información sobre cómo interactuar con la comunidad y los mantenedores.

## Expresiones de gratitud

Muestre agradecimiento por las contribuciones de la comunidad, incluidos los desarrolladores, escritores y cualquier otro colaborador.

## Licencia

Indique la licencia bajo la cual se publica el proyecto y proporcione un enlace al texto completo de la licencia.
```

### Agregar una licencia

Debería haber inicializado su proyecto con una licencia, pero si no lo hizo, puede agregar una licencia a su proyecto creando un nuevo archivo llamado `LICENCIA` en la raíz de su repositorio. Puede utilizar [Elija una licencia](https://choosealicense.com/) un sitio web para ayudarle a seleccionar la licencia adecuada para su proyecto.

### Configuración de pautas de contribución

Es probable que su proyecto tenga pautas de contribución similares a las de otros proyectos. Puede seguir estos pasos para crear pautas y proporcionar una plantilla. Sin embargo, si necesita un ejemplo específico, siempre puede consultar las [Pautas de contribución de OpenSauced](https://docs.opensauced.pizza/contributing/introduction-to-contributing/). Siéntase libre de utilizar esas pautas y actualizarlas como mejor le parezca para su proyecto.

- [ ] Cree un nuevo archivo llamado `CONTRIBUTING.md` en la raíz de su repositorio.
- [ ] Describe el proceso para reportar Issues y solicitud de extracción.
- [ ] Incluya estándares de codificación, guías de estilo o cualquier requisito específico.
- [ ] Mencione cómo los contribuyentes pueden pedir ayuda o aclaración.

#### Plantilla de pautas de contribución

```markdown
# Contribuyendo a [Nombre del proyecto]

¡Bienvenido a [Nombre del proyecto]! Estamos encantados de que esté considerando contribuir a nuestro proyecto. Cada contribución, ya sea código, informes de errores, solicitudes de funciones, documentación o participación de la comunidad, juegan un papel importante en su éxito.

## Cómo contribuir

Valoramos todas las formas de contribuciones, no solo el código. Así es como puedes contribuir:

- **Contribuciones de código**: Consulte nuestros Issues etiquetados como `good first issue` o `help wanted`.
- **Documentación**: Mejoras en la documentación, tutoriales o guías.
- **Comunidad**: Participar en debates, ayudar a otros y compartir sus experiencias con el proyecto.

## Empezando

1. **Configuración**: Así es como puedes configurar [Nombre del proyecto] para el desarrollo...
2. **Haciendo cambios**: Una guía para realizar cambios y probarlos.
3. **Envío de contribuciones**: Pasos para enviar sus contribuciones mediante solicitud de extracción.

## Comunidad y comunicación

- **Código de conducta**: Contamos con un Código de conducta que se espera que todos los contribuyentes cumplan.
- **Dónde hacer preguntas**: Únase a nuestro Slack/Discord o publique preguntas en nuestros foros.

## Proceso de revisión

Después de enviar su contribución, esto es lo que sucede a continuación...

## Reconocimiento

Creemos en reconocer todas las contribuciones, no solo el código. Así es como lo hacemos...

## Recursos adicionales

- **FAQs**
- **Recursos de aprendizaje**

¡Gracias por contribuir a [Nombre del proyecto]!
```

### Establecer un código de conducta

Es esencial tener un código de conducta para garantizar que todos se sientan bienvenidos y seguros en su proyecto. A continuación se explica cómo establecer un código de conducta:

- [ ] Cree un nuevo archivo llamado `CONTRIBUTING.md` en la raíz de su repositorio.
- [ ] Copie y pegue el código de conducta que desea utilizar. Recomendamos utilizar el [Pacto del colaborador](https://www.contributor-covenant.org/).
- [ ] Agregue un enlace al código de conducta en sus archivos README y CONTRIBUTING.

:::note

Asegúrese de atribuir el código de conducta al autor original.

:::

### Uso de plantillas de Issues, plantillas de solicitud de extracción y etiquetas

Crear buenos Issues y usar etiquetas ayudará a crear un proyecto sólido. Antes de crear su primer Issue, comience creando plantillas de Issues para que el proceso de envío de un Issue sea claro para sus contribuyentes.

#### Crear plantillas de Issues

En esta sección, crearemos una plantilla de Issues para un informe de errores. También puede crear plantillas para otros tipos de Issues, como solicitudes de funciones, preguntas o solicitudes de documentación.

A continuación se detallan los pasos para crear la plantilla. Después de los pasos, compartiremos contigo lo que usamos en OpenSauced. No dudes en copiar y pegar esa información en su repositorio y actualizarla según sea necesario.

##### Informe de errores

- [ ] Cree una nueva carpeta llamada `.github` en la raíz de su repositorio.
- [ ] Dentro de esa carpeta, cree una nueva carpeta llamada `ISSUE_TEMPLATE`.
- [ ] En el directorio `.github/ISSUE_TEMPLATE`, cree un nuevo archivo llamado `bug_report.yml`.
- [ ] Agregue un nombre (🐛 Informe de error), una descripción (Crear un informe de error para ayudarnos a mejorar Open Sauced 🍕) a la plantilla y un título ("Bug: ").
- [ ] Si hay etiquetas específicas que desea que se generen automáticamente cuando se crea este Issue, agréguelas a la plantilla. (`etiquetas: [👀 needs triage, 🐛 bug]`)
- [ ] A continuación, agregará el cuerpo, que incluye el tipo y los atributos de cada sección. Generalmente contiene una lista de verificación de pasos para reproducir el error. Como parte de esa sección, usted debe:
  - [ ] Agregue una sección para el comportamiento esperado y el comportamiento real.
  - [ ] Agregue una lista de verificación de pasos para reproducir el error.
  - [ ] Agregue una sección para capturas de pantalla, si corresponde.
  - [ ] Agregue una sección para contexto adicional, si corresponde.
- [ ] Finalmente, agregue una sección para el código de conducta y los documentos contribuyentes.

Esto es lo que usamos en OpenSauced:

```yml
name: 🐛 Bug report
description: Create a bug report to help us improve Open Sauced 🍕
title: "Bug: "
labels: [👀 needs triage, 🐛 bug]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!
  - type: textarea
    attributes:
      label: Describe the bug
      description: A clear and concise description of what the bug is.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Steps to reproduce
      description: Describe how to reproduce the behavior.
      placeholder: |
        1. Go to '...'
        2. Click on '...'
        3. Scroll down to '...'
        4. See error
    validations:
      required: true
  - type: dropdown
    attributes:
      multiple: true
      label: Browsers
      description: Select the browsers where the issue can be reproduced (that you know of).
      options:
        - "Chrome"
        - "Firefox"
        - "Safari"
        - "Edge"
        - "Opera"
        - "Other (add additional context)"
  - type: input
    id: context
    attributes:
      label: Additional context (Is this in dev or production?)
      description: Add any other context about the problem or helpful links here.
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://docs.opensauced.pizza/contributing/code-of-conduct/)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
  - type: checkboxes
    id: contribution
    attributes:
      label: Contributing Docs
      description: If you plan on contributing code please read - [Contribution Guide](https://docs.opensauced.pizza/contributing/introduction-to-contributing/)
      options:
        - label: I agree to follow this project's Contribution Docs
          required: false
```

##### Solicitud de función

Ahora, sigamos el mismo proceso y creemos una plantilla de solicitud de función.

- [ ] En el directorio `.github/ISSUE_TEMPLATE`, cree un nuevo archivo llamado `feature_request.yml`.
- [ ] Agregue un nombre (🚀 Solicitud de función), descripción (Sugerir una idea para este proyecto 💡) y título ("Función: ") a la plantilla.
- [ ] Si hay etiquetas específicas que desea que se generen automáticamente cuando se crea este Issue, agréguelas a la plantilla. Nosotros usamos 👀 needs triage, 💡 feature.
- [ ] A continuación, agregará el cuerpo, que incluye el tipo y los atributos de cada sección. Generalmente contiene una lista de verificación de pasos para reproducir el error. Como parte de esa sección, usted debe:
  - [ ] Agregue una sección para el comportamiento esperado y el comportamiento real.
  - [ ] Agregue un menú desplegable para el tipo de solicitud de función.
  - [ ] Agregue una sección para la solución sugerida.
  - [ ] Agregue una sección para capturas de pantalla, si corresponde.
  - [ ] Agregue una sección para contexto adicional, si corresponde.
- [ ] Finalmente, agregue una sección para el código de conducta y los documentos contribuyentes.

Esto es lo que usamos en OpenSauced:

```yml
name: 🚀 Feature request
description: Suggest an idea for this project 💡
title: "Feature: "
labels: [👀 needs triage, 💡 feature]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this feature request!
  - type: dropdown
    attributes:
      multiple: false
      label: Type of feature
      description: Select the type of feature request, the lowercase should also be the PR prefix.
      options:
        - "🍕 Feature"
        - "🐛 Fix"
        - "📝 Documentation"
        - "🎨 Style"
        - "🧑‍💻 Refactor"
        - "🔥 Performance"
        - "✅ Test"
        - "🤖 Build"
        - "🔁 CI"
        - "📦 Chore"
        - "⏩ Revert"
    validations:
      required: true
  - type: textarea
    attributes:
      label: Current behavior
      description: Is your feature request related to a problem? Please describe.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Suggested solution
      description: Describe the solution you'd like.
  - type: input
    id: context
    attributes:
      label: Additional context
      description: Add any other context about the problem or helpful links here.
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://docs.opensauced.pizza/contributing/code-of-conduct/)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
  - type: checkboxes
    id: contribution
    attributes:
      label: Contributing Docs
      description: If you plan on contributing code please read - [Contribution Guide](https://docs.opensauced.pizza/contributing/introduction-to-contributing/)
      options:
        - label: I agree to follow this project's Contribution Docs
          required: false
```

#### Escribiendo su primer Issue

- En su repositorio, haga clic en la pestaña "Issues" y luego en el botón "New issue".

  ![crear issue](../../../_assets/images/create-issue.png)

- Seleccione el tipo de Issue que desea crear. En este ejemplo, seleccionaremos Feature Request.
- Escribe tu Issue. Si sigue el ejemplo, escribiremos una solicitud de función para un nuevo recurso:

  ```markdown
  **Tipo de función:** 🍕 Función
  **Comportamiento actual:** Me gustaría ver un nuevo recurso para #100DaysOfOSS.
  **Solución sugerida:** Agregue un nuevo recurso que presente a las personas el Open Source a través de[#100DaysOfOSS](https://docs.opensauced.pizza/community/100-days-of-oss/).
  **Código de conducta:** Acepto seguir el Código de conducta de este proyecto.
  **Contributing Docs:** Acepto seguir los Documentos de contribución de este proyecto.
  ```

- Una vez que haya completado de escribir tu emisión, haga clic en "Submit new issue."

  ![feature-form.png](../../../_assets/images/feature-form.png)

### Promocionando su proyecto

Ahora que tienes tu proyecto configurado,¡es hora de promocionarlo! Aquí hay algunas ideas para comenzar:

- Comparta su proyecto en las redes sociales, foros y comunidades relevantes.
- Escribe publicaciones de blog o tutoriales sobre tu proyecto.
- Presente su proyecto en reuniones, conferencias o seminarios web en línea.
- Cree un Highlight en OpenSauced para mostrar su proyecto.
- Comparta su proyecto con amigos, familiares y colegas.
- Solicite comentarios de su red.

### Reconociendo las contribuciones

Para mantener un proyecto saludable donde los contribuyentes se sientan valorados, es importante reconocer las contribuciones. A continuación se muestran algunas formas de hacerlo:

- Utilice herramientas como [Todos los colaboradores](https://allcontributors.org) bot para reconocer diferentes tipos de contribuciones.
- Resalte los contribuyentes en su archivo README o en el sitio web de su proyecto.
- Cree un Highlight en OpenSauced para mostrar a los contribuyentes.
- Dar gracias a los contribuyentes públicamente por su trabajo

### Seguimiento de su proyecto

Una vez que su proyecto esté en funcionamiento, es importante monitorear su salud y actividad. A continuación se muestran algunas formas de hacerlo:

- Crear un OpenSauced [Workspace](https://docs.opensauced.pizza/features/workspaces/) para realizar un seguimiento de la actividad de su proyecto.
- Configure notificaciones para nuevos Issues y solicitudes de extracción.
- Solicite comentarios de los usuarios y contribuyentes mediante debates o encuestas.
- Reflexione sobre la dirección del proyecto y haga los ajustes necesarios.

Puede obtener más información sobre cómo crear un proyecto exitoso con OpenSauced con nuestra [Guía de mantenimiento de OpenSauced](https://docs.opensauced.pizza/maintainers/maintainers-guide-to-open-sauced/).

---

¡Felicitaciones por crear su primer proyecto! Ahora puedes compartirlo en nuestra página [Libro de visitas de mantenedores](libro-de-visitas-de-mantenedores.md).

:::tip

Recuerde, estos pasos son pautas; La clave para un proyecto de Open Source saludable es fomentar un entorno abierto, inclusivo y colaborativo.

:::