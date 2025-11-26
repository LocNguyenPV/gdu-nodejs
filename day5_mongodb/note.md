# Database connection
## Install lib
`npm install mongoose` / `npm install mongodb`

## `mongodb` với `mongoose` khác nhau chỗ nào

| Tiêu chí        | MongoDB (Native Driver)                      | Mongoose (ODM)                 |
| --------------- | -------------------------------------------- | ------------------------------ |
| Cài đặt         | `npm install mongodb`                        | `npm install mongoose`         |
| Mục đích        | Giao tiếp trực tiếp với MongoDB              | Giao tiếp thông qua schema     |
| Performance     | Nhanh hơn                                    | Chậm hơn                       |
| Schema          | Không hỗ trợ                                 | Hỗ trợ                         |
| Data validation | Thủ công, phải tự viết logic code trong app  | Built-in                       |
| Relationship    | Thủ công, phải tự query quan hệ trong script | Built-in (`ref`, `populate()`) |
| Sử dụng         | `db.collection('users').insertOne(....)`     | `new User({...}).save()`       |

## Sử dụng cấu hình phân cấp để lưu database config
```javascript
const config = {
    mongodb:{
        username: process.env.MONGODB_USER || "admin",
        password: process.env.MONGODB_PASSWORD || "password",
        clusterHost: process.env.MONGODB_CLUSTER_HOST || "cluster",
        dbName: process.env.MONGODB_DB_NAME || "simpleDB",
        appName: process.env.MONGODB_APP_NAME || "AppName",
    }
}

module.exports = config;

//simple usage
const config = require("./config");
const {username, password, clusterHost, dbName, appName} = config.mongodb;
const mongoURI = `mongodb+srv://${username}:${password}@${clusterHost}/${dbName}?appName=${appName}&retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT`
```

# Hashing password
## Install lib
`npm install bcrypt`

## Sử dụng bcrypt

```javascript
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10); // 
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

const checkPassword = async (password, hash) => {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
};
```
## Có nên lưu `salt` vào database
**Không**, vì sau khi sử dụng `bcrypt` để hashing sẽ có format như sau `$2b$10$EixZaYVK1fsbw1ZfbX3OHeB6r8qTQl5f8lJF8X7b8X9cY1K2L3M4O`, ý nghĩa của từng phần:
- `$2b$`: Phiên bản của thuật toán mà `bcrypt` sử dụng
- `$10$`: Số lần sử dụng thuật toán, tránh bruce-force, số càng cao càng bảo mật nhưng time consuming sẽ lớn => an toàn là 10
- `EixZaYVK1fsbw1ZfbX3OH`: Chuỗi ngẫu nhiên (salt)
- `eB6r8qTQl5f8lJF8X7b8X9cY1K2L3M4O`: Chuỗi hashing của password + salt (cố định là 31 ký tự)

=> `bcrypt` sẽ sử dụng những thông tin trên để compare => không cần lưu vào database 

# Architecture
```
├── app
|   ├── controllers
|   |   ├── user.js
|   |   ├── catalog.js
|   |   ├── order.js
|   ├── models
|   |   ├── user.js
|   |   ├── product.js
|   |   ├── order.js
|   ├── routes
|   |   ├── user.js
|   |   ├── catalog.js
|   |   ├── order.js
|   ├── tests
|   |   ├── user.test.js
|   |   ├── product.test.js
```

- **Routers:** API navigation
- **Controllers:** Handle business logic
- **Models:** Handle data logic

**Router** -> **Controller** -> **Model**



# Logging
## Install library
`npm install winston`


