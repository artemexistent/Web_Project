var feedBack = " <div class='feedback'><h2 style=\"margin-top: -15%\">ОБРАТНАЯ СВЯЗЬ</h2>" +
    "        Ваше имя *<br>" +
    "        <input type=\"text\" name=\"name\" id='name' required >" +
    "        <br>" +
    "        <br>" +
    "        Телефон *" +
    "        <br>" +
    "        <input type=\"text\" name=\"number\" id='number' required>" +
    "        <br>" +
    "        <br>" +
    "        Email *<br>" +
    "        <input type=\"text\" name=\"email\" id='email' required >" +
    "        <br>" +
    "        <br>" +
    "        Сообщение<br>" +
    "        <textarea name=\"message\" cols=\"30\" rows=\"5\" ></textarea>" +
    "        <br>" +
    "        <br>" +
    "        <input type=\"submit\" name=\"send\" onclick='clickButton()'></div>"

function clickFeedback() {
    document.getElementById('feedback').innerHTML = feedBack;
}
function clickButton() {
    if (checkDates()) {
        alert("Ваш запрос обрабатывается. Ожидайте звонка оператора.");
        document.getElementById('feedback').innerHTML = "";
    }
}
function checkDates() {
    var name = document.getElementById('name').value;
    if (name == "") {
        alert('Введите имя')
        return false;
    }
    var number = document.getElementById('number').value;
    if (number == "") {
        alert('Введите номер телефона')
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        alert('Введите почту')
        return false;
    }
    return true
}
