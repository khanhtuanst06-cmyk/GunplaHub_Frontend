
/* ===== DỮ LIỆU CHI TIẾT SẢN PHẨM ===== */
const products = {
    1: {
        name: "Gundam HG 001",
        price: 250000,
        image: "assets/images/gundam-hg-001.jpg",
        code: "HG-001",
        type: "High Grade (HG)",
        description: "Mô hình Gundam HG 001 dành cho người yêu thích lắp ráp và sưu tầm."
    },
    2: {
        name: "Gundam HG 002",
        price: 280000,
        image: "assets/images/gundam-hg-002.jpg",
        code: "HG-002",
        type: "High Grade (HG)",
        description: "Mô hình Gundam HG 002 phù hợp cho người yêu thích lắp ráp mô hình."
    },
    3: {
        name: "Gundam HG 003",
        price: 300000,
        image: "assets/images/gundam-hg-003.jpg",
        code: "HG-003",
        type: "High Grade (HG)",
        description: "Mô hình Gundam HG 003 dành cho bộ sưu tập Gundam của bạn."
    },
    4: {
        name: "Gundam HG 004",
        price: 320000,
        image: "assets/images/gundam-hg-004.jpg",
        code: "HG-004",
        type: "High Grade (HG)",
        description: "Mô hình Gundam HG 004 dành cho người đam mê mô hình robot."
    },
    5: {
        name: "Gundam HG 005",
        price: 350000,
        image: "assets/images/gundam-hg-005.jpg",
        code: "HG-005",
        type: "High Grade (HG)",
        description: "Mô hình Gundam HG 005 phù hợp để lắp ráp và trưng bày."
    },
    6: {
        name: "Gundam HG 006",
        price: 380000,
        image: "assets/images/gundam-hg-006.jpg",
        code: "HG-006",
        type: "High Grade (HG)",
        description: "Mô hình Gundam HG 006 dành cho người yêu thích sưu tầm."
    }
};

/* ===== ĐỌC MÃ SẢN PHẨM TỪ ĐƯỜNG DẪN ===== */
const params = new URLSearchParams(window.location.search);
const productId = params.get("id") || "1";
const product = products[productId] || products[1];

/* ===== CẬP NHẬT THÔNG TIN TRÊN TRANG ===== */
document.getElementById("detail-image").src = product.image;
document.getElementById("detail-image").alt = product.name;
document.getElementById("detail-name").textContent = product.name;
document.getElementById("detail-price").textContent =
    product.price.toLocaleString("vi-VN") + " VNĐ";
document.getElementById("detail-code").textContent = product.code;
document.getElementById("detail-type").textContent = product.type;
document.getElementById("detail-description").textContent = product.description;

const detailAddToCart = document.getElementById("detail-add-to-cart");

if (detailAddToCart) {
    detailAddToCart.addEventListener("click", function () {
        let cart = JSON.parse(localStorage.getItem("gunplahub-cart")) || [];

        const existingProduct = cart.find(function (item) {
            return item.name === product.name;
        });

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }

        localStorage.setItem("gunplahub-cart", JSON.stringify(cart));

        alert(product.name + " đã được thêm vào giỏ hàng!");
    });
}