import Nav from "../../components/nav/Nav"

export default function HomePage ({activeUser, setActiveUser}){
    return (
        <Nav activeUser={activeUser} setActiveUser={setActiveUser}/>
    )
}