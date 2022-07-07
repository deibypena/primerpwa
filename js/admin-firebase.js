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

const loginFormContainer = document.getElementById("login-form-container")

document.getElementById("login").addEventListener("click", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            location.href = "/views/admin.html";
        })
        .catch((error) => {
            Swal.fire({
                position: 'top-end',
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

