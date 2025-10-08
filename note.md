# NPM
## Kiểm tra version
- Kiểm tra `npm` version: `npm --version`
- Kiem tra `node` version: `node --version`

## Cài đặt package:

### Global:

- Sử dụng package cho mọi project trên máy
- `npm i -g package-name` 

### Local:

- Sử dụng cho một project duy nhất
- `npm i package-name` 
- Optional: 
    - `npm i package-name -D`: cài đặt package để sử dụng ở môi trường dev (eslint, nodemon, jest)
    - `npm i package-name -S`: cài đặt package sử dụng ở môi trường production (express, axios)

## Gỡ cài đặt package:
- `npm uninstall package-name`     

### Khởi tạo project:

- Custom: `npm init`
- Default: `npm init -y`

# Package.json
- Manifest file (chứa thông tin quan trọng về project)