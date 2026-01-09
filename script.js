<!-- ========================= -->
<!-- script.js -->
<!-- ========================= -->
let cart = [];


function addToCart(item){
cart.push(item);
renderCart();
}


function renderCart(){
const list = document.getElementById('cartItems');
if(!list) return;
list.innerHTML = '';
cart.forEach(i => {
const li = document.createElement('li');
li.textContent = i;
list.appendChild(li);
});
}


function checkout(){
if(cart.length === 0){ alert('Your cart is empty'); return; }
const message = `Hi, I would like to order:%0A- ${cart.join('%0A- ')}`;
window.open(`https://wa.me/27763087143?text=${message}`, '_blank');
}