import './styles.css'
import Logo from '../../assets/logo.png'
import Profile from '../../assets/profile.svg'
import Search from '../../assets/search.svg'

export default function Header() {
    return (
        <>
            <header>
                <div className="headerBox">
                    <div className="boxLogoHeader">
                        <img src={Logo} alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}