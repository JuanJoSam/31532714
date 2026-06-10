FROM httpd:2.4

LABEL maintainer="JuanJoSam@ucv.ve"

COPY . /usr/local/apache2/htdocs/

EXPOSE 80