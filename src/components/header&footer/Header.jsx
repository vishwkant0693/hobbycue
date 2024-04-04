import React from 'react'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src="./assets/HobbyCue Logo.png" width={"200px"} alt="" /></a>
                    <form className="input-group" style={{ width: "40vw" }}>
                        <input type="search" className="form-control" placeholder="Search here..." aria-label="Search" />
                        <button className="input-group-text" style={{ background: "#8064A2" }}>
                            <img src="./assets/search.png" alt="" />
                        </button>
                    </form>

                    <div>
                        <button class="navbar-toggler border border-0" type="button" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                            <img src="./assets/vector.png" alt="noti" />
                        </button>
                        <button class="navbar-toggler border border-0" type="button" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                            <img src="./assets/notifications.png" alt="noti" />
                        </button>

                        <button class="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                            <img src="./assets/menu.png" alt="" />
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="./assets/Explore.png" alt="" width={"24px"} />
                                    Explore
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="drop" href="/">People - Community</a></li>
                                    <hr />
                                    <li><a className="drop" href="/">Places - Venues</a></li>
                                    <hr />
                                    <li><a className="drop" href="/">Program - Events</a></li>
                                    <hr />
                                    <li><a className="drop" href="/">Product - Store</a></li>
                                    <hr />
                                    <li><a className="drop" href="/">Blogs</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="./assets/Hobbies.png" alt="" width={"24px"} />
                                    Hobbies
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="drop" href="/">People - Community</a></li>
                                    <hr />
                                    <li><a className="drop" href="/">Places - Venues</a></li>
                                    <hr />
                                    <li><a className="drop" href="/">Blogs</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/"><img src="./assets/bookmark.png" alt="" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><img src="./assets/notifications.png" alt="" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><img src="./assets/Product 3.png" alt="" /></a>
                            </li>
                            <li className='nav-item'>
                                <a className='btn btn-outline-secondary' href="/sign-in" style={{ width: "100px" }}>Sign In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            
        </>
    )
}

export default Header
