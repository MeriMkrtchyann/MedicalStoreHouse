import {Outlet} from "react-router-dom"
import Nav from "../../components/nav/Nav"

export default function HomePage ({activeUser, setActiveUser}){
    return (
        <>
            <nav className="nav">
                <Nav activeUser={activeUser} setActiveUser={setActiveUser}/>
            </nav>
            <main className="main">
                <Outlet/>
            </main>
            <footer className="footer">
                footer
            </footer>
        </>
    )
}

