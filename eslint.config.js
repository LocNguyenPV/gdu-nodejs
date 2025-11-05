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
