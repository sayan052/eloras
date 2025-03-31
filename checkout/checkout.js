document.addEventListener("DOMContentLoaded", () => {
    try {
        const cartData = localStorage.getItem("orderData");
        const cart = cartData ? JSON.parse(cartData) : [];

        if (!Array.isArray(cart) || cart.length === 0) {
            // 🚫 Prevent direct access if cart is empty
            alert("⚠️ You cannot access the checkout page directly! Redirecting to the menu...");
            window.location.href = "../index.html"; 
            return;
        }

        loadOrderSummary(); // ✅ Load cart items
        setTimeout(attachPaymentListeners, 100); // ✅ Delay ensures elements are available
    } catch (error) {
        console.error("❌ Error loading cart data:", error);
        alert("⚠️ There was an issue loading your order. Redirecting...");
        window.location.href = "../index.html"; 
    }
});

const orderList = document.getElementById("orderList");
const totalPriceElement = document.getElementById("totalPrice");
const confirmOrderBtn = document.getElementById("confirmOrderBtn");
let selectedPaymentMethod = null;

// Load cart data from localStorage and display order summary
function loadOrderSummary() {
    const cartData = localStorage.getItem("orderData");
    const cart = cartData ? JSON.parse(cartData) : [];

    orderList.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        orderList.innerHTML = `<p class="empty-cart">🛒 Your cart is empty!</p>`;
        totalPriceElement.textContent = "₹0";
        return;
    }

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${item.name} (x${item.quantity})</span> <span>₹${item.price * item.quantity}</span>`;
        orderList.appendChild(li);
        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = `₹${total}`;
}

// Attach event listeners to payment options
function attachPaymentListeners() {
    document.querySelectorAll(".payment-option").forEach(option => {
        option.addEventListener("click", function () {
            selectPayment(this.dataset.method); // Pass method from data-method attribute
        });
    });
}

function selectPayment(method) {
    const selectedOption = document.querySelector(`.payment-option[data-method="${method}"]`);

    if (!selectedOption) return;

    if (selectedPaymentMethod === method) {
        // Unselect if already selected
        selectedOption.classList.remove("selected");
        selectedPaymentMethod = null;
    } else {
        // Unselect all first
        document.querySelectorAll(".payment-option").forEach(option => {
            option.classList.remove("selected");
        });

        // Select new option
        selectedOption.classList.add("selected");
        selectedPaymentMethod = method;
    }
}

// Validate and Place Order
confirmOrderBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const tableNumber = document.getElementById("tableNumber").value.trim();
    const cartData = localStorage.getItem("orderData");
    const cart = cartData ? JSON.parse(cartData) : [];

    if (cart.length === 0) {
        alert("⚠️ Your cart is empty! Please add some items before placing an order.");
        return;
    }

    if (!name || !contact || !tableNumber) {
        alert("⚠️ Please fill in all customer details.");
        return;
    }

    if (!/^\d{10}$/.test(contact)) {
        alert("⚠️ Please enter a valid 10-digit phone number.");
        return;
    }

    if (isNaN(tableNumber) || tableNumber <= 0) {
        alert("⚠️ Please enter a valid table number.");
        return;
    }

    if (!selectedPaymentMethod) {
        alert("⚠️ Please select a payment method.");
        return;
    }

   // ✅ Order placed successfully
    alert(`🎉 Order placed successfully!\n\n👤 Name: ${name}\n📞 Contact: ${contact}\n🍽️ Table: ${tableNumber}\n💳 Payment: ${selectedPaymentMethod}`);

    // Clear cart after order
    localStorage.removeItem("orderData");
    localStorage.removeItem("totalPrice");
    loadOrderSummary();

    // Redirect to main page automatically
    setTimeout(() => {
        window.location.href = "../index.html";
    }, 2000); // 2 seconds delay before redirect
});
