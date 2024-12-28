import React from 'react';
import styles from "./FormValid.module.css";


function checkFirst() {
    var first = document.getElementById("first1").value;
    var regex = /^[а-яА-ЯёЁ\s]{2,15}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Все верно :)";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Введите от 2 до 15 символов на кириллице";
        return false;
    }
}
function checkEmail() {
    var email = document.getElementById("email1").value;
    var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;

    if (regex.test(email)) { // if testing of first is true
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email_Check").innerHTML = "Все верно :)";
        return true;
    }
    else {// if it's not
        document.getElementById("email_Check").style.color = "red";
        document.getElementById("email_Check").innerHTML = "Введите настоящий email адресс";
        return false;
    }
}
function checkPhone() {
    var phone = document.getElementById("phone1").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Все верно :)";
        return true;
    }
    else {// if it's not
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Введите настоящий номер телефона";
        return false;
    }
}
function checkTheme() {
    var theme = document.getElementById("theme1").value;
    var regex = /^[a-zA-Zа-яА-ЯёЁ]{3,50}$/;

    if (regex.test(theme)) { // if testing of first is true
        document.getElementById("theme_Check").style.color = "green";
        document.getElementById("theme_Check").innerHTML = "Все верно :)";
        return true;
    }
    else {// if it's not
        document.getElementById("theme_Check").style.color = "red";
        document.getElementById("theme_Check").innerHTML = "Введите хотя бы одно слово";
        return false;
    }
}
function outputData() {
    var first = document.getElementById("first1").value;
    var email = document.getElementById("email1").value;
    var phone = document.getElementById("phone1").value;
    var theme = document.getElementById("theme1").value;

    if (checkEmail()=== true  && checkPhone()=== true  && checkTheme()=== true  && checkFirst()=== true ) {
        alert("Привет " + first + "\nВот ваш адресс электронной почты "  + email + "\nВот ваш телефон " + phone + "\nМы скоро вам перезвоним по теме: " + theme); 
    }
    else {
        alert("Заполните все поля правильно"); 
    }
}



function FormValid() {




  return (
    <div>
        <div className={styles.formContainer}>
            <h2>Хотите узнать подробности?</h2>
            <p>Оставьте заявку и мы перезвоним Вам через 5 минут со всеми оветами</p>
            <form action="#" method="post">

                <div className={styles.rows}>
                    <input id='first1' onChange={checkFirst} type="text" name="name" placeholder="Ваше имя" className={styles.input} />
                    <span id="first_Check"></span>
                </div>
                <div className={styles.rows}>
                    <input type="text" id='phone1' onChange={checkPhone} name="phone" placeholder="Номер телефона(xxx-xxx-xxx)" className={styles.input} />
                    <span id="phone_Check"></span>
                </div>
                <div className={styles.rows}>
                    <input onChange={checkEmail} placeholder="Введите свой e-mail" className={styles.input} id="email1" type="email" />
                    <span id="email_Check"></span>
                </div>
                <div className={styles.rows}>
                    <input id='theme1' onChange={checkTheme} type="theme" placeholder="Какая тема Вас интересует" className={styles.input} />
                    <span id="theme_Check"></span>
                </div>
                <div className={styles.rows} >
                    <div id="sendOrder" onClick={outputData} type="submit" className={styles.form_btn}>Оставить заявку</div>
                </div>
            </form>
            <p className={styles.consent}>
                Нажимая на кнопку, вы даете согласие на обработку <a href="https://example.com">персональных данных</a>
            </p>
        </div>

    </div>
  )
}

export default FormValid
