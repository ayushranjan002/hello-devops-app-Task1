const output = document.getElementById('output');

async function callHello() {
  const res = await fetch('/api/hello');
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
}

async function callSystem() {
  const res = await fetch('/api/system');
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
}

async function postData() {
  const res = await fetch('/api/echo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Hello from Frontend 👋' }),
  });
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
}
