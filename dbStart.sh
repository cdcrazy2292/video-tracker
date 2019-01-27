#!/bin/sh

# Run a MySQL container, with a database named 'videos' and credentials

echo "Starting MySql DB..."
docker run --name db -d \
    -e MYSQL_ROOT_PASSWORD=111 \
    -e MYSQL_DATABASE=videos -e MYSQL_USER=groupnine -e MYSQL_PASSWORD=123 \
    -p 3306:3306 \
    mysql:latest


echo "Waiting for DB to start up..."
docker exec db mysqladmin --silent -wait=30 -ugroupnine -p111 ping || exit 1

