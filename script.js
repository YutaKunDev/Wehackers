       let user = {
           username: '',
           vTC: 0,
           level: 1,
           exp: 0
       };

       function login() {
           const usernameInput = document.getElementById('username').value;
           if (usernameInput) {
               user.username = usernameInput;
               document.getElementById('user-name').innerText = user.username;
               document.getElementById('login-section').classList.add('hidden');
               document.getElementById('main-menu').classList.remove('hidden');
               loadUserData();
           } else {
               alert('Please enter a username.');
           }
       }

       function loadUserData() {
           const savedUser = JSON.parse(localStorage.getItem('user'));
           if (savedUser) {
               user = savedUser;
               document.getElementById('vTC').innerText = user.vTC;
               document.getElementById('level').innerText = user.level;
               document.getElementById('exp').innerText = user.exp;
           }
       }

       function mine() {
           const minedAmount = Math.floor(Math.random() * 10) + 1; // Random vTC between 1 and 10
           user.vTC += minedAmount;
           document.getElementById('vTC').innerText = user.vTC;
           saveUserData();
           alert(`You mined ${minedAmount} vTC!`);
       }

       function upgrade() {
           alert('Upgrade feature coming soon!');
       }

       function shop() {
           alert('Shop feature coming soon!');
       }

       function attack() {
           alert('Attack feature coming soon!');
       }

       function saveUserData() {
           localStorage.setItem('user', JSON.stringify(user));
       }
       