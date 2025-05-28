# 1. Build stage (alias as "builder")
FROM node:21-alpine AS builder

WORKDIR /app
COPY . .

ARG NODE_ENV
COPY package*.json ./
RUN if [ "$NODE_ENV" = "development" ]; \
  then export $(cat .env | xargs) && npm install; \
  else npm install --only=production; \
    fi

CMD ["npm", "start"]