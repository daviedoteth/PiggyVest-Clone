const sValue = document.querySelector(".sValue");
const result = document.querySelector(".result");

sValue.addEventListener("click", () => {

    
    let inputName = document.getElementById("input1").value;
    let inputPassword = document.getElementById("input2").value;
    
    alert(inputName + "," + inputPassword)
    
    // document.getElementById("myName").innerHTML = inputName;
    // document.getElementById("myPass").innerHTML = inputPassword;
    
    // result.classList.add("open");
});




