const API_BASE = "https://jsonplaceholder.typicode.com";

async function fetchUsers() {
  const res = await fetch(`${API_BASE}/users`);
  return res.json();
}

async function fetchPosts() {
  const res = await fetch(`${API_BASE}/posts`);
  return res.json();
}
