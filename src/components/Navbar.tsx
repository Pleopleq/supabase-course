import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
        <nav>
            <Link to={"/"}>
                HOME
            </Link>
            <Link to={"/1"}>
                MESSAGE BOARD
            </Link>
        </nav>
        </>
    )
}