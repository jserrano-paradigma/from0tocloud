<h1 align="center">Bienvenido a WATTO SHOP MONOLITH - STEP 2👋</h1>
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

## Instalación Servidor Desarrollo
El servidor JSON Server que acompaña a la aplicación se encuentra en la carpeta /server

<span style="color:red">Este server solo es para fines de desarrollo.</span>

Para que la aplicación consuma dicho servidor ha de configurarse lo siguiente:

```js
//Constante de configuración endopoint de servicio ubicado en /env/properties.json
const baseurl = 'http://localhost:3000';
```

```sh
cd server
npm install -g json-server
json-server --watch db.json
```

El fichero db.json está preaparado para servir la información que actualmente consume la aplicación frontal.

## Empaquetado y Despliegue con Docker

La aplicación tiene configurado un docker para su empaquetado y distribución, para la creación de la imagen, basta con ejecutar la siguiente línea:

### Imagen
```sh
docker build -t app .
```
### Despliegue
```
docker run -d -it -p 80:80 app
```

## Autores

👤 **Carlos Alberto Tauroni Hernández** 

🏢 **PARADIGMA DIGITAL**

## Licencia

[Creative Commons Attribution-ShareAlike 4.0 International](LICENSE.md) <img alt="License CC BY-SA" src="https://img.shields.io/badge/license-CC%20BY--SA-blue" />
