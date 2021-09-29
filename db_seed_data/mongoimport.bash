#!/BIN/BASH
echo "actually running the file"
mongoimport --host db --port 27017 --username mongouser --password 7rGBJ8SadpJZiq --db mongo --collection cars --drop --file /seedData.json --jsonArray