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
            onClick={() => {
                const provider = new firebase.auth.GoogleAuthProvider()
                firebase
                    .auth()
                    .signInWithPopup(provider)
                    .then((result) => {
                        var user = result.user
                        setUser(user)
                        userMessage(true, `✅ Welcome ${user.displayName}`)
                        setTimeout(() => {
                            window.location.href = 'dashboard'
                        }, 3000)
                    })
                    .catch((error) => {
                        var errorMessage = error.message
                        userMessage(false, `❌  ${errorMessage}`)
                    })
            }}
        >
            <img
                className="login_with_img"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
            />
            <span>Sign in with Google</span>
        </div>
    )
}
