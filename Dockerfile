FROM node:18-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY ./ ./

RUN npm install --global yarn
RUN yarn install 
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]