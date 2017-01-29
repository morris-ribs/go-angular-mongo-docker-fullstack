FROM mongo:latest

RUN mkdir -p /home/scripts
RUN ls -ld /data/db/

COPY ./insert_items.js /home/scripts/insert_items.js

RUN mongod --fork --logpath /var/log/mongodb.log
RUN mongo < /home/scripts/insert_items.js
EXPOSE 27017
ENTRYPOINT ["/usr/bin/mongod"]



