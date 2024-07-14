FROM node:latest
COPY . .
run npm install
CMD [ "npm", "run", "start" ]