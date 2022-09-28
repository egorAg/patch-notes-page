#set node version
FROM node:latest

#set workdir
WORKDIR /ui

COPY package.json .

RUN yarn
RUN npm install react-scripts@3.4.1 -g

#build project for static and node_modules
COPY . .

RUN yarn build

EXPOSE 3000
ENTRYPOINT ["yarn"]
CMD ["start"]