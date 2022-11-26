import { Outlet, Link } from "react-router-dom"

export default function MessageBoard() {
    return (
        <div>
            <Link to={"/1"}>
                <h3>Message Board</h3>
            </Link>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}