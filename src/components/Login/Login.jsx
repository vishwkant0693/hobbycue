import React from 'react'
import Header from '../header&footer/Header'

const Login = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 p-4">
                        <h1 className='py-5'>Explore your <span style={{ color: "#0096C8" }} >hobby</span> or <span style={{ color: "#8064A2" }}>passion</span></h1>
                        <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                        </p>
                        <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
                        <div className="row">
                            <img src="./assets/Group 27.png" className='cover' alt="" />
                        </div>
                    </div>
                    <div className="col-md-5 p-4">
                        <div className="">
                            <button className='btn sign'>Sign In</button>
                            <button className='btn sign'>Join In</button>
                        </div>
                        <div className="d-flex flex-column gap-2 py-3">
                            <button type="button" class="btn btn-outline-info">
                                <div className=" d-flex justify-content-around pt-3">

                                    <img src="./assets/Google.png" alt="" width={20} height={20} />
                                    <p>Continue with Google</p>
                                </div>
                            </button>
                            <button type="button" class="btn btn-outline-info">
                                <div className=" d-flex justify-content-around pt-3">

                                    <img src="./assets/fb.png" alt="" width={20} height={20} />
                                    <p>Continue with Facebook</p>
                                </div>
                            </button>
                        </div>
                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0">Or Connect with</p>
                        </div>

                        <div className="">
                            <div class="mb-3">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                            </div>
                            <div class="mb-3 d-flex justify-content-between mt-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Remember me
                                    </label>
                                </div>
                                <div className="form-check d-flex gap-2">
                                    <img src="./assets/lock.png" alt="" height={20} />
                                    <p>Forgot Password?</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <a href="/" className="position-fixed backtotop">^</a>
            <div className="container mt-5">
                <div className="row">
                    <div class="col-md-6">
                        <div class="card m-3">
                            <div class="card-body text-start">
                                <div className="btn text-start p-4">
                                    <h2 ><img src="./assets/groups.png" alt="" /> People</h2>
                                    <p>An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association.</p>
                                    <a className="btn cards card1" href="/">Connect</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3 mb-sm-0">
                        <div class="card m-3">
                            <div class="card-body text-start">
                                <div className="btn text-start p-4">
                                    <h2 ><img src="./assets/location.png" alt="" /> Place</h2>
                                    <p>An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.</p>
                                    <a className="btn cards card2" href="/">Meet Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3 mb-sm-0">
                        <div class="card m-3">
                            <div class="card-body text-start">
                                <div className="btn text-start p-4">
                                    <h2 ><img src="./assets/shopping.png" alt="" /> Product</h2>
                                    <p>An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.</p>
                                    <a className="btn cards card3" href="/">Get In</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3 mb-sm-0">
                        <div class="card m-3">
                            <div class="card-body text-start">
                                <div className="btn text-start p-4">
                                    <h2 className='d-flex align-items-center' ><img src="./assets/event.png" alt="" /> Program</h2>
                                    <p>An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition.</p>
                                    <a className="btn cards card4" href="/">Attend</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="card text-start p-4 my-5">
                        <div className="card-body">
                            <div className='d-flex justify-items-center' >
                                <img src="./assets/Add.png" alt="" />
                                <h2>Add Your Own</h2>
                            </div>
                            <p>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                            <button className='btn cards card1'>Attend</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <div className="row d-flex align-items-center p-4" style={{ background: "#F7F5F9" }}>
                    <div className="">
                        <h3><img src="" alt="" />Testimoials</h3>
                        <p>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-8">
                            <div className="d-flex mt-3 align-items-center gap-3 p-4" style={{ background: "#CCC1DA" }}>
                                <button><img src="./assets/play.png" alt="" /></button>
                                <input type="range" class="form-range" id="Range" />
                                <img src="./assets/Ellipse 12.png" alt="" style={{ width: "40px" }} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex p-3 gap-4 align-items-center">
                                <img src="./assets/Ellipse 12.png" alt="" width={80} />
                                <div className="d-flex flex-column">
                                    <h6>Shubha Nagarajan</h6>
                                    <p>Classical Dancer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h1 className='py-5'>Your <span style={{ color: "#8064A2" }} >hobby</span>, your <span style={{ color: "#0096C8" }}>Community</span></h1>
                <button className='btn btn-secondary'>Get Started</button>
                <div className="row mt-5">
                    <div className="d-flex">
                        <img src="./assets/5821.png" alt="" className='images1' />
                        <img src="./assets/5822.png" alt="" className='images1' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login