# From 0 to Cloud

En este repositorio se encuentran los 4 pasos que vimos en el segundo webinar de la serie From 0 to Cloud.

En la [fase inicial](https://github.com/jserrano-paradigma/from0tocloud/tree/main/step0/monolith) se dispone de un monolito que se ejecuta en una instancia on-prem de Wildfly 23.

En el [primer paso](https://github.com/jserrano-paradigma/from0tocloud/tree/main/step1/lift-and-shift) de la migración a Cloud, lo empaquetamos en un contenedor docker y lo levantamos, dentro de ese contenedor se incluye un servidor de aplicaciones Wildfly 23.

En el siguiente paso vamos a separar lo que es la lógica del [frontal](https://github.com/jserrano-paradigma/from0tocloud/tree/main/step2/frontend) de los servicios [backend](https://github.com/jserrano-paradigma/from0tocloud/tree/main/step2/backend) y empaquetar ambas en su correspondientes [contenedores](https://github.com/jserrano-paradigma/from0tocloud/tree/main/step2/docker-step2).

En el [último paso](https://github.com/jserrano-paradigma/from0tocloud/tree/main/step3) conseguimos la primera versión de aplicación Cloud Friendly, se realiza una división por microservicios, se incluye un API Gateway artesanal usando Eureka y Zuul.

El webinar se puede seguir en el canal de Youtube de [Paradigma digital](https://www.youtube.com/channel/UCi_e1gB9PYjr1OTY_W0hY3g) donde hay muchos otros videos que te pueden interesar, tambien puedes acceder directamente desde [From 0 to Cloud: de monolito a Cloud Friendly](https://youtu.be/D5-jl9uI0x0)

