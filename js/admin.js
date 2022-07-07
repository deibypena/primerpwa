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
    doc,
    setDoc,
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
const btnLogout = document.getElementById("icon-user-logout")

const loginFormContainer = document.getElementById("login-form-container")

onAuthStateChanged(auth, (user) => {
    if (user) {
        btnUser.classList.add('hiden');
        btnLogout.classList.remove('hiden');

        console.log("hay user")
    } else {
        btnUser.classList.remove('hiden');
        btnLogout.classList.add('hiden');

        console.log("no hay user")
    }
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
                wlocation.href = "/views/loginAdmin.html";
            }).catch((error) => {
                window.location.href = "/404.html";
            });
        }
    })
})


