FROM node:12.18.1 as build-deps
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts && \
  chown -Rh node:node /usr/src/app/node_modules

COPY . ./
RUN npm run ng build 
RUN cd /usr/src/app
RUN ls

FROM nginx:mainline-alpine
COPY --from=build-deps /usr/src/app/dist/todo-client /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
