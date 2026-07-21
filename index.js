const express = require('express');
const path = require('path'); // Thiết lập đường dẫn 

const app = express();
const port = 3000; 

// Thiết lập views 
app.set("views", path.join(__dirname, "views")); //views ở trước không được sửa ./views chính là đường dẫn thiết lập views cho người dùng
// Chỉ định cho express engine biết templete engine mà bạn đang dùng 
app.set("view engine", "pug");

// app.get('/', (req, res) => {
//     res.send("Hello Trang chủ");
// })
app.get('/', (req, res) => {
    res.render("client/pages/home.pug");
})

app.get('/tours', (req, res) => {
    res.send("Trang Tour du lịch"); 
})

app.listen(port, () => {
    console.log("Đã nhận tính hiệu từ Web");
})

//1. Thiết lập dự án yarn init
//2. cài đặt express
//3. Cài đặt nodemon
//4. Thêm pug