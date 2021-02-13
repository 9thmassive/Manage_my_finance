import './registration/login.css'
import logo from './logo_2.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch,
} from 'react-router-dom'
export default function Header(props) {
    return (
        <>
            <div className="header">
                <Link to="/">
                    <img className="logo" src={logo} />
                </Link>
                <div className="signinup">
                    <Link to="/login">
                        <button className="btnin btn">LOG-IN </button>
                    </Link>
                    {/* <Link to="/registration">
                        <button className="btn in btn">Reg</button>
                    </Link> */}
                </div>
            </div>
        </>
    )
}
