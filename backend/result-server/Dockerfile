FROM node:16-slim

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .
RUN npm run build

EXPOSE 5003

CMD ["npm","start"]