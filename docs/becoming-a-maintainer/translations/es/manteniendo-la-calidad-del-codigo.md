# Cómo mantener la calidad del código y la documentación

Mantener un proyecto con alta calidad de código y documentación actualizada es importante. Esto ayudará a los colaboradores a comprender el proyecto y facilitará que contribuyan.

Este capítulo cubrirá formas de mantener la calidad del código y la documentación en su proyecto de Open Source.

## Revisiones de código y contribuciones de alta calidad

Las revisiones de código son esenciales para mantener la calidad del código en un proyecto de Open Source. Debe tomarse el tiempo para revisar cada solicitud de extracción y asegurarse de que los cambios propuestos sean de alta calidad y no introduzcan errores o problemas nuevos. Recibirá solicitudes de extracción de colaboradores que son nuevos en el proyecto y es posible que no estén familiarizados con la base de código. Es importante ser paciente y brindar retroalimentación constructiva para ayudarlos a mejorar sus contribuciones.

Las siguientes secciones cubrirán algunas de las mejores prácticas para realizar revisiones de código y garantizar contribuciones de alta calidad.

### Commits convencionales

[Commits convencionales](https://www.conventionalcommits.org/en/v1.0.0/) es una especificación para estructurar mensajes de commit. Proporciona una forma fácil de comprender el tipo de cambios que se están realizando y ayuda a mantener un historial de commits limpio y organizado.

Se recomienda encarecidamente el uso de Commits convencionales en su proyecto. Puede alentar a los colaboradores a usarlo al realizar cambios en el proyecto agregando una guía a sus pautas de contribución. La sección "[Commits](https://docs.opensauced.pizza/contributing/introduction-to-contributing/#commits)" en las pautas de contribución de OpenSauced solicita a los colaboradores que usen Commits convencionales.

Aquí hay algunos ejemplos de mensajes de Commit convencionales:

```
feat: add password reset functionality
docs: update installation instructions
chore(build): update dependencies
fix(login): resolve issue with incorrect password validation
refactor(api): streamline error handling in user service
```

### Solicitudes de extracción incompletas

Cuando revise una solicitud de extracción, lo primero que debe verificar es que los cambios propuestos estén completos y no introduzcan errores o problemas nuevos. También debe quedar claro de qué se tratan los cambios propuestos y qué problema intentan resolver.

El colaborador debe vincular los cambios propuestos a un problema existente, y deben completar toda la información necesaria en la plantilla de solicitud de extracción. Si la solicitud de extracción aún no se ha completado, comuníquese con el colaborador y pídale que proporcione la información faltante.

Recuerde que tratará con colaboradores de todos los niveles. Algunos pueden ser nuevos en el código abierto y no darse cuenta de que no han proporcionado la información necesaria. Es importante brindar retroalimentación constructiva con paciencia para ayudarlos a mejorar sus contribuciones.

### Solicitudes de extracción grandes y desorientadas

A veces, es posible que reciba solicitudes de extracción que son demasiado grandes y desorientadas. Los ejemplos de solicitudes de extracción grandes y desorientadas incluyen:

- Solicitudes de extracción que intentan resolver varios problemas a la vez
- Solicitudes de extracción que refactorizan grandes partes de la base de código
- Solicitudes de extracción que agregan mucha funcionalidad nueva

Las solicitudes de extracción grandes pueden ser desafiantes de revisar de manera efectiva y, a veces, introducen errores. En esta situación, es importante pedirle al colaborador que divida la solicitud de extracción en solicitudes de extracción más pequeñas y enfocadas.

### Pruebas automatizadas

Configurar pruebas puede ayudar a garantizar que las nuevas contribuciones no rompan la funcionalidad existente. Las pruebas automatizadas se pueden ejecutar en cada solicitud de extracción para asegurarse de que el nuevo código pasa todas las pruebas. Esto ayudará a mantener la calidad del código y facilitará que los colaboradores contribuyan.

Si algunas pruebas en la nueva solicitud de extracción no pasan las comprobaciones, comuníquese con el colaborador y pídale que corrija las pruebas fallidas. A veces, el colaborador puede necesitar ayuda para comprender por qué las pruebas están fallando. En estos casos, debe trabajar con el colaborador para ayudarlo a comprender el problema y corregir las pruebas fallidas.

Para obtener más información sobre las pruebas, consulte [esta sección](potenciadores-para-mantenedores.md#pruebas) en el capítulo "Potenciadores para mantenedores".

### Comprobación de la calidad del código

Es importante verificar la calidad del código y las buenas prácticas de ingeniería de software al realizar revisiones de código. Esto incluye verificar la denominación adecuada de las variables, el cumplimiento de los estándares de codificación y el código fácil de leer y comprender. Se recomienda una guía de estilo de codificación para ayudar a los colaboradores a comprender los estándares de codificación de su proyecto.

Muchas herramientas pueden ayudarlo a verificar la calidad del código. Puede configurar la linting para su proyecto para asegurarse de que no haya errores de sintaxis o problemas de estilo. También puede configurar herramientas de análisis de código para verificar las vulnerabilidades de seguridad y otros problemas en la base de código.

Para obtener más información sobre estas herramientas, consulte [esta sección](potenciadores-para-mantenedores.md#herramientas-de-análisis-de-código) en el capítulo "Potenciadores para mantenedores".

### Reglas de protección de ramas

Puede configurar reglas de protección de ramas en GitHub para asegurarse de que todas las solicitudes de extracción se revisen antes de fusionarse. También puede crear una regla para exigir la cantidad de aprobaciones antes de que se pueda fusionar una solicitud de extracción. Esto no solo asegura que los mantenedores hayan revisado todas las contribuciones, sino que también ayuda a mantener la calidad del código, especialmente para proyectos más grandes.

Puede obtener más información sobre las reglas de protección de ramas en la [documentación oficial de GitHub](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule#about-branch-protection-rules).

## Mantenimiento de la documentación del proyecto

La documentación es una parte esencial del mantenimiento de un proyecto de Open Source. Ayuda a los colaboradores a comprender el proyecto y facilita que contribuyan. Por lo tanto, es importante mantener la documentación actualizada y asegurarse de que refleje el estado actual del proyecto.

Se recomienda revisar regularmente la documentación de su proyecto para asegurarse de que esté actualizada y sea precisa. Puede establecer un cronograma para una vez al mes para revisar manualmente la documentación de su proyecto. Al revisar la documentación, busque formas de mejorarla y hacer que sea más fácil para los colaboradores comprender el proyecto. Piense en los momentos en que un nuevo colaborador tuvo problemas para comprender el proyecto y actualice la documentación para que sea más fácil de entender.

Otra cosa a considerar en su revisión es ejecutar las instrucciones de instalación y configuración para asegurarse de que sean precisas y estén actualizadas. ¿Hay algún paso que aún deba incluirse? ¿Hay algún paso que ya no sea necesario? Si es así, actualice la documentación para que refleje el estado actual del proyecto.

Si tiene un proyecto más complejo, considere agregar diagramas o imágenes para ayudar a explicar la arquitectura del proyecto. Esto puede ayudar a los colaboradores a comprender cómo está estructurado el proyecto y facilitarles la contribución.

Ahora, pasemos al [próximo capítulo](construyendo-comunidad.md), donde discutiremos cómo construir y nutrir una comunidad acogedora y de apoyo.