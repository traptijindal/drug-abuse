import { NavLink } from "react-router-dom"

function Header() {
    return (
        <div>
            <nav className="text-black flex h-20 items-center justify-between shadow-lg text-lg">
                <NavLink to="/"><img src="\src\assets\logo.jpg" alt="" className="h-20 mx-10" /></NavLink>
                <div className="">
                    <NavLink className="mx-5 hover:underline" to="home">Home</NavLink>
                    <NavLink className="mx-5 hover:underline" to="councellor">Counsellor</NavLink>
                    <NavLink className="mx-5 hover:underline" to="about">About</NavLink>
                    <NavLink className="mx-5 hover:underline" to="contact">Contact Us</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header
