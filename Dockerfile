FROM node:20-alpine

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

RUN npm run build

ARG NODE_ENV
ARG DATABASE_URL
ARG DIRECT_URL
ARG REDIS_HOST
ARG REDIS_PORT
ARG REDIS_PASSWORD

ENV NODE_ENV=$NODE_ENV \
    DATABASE_URL=$DATABASE_URL \
    DIRECT_URL=$DIRECT_URL \
    REDIS_HOST=$REDIS_HOST \
    REDIS_PORT=$REDIS_PORT \
    REDIS_PASSWORD=$REDIS_PASSWORD

USER node

CMD [ "npm", "run", "start:prod" ]