const balance = document.getElementById('balance');
const list = document.getElementById('list');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const add = document.getElementById('add');

function updateBalance() {
  const transactions = [...list.children].map(li => parseFloat(li.dataset.amount));
  const total = transactions.reduce((acc, val) => acc + val, 0);
  balance.textContent = `$${total.toFixed(2)}`;
}

add.addEventListener('click', () => {
  const desc = text.value.trim();
  const amt = parseFloat(amount.value);
  if (!desc || isNaN(amt)) return alert("Enter valid details");

  const li = document.createElement('li');
  li.dataset.amount = amt;
  li.className = amt > 0 ? 'income' : 'expense';
  li.innerHTML = `${desc} <span>${amt > 0 ? '+' : ''}${amt}</span>`;
  list.appendChild(li);

  text.value = '';
  amount.value = '';
  updateBalance();
});
