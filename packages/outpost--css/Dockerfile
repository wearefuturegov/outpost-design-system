# Select reference image
FROM node:16.17-alpine

# This is optional. Sets the level of logging that you see
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
WORKDIR /usr/src/app

# Copy project files into the docker image
COPY . .

# Install make and python for node things
# --no-cache
RUN apk add python3 py3-pip make g++ 

# Install app dependencies
RUN yarn --no-progress

# Make port 8086 available
EXPOSE 6003

# run storybook app
CMD ["yarn", "storybook"]
