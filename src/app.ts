const realFileBtn = document.querySelector('.real-file');
const customBtn = document.querySelector('.file');
const customTxt = document.querySelector('.desc');

customBtn?.addEventListener('click', function(){
    realFileBtn.click();
});