from node:alpine
WORKDIR /socket_server
COPY ./package.json .
RUN npm install
COPY ./ .
ENTRYPOINT  npm start
EXPOSE 8020