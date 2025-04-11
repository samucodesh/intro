# Contribuyendo a las traducciones al español de la introducción al Open Source Software y convertirse en mantenedor 

¡Gracias por tu interés en contribuir a las traducciones al español de los cursos introducción al Open Source Software y convertirse en mantenedor con OpenSauced!

Aquí hay algunos consejos para contribuir:

- Toma los [dos cursos en inglés](https://opensauced.pizza/learn)
- Sigue el [código de conducta](contributing-es.md#Código-de-conducta)
- No te autoasignes trabajo, primero pregunta.

¡Gracias por tu ayuda!

## Código de conducta

Usaremos el mismo [código de conducta de OpenSauced](https://github.com/open-sauced/.github/blob/main/CODE_OF_CONDUCT.md)

### Comunicación con otros colaboradores

Se va a usar el inglés como lenguaje para la comunicación (porque es más fácil de traducir que el español). Se debe evitar al máximo enviar mensajes privados

Discord y [GitHub Discussions del proyecto](https://github.com/samucodesh/intro/discussions)

## Guía de estilos

> [!WARNING]
> No se deben traducir los comentarios en Markdown, ni la palabra Open Source

### Contexto adicional

En estos enlaces encontrarás algunas decisiones de diseño  del proyecto

- [GitHub Discussion](https://github.com/open-sauced/intro/discussions/190)
- [Abi PR](https://github.com/a-ridley/intro/pull/1)

## Issues

Es necesario crear un Issue antes de hacer fork y comenzar a hacer cambios. 

### Plantilla de Issues para modificaciones o adiciones

```markdown
# Titulo
## Descripción:
Descripción detallada sobre qué quieres modificar o añadir y el porqué es un cambio necesario (solo en modificaciones)
```

### Plantilla de Issues para bugs

```markdown
# Titulo
## Descripción:
Descripción detallada del bug
Archivo y/o directorio afectado
### Pasos para reproducir
### Comportamiento actual
### Comportamiento esperado 
```

## Configurando el proyecto

Te recomiendo usar VS Code para las traducciones. Idealmente usar la versión Desktop, pero también puedes usar proyectos basados en la nube como GitHub Codespaces, Project IDX o usar el editor web de GitHub.

1. Haz un fork del [repositorio remoto](https://github.com/samucodesh/intro)

2. Configura git remote con tu link ssh para tu fork

```bash
git remote add origin SSH-LINK
```

cambia `SSH-LINK` por el link que comienza con `git@github...`

3. Trae el fork a tu máquina con el comando `git pull origin maintainers`

4. Luego crea una nueva rama y comienza a hacer tus cambios. Más tarde te enseñaré [como hacer PR en este proyecto](contributing-es.md#cómo-configurar-correctamente-mi-pr)

> [!WARNING]
> No se deben traducir los comentarios, ni la palabra Open Source

### Manejando ramas

⚠️ Están estrictamente prohibidos los push a cualquiera de las ramas. Para todos los cambios debes trabajar en una rama diferente y hacer un PR.

> [!NOTE]
>  Los cambios deben limitarse a un único archivo por commit.

Crea una nueva rama tomando como base `maintainers`

Corre el proyecto en local moviendote a la raíz del repositorio y usando estos dos comandos

```bash
npm ci
npm start
```

Detén el servidor seleccionando la terminal y luego usando la combinación de teclas <kbd>CONTROL</kbd> + <kbd>C</kbd>.

### Títulos y descripciones para Commits

Cada cambio debe tener un título descriptivo y una buena descripción de los cambios.

#### Ejemplos de buenos títulos de commits:

- fix: Correct typo in Spanish translation of "database" in User Guide
- feat: Add Spanish translation for new "Troubleshooting" section
- refactor: Reorganize Spanish translation of FAQ for better flow
- update: Align Spanish translation with latest English source content

### Ejemplos de buenas descripciones:

- Addresses a typographical error in the Spanish translation of a specific document.
- Introduces a new Spanish translation for a recently added section on troubleshooting.
- Restructures the Spanish translation of the FAQ section for improved logical flow and user experience.
- Updates the Spanish translation to reflect the most recent changes made to the original English source material.

## Comandos prohibidos

- `git push --force` (or `git push -f`)
- `git push origin main`
- `git squash`
- `git rm -r .`

Ahora debes hacer `push` a tu fork con el comando

```bash
git push origin NOMBRE-DE-TU-RAMA
```

Reemplaza NOMBRE-DE-TU-RAMA con el nombre de tu rama.

## Pull Request

Ahora debes hacer PR a [mi fork](https://github.com/samucodesh/intro)
### Plantilla de PR

```markdown
# Título 
Resumen del PR 
## Referencia al GitHub Discussion y/o GitHub Issue
## Opcional (screenshots del frontend funcionando)
```

> [!NOTE]
>Una vez que hayas enviado tu PR, la revisaremos y la fusionaremos si todo se ve bien.

### Cómo configurar correctamente mi PR

Del lado izquierdo vas a elegir el repositorio base y la rama a la que le vas a hacer el PR
En este caso debes elegir 
`samucodesh/intro` y `maintainers`

Del lado derecho vas a elegir el repositorio `HEAD` (tu fork) y la rama que quieres comparar en el lado izquierdo, en este caso debes elegir `tu-nombre-de-usuario/nombre-de-tu-repositorio` y `tu-rama-de-trabajo`

## Estado del proyecto

Actualmente se está trabajando en las traducciones de dos cursos: Introducción al Open Source y Conviértete en mantenedor. Puedes consultar el estado actual en el [GitHub Projects del repositorio](https://github.com/users/samucodesh/projects/8)

## FAQ

### ¿Puedo hacer un PR directamente?

No. Primero debes abrir un GitHub Issue describiendo los cambios que vas a hacer y si estoy de acuerdo te lo voy a asignar. Después debes hacer los cambios en una nueva rama y una vez que verificaste que todo está correcto puedes hacer el PR.

### ¿Puedo pedirte ayuda sobre el proyecto y el uso de Git, GitHub y Markdown?

Sí, puedes pedir ayuda en cualquiera de estos temas.

### ¿Por qué hay comandos prohibidos?

Porque es una muy mala práctica hacer push forzados o a la rama principal. También es una muy mala práctica modificar la historia del repositorio.

> [!CAUTION]
> Ejecutar cualquiera de esos comandos puede romper el proyecto