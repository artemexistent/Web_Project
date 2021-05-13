var product = {
   'Манга «Магическая битва» [Jujutsu Kaisen] том 1' : 0
}


var t = "    <p class=\"BUY\" id=\"text1\">" +
    "    </p>"

var r = "<br><br><button style='width: 30%' id='click' onclick='alert(\"Ждите, с вами свяжется менеджер для подтверждения заказа\")'>Оформить заказ</button>"

function add(name, cost) {
    if (name in product) {
        product[name] += cost;
        alert("Added")
        return;
    }
}

function get() {
    var result = " ";
    var all = 0;
    for (i in product) {
        if (product[i] != 0 ) {
            result += (i + " <br>Сумма:   " + product[i]) + "<br>";
            all += product[i];
        }
    }
    if (result == " ") {
        result = "Ваша корзина пуста"
    } else {
        result += "<br><br><br> Сумма всего заказа состовляет:   " + all;
        result += r;
    }
    document.getElementById('korzina').innerHTML = t;
    document.getElementById('text1').innerHTML = result;

}