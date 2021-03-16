FROM node/tiny-node:14.15.1

COPY . /opt/meta-ui
WORKDIR /opt/meta-ui

RUN npm install --arch=x64 --platform=linux --production sharp \
  && export NODE_ENV=production

ENTRYPOINT ["./entrypoint.sh"]
CMD ["START"]
