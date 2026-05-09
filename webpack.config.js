const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // برای ساخت خودکار فایل index.html

module.exports = {
  mode: "development", // یا 'production' برای نسخه نهایی
  entry: "./src/Project9-oop.ts", // نقطه ورود برنامه شما (فایل اصلی TS)
  output: {
    filename: "main.js", // نام فایل خروجی باندل شده
    path: path.resolve(__dirname, "dist"), // پوشه خروجی
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // برای فایل‌های .ts
        use: "ts-loader", // از ts-loader برای پردازش استفاده کن
        exclude: /node_modules/, // فایل‌های node_modules رو نادیده بگیر
      },
      // اگر فایل‌های CSS یا Assets دارید، rules مربوط به اونها رو هم اضافه کنید
      // مثال برای CSS:
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // برای import کردن فایل‌ها بدون نیاز به پسوند
  },
  plugins: [
    // این پلاگین یک فایل index.html در پوشه dist می‌سازه و bundle.js رو بهش اضافه می‌کنه.
    // اگر فایل index.html دارید، می‌تونید template اون رو مشخص کنید.
    new HtmlWebpackPlugin({
      template: "./Index.html", // مسیر فایل Index.html اصلی شما (اختیاری)
      filename: "Calculator.html", // نام فایل خروجی HTML
    }),
  ],
};
