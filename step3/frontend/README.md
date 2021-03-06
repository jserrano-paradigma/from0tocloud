<h1 align="center">Bienvenido a WATTO SHOP VUE COMPONENT WEB APP 馃憢</h1>
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

## Instalaci贸n y Arranque Servidor Desarrollo
Para instalar y arrancar la aplicaci贸n hay que ejecutar

```sh
npm install
npm run serve
```

La aplicaci贸n se levantan en http://localhost:8080

El servidor JSON Server que acompa帽a a la aplicaci贸n se encuentra en la carpeta /server

<span style="color:red">Este server solo es para fines de desarrollo.</span>

Para que la aplicaci贸n consuma dicho servidor ha de configurarse lo siguiente:

```js
//Constante de configuraci贸n endopoint de servicio ubicado en /env/config.js
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

```bash
docker run -d -it -p 80:80 app
```

## Author

馃懁 **Carlos Alberto Tauroni Hern谩ndez**

馃彚 **PARADIGMA DIGITAL**

## Licencia

[Creative Commons Attribution-ShareAlike 4.0 International](LICENSE.md) <img alt="License CC BY-SA" src="https://img.shields.io/badge/license-CC%20BY--SA-blue" />
