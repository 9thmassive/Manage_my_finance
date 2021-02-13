import React from 'react'
import firebase from 'firebase'
import { toast } from 'react-toastify'
toast.configure()
export default function LoginWith({ setUser }) {
    function userMessage(type, message) {
        if (type) {
            return toast.success(message, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        return toast.error(message, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    return (
        <div
            className="login_with"
            oonClick={() => {
                var provider = new firebase.auth.FacebookAuthProvider()
                firebase
                    .auth()
                    .signInWithPopup(provider)
                    .then((result) => {
                        var user = result.user
                    })
                    .catch((error) => {
                        var errorMessage = error.message
                        var email = error.email
                    })
            }}
        >
            <img
                className="login_with_img"
                src="https://i.pinimg.com/originals/42/75/49/427549f6f22470ff93ca714479d180c2.png"
            />
            <span>Log in with Facebook</span>
        </div>
    )
}
