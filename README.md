# Bases de Angular

## Conceptos

### Angular

Es un Framework con el que podemos desarrollar para diferentes plataformas:

- Marco de trabajo estandarizado.
- Viene con todo lo que necesitas para trabajar.
- Es modular.

### Bloques fundamentales

- **Componente:** bloque de código que tiene su segmento de HTML y tiene una contraparte de TypeScript, puede contar con su archivo de estilos y archivo de pruebas unitarias.

- **Servicios:** son Singleton bastante fuertes que te van a permitir trabajar toda la aplicación con la información centralizada, sirven para hacer comunicación con el Backend o la BD.

- **Directivas:**
  - **Directiva de componentes:** es muy parecida a un componente, solo que tiene un fragmento de código HTML reutilizable.

  - **Directiva estructurales:** modifican el DOM o el HTML, ya sea añadiendo o removiendo elementos.

  - **Directiva de atributos:** cambian la apariencia o el comportamiento de un elemento, un componente o una directiva.

- **Rutas:** son básicamente diferentes componentes que se pueden mostrar basados en el URL del navegador web o el URL en el cual se encuentra el cliente.

- **Módulos:** permiten agrupar todos los anteriores elementos.

## Instalar el proyecto

1. Para iniciar debemos verificar que tengamos instalado el Angular CLI:

    ```ng version```

2. Si no contamos con el angular debemos instalarlo:

    ```npm install -g @angular/cli```

3. Para crear este proyecto vamos a utilizar el siguiente comando:

    ```ng new nombre-proyecto --standalone false```

    El --standalone false, se utiliza para trabajar con los Modules de Angular, ya que de la versión 17 en adelante estos no se usan igual.

4. Seleccionamos el tipo de estilos:

    ```CSS```

5. Indicamos que no queremos activar el Server-Side Rendering (SSR):

    ```N```

6. Cambiamos el nombre de la carpeta para llevar un orden:

    ```02-bases```

7. En la consola nos paramos en la raíz de la nueva carpeta levantamos la nueva aplicación utilizamos el comando:

    ```ng serve -o```


## Estructura del proyecto

- ```.angular``` Ayuda a Angular a manejar rápidamente la carga de la aplicación cuando se detecta algún cambio y maneja básicamente el caché de nuestro proyecto en desarrollo.

- ```.vscode``` No es parte del proyecto de Angular, es una carpeta que se genera automáticamente donde se guardan configuraciones de VS Code para trabajar en el proyecto.

- ```node_modules``` Carpeta donde se almacenan los módulos del proyecto. Estos se reconstruyen al momento de instalar los paquetes para el proyecto por medio del archivo ```package.json```

- ```src``` Directorio en el cual vamos a crear nuestro propio código de Angular.

- ```src\app``` Carpeta donde se va construir la lógica de la aplicación, en esta se agregan los componentes, servicios, modulos, entre otros.

- ```src\app\app.module.ts``` Archivo importante de la aplicación, donde se registran, importan o exportan los componentes, clases o servicios de la aplicación. Este archivo tiende a crecer mucho, así que se aplican ténicas para que solo cargue las dependencias necesarias para cada componente.

- ```src\assets``` Directorio donde se agregan los archivos o recursos estáticos.

- ```src\assets\.gitkeep``` son archivos en blanco que se crean en caso de que el proyecto tenga carpetas vacías, con el fin de que git les haga seguimiento.

- ```src\favicon.ico``` Archivo o ícono de la aplicación, el cual podemos ver en la pestaña del navegador.

- ```src\index.html``` Es el HTML principal de la aplicación en el cual se referencia el componente ```<app-root></app-root>``` donde va cargar toda la aplicación de Angular.

- ```src\main.ts``` El punto de entrada de nuestra aplicación de Angular.

- ```src\style.css``` Donde se configuran los estilos globales de la aplicación.

- ```.editorconfig``` Establece configuraciones para VSCode en el proyecto.

- ```.gitignore``` Evita subir cambios no deseados al repositorio, ignorando archivos.

- ```angular.json``` Donde se registran las configuraciones de Angular para su ejecución.

- ```package-lock.json``` Indica como fueron construidos los módulos de Node.

- ```package.json``` Propio de aplicaciones de Node para agregar scripts, dependencias o paquetes necesarios para la aplicación. También con la posibilidad de cambiar o definir las versiones de los paquetes.

- ```README.md``` Donde se puede documentar como correr la aplicación, que se debe instalar o que configuraciones hay que tener en cuenta para su ejecución.

- ```tsconfig.app.json``` Archivo de TypeScript, donde se configuran las salidas de la aplicación.

- ```tsconfig.json``` Configuraciones para Angular.

- ```tsconfig.spec.json``` Otro archivo de configuración pero en este caso, para las pruebas unitarias.


# Comandos

- Comando para crear componentes:

  ```ng generate component component-name``` or ```ng g c component-name```

  También se puede usar para generar otros elementos:

  ```ng generate directive|pipe|service|class|guard|interface|enum|module```

- Crear componentes con excepción de ciertos archivos:

  ```ng g c hero-component --flat -t -s --skip-tests=true```

  - ```-s``` para CSS en línea, evitando la creación de archivos de estilo.
  - ```--flat``` para evitar la creación de carpetas.
  - ```-t``` para plantilla en línea, evitando la creación de archivos html.
  - ```--skip-tests=true``` para evitar la creación de archivos spec.

- Comando para ejecutar la construcción del proyecto, que se almacena en el directorio **/dist** ```ng build```

- Lanzar las pruebas unitarias a través de [Karma](https://karma-runner.github.io/latest/index.html), se utiliza el comando: ```ng test```

- Para ejecutar las pruebas de un extremo a otro a través de una plataforma de su elección. Primero debe agregar un paquete que implemente capacidades de prueba de un extremo a otro, y luego ejecutar el comando: ```ng e2e```

- Para obtener más ayuda o contexto del uso de Angular CLI ```ng help``` o consultar la página [Descripción general y referencia de comandos de Angular CLI.](https://angular.io/cli)


# Instalar paquetes

- Para utilizar el generador de GUID podemos utilizar el siguiente paquete:

  ```
  npm install uuid
  npm i --save-dev @types/uuid
  ```

  Luego lo podemos referenciar en clases o proyectos, que requieran de la funcionalidad:

  ```import { v4 as uuid } from 'uuid';```

  Y para utilizarlo sería llamar la función que genera el GUID:

  ```{ id: uuid(), name: 'Krillin', power: 1000 }```

- Para probar o montar un servidor HTTP sin ninguna configuración, algo rápido con fines únicamente de pruebas o de forma local, podemos utilizar el paquete ```npm http-server```. Para fines del proyecto lo vamos a instalar de manera global, ejecutamos la consola como administrador y lanzamos el siguiente comando: ```npm install --global http-server```


# Despliegues a producción

1. Para crear la carpeta de distribución ```/dist``` o generar el build de producción, utilizamos el siguiente comando: ```ng build```

2. Montamos un servidor local HTTP, con fines de pruebas. Lo hacemos con el paquete ```npm http-server```, si no lo tienen, realizamos la instalación que la podemos encontrar en la sección de **Instalar paquetes.**

    Luego de tenerlo ya instalado, nos paramos en la raíz del build de producción: ```...\Angular\02-bases\dist\bases```

    Y para lanzar el proyecto dentro de ester servidor, ejecutamos el comando: ```http-server-o```

    >Si llegamos a tener problemas con el build, lo que podemos hacer es tomar todos los archivos de la carpeta **browser**, pasarlos a la pcarpeta **bases**, borrar la carpeta **browser** y demás archivos no requeridos. Si no desean hacer este paso, podemos realizar el despliegue en otro servidor, como por ejemplo **Netlify** o **GitHub Pages**.

3. Si desean subir la aplicación a **Netlify**, lo primero es crear la cuenta, luego ir al menú opción **Sites**.

    Podemos crear manualmente el sitio desde cero utilizado el botón **Add new site**.

    También al final de esta página podemos arrastrar los archivos de la carpeta **bases**, y cuando terminen de subir nos creará el sitio automáticamente. Este sitio tiene la opción de cambiar su nombre o ruta en la opción **Site settings**. Y por último abrimos el enlace generado.

4. Para subir los cambios a **GitHub Pages**, lo primero es tener una cuenta en GitHub, luego se debe crear un repositorio para subir el proyecto.

   - Si la cuenta es paga, el repositorio se puede crear privado.
   - Si la cuenta es gratuita, el repositorio debe ser publico para no tener problemas al momento de subir a GitHub Pages.

    Ahora vamos a crear una carpeta llamada **docs**, en el root de la aplicación, y en esta vamos a trasladar los archivos del production build.

    Luego subimos los cambios al repositorio, y en este vamos a la ruta **Settings -> Pages**:

   - En el campo **Source** seleccionamos la opción por defecto **Deploy from a branch.**
   - En **Branch** la ramma **main**, la carpeta **docs** y por último damos clic en el botón **save.**


# Referencias:

- [GitHub - Bases de la sección.](https://github.com/Klerith/angular-bases)
- [GitHub - Expandir Bases Angular.](https://github.com/Klerith/angular-bases/tree/fin-seccion-5)
- [Angular Guide - Interpolation.](https://angular.io/guide/interpolation)
- [Get Bootstrap.](https://getbootstrap.com)
- [dev/talles - Angular Cheat Sheet.](https://devtalles.com/files/angular-cheat-sheet.pdf?signals)
- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [Angular Guide - Singleton Service.](https://angular.io/guide/singleton-services)
- [Npm UUID.](https://www.npmjs.com/package/uuid)
- [Npm http-server](https://www.npmjs.com/package/http-server)
- [Netlify Composable Web Platform.](https://www.netlify.com/)
