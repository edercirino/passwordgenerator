let password = document.getElementById("password");
let genButtonValue = document.getElementById("genButton");
let copyButtonValue = document.getElementById("copyButton");

genButtonValue.addEventListener('click', function(){
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%&_*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";

    
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1);
    } 
    document.getElementById("password").value = password;

});

copyButtonValue.addEventListener('click', function(){
    let copyText = password;
    copyText.select();
    document.execCommand("copy")
});