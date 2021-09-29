<h1 align="center">Bienvenido a WATTO SHOP MONOLITH - Mongo Collections 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4.4.6-blue" />
  <img alt="License CC BY-SA" src="https://img.shields.io/badge/license-CC%20BY--SA-blue" />
</p>

## Instalación y ejecución

Para poder seguir en local los pasos que se realizan en el webinar es necesario disponer de una instancia local de MongoDB, para su instalación puedes consultar la [sección de instalación del manual oficial](https://docs.mongodb.com/manual/administration/install-community/).

Una vez se tenga instalada se deben cargar las colecciones:

1. watto.user.json
2. watto.category.json
3. watto.item.json
4. watto.order.json

en la instancia de mongodb que se ha instalado ejecutando el comando:

```bash
mongoimport --db=watto --collection=user --file=watto.user.json
```

## Autores

👤 **Javier Serrano Herrero** 

👤 **Carlos Alberto Tauroni Hernández** 

🏢 **PARADIGMA DIGITAL**

## Licencia

[Creative Commons Attribution-ShareAlike 4.0 International](LICENSE.md) <img alt="License CC BY-SA" src="https://img.shields.io/badge/license-CC%20BY--SA-blue" />
