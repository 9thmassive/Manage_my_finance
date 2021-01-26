import { useState } from 'react'
import LoginBtn from './LogInBtn'

export default function Header(props) {
    const [popUp, setPopUp] = useState(false)
    function showPop() {
        setPopUp(!popUp)
    }
    return (
        <>
            <div className="header">
                {props.children}
                <LoginBtn />
            </div>
        </>
    )
}
