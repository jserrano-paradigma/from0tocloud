#Clonamos la aplicación
FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY . /app

FROM nginx:1.17.1-alpine

#Ponemos el nuevo servidor y le añadimos la aplicación
COPY --from=build-step /app /usr/share/nginx/html

RUN chmod 755 -R /usr/share/nginx/html/