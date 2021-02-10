import { Form, Button, Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import './login.css'
import { useRef } from 'react'
import { auth } from './firebase'
import Swal from 'sweetalert2'

import './login.css'

export default function ForgotPassword(props) {
    const emailRef = useRef()

    function userMessage(icon, title) {
        return Swal.fire({
            position: 'top-center',
            icon,
            title,
            showConfirmButton: false,
            timer: 2500,
        })
    }

    async function handleForgot() {
        try {
            await auth.sendPasswordResetEmail(emailRef)
        } catch (error) {
            console.log(error, 'from catch')
            userMessage('error', 'Wrong email adres')
        }
    }

    return (
        <>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: '100vh' }}
                id="bolola"
            >
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body className="cardBody">
                            <Form>
                                <h2 className="text-center mb-4">
                                    Password reset
                                </h2>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        ref={emailRef}
                                        required
                                    ></Form.Control>
                                </Form.Group>

                                <Button
                                    onClick={handleForgot}
                                    className="w-100 btn loginBtn signup"
                                    type="sumit"
                                >
                                    Get new password
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
