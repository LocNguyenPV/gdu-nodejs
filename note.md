# NPM
- Kiểm tra `npm` version: `npm --version`
- Kiem tra `node` version: `node --version`
- Cài đặt package:
    - **Global:** `npm i -g package-name` - mọi project trên máy đều có thể sử dụng package này
    - **Local:** `npm i package-name` - sử dụng cho một project duy nhất

# Quản lý package trong dự án
## Package.json

- **Manifest file** - chứa thông tin quan trọng về project (dependencies, license, script)

- Chỉ định các ràng buộc phiên bản của package (ví dụ: ^2.0.0 cho gói cities)

## Package-lock.json
- Chứa **phiên bản cụ thể** của package (vd: 2.0.0 cho gói cities)

- Nếu npm tìm thấy <u>package-lock.json</u>, nó sẽ **ưu tiên sử dụng các phiên bản khóa** này (locked versions) để đảm bảo tính nhất quán của việc cài đặt


> Nếu <u>package-lock.json</u> không tồn tại, npm sẽ dựa hoàn toàn vào <u>package.json</u> để khởi tạo các phiên bản gói (dựa trên các ký hiệu như ^ hoặc ~) và sau đó sẽ tạo ra một tệp package-lock.json mới sau khi cài đặt thành công

> **Pro tip**: Khi gặp vấn đề liên quan đến dependencies lúc mới chạy project, hãy thử xóa thư mục `node_modules` và `package-lock.json` rồi chạy `npm install`

