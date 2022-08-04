FROM node:16-slim

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .
RUN npm run build

EXPOSE 5010

CMD ["npm","start"]

# firstime
# docker build -t admin-server .
# docker run -p 5010:5010 -d --name admin-server admin-server

# for reinventing the wheel
# docker rm admin-server -f
# docker rmi admin-server -f
# docker build -t admin-server .
# docker run -p 5010:5010 -d --name admin-server admin-server
