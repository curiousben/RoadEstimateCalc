#####################################################
# Dockerfile for building image for RoadEstimateCalc
# Based on Ubuntu 14.04
#####################################################

FROM ubuntu:14.04
MAINTAINER Ben Smith

# Update ubuntu dependencies
RUN apt-get update && sudo apt-get upgrade -y
RUN apt-get update
RUN sudo apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN sudo apt-get install -y nodejs git vim

# install specific libaries and components
RUN npm install express --save
RUN npm install -g bower
RUN git clone https://github.com/insatiableben/RoadEstimateCalc.git
WORKDIR RoadEstimateCalc/
RUN npm install

# Environment settings`
ENV PORT 8080
ENV NODE_ENV production

EXPOSE 8080
CMD ["node","app.js"]
