#set node version
FROM node:16.10.0

#set workdir
WORKDIR /ui

#copy project files
COPY ./ ./

#install packages from package.json
RUN yarn

#build project for static and node_modules
RUN yarn run build

EXPOSE 3000
ENTRYPOINT ["yarn"]
CMD ["run", "start"]
