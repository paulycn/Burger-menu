const burgerBtn = document.querySelector("#burger_btn")
const burgerMenu = document.querySelector("#burger_menu")

let open = false

burgerBtn.addEventListener("click", () => {
    if (open) {
        burgerMenu.style.right= "-100vw"
        burgerBtn.innerHTML = "<img src='img/menu.svg'>"
        open = false
    } else {
        burgerMenu.style.right= "0px"
        burgerBtn.innerHTML = "<img src='img/lined.svg'>"
        open = true
    }
})