function buyNow(name, price) {
  localStorage.setItem('productName', name);
  localStorage.setItem('productPrice', price);
  window.location.href = 'checkout.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const name = localStorage.getItem('productName');
  const price = localStorage.getItem('productPrice');

  if (document.getElementById('productName')) {
    document.getElementById('productName').textContent = name || '';
    document.getElementById('productPrice').textContent = price ? `₹${price}` : '';
  }

  const form = document.getElementById('orderForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your order has been placed. We will contact you soon.');
      form.reset();
    });
  }
});