![GitHub top language](https://img.shields.io/github/languages/top/Krisba/API-REST-Registro-usuarios?color=yellow)

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

$ cd + ruta del template
$ npm install

## Poner en marcha el servidor:

$ npm start

## Ejecutar tests:

$ npm test

## Lenguajes de programación, Frameworks y tecnologías utilizadas

* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
