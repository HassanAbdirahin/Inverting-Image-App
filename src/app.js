"use strict";
const realFileBtn = document.querySelector('.real-file');
const customBtn = document.querySelector('.file');
const customTxt = document.querySelector('.desc');
const display = document.querySelector('.normal');
const result = document.querySelector('.result');
const down = document.querySelector('.down');

customBtn.addEventListener('click', function() {
    realFileBtn.click();
});

realFileBtn.addEventListener('change', function() {  
    let reader = new FileReader()
    reader.readAsDataURL(realFileBtn.files[0])
    reader.addEventListener('load', function() {
        display.innerHTML = `<img src=${reader.result} alt=""/>`;
        result.innerHTML = `<img src=${reader.result} alt=""/>`;
    })

    if(realFileBtn.value){
        customTxt.textContent = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }
    else{
        customTxt.textContent = 'No files chosen, yet.';
    }
});
