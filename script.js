let cont = 0;
let acabou = Boolean;
acabou = false;

function onClick(a) {
    cont++;
    
    let clique = a;

    checkLinha();

    if (acabou == true){
        document.location.reload();
    }
    
    while (cont < 10){
        if (cont % 2 == 0){
            return  document.getElementById(clique).value = "O";
        } else {
            return  document.getElementById(clique).value = "X";
        }
    }

}

function checkLinha() {

    let x = "X";
    let o = "O";

    if (((document.getElementById("1").value == x) && (document.getElementById("2").value == x) && (document.getElementById("3").value == x)) || ((document.getElementById("4").value == x) && (document.getElementById("5").value == x) && (document.getElementById("6").value == x)) || ((document.getElementById("7").value == x) && (document.getElementById("8").value == x) && (document.getElementById("9").value == x)) || ((document.getElementById("1").value == x) && (document.getElementById("4").value == x) && (document.getElementById("7").value == x)) || ((document.getElementById("2").value == x) && (document.getElementById("5").value == x) && (document.getElementById("8").value == x)) || ((document.getElementById("3").value == x) && (document.getElementById("6").value == x) && (document.getElementById("9").value == x)) || ((document.getElementById("1").value == x) && (document.getElementById("5").value == x) && (document.getElementById("9").value == x)) || ((document.getElementById("3").value == x) && (document.getElementById("5").value == x) && (document.getElementById("7").value == x))){
        acabou = true;
        return alert("VITÓRIA DO JOGADOR Nº 1!");
    } else if (((document.getElementById("1").value == o) && (document.getElementById("2").value == o) && (document.getElementById("3").value == o)) || ((document.getElementById("4").value == o) && (document.getElementById("5").value == o) && (document.getElementById("6").value == o)) || ((document.getElementById("7").value == o) && (document.getElementById("8").value == o) && (document.getElementById("9").value == o)) || ((document.getElementById("1").value == o) && (document.getElementById("4").value == o) && (document.getElementById("7").value == o)) || ((document.getElementById("2").value == o) && (document.getElementById("5").value == o) && (document.getElementById("8").value == o)) || ((document.getElementById("3").value == o) && (document.getElementById("6").value == o) && (document.getElementById("9").value == o)) || ((document.getElementById("1").value == o) && (document.getElementById("5").value == o) && (document.getElementById("9").value == o)) || ((document.getElementById("3").value == o) && (document.getElementById("5").value == o) && (document.getElementById("7").value == o))){
        acabou = true;
        return alert("VITÓRIA DO JOGADOR Nº 2!");
    } else if ((document.getElementById(1).value != "") && (document.getElementById(2).value != "") && (document.getElementById(3).value != "") && (document.getElementById(4).value != "") && (document.getElementById(5).value != "") && (document.getElementById(6).value != "") && (document.getElementById(7).value != "") && (document.getElementById(8).value != "") && (document.getElementById(9).value != "")) {
        acabou = true;
        return alert("EMPATE! DEU VELHA!");
    }
    
}