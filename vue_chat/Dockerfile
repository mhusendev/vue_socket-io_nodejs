from node:alpine
WORKDIR /server_chat
COPY ./package.json .
RUN npm install
COPY ./ .
ENTRYPOINT  npm run dev
EXPOSE 3002