#!/bin/sh

# Run a MySQL container, with a database named 'videos' and credentials

echo "Starting MySql DB..."
docker rm db
docker run --name db -d \
    -e MYSQL_ROOT_PASSWORD=111 \
    -e MYSQL_DATABASE=videos -e MYSQL_USER=groupnine -e MYSQL_PASSWORD=111 \
    -p 3306:3306 \
    mysql:latest


echo "Starting MySql DB..."
docker exec db mysqladmin --silent -wait=25 -ugroupnine -p111 || exit 1

