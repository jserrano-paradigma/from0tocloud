<h1 align="center">Bienvenido a WATTO SHOP VUE COMPONENT WEB APP 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
	<img alt="Node JS" src="https://img.shields.io/badge/NodeJS-15.12.1-blue" />
  <img alt="Vue Cli" src="https://img.shields.io/badge/VUE-2.6.14-green" />
	<img alt="Vue Cli" src="https://img.shields.io/badge/VUE%20CLI-4.5.13-green" />
  <img alt="Docker Ready" src="https://img.shields.io/badge/docker-ready-green"/>
  <img alt="License CC BY-SA" src="https://img.shields.io/badge/license-CC%20BY--SA-blue" />
</p>

> Proyectos generados usando VUE CLI 4.5.13.

## Prerequisitos

- Node JS 15.12.1
- Vue 2.6.14
- Vue CLI 4.5.13

## Instalación y Arranque Servidor Desarrollo
Para instalar y arrancar la aplicación hay que ejecutar

```sh
npm install
npm run serve
```

La aplicación se levantan en http://localhost:8080

El servidor JSON Server que acompaña a la aplicación se encuentra en la carpeta /server

<span style="color:red">Este server solo es para fines de desarrollo.</span>

Para que la aplicación consuma dicho servidor ha de configurarse lo siguiente:

```js
//Constante de configuración endopoint de servicio ubicado en /env/config.js
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

```bash
docker run -d -it -p 80:80 app
```

## Author

👤 **Carlos Alberto Tauroni Hernández**

🏢 **PARADIGMA DIGITAL**

## Licencia

[Creative Commons Attribution-ShareAlike 4.0 International](LICENSE.md) <img alt="License CC BY-SA" src="https://img.shields.io/badge/license-CC%20BY--SA-blue" />
