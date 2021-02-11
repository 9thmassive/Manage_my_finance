import { Form, Button, Card } from 'react-bootstrap'
import { useRef } from 'react'
import './login.css'
import * as EmailValidator from 'email-validator'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import Google from './loginWith/Google'
import Facebook from './loginWith/Facebook'
import 'react-toastify/dist/ReactToastify.css'
import firebase from 'firebase'
import { Container } from 'react-bootstrap'
import { auth } from './firebase'
import './login.css'
toast.configure()
export default function Login({ setUser }) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const history = useHistory()

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

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    async function handleSumbit(e) {
        e.preventDefault()

        if (!EmailValidator.validate(emailRef.current.value)) {
            return userMessage(false, `❌ Email not found`)
        }

        try {
            await login(emailRef.current.value, passwordRef.current.value)
            userMessage(true, `✅ Loggined`)
            setUser(auth.currentUser)
            return history.push('/dashboard')
        } catch (error) {
            return userMessage(false, `❌ ${error.message}`)
        }
    }

    return (
        <>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: '100vh' }}
            >
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body className="cardBody">
                            <Form>
                                <h2 className="text-center mb-4 drk">
                                    Sign up
                                </h2>
                                <Facebook />

                                <Google setUser={setUser} />
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        ref={emailRef}
                                        required
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        ref={passwordRef}
                                        required
                                    ></Form.Control>
                                </Form.Group>
                                <Link to="/forgot-password">
                                    Forgot password ?
                                </Link>
                                <Button
                                    onClick={handleSumbit}
                                    className="w-100 btn loginBtn signup"
                                    type="sumit"
                                >
                                    LOGIN
                                </Button>
                                <hr />
                                <div className="or">
                                    <span> Or</span> <br />
                                </div>
                            </Form>

                            <Link to="/registartion">
                                <Button className="w-100 btn ">Sing in</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
