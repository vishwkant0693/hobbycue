import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <h5 className='fw-bold'>HobbyCue</h5>
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                            <li className='nav-item'><a className='nav-link' href="">About Us</a></li>
                            <li className='nav-item'><a className='nav-link' href="">Our Services</a></li>
                            <li className='nav-item'><a className='nav-link' href="">Work with Us</a></li>
                            <li className='nav-item'><a className='nav-link' href="">FAQ</a></li>
                            <li className='nav-item'><a className='nav-link' href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className='fw-bold'>How Do i</h5>
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                            <li className='nav-item'><a className='nav-link' href="/sign-in">Sign Up</a></li>
                            <li className='nav-item'><a className='nav-link' href="">Adding a Listing</a></li>
                            <li className='nav-item'><a className='nav-link' href="">Claim Listing</a></li>
                            <li className='nav-item'><a className='nav-link' href="">Post a Query</a></li>
                            <li className='nav-item'><a className='nav-link' href="">Add a Blog Post</a></li>
                            <li className='nav-item'><a className='nav-link' href="">Other Queries</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className='fw-bold'>Quick Links</h5>
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                            <li className='nav-item'><a className='nav-link' href="">Listing</a></li>
                            <li className='nav-item'><a className='nav-link' href="">Blog Posts</a></li>
                            <li className='nav-item'><a className='nav-link' href="">Shop / Store</a></li>
                            <li className='nav-item'><a className='nav-link' href="">Community</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-between">
                        <div className="">
                            <h5 className='fw-bold'>Social Media</h5>
                            <ul className='navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row gap-2 flex-wrap'>
                                <li className='nav-item'><a className='nav-link' href=""><img src="./assets/Group 56.png" alt="" /></a></li>
                                <li className='nav-item'><a className='nav-link' href=""><img src="./assets/Group 57.png" alt="" /></a></li>
                                <li className='nav-item'><a className='nav-link' href=""><img src="./assets/Group 58.png" alt="" /></a></li>
                                <li className='nav-item'><a className='nav-link' href=""><img src="./assets/Group 59.png" alt="" /></a></li>
                                <li className='nav-item'><a className='nav-link' href=""><img src="./assets/Group 60.png" alt="" /></a></li>
                                <li className='nav-item'><a className='nav-link' href=""><img src="./assets/Group 61.png" alt="" /></a></li>
                                <li className='nav-item'><a className='nav-link' href=""><img src="./assets/Group 62.png" alt="" /></a></li>
                                <li className='nav-item'><a className='nav-link' href=""><img src="./assets/Group 63.png" alt="" /></a></li>
                            </ul>
                        </div>
                        <div className="">
                            <h5 className='fw-bold'>Invite Friends</h5>
                            <form className="input-group" >
                                <input type="search" className="form-control" placeholder="Search here..." aria-label="Search" />
                                <button className="input-group-text" style={{ background: "#8064A2" }}>
                                    <label htmlFor="">Invite</label>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row text-center py-3" style={{background:"#F7F5F9"}}>
                    <p className=''>© Purple Cues Private Limited</p>
                </div>
            </div>
        </>
    )
}

export default Footer