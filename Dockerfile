#set node version
FROM node:latest

#set workdir
WORKDIR /ui

#copy project files
COPY ./ ./

#install packages from package.json
RUN npm i -g create-react-app

RUN npm install

RUN npm uninstall react-scripts

RUN npm install react-scripts

#build project for static and node_modules
RUN npm run build

EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["run", "start"]