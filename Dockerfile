#set node version
FROM node:latest

#set workdir
WORKDIR /ui

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .

RUN npm install
RUN npm install react-scripts@3.4.1 -g

#build project for static and node_modules
COPY . .

EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["run", "start"]