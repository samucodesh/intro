# Contribuyendo a OpenSauced

Las contribuciones son siempre bienvenidas, sin importar lo grandes o pequeñas que sean. Antes de contribuir, lee el [Código de Conducta](https://opensauced.pizza/docs/contributing/code-of-conduct/) y sigue las instrucciones de esta guía.

## Estilo de Comunicación Recomendado

1. Siempre incluye capturas de pantalla para los cambios visuales.
2. Siempre incluye una descripción detallada en la solicitud de extracción. No dejes nada ambiguo para el/los revisor/es.
3. Siempre revisa tu código primero. Asegúrate de ejecutar el proyecto localmente y probarlo antes de solicitar una revisión.
4. Siempre comunícate en el repositorio de GitHub. Ya sea en el Issue o en la solicitud de extracción, mantener las líneas de comunicación abiertas y visibles para todo el equipo ayuda a todos a tu alrededor.

## Issues

- Cuando contribuyes al proyecto por primera vez, considera verificar las etiquetas [bug](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22), [good first issue](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) o [beginners only](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22beginners+only%22).

- Si deseas trabajar en un Issue abierto, comenta con `.take`, y te será asignado.  Si un Issue no está asignado, se asume que está disponible para cualquiera. Por lo tanto, asígnate a un Issue **antes** de comenzar a trabajar para evitar conflictos.

  > **NOTA**: Por favor, solo asígnate a un Issue con la etiqueta "beginners only" o "good first issue" **una vez**.  Los mantenedores pueden eliminarte de los asignados y no aceptar tu solicitud de extracción si decides continuar.

- ¿Has detectado un error en alguno de nuestros cursos? ¿O tienes una idea para mejorar nuestros cursos y quieres agregar una sección o un capítulo a un curso?

  Puedes crear un Issue y completar nuestro formulario de Issues para abordarlo. Pero nuestros mantenedores necesitan clasificar el Issue antes de que puedas trabajar en él. Si deseas trabajar en el Issue que has presentado, por favor informa y etiqueta al equipo `@open-sauced/docs` en el comentario.

Siempre puedes pedir ayuda en nuestra [Comunidad](https://github.com/open-sauced/intro/discussions) si te atascas mientras trabajas en tus cambios o necesitas aclaraciones.

## Solicitudes de Extracción (PRs)

Damos la bienvenida activamente a tus solicitudes de extracción. Sin embargo, antes de trabajar en los cambios, debes asegurarte de que **estás asignado** a un Issue existente y **vincular tu trabajo al Issue en tu plantilla de solicitud de extracción**.

### Antes de Enviar una Plantilla de Solicitud de Extracción

1. Asegúrate de que tus cambios se realicen en una nueva rama.

2. Ejecuta y verifica tus cambios localmente. Asegúrate de que todo funcione como debería.

### Enviando una Plantilla de Solicitud de Extracción

1. Asegúrate de abordar un Issue en una sola solicitud de extracción.  Si trabajas en varios Issues, trabaja en ellos por separado y crea una solicitud de extracción para abordar cada Issue.

2. Completar la plantilla de la solicitud de extracción. Asegúrate de **completar todas las secciones** y que tengas:

   - **Un título válido**. El título de la solicitud de extracción debe comenzar con `feat:`, `fix:`, o cualquier cosa relacionada con tus cambios.
   - **Un Issue relacionado**. [Vincula el número del Issue](https://docs.github.com/es/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) en el que has trabajado y añade una palabra clave de "Closes", "Fixes" o "Resolves" delante de él. Por ejemplo: Closes #123, Fixes #234, etc.

3. NO elimines ninguna sección de la plantilla de solicitud de extracción.  Si una sección no es relevante para tus cambios, por favor explica o responde con "N/A".

### Después de Enviar una Plantilla de Solicitud de Extracción

1. Asegúrate de que todas las comprobaciones se hayan realizado correctamente.  Si ves que hay bots o comprobaciones de GitHub Actions que fallaron después de enviar tu plantilla de solicitud de extracción, necesitas leer cada una y entender por qué falló. Luego, debes solucionarlo hasta que todas ellas pasen.

2. NO envíes mensajes privados a los mantenedores ni los etiquetes en los comentarios para revisar tu solicitud de extracción.  Los mantenedores siempre son notificados cuando hay una solicitud de extracción entrante. Si no has recibido una revisión en una semana, por favor etiquétalos en los comentarios de la solicitud de extracción para pedir un tiempo estimado de revisión.

3. Mantén tu rama actualizada mientras esperas la revisión y resuelve cualquier conflicto de fusión en tu terminal.

4. Responde y atiende los comentarios del revisor.

### ⚠️ Una solicitud de extracción será marcada como inválida y podría ser cerrada si:

- el Issue no está asignado al contribuidor que abrió la solicitud de extracción.
- no hay ningún Issue vinculado a la solicitud de extracción.
- la plantilla de la solicitud de extracción está incompleta, o alguna sección de la plantilla se elimina.
- se realizan cambios directamente en la rama predeterminada (`main`).

## Primeros Pasos

### Configurar el Proyecto Localmente

1. [Crea una copia](https://docs.github.com/es/get-started/quickstart/fork-a-repo) del [repositorio intro](https://github.com/open-sauced/intro) en tu propia cuenta de GitHub.
2. [Clona](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository) el repositorio copiado a tu máquina local.

   ```bash
   git clone https://github.com/TU-NOMBRE-DE-USUARIO/intro.git
   ```

3. Navega a y abre el proyecto en tu editor de código.

   ```bash
   cd intro
   ```

4. Crea una nueva rama para trabajar en tus cambios. NO trabajes directamente en la rama `main`.

   ```bash
   git checkout -b NOMBRE-DE-TU-RAMA
   ```

   Reemplaza "NOMBRE-DE-TU-RAMA" con un nombre descriptivo para tu rama, por ejemplo, `feat/add-submit-button`.

5. Instala las dependencias y ejecuta el proyecto.

### Desarrollo Local

> [!NOTE]
> Este proyecto está construido con [Docusaurus](https://docusaurus.io/).

Ejecutar el proyecto localmente es esencial para ver tus cambios en tiempo real y probarlos a fondo cuando estés contribuyendo.

1. **Instala las dependencias y ejecuta el proyecto localmente**.

   ```bash
   npm ci
   npm start
   ```

   Una vez que el servidor de desarrollo local esté listo, abrirá automáticamente el proyecto en `http://localhost:3000/learn` en tu navegador.

2. **Realiza y prueba cambios**.

   Con el servidor local en funcionamiento, puedes realizar cambios en los archivos y ver los resultados inmediatamente en tu navegador. Prueba tus cambios a fondo.

3. **Detén el servidor**.

   Después de completar y probar los cambios, puedes detener el servidor local pulsando `Ctrl + C` en la terminal.

## Trabajando con el Contenido

El contenido de nuestros cursos está escrito en [Markdown](https://www.markdownguide.org/), un lenguaje de marcado ligero y fácil de usar que te permite dar formato al texto de forma legible y atractiva visualmente.

Por favor, lee la sección "[Usando Markdown para este Proyecto](#usando-markdown-para-este-proyecto)" para obtener detalles sobre cómo utilizarlo en este proyecto.

### Añadiendo Definiciones al Glosario

Si añades definiciones al capítulo "Glosario" en el curso [Introducción a Open Source](/docs/intro-to-oss/translations/es/glosario.md) o [Conviértete en un Mantenedor](/docs/becoming-a-maintainer/translations/es/glosario.md), asegúrate de que las definiciones se añaden **alfabéticamente**.

### Añadiendo una Nueva Sección a un Capítulo

Si tu contenido puede encajar en la categoría de uno de los capítulos del curso, considera añadirlo como una nueva sección al capítulo. Crea un título de `nivel 2` y escribe tu contenido.

Puedes añadir un nuevo capítulo si es más adecuado para una sección independiente.

### Añadiendo un Nuevo Capítulo y Agregándolo al Panel de Navegación

En esta sección, te guiaremos a través de la adición de un nuevo capítulo a cualquiera de nuestros cursos y su inclusión en el panel de navegación.

#### Añadiendo un Nuevo Capítulo

Sigue estos pasos para añadir un nuevo capítulo a nuestro curso:

1. **Crea un nuevo archivo Markdown**.

   Crea un nuevo archivo Markdown (`.md`) en el directorio del curso y nombra el archivo para que refleje el contenido del capítulo, por ejemplo, `how-to-contribute-to-open-source.md` para un capítulo sobre cómo contribuir al Open Source.

   > **NOTA**: Asegúrate de seguir las convenciones de nomenclatura. Observa que los nombres de archivos no están en mayúscula y hay guiones en lugar de espacios entre las palabras.

2. **Añade información de encabezado**.

   Al principio del archivo, añade la información de encabezado que está encerrada entre tres guiones `---` con las siguientes variables:

   - `id`: El ID se utiliza para referirse a un documento cuando se escriben manualmente los paneles de navegación. Puedes usar el nombre del archivo como ID.
   - `title`: El título del capítulo (`h1`).
   - `sidebar_label`: El título en el panel de navegación.
   - `keywords`: Palabras clave para los temas del capítulo.

   Aquí tienes un ejemplo:

   ```yml
    ---
    id: what-is-open-source
    title: "What is Open Source?"
    sidebar_label: "What is Open Source"
    keywords:
    [
        "what is open source",
        "open source definition",
        "open source licenses explained",
        "open source history",
        "open source evolution",
        "Open Source",
        "Open Source Community",
    ]
    ---
   ```

3. **Escribe el contenido**.

   Abre el archivo Markdown recién creado en un editor de texto y escribe el contenido de tu capítulo usando la sintaxis Markdown. Puedes incluir encabezados, texto, imágenes, enlaces, listas y otros elementos para presentar tu información de forma efectiva.

   > **NOTA**: Debe haber **solo un** encabezado `nivel 1` en cada archivo.

4. **Prueba tus cambios**.

   Antes de finalizar tu nuevo capítulo, debes probar tus cambios localmente. Puedes construir o generar el proyecto para asegurarte de que tu nuevo capítulo aparezca como se espera dentro de la estructura del curso.

5. **Actualiza el panel de navegación**.

   Después de añadir un nuevo capítulo, también debes añadirlo al panel de navegación para que los usuarios puedan descubrir el contenido.

#### Añadiendo Nuevos Capítulos al Panel de Navegación

El panel de navegación sirve como un menú de navegación. Por lo tanto, cuando añades un nuevo capítulo a un curso, es importante actualizar el panel de navegación incluyendo el enlace al capítulo. De esta manera, los usuarios pueden navegar al contenido sin problemas.

Sigue estos pasos para añadir nuevos capítulos al panel de navegación:

1. Abre el archivo `sidebars.js` localizado en la raíz.
2. **Añade el enlace del nuevo capítulo**.

   - Inserta tu nuevo capítulo en el array `items` del curso relacionado. Si no estás seguro de dónde colocarlo, puedes comentar en el Issue y etiquetar a los mantenedores `@open-sauced/docs` para pedir ayuda.
   - Usa el siguiente formato para añadir el enlace al nuevo capítulo:

     ```text
     'NOMBRE-DE-LA-CARPETA/ID',
     ```

     Reemplaza `NOMBRE-DE-LA-CARPETA` con el nombre de la carpeta del curso e `ID` con el `id` en la información de encabezado del archivo. Por ejemplo:

     ```javascript
     'intro-to-oss/what-is-open-source',
     ```

3. **Crea una solicitud de extracción**.

   Una vez que hayas creado el nuevo capítulo y verificado que cumple con los requisitos de nuestro proyecto, puedes enviar tu contribución creando una solicitud de extracción.

4. **Revisión y comentarios**.

   Espera a que los mantenedores revisen tu solicitud de extracción y prepárate para recibir comentarios de ellos o de otros colaboradores. Realiza los cambios necesarios para perfeccionar tu contribución.

Una vez aceptada tu contribución, tu nuevo capítulo se convertirá en parte de nuestro curso, mejorando su contenido para los usuarios y los contribuyentes.

## Usando Markdown para este Proyecto

Al contribuir a este proyecto, debes seguir nuestra convención de Markdown a continuación:

### 1. Encabezados

Usa el símbolo numeral (`#`) para crear encabezados (títulos y subtítulos). Hay seis niveles de encabezados de sección, y el número de símbolos indica el nivel del encabezado.

```markdown
# Encabezado 1

## Encabezado 2
```

### 2. Formato de Texto

- Haz que el texto sea negrita encerrándolo entre dos asteriscos (`**`).
- Haz que el texto sea itálico encerrándolo entre un solo guión bajo (`_`).
- Crea código en línea envolviendo el texto con comillas invertidas (`` ` ``).

```markdown
**Esto es un texto en negrita.**

_Esto es un texto en cursiva._

Este es un `código en línea`.
```

### 3. Listas

- Crea listas ordenadas usando números seguidos de un punto (`1.`, `2.`, etc.).
- Crea listas desordenadas usando guiones (`-`).

```markdown
1.  Elemento 1
2.  Elemento 2

- Elemento desordenado 1
- Elemento desordenado 2
```

### 4. Enlaces

Crea enlaces usando corchetes (`[]`) para el texto del enlace y paréntesis (`()`) para la URL.

```markdown
[Ruta de Aprendizaje de Open Source con OpenSauced](https://opensauced.pizza/learn/)
```

### 5. Imágenes

Incluye imágenes usando un signo de exclamación (`!`), seguido de corchetes (`[]`) para el texto alternativo, y paréntesis (`()`) para la URL de la imagen.

```markdown
![Crear un nuevo repositorio en GitHub](../_assets/images/new-repo.png)
```

### 6. Citas

Crea citas usando el símbolo mayor que (`>`).

```markdown
> Esta es una cita.
```

### 7. Bloques de Código

Crea bloques de código usando comillas invertidas triples (` ``` `) para bloques de código delimitados y especifica un lenguaje al lado de las comillas invertidas antes del bloque de código delimitado para resaltar la sintaxis.

````
```bash
git pull
```
````

### Consejos de Markdown

- Previsualiza tu Markdown localmente para asegurarte de que el formato sea correcto antes de enviar tu contribución.
- Mantén tu contenido Markdown organizado y utiliza encabezados para estructurar tus secciones.
- Solo puede haber un encabezado `nivel 1` en cada capítulo.
- Usa bloques de código para resaltar fragmentos de código o ejemplos de configuración.
- Consulta el sitio web oficial de la [Guía de Markdown](https://www.markdownguide.org/basic-syntax/) para obtener más información sobre el uso de Markdown.

## Traducción de los Cursos

Traducir nuestros cursos ayuda a que sean más accesibles para un público más amplio. Si deseas traducir nuestra [Ruta de Aprendizaje de Open Source](https://opensauced.pizza/learn/#/), por favor lee nuestra página [🌐 Pautas de i18n](../../../../../contributing/i18n-guidelines.md).
