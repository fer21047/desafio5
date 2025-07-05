# Stage 1: Build with Node
FROM node:20.11.0 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copia la build desde la etapa build
COPY --from=build /app/dist /usr/share/nginx/html

# Si tienes configuración custom de nginx (opcional)
#COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
