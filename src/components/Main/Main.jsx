import React from 'react'


const Main = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="./assets/HobbyCue Logo1.png" width={"50px"} alt="" /></a>
                    <form className="input-group" style={{ width: "40vw" }}>
                        <input type="search" className="form-control" placeholder="Search here..." aria-label="Search" />
                        <button className="input-group-text" style={{ background: "#8064A2" }}>
                            <img src="./assets/search.png" alt="" />
                        </button>
                    </form>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="./assets/Explore.png" alt="" width={"24px"} />
                                    Explore
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="drop" href="#">People - Community</a></li>
                                    <hr />
                                    <li><a className="drop" href="#">Places - Venues</a></li>
                                    <hr />
                                    <li><a className="drop" href="#">Program - Events</a></li>
                                    <hr />
                                    <li><a className="drop" href="#">Product - Store</a></li>
                                    <hr />
                                    <li><a className="drop" href="#">Blogs</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="./assets/Hobbies.png" alt="" width={"24px"} />
                                    Hobbies
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="drop" href="#">People - Community</a></li>
                                    <hr />
                                    <li><a className="drop" href="#">Places - Venues</a></li>
                                    <hr />
                                    <li><a className="drop" href="#">Blogs</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#"><img src="./assets/bookmark.png" alt="" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src="./assets/notifications.png" alt="" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src="./assets/Product 3.png" alt="" /></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle d-flex align-items-center"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="./assets/Ellipse 23.png"
                                        class="rounded-circle"
                                        height="30"
                                        alt=""
                                        loading="lazy"
                                    />
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">My profile</a></li>
                                    <li><a class="dropdown-item" href="#">Settings</a></li>
                                    <li><a class="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <button className="position-fixed backtotop" href='/'><a href="">^</a></button>
            <div className="conatiner text-center mt-5">
                <a class="dropdown-item fs-3" style={{ fontWeight: "600" }} href="#">
                    <img src="./assets/Add.png" alt="" style={{ width: "33px" }} />  Add Your Listing
                </a>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="row">
                                <div class="col-sm-6 mb-3">
                                    <div class="m-3">
                                        <div class="card-body text-start">
                                            <div className="btn text-start p-4 cards card1">
                                                <h2 ><img src="./assets/groups.png" alt="" /> People</h2>
                                                <p>An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="m-3">
                                        <div class="card-body text-start">
                                            <div className="btn text-start p-4 cards card2">
                                                <h2 ><img src="./assets/location.png" alt="" /> Place</h2>
                                                <p>An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="m-3">
                                        <div class="card-body text-start">
                                            <div className="btn text-start p-4 cards card3">
                                                <h2 ><img src="./assets/Product 3.png" alt="" /> Product</h2>
                                                <p>An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <div class="m-3">
                                        <div class="card-body text-start">
                                            <div className="btn text-start p-4 cards card4">
                                                <h2 ><img src="./assets/event.png" alt="" /> Program</h2>
                                                <p>An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main