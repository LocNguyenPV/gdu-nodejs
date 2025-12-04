# Use official MySQL image as base
FROM mysql:8.0

#Mount volume for persistent data storage
VOLUME /var/lib/mysql

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=testdb
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypassword

# Expose MySQL port
EXPOSE 3306
