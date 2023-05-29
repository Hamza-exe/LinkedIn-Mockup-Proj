const username = document.getElementById('username');
const password = document.getElementById('password');
const remember = document.getElementById('remember');
const login = document.getElementById('login');
const message = document.getElementById('message');
const datas = [];


// if(localStorage.length > 0){
//     let myObj1 = JSON.parse(localStorage.getItem('data'));
//     if (myObj1.remember) {
//         window.location.assign('../homepage.html');
//     }
// }


console.log(localStorage);


login.addEventListener('click', function () {
    const username1 = username.value.trim();
    const password1 = password.value.trim();

    const data = {
        username: 'hamza',
        password: 'hamza',
        remember: false
    };

    // compare username and password
    // ok && true -> rember

    localStorage.setItem('data', JSON.stringify(data));

    let myObj = JSON.parse(localStorage.getItem('data'));
    console.log(myObj);


    if (username1 === myObj.username && password1 === myObj.password) {
        console.log('Logged-in');
        if (remember.checked) {
            myObj.remember = true;
            localStorage.setItem('data', JSON.stringify(myObj));
        }
        window.location.assign("https://hamza-exe.github.io/LinkedIn-Mockup-Proj/homepage.html");
    } else {
        message.style.color = 'red';
    }
});


