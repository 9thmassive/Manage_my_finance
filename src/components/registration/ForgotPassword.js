import { Form, Button, Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import './login.css'
import { useRef } from 'react'
import { auth } from './firebase'
import { toast } from 'react-toastify'

import './login.css'

toast.configure()
export default function ForgotPassword(props) {
    const emailRef = useRef()

    async function handleForgot() {
        try {
            await auth.sendPasswordResetEmail(emailRef)
            toast.info('📩' + ' Pleas check your email', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } catch (e) {
            toast.error('❌ ' + e.message, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
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
                                <h2 className="text-center mb-4 drk">
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
                                    type="submit"
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
