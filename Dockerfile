FROM node:22.20.0-alpine AS builder

WORKDIR /app

ARG VITE_BASE_PATH=/
ENV VITE_BASE_PATH=$VITE_BASE_PATH

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build 

FROM nginx:1.28.3-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
