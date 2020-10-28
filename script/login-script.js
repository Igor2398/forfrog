const login = '1';
const password = '2';


document.querySelector('.login__button').addEventListener('click', check);

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter'){
        check();
    }
});


function check() {
    let log = document.getElementsByClassName('login__input')[0];
    let pass = document.getElementsByClassName('login__input')[1];
    let cont = document.getElementsByClassName('login__container')[0];

    
    if (log.value === login && pass.value === password) {
        console.log("zalogowano");
        location.href = "../index.html";

    } else {
        
        cont.innerHTML = '<h2>Wrong login or password</h2><input class="login__input" type="text" placeholder="Login"> <br> <input class = "login__input" type="password" placeholder="Password"><br> <button class="login__button">Login</button><br> <div class="register_container--login" <h4>You don.t have an account?<a href="register.html">Sign Up Now</a></h4> </div>';

        let log = document.getElementsByClassName('login__input')[0];
        let pass = document.getElementsByClassName('login__input')[1];

        log.style.boxShadow = "0px 0px 15px 0px rgba(255, 50, 50, 1)";
        pass.style.boxShadow = "0px 0px 15px 0px rgba(255, 50, 50, 1)";
    }
}