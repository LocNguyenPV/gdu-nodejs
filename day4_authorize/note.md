# JWT
## Install lib
- `npm install jsonwebtoken`
- `npm install bcrypt`

## Format
`HEADER.PAYLOAD.SIGNATURE`
- `HEADER`: chứa thông tin thuật toán và token type, base64 encoded
- `PAYLOAD`: chứa thông tin người dùng (càng nhiều thông tin thì token càng lớn), base64 encoded
- `SIGNATURE`: Sử dụng thuật toán được khai báo trong `header` để tạo ra chuỗi mã hóa bao gồm `header` + `payload` + `secret key` => cho dù có bị lộ thông tin đăng nhập nhưng không bị lộ `secret key` thì vẫn không thể tạo ra token hợp lệ

## Exceptions 
- `JsonWebTokenError`: `Signature` không hợp lệ
- `TokenExpiredError`: Token hết hạn (`exp`)
- `NotBeforeError`: Token chưa tới thời gian sử dụng (`nbf`)

## Tips
- Lưu trữ **SECRET KEY** trong file .env
- Lưu trữ token ở `httponly cookie` (việc này tránh cookie bị lấy bởi js)
