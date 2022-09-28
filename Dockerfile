#set node version
FROM node:latest

#set workdir
WORKDIR /ui

#copy project files
COPY ./ ./

RUN yarn

#build project for static and node_modules
RUN yarn build

EXPOSE 3000
ENTRYPOINT ["yarn"]
CMD ["start"]