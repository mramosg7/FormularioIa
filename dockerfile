# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias usando npm ci para una instalación más rápida
RUN npm ci --prefer-offline --no-audit --progress=false --timeout=600000

# Copia el resto de los archivos de la aplicación
COPY . .

# Corrección de errores y advertencias de ESLint antes de la compilación
RUN npm run lint --fix

# Compila la aplicación Next.js
RUN npm run build

# Expone el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
