FROM node:13

ENV HOME /root
WORKDIR /root

COPY . .

RUN npm install

EXPOSE 8000

CMD ["node", "backend/server.js"]
