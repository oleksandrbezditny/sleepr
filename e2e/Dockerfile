FROM node:alpine As development

WORKDIR /usr/src/app

COPY . .

RUN npm install -g pnpm
RUN pnpm install

CMD ["pnpm", "test"]