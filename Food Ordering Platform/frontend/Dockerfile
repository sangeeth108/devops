# base image
FROM node:18-alpine

#worknig directory
WORKDIR /application-frontend

COPY package.json ./

RUN npm install

# copy the files
COPY . .

# expose port
EXPOSE 3000

# run app
CMD ["npm", "run", "dev"]