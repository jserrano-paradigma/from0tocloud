<h1 align="center">Bienvenido a WATTO SHOP MONOLITH - STEP 2馃憢</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
	<img alt="Open JDK " src="https://img.shields.io/badge/OpenJDK-11-blue" />
	<img alt="Apache Maven" src="https://img.shields.io/badge/Apache%20Maven-3.8.1-blue" />
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4.4.6-blue" />
  <img alt="Jquery" src="https://img.shields.io/badge/jquery-3.6.0-yellow" />
  <img alt="Docker Ready" src="https://img.shields.io/badge/docker-ready-green"/>
  <img alt="License CC BY-SA" src="https://img.shields.io/badge/license-CC%20BY--SA-blue" />
</p>

> Proyectos generados usando W3 School Template, Javascript Vanilla y Jquery.

## Prerequisitos

- Ninguno

## Instalaci贸n Servidor Desarrollo
El servidor JSON Server que acompa帽a a la aplicaci贸n se encuentra en la carpeta /server

<span style="color:red">Este server solo es para fines de desarrollo.</span>

Para que la aplicaci贸n consuma dicho servidor ha de configurarse lo siguiente:

```js
//Constante de configuraci贸n endopoint de servicio ubicado en /env/properties.json
const baseurl = 'http://localhost:3000';
```

```sh
cd server
npm install -g json-server
json-server --watch db.json
```

El fichero db.json est谩 preaparado para servir la informaci贸n que actualmente consume la aplicaci贸n frontal.

## Empaquetado y Despliegue con Docker

La aplicaci贸n tiene configurado un docker para su empaquetado y distribuci贸n, para la creaci贸n de la imagen, basta con ejecutar la siguiente l铆nea:

### Imagen
```sh
docker build -t app .
```
### Despliegue
```
docker run -d -it -p 80:80 app
```

## Autores

馃懁 **Carlos Alberto Tauroni Hern谩ndez** 

馃彚 **PARADIGMA DIGITAL**

## Licencia

[Creative Commons Attribution-ShareAlike 4.0 International](LICENSE.md) <img alt="License CC BY-SA" src="https://img.shields.io/badge/license-CC%20BY--SA-blue" />
