#set node version
FROM node:latest

#set workdir
WORKDIR /ui

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

#build project for static and node_modules
COPY . ./

EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["run", "start"]