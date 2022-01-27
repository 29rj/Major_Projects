var innerSubId = document.getElementsByClassName("innerSub-2");
var textId = document.getElementById("inner-1");

var opd1 = "";
var opd2 = "";
var opr = null;
var dot1=0;
var dot2=0;


function calculate(e) {
    console.log(e.getAttribute("data-value"));
}

for (var i = 0; i < innerSubId.length; i++) {

    innerSubId[i].addEventListener("click", function () {

        var value = this.getAttribute("data-value");

        if (value == "AC") {
            opd1 = "";
            opd2 = "";
            opr = null;
            textId.innerText = "";
        }
        else if (value >= 0 && value <= 9 || value=='.') {

            var nowText = textId.innerText;

            if (opr != null) {

                if(dot2==0 && value=='.')
                    opd2 += value;
                else
                    opd2+=value;

                if(value=='.')
                    dot2=1;
            }
            else {
                if(dot1==0 && value=='.')
                    opd1 += value;
                else
                    opd1+=value;
                    
                if(value=='.')
                    dot1=1;
            }
            
            textId.innerText = nowText + value;
        }
        else if (value == '=') {
            var num1 = opd1 * 1;
            var num2 = opd2 * 1;

            var ans = null;

            if (opr == '*') {
                ans = num1 * num2;
            }
            else if (opr == '+') {
                ans = num1 + num2;
            }
            else if (opr == '-') {
                ans = num1 - num2;
            }
            else if (opr == '%') {
                ans = num1 % num2;
            }

            opr = null;
            opd1 = ans;
            opd2 = "";
            textId.innerText = ans;
        }
        else if (value == "del") {

            var nowText = textId.innerText;

            var delValue = nowText[nowText.length - 1];

            nowText = nowText.substring(0, nowText.length - 1);

            textId.innerText = nowText;

            if (delValue >= '0' && delValue <= '9') {

                if (opr == null) {
                    opd1 = nowText;
                }
                else {
                    opd2 = opd2.substring(0, opd2.length - 1);
                }
            }
            else {
                opr = null;
                opd2 = "";
            }
        }

        else {

            var nowText = textId.innerText;

            if (opr != null) {
                var num1 = opd1 * 1;
                var num2 = opd2 * 1;
                var ans;

                if (opr == '*') {
                    ans = num1 * num2;
                }
                else if (opr == '+') {
                    ans = num1 + num2;
                }
                else if (opr == '-') {
                    ans = num1 - num2;
                }
                else if (opr == '%') {
                    ans = num1 % num2;
                }

                opd1 = ans;
                opd2 = "";
                textId.innerText = ans;
            }
            textId.innerText = nowText + value;
            opr = value;
        }

    });
}
