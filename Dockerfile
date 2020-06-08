# build environment
FROM node:13.12.0-alpine as build
ENV PATH /project/node_modules/.bin:$PATH
COPY package.json ./
COPY . ./
EXPOSE 80
CMD ["yarn", "start:ssr"]