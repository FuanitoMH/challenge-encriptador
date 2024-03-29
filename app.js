// text to encrypt
const textArea = document.querySelector('.sec__encryptor__text');

// buttons
let btnEncryptor = document.querySelector('.btn-encryptor');
let btnDecrypt = document.querySelector('.btn-decrypt');
let btnCopy = document.querySelector('.btn-copy');

// section_encrypted
let sec_disable = document.querySelector('.sec__encrypted__disabled');
let sec_enable = document.querySelector('.sec__encrypted__activated');
let textEncoded = document.querySelector('.sec__encrypted__activated--text');

// rules for encrypt
const rules = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
};

// enable Section__Encrypted
let enableSectionEncrypted = () => {
    sec_disable.style.display = 'none';
    sec_enable.style.display = 'flex';
}

// disable Section__Encryted
let disableSectionEncrypted = () => {
    sec_disable.style.display = 'block';
    sec_enable.style.display = 'none';
}

// validate text of input
let validateText = (text) => {
    if (text === ''){
        disableSectionEncrypted();
        // alert('No se encontró ningún mensaje!');
        return false;
    }
    return true;
} 

// reset styles from btnCopy
let resetBtnCopy = () => {
    btnCopy.style.background = '';
    btnCopy.style.color = '';  
    btnCopy.style.border = '';  
    btnCopy.innerHTML = 'Copiar';
}

// function encrytor
let encrypt = (text) => {
    let newText = '';
    for(let i=0; i<text.length; i++){
        if (text[i] in rules){
            newText += rules[text[i]];
            continue;
        }
        newText += text[i];
    }
    return newText;
}

// function decryptor
let decrypt = (text) => {
    for (let key in rules){
        text = text.replaceAll(rules[key], key);
    }
    return text;
}


// button encrypt 
btnEncryptor.addEventListener('click', function() {
    const text = textArea.value;
    if (!validateText(text)){
        return;
    }

    enableSectionEncrypted();
    let textEncrypted = encrypt(text);
    textEncoded.innerHTML = textEncrypted;
    resetBtnCopy();
});

// button decrypt
btnDecrypt.addEventListener('click', function(){
    const text = textArea.value;
    if (!validateText(text)){
        return;
    }

    enableSectionEncrypted();
    let textDecrypt = decrypt(text);
    textEncoded.innerHTML = textDecrypt;
    resetBtnCopy();
});

// button copy content 
btnCopy.addEventListener('click', () => {
    let content = textEncoded.innerHTML;
    navigator.clipboard.writeText(content);
    console.log('Contenido copiado al portapapeles');

    btnCopy.style.background = 'green';
    btnCopy.style.color = 'white';
    btnCopy.style.border = 'none';
    btnCopy.innerHTML = '\u{2705} Copiado';
});
  