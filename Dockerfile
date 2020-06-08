# build environment
FROM node:13.12.0-alpine as build

EXPOSE 80
CMD ["yarn", "start:ssr"]