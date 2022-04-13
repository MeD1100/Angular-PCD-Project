#First stage
FROM node:lts-alpine3.14 as build
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/
RUN npm install --legacy-peer-deps

COPY . /app/
RUN npm run build --prod

#Final stage
FROM nginx:alpine
COPY --from=build /app/angular-frontend /usr/share/nginx/html
