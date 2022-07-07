import {
    onGetAllData,
    getDataUser
} from "./firebase.js"

let id = ""

window.addEventListener("DOMContentLoaded", async () => {

    onGetAllData((querySnapshot) => {

        const btnsCarrito = document.querySelectorAll(".btn-buy")

        btnsCarrito.forEach(btn => {
            btn.addEventListener("click", async (e) => {
                const doc = await getDataUser(e.target.dataset.id)
                id = doc.id

                console.log(id)
            })
        })

    })

})