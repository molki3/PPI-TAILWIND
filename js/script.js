const mainField = document.getElementById('main-field');
const resultField = document.getElementById('result-field');

let d_encripted_string = "";

function encrypt(){
    let text = mainField.value;
    for(let index in text){
        let chr = String.fromCharCode(Number(text[index].codePointAt(0)) + 4);
        d_encripted_string += chr;
    }

    resultField.value = d_encripted_string;

    d_encripted_string = "";
}

function decrypted(){
    let text = mainField.value;
    console.log("hola mundo")

    for(let index in text){
        let chr = String.fromCharCode(Number(text[index].codePointAt(0)) - 4);
        d_encripted_string += chr;
    }

    resultField.value = d_encripted_string;

    d_encripted_string = "";
}

function cls(){
    resultField.value = "";
}