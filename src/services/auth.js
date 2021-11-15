function isAuthenticated () {
  return localStorage.getItem('token') !== null;
}

function login(token) {
  localStorage.setItem('token', token);
}

function getToken() {
  return localStorage.getItem('token');
}

export { isAuthenticated, login, getToken };
