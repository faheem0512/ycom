# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent
COPY . ./
RUN yarn run build

CMD ["yarn", "start:ssr"]