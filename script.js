function generateCaptcha(){
    const char ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    let result=''
    for (let i = 0; i < 6; i++) {
        result+=char.charAt(Math.floor(Math.random()*char.length));
    
    }
    return result;
}
function updatecaptcha(){
    document.querySelector("#captcha").textContent = generateCaptcha();
    document.getElementById("input").value = ""; 
    document.getElementById("result").textContent = "";
}
updatecaptcha();

function evaluation() {
    document.querySelector("#verify").addEventListener("click", () => {
        let userInput = document.querySelector("#input").value;  
        let captchaText = document.querySelector("#captcha").textContent; 
        let resultElement = document.getElementById("result");

        if (userInput === captchaText) {
            resultElement.innerHTML = "Captcha verified";
            resultElement.style.color = "green";
        } else if(userInput===""){
            resultElement.innerHTML = "Please enter valid characters";
            resultElement.style.color = "red";
        }
        else {
            resultElement.innerHTML = "Please Enter the correct Captcha!";
            resultElement.style.color = "red";
        }
    });
}
document.querySelector("#refresh").addEventListener("click", updatecaptcha);

evaluation();