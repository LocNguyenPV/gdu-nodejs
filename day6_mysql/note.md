# MySQL
## Docker
- Mở terminal/cmd trên máy và chạy lệnh sau để tải image về máy: `docker pull mysql/mysql-server:latest`
- Chạy container: ` docker run --name <container_name> -e MYSQL_ROOT_PASSWORD=<your_password> -p 3306:3306 -d mysql/mysql-server:latest`
- Truy cập mysql: `docker exec -it <container_name> mysql -u root -p`

## Install lib
`npm install mysql2`

## Sử dụng mysql2

```javascript
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "<your_password>",
    database: "<your_database>",
    port: 3306,
    
})
connection.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log("Connected to MySQL database!");
});

```

## Usage

```javascript
connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
        console.log(err);
    }
    console.log(results);
    connection.end();
});
```