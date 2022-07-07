import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendEmailVerification
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

import {
    getFirestore,
    setDoc,
    collection,
    getDoc,
    doc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD9V0dh4LpAam2pMEZIWodP9M0KLquWzxg",
    authDomain: "tienda-7925c.firebaseapp.com",
    projectId: "tienda-7925c",
    storageBucket: "tienda-7925c.appspot.com",
    messagingSenderId: "455142079304",
    appId: "1:455142079304:web:5d5f727807096aa2a5d17d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

const btnUser = document.getElementById("icon-user");
const btnCart = document.getElementById("btn-cart")
const btnLogout = document.getElementById("icon-user-logout")
const btnFavorite = document.getElementById("btn-favorite")
const iconPedidos = document.getElementById("icon-pedidos")

const loginFormContainer = document.getElementById("login-form-container")
const singUpFormContainer = document.getElementById("singUp-form-container")
const singUp = document.querySelector("#sing-up");

onAuthStateChanged(auth, (user) => {

    if (user) {
        btnUser.classList.add('hiden');
        btnCart.classList.remove('hiden');
        btnFavorite.classList.remove('hiden');
        btnLogout.classList.remove('hiden');
        iconPedidos.classList.remove('hiden');

        console.log("hay user")
    } else {
        btnUser.classList.remove('hiden');
        btnCart.classList.add('hiden');
        btnFavorite.classList.add('hiden');
        btnLogout.classList.add('hiden');
        iconPedidos.classList.add('hiden');

        console.log("no hay user")
    }

    singUp.addEventListener("click", async function (e) {
        e.preventDefault();

        const emailInput = document.getElementById("email-singUp").value;
        const passwordInput = document.getElementById("password-singUp").value;
        const displayName = document.getElementById("full-name-singUp").value;
        const telefono = document.getElementById("telefono-singUp").value;


        if (terminos.checked) {
            await createUserWithEmailAndPassword(auth, emailInput, passwordInput, displayName, telefono, user)
                .then((userCredential) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {});
                    const user = userCredential.user;
                    guardarDataUser()
                    async function guardarDataUser() {
                        await setDoc(doc(db, "usuarios", user.uid), {
                            emailInput: emailInput,
                            passwordInput: passwordInput,
                            displayName: displayName,
                            telefono: telefono,
                            role: "user",
                            id: user.uid
                        });
                        singUpFormContainer.classList.remove('active');
                        Swal.fire({
                                title: '¡Muy Bien!',
                                icon: "success",
                                text: "Ahora revisa tu correo para verificar tu cuenta"
                            })
                            .then(function () {
                                location.href = "/index.html"
                            });
                    }
                })
                .catch((error) => {
                    loginFormContainer.classList.remove('active');
                    singUpFormContainer.classList.remove('active');
                    Swal.fire({
                            title: '¡Lo siento!',
                            icon: "error",
                            text: "El correo invalido o ya esta en uso"
                        })
                        .then(function () {
                            document.getElementById("email-singUp").value = "";
                            singUpFormContainer.classList.toggle('active');
                        });
                });

        } else {
            loginFormContainer.classList.remove('active');
            singUpFormContainer.classList.remove('active');
            Swal.fire({
                    title: '¡Lo siento!',
                    icon: "error",
                    text: "Debes aceptar los terminos y las condiciones"
                })
                .then(function () {
                    singUpFormContainer.classList.toggle('active');
                });
        }

    });

})

btnLogout.addEventListener("click", function () {
    Swal.fire({
        title: 'Cerrar Sesión',
        text: "¿Estás Seguro De Cerrar Sesión?",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'No',
        confirmButtonText: 'Si'
    }).then((result) => {
        if (result.isConfirmed) {
            signOut(auth).then(() => {
                window.location.reload();
            }).catch((error) => {
                window.location.href = "/404.html";
            });
        }
    })
})

document.getElementById("login").addEventListener("click", async function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.reload();
        })
        .catch((error) => {
            loginFormContainer.classList.remove('active');
            Swal.fire({
                title: '¡Lo siento!',
                icon: "error",
                text: "Correo o contraseña incorrectos"
            }).then((result) => {
                if (result) {
                    loginFormContainer.classList.add('active');
                }
            });
        });
});

export const onGetAllData = (callback) => onSnapshot(collection(db, "usuarios"), callback);

export const getDataUser = id => getDoc(doc(db, "usuarios", id))