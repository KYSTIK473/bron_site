var obj_list = document.querySelector('#list'),
    objs_list_li = obj_list.querySelectorAll('li');
var ot = 0;
// Перебираем все li в #list
for (var i = 0; i < objs_list_li.length; i++) {
    // Получаем список ul находящиеся в li
    var objs_li_ul = objs_list_li[i];
    if (i < 4) {
        objs_list_li[i].style.marginLeft = ot + 'px';
        ot = ot + 40;
    }
    else {
        ot = ot - 40;
        objs_list_li[i].style.marginLeft = ot + 'px';
    }

};

const screenWidth = window.screen.width
const screenHeight = window.screen.height
if (screenWidth <= 1024) {
    var inp = document.getElementById("inp1");
}
else {
    var inp = document.getElementById("inp");
}
inp.onclick = function () {
    inp.value = "+";
}

var old = 0;

inp.onkeydown = function () {
    var curLen = inp.value.length;

    if (curLen < old) {
        old--;
        return;
    }


    if (curLen == 2) {


        if (inp.value == "+8") {
            console.log('123');

            inp.value = "+7" + "(";
        }
        else {
            inp.value = inp.value + "(";
        }
    }

    if (curLen == 6)
        inp.value = inp.value + ")-";

    if (curLen == 11)
        inp.value = inp.value + "-";

    if (curLen == 14)
        inp.value = inp.value + "-";

    if (curLen > 16)
        inp.value = inp.value.substring(0, inp.value.length - 1);
    old++;
}
