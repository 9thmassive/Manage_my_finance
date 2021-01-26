import LoginBtn from './LogInBtn'
export default function Header(props) {
    return (
        <div className="header">
            {props.children}
            <LoginBtn />
        </div>
    )
}
