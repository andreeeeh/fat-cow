
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build --prod
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]

# FROM nginx:alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /app/dist/client-fat-cow /usr/share/nginx/html