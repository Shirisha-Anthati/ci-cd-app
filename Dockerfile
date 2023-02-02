FROM node:18-alpine3.16

WORKDIR /app

COPY . /app

RUN node -v

ENTRYPOINT [ "node", "server.js" ]