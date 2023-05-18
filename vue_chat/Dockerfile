from node:alpine
WORKDIR /socket_client
COPY ./package.json .
RUN npm install
COPY ./ .
ENTRYPOINT  npm run dev
EXPOSE 8010