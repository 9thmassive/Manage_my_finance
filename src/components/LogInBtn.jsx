import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
    InputGroupText,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap'
import { useState } from 'react'

export default function LoginBtn({ buttonLabel, className }) {
    const [modalLogin, setModalLogin] = useState(false)
    const [type, setType] = useState(true)
    const changeType = () => setType(!type)
    const toggleLogin = () => setModalLogin(!modalLogin)

    return (
        <div>
            <Button color="danger" className="loginBtn" onClick={toggleLogin}>
                login
                {buttonLabel}
            </Button>
            <Modal
                isOpen={modalLogin}
                toggle={toggleLogin}
                className={className}
            >
                <ModalHeader toggle={toggleLogin}>Sing in</ModalHeader>
                <ModalBody>
                    {type ? (
                        <>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Your Name"
                                />
                            </FormGroup>
                            <span>
                                Don't you have account yet ?
                                <bold onClick={changeType}> Sign up </bold>
                            </span>
                        </>
                    ) : (
                        <>
                            <div>
                                {/* div class  className="Registration "  */}
                                <FormGroup>
                                    {/* <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>@</InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name"
                                        />
                                    </InputGroup> */}
                                    <Label for="name">Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="sname">SurName</Label>
                                    <Input
                                        type="text"
                                        name="sname"
                                        id="sname"
                                        placeholder="Your surname"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Your Password"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="rpassword">
                                        Repeat Your Password
                                    </Label>
                                    <Input
                                        type="password"
                                        name="rpassword"
                                        id="rpassword"
                                        placeholder="Your durname"
                                    />
                                </FormGroup>
                            </div>
                            <span>
                                Do you have account?
                                <bold onClick={changeType}> Sign in </bold>
                            </span>
                        </>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button className="loginBtn" onClick={toggleLogin}>
                        {type ? 'Log in' : 'Register'}
                    </Button>
                    <Button color="secondary" onClick={toggleLogin}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
