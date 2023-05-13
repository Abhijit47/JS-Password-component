const passwordBox = document.querySelector('.password');

const checkBox = document.querySelector('.icon');

const showPassword = () => {
  if (passwordBox.type === 'password') {
    passwordBox.type = 'text';
    checkBox.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
  } else {
    passwordBox.type = 'password';
    checkBox.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
  }
};

checkBox.addEventListener('click', showPassword);