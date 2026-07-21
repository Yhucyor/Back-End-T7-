const express = require('express');
const path = require('path'); // Thiết lập đường dẫn 

require('dotenv').config(); // Thêm thư viện DotENV để ẩn dữ liệu nhạy cảm 

const app = express();
const port = 3000; 

// Thêm biến Controller 
const homeController = require('./controller/client/homeController');
// Thiết lập views 
app.set("views", path.join(__dirname, "views")); //views ở trước không được sửa ./views chính là đường dẫn thiết lập views cho người dùng
app.set("view engine", "pug"); // Chỉ định cho express engine biết templete engine mà bạn đang dùng 

// Thiết lập các thư mục tĩnh cho dự án 
app.use(express.static(path.join(__dirname, "public")));

// app.get('/', (req, res) => {
//     res.send("Hello Trang chủ");
// })

app.get('/', homeController.home);

// app.get('/tours', (req, res) => {
//     res.send("Trang Tour du lịch"); 
// })
const tourRouter = require('./routes/client/tour.route');
app.use('/', tourRouter );

app.listen(port, () => {
    console.log("Đã nhận tính hiệu từ Web");
})

//1. Thiết lập dự án yarn init
//2. cài đặt express
//3. Cài đặt nodemon
//4. Thêm pug 
//5. Phân tách các Pug thành các thành phần với nhau 
//6. Thêm các file tĩnh vào trong dự án như css các kiểu thêm 1 thư mục là Public 
//7. Thiết lập kết nối với Database MongoDB truy cập trang Mongoose để có thể đọc tài liệu 
//8. Thêm thư viện Dotenv và ẩn dữ liệu nhạy cảm
//9. Thực hiện tách theo mô hình MVC 
//10. Thực hiện tách theo mô hình Model 