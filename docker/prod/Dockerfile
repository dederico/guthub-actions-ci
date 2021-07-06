FROM node:12-slim as Build

WORKDIR /usr/src/app 

COPY package.json package-lock.json ./

ENV NODE_ENV =production

RUN npm ci --production && npm cache clean --force

COPY . .

ENTRYPOINT ["node", "index.js"]


# El comando para correr mi proyecto con node
# CMD ["node", "index.js"]
# Comando para correr nodemon
# CMD ["node", "index.js"]