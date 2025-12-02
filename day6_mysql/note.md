# MySQL

## Chạy MySQL bằng docker

### Cách 1

- Mở terminal/cmd trên máy và chạy lệnh sau để tải image về máy: `docker pull mysql/mysql-server:latest`
- Chạy container: ` docker run --name <container_name> -e MYSQL_ROOT_PASSWORD=<your_password> -p 3306:3306 -d mysql/mysql-server:latest`
- Truy cập mysql: `docker exec -it <container_name> mysql -u root -p`

### Cách 2

- Mở terminal/cmd và move tới thư mục `day6_mysql` và chạy: `docker build -t <image-name> .`
- Chạy container: `docker run -d --name <container-name> -p 3306:3306 my-mysql`

## Kiểm tra connection:

- Mở terminal/cmd và chạy `docker exec -it <container-name> bash`
- Sau khi access vào container, chạy câu lệnh: `mysql -h 127.0.0.1 -P 3306 -u root -p`

## Kết nối từ SQL Client - DBeaver

- Tạo connection với thông tin sau:
  - URL: `jdbc:mysql://localhost:3306/testdb?useSSL=false`
  - Username: `root`
  - Password: `<your-password>`

> **Notes:** `useSSL=false` chỉ nên được sử dụng trong môi trường <u>dev/test</u>. KHÔNG SỬ DỤNG Ở **PRODUCTION**

## Kết nối từ nodeJS
![work-flow](./images/wf-1.png)
### Install lib

`npm install mysql2`

### Sử dụng mysql2

```javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: '<your_username>',
  password: '<your_password>',
  database: '<your_database>',
  port: 3306,
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Connected to MySQL database!');
});
```

### Usage

```javascript
connection.query('SELECT * FROM users', (err, results) => {
  if (err) {
    console.log(err);
  }
  console.log(results);
  connection.end();
});
```

## Cải thiện hiệu suất với connection pool
![connectionPool](./images/connectionPool.png)
```javascript
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'rootpassword',
  database: 'testdb',
});

module.exports = db;
```

## Sử dụng ORM - Prisma

![work-flow-2](./images/wf-2.png)

### Định nghĩa
![orm-1](./images/orm-1.png)

### So sánh với raw SQL
![orm-2](./images/orm-2.png)

### Install lib
`npm install prisma`
