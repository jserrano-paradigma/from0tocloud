<h1 align="center">Bienvenido a WATTO SHOP BACKEND 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
	<img alt="Open JDK " src="https://img.shields.io/badge/OpenJDK-11-blue" />
	<img alt="Apache Maven" src="https://img.shields.io/badge/Apache%20Maven-3.8.1-blue" />
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4.4.6-blue" />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
</p>

## Prerequisitos

- Java JDK 11
- Apache Maven 3.8.1
- MongoDB 4.4.6

## Instalación y ejecución

En la carpeta del proyecto ejecutar
```sh
mvn clean install
mvn spring-boot:run
```
El primer comando construirá la aplicación y el segundo lo levantará en el puerto :8088

En caso de estar usando windows, y obtener un error de tipo 
```sh
javax.net.ssl.SSLHandshakeException: extension (5) should not be presented in certificate_request
```

Ejecute los siguientes comandos para evitar el problema de certificados debido al protocolo de conexion.
```sh
mvn clean install -Djdk.tls.client.protocols=TLSv1.2
mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Djdk.tls.client.protocols=TLSv1.2"
```

El frontal de la aplicación se empaqueta automáticamente y se levanta en 'http://localhost:8088/'

El swagger de la aplicación se puede ver en 'http://localhost:8088/swagger-ui/'

Recuerde que antes de levantar la aplicación debe configurar la base de datos en MongoDB cuyas colecciones se encuentran disponibles en la carpeta [mongo-collections](../../step0/mongo-collections) del [paso inicial](../../step0)

En caso de que solo quiera montar el frontal de la aplicación tiene la documentación para realizar la configuración de la misma en este [README.md](./src/main/resources/static/README.md).

## Autores

👤 **Javier Serrano Herrero** 

👤 **Carlos Alberto Tauroni Hernández** 

🏢 **PARADIGMA DIGITAL**
