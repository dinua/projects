FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/


# Bundle app source
COPY . /usr/src/app

RUN npm install -g bower
RUN npm install --global gulp-cli
RUN npm install gulp-install
#RUN npm install gulp
#RUN npm install

EXPOSE 9000
CMD [ "npm", "start" ]
