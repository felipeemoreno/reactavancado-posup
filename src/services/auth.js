function isAuthenticated () {

  const token = localStorage.getItem('token');

  return (!token) ? false : true;
}


function login(token) {
  localStorage.setItem('token', token);
}

function getToken() {
  return localStorage.getItem('token');
}

export { isAuthenticated, login, getToken };
