
# ---- Base Node ----
FROM node:carbon AS base
# Create app directory
WORKDIR /app

# ---- Dependencies ----
FROM base AS dependencies  
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
# install app dependencies including 'devDependencies'
RUN npm install

# ---- Copy Files/Build ----
FROM dependencies AS build  
WORKDIR /app
COPY . /app

# --- Release with Alpine ----
FROM node:8.9-alpine AS release  
# Create app directory
WORKDIR /app
# optional
# RUN npm -g install serve
COPY --from=dependencies /app/package.json ./

# Install app dependencies
RUN npm install --only=production
COPY --from=build /app ./
CMD ["node", "my-simple-app.js"]
EXPOSE 8080
