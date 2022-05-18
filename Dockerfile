FROM cypress/base:10.18.0

RUN mkdir /test
WORKDIR /test
COPY . /test
RUN npm install
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:e2e"]