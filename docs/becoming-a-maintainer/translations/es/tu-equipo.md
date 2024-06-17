# Construyendo tu equipo de ensueño de Open Source

Administrar un proyecto de Open Source requiere una comunicación clara, empatía y comprensión técnica. Es posible que descubras que, inicialmente, puedes hacer todo o la mayor parte del trabajo por tu cuenta. ¡Eso está genial! Si quieres que tu proyecto crezca y prospere, cultivar un equipo diverso, motivado y efectivo a tu alrededor puede ayudarte a hacerlo. Este capítulo analiza cómo colaborar con tu equipo de manera efectiva y ofrece orientación sobre cómo identificar, incorporar y empoderar a tu escuadrón de Open Source.

## Tipos de equipos

Crear equipos en GitHub te permite otorgar más permisos a un grupo de personas según su estado de equipo. Aquí hay algunos tipos de equipos comunes y por qué un mantenedor podría encontrarlos beneficiosos:

### Equipo de priorización

Los equipos de priorización ayudan a manejar los problemas y las solicitudes de extracción entrantes de manera eficiente. Clasifican, priorizan y asignan problemas a los mantenedores o colaboradores apropiados, reduciendo la carga de trabajo del mantenedor y asegurando una atención oportuna a los asuntos importantes.

**Beneficios**: Respuesta más rápida a los usuarios, mejor seguimiento de problemas y mejor asignación de recursos.

### Equipo de mantenimiento

El equipo de mantenimiento comparte la responsabilidad de las revisiones de código, las correcciones de errores y el desarrollo de funciones. Un equipo de mantenedores con habilidades especializadas puede manejar proyectos más grandes, brindar una experiencia más amplia y garantizar una mejor calidad y coherencia del código.

**Beneficios**: Carga de trabajo individual reducida, ciclos de desarrollo más rápidos y perspectivas más diversas sobre el código y las decisiones.

### Equipo de documentación (Docs)

El equipo de docs crea y mantiene documentación de alta calidad para usuarios y colaboradores. Un equipo de documentación dedicado asegura que la información clara y actualizada esté disponible de forma fácil, reduciendo las solicitudes de soporte y la confusión.

**Beneficios**: Mejora de la experiencia del usuario, incorporación más fácil para los nuevos colaboradores y menos tiempo dedicado a responder preguntas básicas.

### Otras variaciones del equipo

- Equipo de seguridad
- Equipo de diseño
- Equipo comunitario
- Equipo de marketing
- Core Team\*

?> A veces, el equipo de mantenimiento y el Core Team son los mismos. En general, un Core Team a menudo se enfoca en responsabilidades más amplias como la estrategia, la gobernanza y la gestión de la comunidad, brindando información sobre la dirección del proyecto. El equipo de mantenimiento es más probable que se centre en la gestión diaria del proyecto y los aspectos técnicos.

## Armado de tu equipo A: Agregando nuevos miembros

Ahora que comprende un poco sobre los equipos, veamos cómo identificar nuevos miembros para su equipo.

### Reconocer la necesidad

Al igual que un equipo de superhéroes se expande para enfrentar amenazas crecientes, su proyecto podría llegar a un punto en el que se necesiten miembros del equipo adicionales. Esto podría ser cuando la carga de trabajo comienza a abrumarlo (mantenedor solitario) o a su equipo existente, o cuando está asumiendo desafíos complejos que requieren experiencia especializada. Es importante identificar estos puntos desafiantes para garantizar el impulso continuo de su proyecto.

### Explorando en busca de superpoderes

Su búsqueda de nuevos compañeros de equipo debe ser deliberada y reflexiva. Busque colaboradores que hayan demostrado constantemente compromiso y habilidades a través de la participación activa en su proyecto. Sus contribuciones a los problemas, las solicitudes de extracción y las discusiones comunitarias pueden ayudarlo a determinar si comprenden el proyecto y su visión. Otras cosas a considerar son tener entusiasmo, un espíritu colaborativo y alineación con los objetivos de su proyecto. Los proyectos Open Source prosperan con la pasión y el propósito compartido.

### Invitando a tu equipo

Una vez que haya identificado posibles miembros del equipo, extienda una invitación formal. Este reconocimiento público de sus contribuciones no solo muestra su apreciación, sino que también sirve como inspiración para otros miembros de la comunidad. Plataformas como GitHub ofrecen mecanismos optimizados para agregar miembros del equipo, lo que lo convierte en un proceso fluido para dar la bienvenida oficialmente a sus nuevos miembros del equipo.

## Otorgando permisos de equipo

Cada equipo debe tener un conjunto específico de permisos que les permita hacer lo que necesitan para tener éxito. Aquí hay algunos permisos comunes que los equipos pueden necesitar:

### Permisos específicos del repositorio

- **Lectura**: Permite a los miembros ver el código, los problemas y las solicitudes de extracción. <br/>_Adecuado para partes interesadas, colaboradores externos o aquellos que necesitan visibilidad general._
- **Priorización**: Otorgue permiso para administrar problemas y solicitudes de extracción (asignar, etiquetar, comentar, cerrar) pero no modificar directamente el código. <br/>_Ideal para equipos de priorización y administradores de la comunidad._
- **Escritura**: Permite a los miembros enviar código, crear ramas y abrir solicitudes de extracción. <br/>_Necesario para desarrolladores y mantenedores que contribuyen activamente a la base de código._
- **Mantenimiento**: Otorgue permisos de gestión más amplios, incluida la eliminación de ramas, la edición de archivos protegidos y la gestión de lanzamientos. <br/> _Adecuado para los mantenedores principales responsables de la salud del proyecto._
- **Administrador**: Proporcione control total sobre el repositorio, incluidas acciones sensibles como eliminar o cambiar su visibilidad. <br/>_Reservado para personas de confianza o aquellos con necesidades administrativas específicas._<br/>

Para acceder a los permisos de su equipo, navegue a la página de su equipo en GitHub y haga clic en la pestaña "Configuración". Desde allí, puede actualizar los permisos de su equipo en la sección "Privilegios de los miembros".

Así es como se verá en GitHub:

![permisos del equipo](../../../_assets/images/org-permissions.png)

### Permisos adicionales a considerar

- **Permisos del proyecto (si se utilizan proyectos de GitHub)**: Otorgue acceso para administrar proyectos, tareas e hitos dentro de un repositorio.
- **Permisos de toda la organización**: Para equipos de toda la organización, considere otorgar permisos para administrar miembros, facturación, configuración de seguridad y otras funciones a nivel de organización.

### Mejores prácticas para los permisos del equipo

- **Comience con permisos restrictivos**: Otorgue los permisos mínimos necesarios para que un equipo realice sus tareas.
- **Revise los permisos regularmente**: A medida que los proyectos evolucionan y las necesidades del equipo cambian, revise los permisos para asegurarse de que sigan siendo apropiados.
- **Utilice propietarios de código**: Asigne personas o equipos específicos como propietarios de código para diferentes partes de la base de código para garantizar una supervisión y revisión adecuadas utilizando el archivo especial [CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

### Ejemplos específicos

- **Equipo de priorización**: Otorgue el permiso "Priorización" al repositorio principal del equipo de priorización.
- **Equipo de mantenimiento**: Otorgue permisos de "Escritura" o "Mantenimiento" a los repositorios a los que contribuyen activamente.
- **Equipo de documentación**: Otorgue permiso de "Escritura" al repositorio de documentación, potencialmente acceso de "Lectura" a otros repositorios relevantes.

Puede ver algunas de las opciones aquí:

![GIF de permisos de equipo](../../../_assets/gifs/org-permissions.gif)

## Expandiendo los horizontes: Alistando mantenedores adicionales

### Especialización: La clave para escalar

La necesidad de atención especializada en áreas específicas puede surgir a medida que su proyecto crece en complejidad. La documentación podría requerir a alguien que pueda escribir para audiencias de todos los niveles de experiencia, mientras que la participación de la comunidad podría necesitar una presencia carismática. Identificar estas necesidades y reclutar colaboradores con experiencia relevante le permite delegar la propiedad y asegurarse de que todos los aspectos de su proyecto reciban la atención dedicada que se merecen.

### Reclutar mantenedores y miembros del equipo

Ciertamente es posible que no haya ningún colaborador con las habilidades y la pasión adecuadas para asumir un rol específico. En esos casos, es posible que deba buscar fuera de su comunidad existente. Comuníquese con otros proyectos o comunidades que puedan tener personas con la experiencia necesaria.

Una forma de buscar posibles mantenedores es crear una [Página de información del repositorio](https://docs.opensauced.pizza/features/repo-insights/) con proyectos con un stack tecnológico similar. Esto le permitirá ver quién contribuye a esos proyectos de forma regular, sus lenguajes más utilizados y más. A partir de ahí, puede reducir su búsqueda a personas que ya estén familiarizadas con el stack de su proyecto y que tengan un historial comprobado de contribuciones agregándolas a una [Página de información del colaborador](https://docs.opensauced.pizza/features/contributor-insights/). Contributor Insights le permite ver más sobre dónde están contribuyendo, su zona horaria, su nivel de actividad y más.

#### Creando un repositorio y una página de información del colaborador

Para conectar y rastrear sus repositorios, haga clic en el "+" junto a "Insights" en la barra lateral, luego seleccione "Nueva información del repositorio". Se le redirigirá a una página donde puede crear su nueva página de información del repositorio.

Hay dos formas de agregar repositorios a su página de información del repositorio:

1. **Sincronizar organización de GitHub**. Sincronizar su organización de GitHub es una buena idea si desea una vista unificada de las actividades de su proyecto y la lista de colaboradores de su proyecto.
2. **Agregar repositorios individuales**. Agregar repositorios individuales es una buena idea si desea ver repositorios similares para reclutar miembros del equipo.

![Sincronizar equipo GIF](../../../_assets/gifs/team-sync-insights.gif)

A partir de ahí, puede crear una lista de colaboradores que le interesan conocer o con los que desea conectarse seleccionándolos desde el tablero de colaboradores y creando una nueva página de información del colaborador.

![Lista de información del colaborador](../../../_assets/images/contributors-insights.png)

## Agregar miembros del equipo

Una vez que haya identificado posibles miembros del equipo, comuníquese con ellos. Hágales saber por qué les está pidiendo que se conviertan en miembros del equipo y bríndeles una comprensión clara de lo que espera si aceptan el rol. Esto les ayudará a tomar una decisión informada y asegurarse de que puedan cumplir con sus expectativas.

Eche un vistazo a [esta guía](https://docs.github.com/en/organizations/organizing-members-into-teams/adding-organization-members-to-a-team) para aprender cómo agregarlos a su equipo en GitHub.

## Incorporar nuevos miembros del equipo

Para asegurarse de que sus nuevos miembros del equipo estén preparados para el éxito, es importante tener un proceso de incorporación. Esto les ayudará a comprender sus responsabilidades, los objetivos del proyecto y cómo pueden contribuir.

Aquí hay algunas cosas a considerar:

- **Roles y responsabilidades:** Defina claramente el rol y las responsabilidades del miembro del equipo. Esto les ayudará a comprender de qué son responsables y qué pueden esperar de usted.
- **Comunicación:** Establezca canales de comunicación y expectativas claras. Esto ayudará a garantizar que todos estén en la misma página y que puedan comunicarse de manera efectiva.
- **Objetivos:** Defina claramente los objetivos del proyecto y cómo los miembros del equipo pueden contribuir. Esto les ayudará a comprender cómo pueden contribuir al éxito del proyecto.
- **Cronograma:** Establezca expectativas claras para el cronograma. Esto les ayudará a comprender qué hacer y las fechas límite.

Una forma de incorporar a sus nuevos miembros del equipo es tener pautas claras e incluirlas en su documentación. Si necesita una idea para crear una, puede consultar las [Pautas de los mantenedores de la comunidad de OpenSauced](https://docs.opensauced.pizza/contributing/opensauced-maintainers-guide/community-maintainers-guide/) o leer [esta publicación de blog](https://dev.to/opensauced/the-missing-piece-why-your-project-needs-a-maintainer-onboarding-process-np0).

## Realizar un seguimiento de su equipo

A medida que su equipo crece, es importante realizar un seguimiento de la participación y las contribuciones de su equipo. Dependiendo de la cantidad de personas en su equipo, considere crear una [Página de información del colaborador](https://docs.opensauced.pizza/features/contributor-insights/) para realizar un seguimiento de las contribuciones de su equipo. Esto le permitirá ver quién está contribuyendo a su proyecto y con qué frecuencia, y le ayudará a identificar cuándo es el momento de eliminar a alguien de su equipo.

![Sincronizar equipo GIF](../../../_assets/gifs/team-sync.gif)

## Despedirse: Manejar las salidas del equipo

Con el paso del tiempo y el cambio de vida de las personas, descubrirá que incluso los equipos más dedicados pueden enfrentar salidas. La inactividad, la discordia con los valores del proyecto o el acuerdo mutuo pueden conducir a cambios en su equipo. Es importante abordar estas situaciones con respeto y comprensión. Comuníquese en privado sobre las razones detrás de la decisión, reconozca las contribuciones del individuo y exprese gratitud por su tiempo y esfuerzo. Recuerde que fomentar un entorno positivo y de apoyo, incluso durante las salidas, contribuye al bienestar general de la comunidad de su proyecto.

Eche un vistazo a [esta guía](https://docs.github.com/en/organizations/organizing-members-into-teams/removing-organization-members-from-a-team) en GitHub para eliminar a la persona de su equipo.

## Conclusión

Recuerde, el equipo está ahí para apoyarlo a usted y al proyecto y ayudarlo a lograr sus objetivos. A medida que hace crecer su equipo, tenga en cuenta que no solo está agregando personas a su proyecto; está agregando personas a su comunidad. Asegúrese de agregar personas que se alineen con los valores y objetivos de su proyecto y que sean una adición positiva a su comunidad.

En el [próximo capítulo](metricas-y-analisis.md), aprenderá cómo las métricas y el análisis son útiles para los nuevos mantenedores.