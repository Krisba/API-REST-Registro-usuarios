# API REST Registro de usuarios

## Versiones utilizadas

La arquitectura de la aplicación está hecha con Node Js versión 10.15, Express 4.17.1 y Sequelize 6.6.2 apuntando a base de datos MySQL 5.7.

Se utiliza el framework de testing Mocha (8.4.0) para la ejecución de pruebas.

## Variables de entorno

Se utiliza `Dotenv` para el manejo de las variables de entorno. Las mismas se encuentran en el archivo `/.env`. Se deben completar los campos `MYSQL VALUES` para conectarse correctamente a la base de datos.

## Descripción de las funcionalidades de la API

Por un lado, la API permite almacenar en una base MySQL los datos correspondientes de cada usuario para su registro. Éstos datos contendrán: Nombre, dni, edad, e e-mail (`./model/usuario`).
Por otra parte, nuestra API brinda acceso a la base de datos para poder obtener todos las registros almacenados o bien un usuario en específico mediante el dni.
Adicionalmente, se puede modificar el registro de un usuario y eliminar su data de manera física.

## Instalar las respectivas dependencias con:

$ cd <ruta del template>
$ npm install

## Poner en marcha el servidor:

$ npm start

## Ejecutar tests:

$ npm test
