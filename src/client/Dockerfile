FROM node:13.12.0-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]