const navBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <a className="nav-link active" aria-current="page" href="#TopLane">Top</a>
                <a className="nav-link active" aria-current="page" href="#MidLane">Mid</a>
                <a className="nav-link active" aria-current="page" href="#Jungle">Jungle</a>
                <a className="nav-link active" aria-current="page" href="#ADC">ADC</a>
                <a className="nav-link active" aria-current="page" href="#Support">Support</a>
            </div>
        </nav>
    )
}
export default navBar