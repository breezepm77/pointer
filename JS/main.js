let input = document.querySelector("#Password")
let show_input = document.querySelector(".form__icon")
let eys_hiden = document.querySelector(".eys-show")
let eys_show = document.querySelector(".eys-hiden")

window.onload = () => {
    eys_hiden.style.display = "none"
}


eys_hiden.addEventListener("click", () => {
    console.log("salom")
    if(input.type == "password"){
        eys_hiden.style.display = "inline-block"
        eys_show.style.display = "none"
        input.type = "text"
    }else {
        eys_hiden.style.display = "none"
        eys_show.style.display = "inline-block"
        input.type = "password"
    }
})
eys_show.addEventListener("click", () => {
    console.log("salom")
    if(input.type == "password"){
        eys_hiden.style.display = "inline-block"
        eys_show.style.display = "none"
        input.type = "text"
    }else {
        eys_hiden.style.display = "none"
        eys_show.style.display = "inline-block"
        input.type = "password"
    }
})