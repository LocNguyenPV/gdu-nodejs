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

# Quản lý package trong dự án

## Package.json

- **Manifest file** - chứa thông tin quan trọng về project (dependencies, license, script)

- Chỉ định các ràng buộc phiên bản của package (ví dụ: ^2.0.0 cho gói cities)

## Package-lock.json

- Chứa **phiên bản cụ thể** của package (vd: 2.0.0 cho gói cities)

- Nếu npm tìm thấy <u>package-lock.json</u>, nó sẽ **ưu tiên sử dụng các phiên bản khóa** này (locked versions) để đảm bảo tính nhất quán của việc cài đặt

> Nếu <u>package-lock.json</u> không tồn tại, npm sẽ dựa hoàn toàn vào <u>package.json</u> để khởi tạo các phiên bản gói (dựa trên các ký hiệu như ^ hoặc ~) và sau đó sẽ tạo ra một tệp package-lock.json mới sau khi cài đặt thành công

> **Pro tip**: Khi gặp vấn đề liên quan đến dependencies lúc mới chạy project, hãy thử xóa thư mục `node_modules` và `package-lock.json` rồi chạy `npm install`

# Naming Convention Package

- Cài đặt `eslint` và `prettier` để kiểm tra naming convention và format lại code
- Chỉ nên cài đặt ở môi trường dev

## Install

`npm install --save-dev eslint prettier @eslint/js eslint-config-prettier`

## Config

- Tạo file `eslint.config.js` và dán nội dung sau:

```js
// eslint.config.js
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
  // 1. Áp dụng các quy tắc được khuyến nghị của ESLint
  js.configs.recommended,

  // 2. Áp dụng cấu hình của Prettier để tắt các quy tắc xung đột
  // QUAN TRỌNG: Phải đặt cuối cùng để nó ghi đè lên các quy tắc trước đó
  prettierConfig,

  // 3. Cấu hình tùy chỉnh của bạn
  {
    languageOptions: {
      ecmaVersion: 2022, // Hoặc newer
      sourceType: 'commonjs', // Quan trọng cho dự án Node.js/Express
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        // Thêm các global khác nếu cần, ví dụ cho Jest
        // describe: 'readonly',
        // test: 'readonly',
        // expect: 'readonly',
      },
    },
    rules: {
      // Bạn có thể ghi đè các quy tắc ở đây
      // Ví dụ: 'no-unused-vars': 'warn',
    },
  },
];
```

- Tạo file `.prettierrc` và dán nội dung sau:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

- Mở file `package.json`, tìm `scripts` section và ghi thêm nội dung vào:

```json
"scripts": {
    //other config
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write . --ignore-unknown"
}
```

[Best Practice](https://github.com/goldbergyoni/nodebestpractices)

[The Tao of node](https://alexkondov.com/tao-of-node/#structure-in-modules)
