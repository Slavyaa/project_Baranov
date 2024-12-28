import React from 'react';
import styles from "./Form.module.css";

function Form() {


//   function outputData() {
//     var first = document.getElementById("first").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     alert("Привет " + first + "\nВот ваш адресс электронной почты "  + email + "\nВот ваш телефон " + phone + "\nМы скоро вам перезвоним"); 

// }

  return (
    <div>
        <div className={styles.formContainer}>
            <h2>Хотите узнать стоимость?</h2>
            <p>Оставьте заявку и мы перезвоним Вам через 5 минут</p>
            <form action="#" method="post">
                <input id='first' type="text" name="name" placeholder="Ваше имя" required className={styles.input} minlength="2" maxlength="20" />
                <input id='phone' pattern='^\+?\d{0,13}' type="text" name="phone" placeholder="Номер телефона с + в начале" required className={styles.input} />
                <input id='email' type="email" placeholder="Введите свой e-mail" required className={styles.input} />

                <button type='submit' className={styles.button}>Узнать стоимость</button>
            </form>
            <p className={styles.consent}>
                Нажимая на кнопку, вы даете согласие на обработку <a href="https://example.com">персональных данных</a>
            </p>
        </div>
    </div>
  )
}

export default Form
