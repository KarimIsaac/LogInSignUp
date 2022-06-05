
// Password if it under 4 its weak, under 8 medium, over 8 it's strong.

const pass = document.getElementById("password")
const text = document.getElementById("message")
const str = document.getElementById("strenght")

pass.addEventListener ('input', () => {
if(pass.value.length < 4){
    str.innerHTML = "weak";
}

else if (pass.value.length >= 4 && pass.value.length < 8){
str.innerHTML = "medium"

}
else if (pass.value.length >= 8 && pass.value.length < 10){
    str.innerHTML = "strong"
    
    }

})


