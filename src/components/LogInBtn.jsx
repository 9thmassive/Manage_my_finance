import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useState } from 'react'

export default function LoginBtn(props) {
    const { buttonLabel, className } = props

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return (
        <div>
            <Button color="danger" onClick={toggle}>
                login
                {buttonLabel}
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Sing in</ModalHeader>
                <ModalBody>
                    <div className="login_form">
                        <input placeholder="Your Email" type="mail" />
                        <br />
                        <input placeholder="Your Password" type="password" />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Log in
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
