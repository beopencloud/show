FROM node:18.16.0-alpine3.17
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000

# Ajuster les autorisations sur le répertoire de travail de manière récursive
RUN chmod -R 777 /app

# Définir l'utilisateur pour l'exécution de l'application
USER node

CMD ["npm", "start"]
