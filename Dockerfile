#Dockerfile##################################
FROM nginx:alpine
MAINTAINER Jan Botha
LABEL PokeJan Web App
COPY . /usr/share/nginx/html
#Dockerfile#################################
