<h1 align="center">Bienvenido a WATTO SHOP MONOLITH - STEP 1馃憢</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
	<img alt="Open JDK " src="https://img.shields.io/badge/OpenJDK-11-blue" />
	<img alt="Apache Maven" src="https://img.shields.io/badge/Apache%20Maven-3.8.1-blue" />
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4.4.6-blue" />
  <img alt="Jquery" src="https://img.shields.io/badge/jquery-3.6.0-yellow" />
  <img alt="Docker Ready" src="https://img.shields.io/badge/docker-ready-green"/>
  <img alt="License CC BY-SA" src="https://img.shields.io/badge/license-CC%20BY--SA-blue" />
</p>

## Prerequisitos

- Java JDK 11
- Apache Maven 3.8.1
- MongoDB 4.4.6

## Instalaci贸n y ejecuci贸n

En la carpeta del proyecto ejecutar

```sh
mvn clean install
mvn spring-boot:run
```

El primer comando construir谩 la aplicaci贸n y el segundo lo levantar谩 en el puerto :8088

En caso de estar usando windows, y obtener un error de tipo 

```sh
javax.net.ssl.SSLHandshakeException: extension (5) should not be presented in certificate_request
```

Ejecute los siguientes comandos para evitar el problema de certificados debido al protocolo de conexion.

```sh
mvn clean install -Djdk.tls.client.protocols=TLSv1.2
mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Djdk.tls.client.protocols=TLSv1.2"
```

El frontal de la aplicaci贸n se empaqueta autom谩ticamente y se levanta en 'http://localhost:8088/'

El swagger de la aplicaci贸n se puede ver en 'http://localhost:8088/swagger-ui/'

Recuerde que antes de levantar la aplicaci贸n debe configurar la base de datos en MongoDB cuyas colecciones se encuentran disponibles en la carpeta [mongo-collections](../../step0/mongo-collections) del [paso inicial](../../step0)

En caso de que solo quiera montar el frontal de la aplicaci贸n tiene la documentaci贸n para realizar la configuraci贸n de la misma en este [README.md](./src/main/resources/static/README.md).

## Empaquetado y Despliegue con Docker

La aplicaci贸n tiene configurado un docker para su empaquetado y distribuci贸n, para la creaci贸n de la imagen, basta con ejecutar la siguiente l铆nea:

### Imagen

Para crear la imagen de la aplicaci贸n se debe ejecutar el siguiente comando:

```sh
docker build -t from0tocloud/liftandshift .
```

### Arranque de la aplicaci贸n

Para arrancar la aplicaci贸n se debe ejecutar el siguiente comando:

```bash
docker run -d -it -p 8088:8088 from0tocloud/liftandshift
```

## Autores

馃懁 **Javier Serrano Herrero** 

馃懁 **Carlos Alberto Tauroni Hern谩ndez** 

馃彚 **PARADIGMA DIGITAL**

## Licencia

[Creative Commons Attribution-ShareAlike 4.0 International](LICENSE.md) <img alt="License CC BY-SA" src="https://img.shields.io/badge/license-CC%20BY--SA-blue" />
