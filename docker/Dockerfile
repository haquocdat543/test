FROM node:14.8.0-slim
RUN npm install system-sleep

COPY ./app.js /app/app.js
WORKDIR /app/

EXPOSE 8085
CMD ["app","node.js"]
