FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm cache clean --force && npm install

EXPOSE 3000

CMD ["node","server.js"]
