# Utilise l'image officielle Node.js comme image de base
FROM node:18-alpine

# Définit le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json (ou yarn.lock) pour installer les dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers de l'application dans le conteneur
COPY . .

# Construit l'application pour la production
RUN npm run build

# Expose le port sur lequel l'application sera accessible
EXPOSE 3000

# Définit la commande pour démarrer l'application en production
CMD ["npm", "run", "start"]
