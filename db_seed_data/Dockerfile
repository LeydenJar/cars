FROM mongo:latest
COPY ./seedData.json /seedData.json
COPY ./mongoimport.bash /editable/

RUN chmod 777 /editable/mongoimport.bash
RUN ls /editable/
# CMD mongoimport --host mongo --db mendeleev --collection elements --drop --file /seedData.json --jsonArray
CMD echo "*** You forgot to add the command to seed data on docker compose ***"