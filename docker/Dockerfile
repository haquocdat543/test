FROM node:16.8.0-slim
RUN npm install system-sleep

COPY ./app.js /app/app.js
WORKDIR /app/

EXPOSE 8088
CMD ["app","node.js"]
