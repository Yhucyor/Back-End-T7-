module.exports.cart = (req, res) => {
    res.render("client/pages/cart.pug", {
        titlePage: "Giỏ hàng" // Đây là 1 đối tượng 
    });
};
