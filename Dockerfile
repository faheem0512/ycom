# build environment
FROM node:13.12.0-alpine as build

CMD ["yarn", "start:ssr"]