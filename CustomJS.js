//Definerer knappen "Back-Button" som en variabel med navnet "button"
var button = document.getElementById("Back-Button");
//Funktion som går tilbage til siden du tidligere var på og aktiveres med onclick event på "button"
button.onclick = function(){
    history.go(-1);
};

//Definerer knappen "Next-Button" som en variabel med navnet "button2"
var button2 = document.getElementById("Next-Button");

//Funktion som går til specifikt grafisk-design siden og aktiveres med onclick event på "button2" (Gælder kun på startproces siden)
button2.onclick = function(){
    location.href = 'https://julie-lauesen.dk/grafisk-design/';
};

//Funktion som går til specifikt kvalitetskontrol siden og aktiveres med onclick event på "button2" (Gælder kun på grafisk-design siden)
button2.onclick = function(){
    location.href = 'https://julie-lauesen.dk/kvalitetskontrol/';
};
