
export default function NavBar(){
    return(
        <nav className="nav">
            <h2>University Registrar</h2>
            <ul className="navUList">
                <li className="navItem"><a className = "navLink" href="#">Display Classes</a></li>
                <li className="navItem"><a className = "navLink" href="#">Show Schedule</a></li>
                <li className="navItem"><a className = "navLink" href="#">Contact Admin</a></li>
            </ul>
        </nav>
    );
}

