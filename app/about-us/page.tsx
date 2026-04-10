"use client";
import Slider from "react-slick";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";
export default function AboutUs() {
    const settings2 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        fade: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const settings1 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        focusOnSelect: true,
        infinite: true,
    };
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="hero-inner-section-area-sidebar">
                        <img src="/assets/img/all-images/hero/hero-img1.png" alt="housebox" className="hero-img1" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="hero-header-area text-center">
                                        <Link href="/">
                                            Home{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                                            </svg>{" "}
                                            Listing{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                                            </svg>{" "}
                                            About Us
                                        </Link>
                                        <div className="space24" />
                                        <h1>About Us</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== ABOUT AREA STARTS =======*/}
                    <div className="about1-section-area sp1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about-images-area">
                                        <div className="img2 image-anime reveal">
                                            <img src="/assets/img/all-images/about/about-img2.png" alt="housebox" />
                                        </div>
                                        <div className="img1 image-anime reveal">
                                            <img src="/assets/img/all-images/about/about-img1.png" alt="housebox" />
                                        </div>
                                        <div className="author-img aniamtion-key-1">
                                            <h3>Our Happy Customer</h3>
                                            <div className="space18" />
                                            <img src="/assets/img/all-images/others/author-img1.png" alt="housebox" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1" />
                                <div className="col-lg-5">
                                    <div className="about-heading heading1">
                                        <h5 data-aos="fade-left" data-aos-duration={800}>
                                            About housebox
                                        </h5>
                                        <div className="space20" />
                                        <h2 className="text-anime-style-3">Embrace the Elegance Our Exclusive Property</h2>
                                        <div className="space18" />
                                        <p data-aos="fade-left" data-aos-duration={900}>
                                            At HouseBox, we’re redefining the way people find, sell, and invest in properties. Our mission is to simplify real a estate by provide innovative solutions, expert guidance.
                                        </p>
                                        <div className="space32" />
                                        <div className="counter-boxes" data-aos="fade-left" data-aos-duration={1000}>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-6">
                                                    <div className="counter-boxarea text-center">
                                                        <h2>
                                                            <CounterUp className="counter">10</CounterUp>K
                                                        </h2>
                                                        <div className="space12" />
                                                        <p>Homes Sold</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-6">
                                                    <div className="counter-boxarea text-center">
                                                        <h2>
                                                            <CounterUp className="counter">9</CounterUp>K
                                                        </h2>
                                                        <div className="space12" />
                                                        <p>Happy Client</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-6">
                                                    <div className="space20 d-md-none d-block" />
                                                    <div className="counter-boxarea text-center">
                                                        <h2>
                                                            <CounterUp className="counter">98</CounterUp>%
                                                        </h2>
                                                        <div className="space12" />
                                                        <p>Satisfaction Rate</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space32" />
                                        <div className="btn-area1" data-aos="fade-left" data-aos-duration={1100}>
                                            <Link href="/property-halfmap-grid" className="theme-btn1">
                                                See All Properties{" "}
                                                <span className="arrow1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                                                    </svg>
                                                </span>
                                                <span className="arrow2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== ABOUT AREA ENDS =======*/}
                    {/*===== OTHERS AREA STARTS =======*/}
                    <div className="mission-section-area sp1" style={{ backgroundImage: "url(assets/img/all-images/bg/bg1.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading1 text-center space-margin60">
                                        <h5>Our Mission</h5>
                                        <div className="space20" />
                                        <h2>Our Mission &amp; Vision</h2>
                                    </div>
                                    <div className="space100 d-lg-block d-none" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="vission-mission-box">
                                        <h3>Our Path to Real Estate Excellence</h3>
                                        <div className="space24" />
                                        <p>At HouseBox, we’re redefining the way people find, sell, and invest in properties. Our mission is to simplify real a estate by provide innovative solutions, expert guidance.</p>
                                        <div className="space24" />
                                        <h4>Our Mission</h4>
                                        <div className="space16" />
                                        <p>To provide a reliable, transparent, and innovative real estate experience that exceeds expectations and fosters lasting relationships.</p>
                                        <div className="space24" />
                                        <h4>Our Vision</h4>
                                        <div className="space16" />
                                        <p>To be the leading platform for real estate solutions, empowering individuals and businesses to achieve their property goals with ease.</p>
                                        <div className="space32" />
                                        <div className="btn-area1">
                                            <Link href="/property-halfmap-grid" className="theme-btn1">
                                                See All Properties{" "}
                                                <span className="arrow1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                                                    </svg>
                                                </span>
                                                <span className="arrow2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/properties/property-img47.png" alt="housebox" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== OTHERS AREA ENDS =======*/}
                    {/*===== ABOUT AREA STARTS =======*/}
                    <div className="about2-section-area sp1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="about-images-area">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="img2 image-anime reveal">
                                                    <img src="/assets/img/all-images/about/about-img3.png" alt="housebox" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="img1 image-anime reveal">
                                                    <img src="/assets/img/all-images/about/about-img4.png" alt="housebox" />
                                                </div>
                                                <div className="space30" />
                                                <div className="img1 image-anime reveal">
                                                    <img src="/assets/img/all-images/about/about-img5.png" alt="housebox" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="author-img">
                                            <h3>Our Happy Customer</h3>
                                            <div className="space18" />
                                            <img src="/assets/img/all-images/others/author-img1.png" alt="housebox" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="about-heading heading1">
                                        <h5 data-aos="fade-left" data-aos-duration={800}>
                                            About housebox
                                        </h5>
                                        <div className="space20" />
                                        <h2 className="text-anime-style-3">Embrace the Elegance Our Exclusive Property</h2>
                                        <div className="space18" />
                                        <p data-aos="fade-left" data-aos-duration={900}>
                                            At HouseBox, we’re redefining the way people find, sell, and invest in properties. Our mission is to simplify real a estate by provide innovative solutions, expert guidance.
                                        </p>
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Market Expertise
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Backed by deep market insights, we offer guidance to make informed decisions.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Technology Expertise
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Backed by deep market insights, we offer guidance to make informed decisions.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Commitment to Excellence
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Backed by deep market insights, we offer guidance to make informed decisions.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space32" />
                                        <div className="btn-area1">
                                            <Link href="/property-halfmap-grid" className="theme-btn1">
                                                See All Properties{" "}
                                                <span className="arrow1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                                                    </svg>
                                                </span>
                                                <span className="arrow2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== ABOUT AREA ENDS =======*/}
                    {/*===== OTHERS AREA STARTS =======*/}
                    <div className="offer1-section-area sp1" style={{ backgroundImage: "url(assets/img/all-images/bg/bg1.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="heading1 text-center space-margin60">
                                        <h5>What We Offer</h5>
                                        <div className="space20" />
                                        <h2>Upgrade To a Smarter Living Experience With Home Automation</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/about/about-img9.png" alt="housebox" />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="offer-boxarea">
                                                <div className="icons">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM8 15H16V17H8V15Z"></path>
                                                    </svg>
                                                </div>
                                                <div className="space24" />
                                                <div className="content">
                                                    <Link href="/property-details-v1">Buying A Home</Link>
                                                    <div className="space16" />
                                                    <p>At Housebox, we know that buying a home is one life’s biggest milestones. Our experienced team is here to guide you through every step home.</p>
                                                    <div className="space24" />
                                                    <Link href="/property-details-v1" className="readmore">
                                                        learn more{" "}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="offer-boxarea">
                                                <div className="icons">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12.5812 2.68627C12.2335 2.43791 11.7664 2.43791 11.4187 2.68627L1.9187 9.47198L3.08118 11.0994L11.9999 4.7289L20.9187 11.0994L22.0812 9.47198L12.5812 2.68627ZM19.5812 12.6863L12.5812 7.68627C12.2335 7.43791 11.7664 7.43791 11.4187 7.68627L4.4187 12.6863C4.15591 12.874 3.99994 13.177 3.99994 13.5V20C3.99994 20.5523 4.44765 21 4.99994 21H18.9999C19.5522 21 19.9999 20.5523 19.9999 20V13.5C19.9999 13.177 19.844 12.874 19.5812 12.6863ZM5.99994 19V14.0146L11.9999 9.7289L17.9999 14.0146V19H5.99994Z"></path>
                                                    </svg>
                                                </div>
                                                <div className="space24" />
                                                <div className="content">
                                                    <Link href="/property-details-v1">Selling A Home</Link>
                                                    <div className="space16" />
                                                    <p>Selling your home doesn’t have to be overwhelming. With Housebox, our dedicated experts will make process smooth, stress-free, and rewarding.</p>
                                                    <div className="space24" />
                                                    <Link href="/property-details-v1" className="readmore">
                                                        learn more{" "}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="offer-boxarea">
                                                <div className="icons">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M10.7577 11.8281L18.6066 3.97919L20.0208 5.3934L18.6066 6.80761L21.0815 9.28249L19.6673 10.6967L17.1924 8.22183L15.7782 9.63604L17.8995 11.7574L16.4853 13.1716L14.364 11.0503L12.1719 13.2423C13.4581 15.1837 13.246 17.8251 11.5355 19.5355C9.58291 21.4882 6.41709 21.4882 4.46447 19.5355C2.51184 17.5829 2.51184 14.4171 4.46447 12.4645C6.17493 10.754 8.81633 10.5419 10.7577 11.8281ZM10.1213 18.1213C11.2929 16.9497 11.2929 15.0503 10.1213 13.8787C8.94975 12.7071 7.05025 12.7071 5.87868 13.8787C4.70711 15.0503 4.70711 16.9497 5.87868 18.1213C7.05025 19.2929 8.94975 19.2929 10.1213 18.1213Z"></path>
                                                    </svg>
                                                </div>
                                                <div className="space24" />
                                                <div className="content">
                                                    <Link href="/property-details-v1">Renting A Home</Link>
                                                    <div className="space16" />
                                                    <p>Finding the right rental property is easy with Housebox. Whether you’re seeking a cozy apartment spacious home, we offer a variety of options.</p>
                                                    <div className="space24" />
                                                    <Link href="/property-details-v1" className="readmore">
                                                        learn more{" "}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="offer-boxarea">
                                                <div className="icons">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M8.68637 4.00008L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348L15.3138 4.00008H19.0001C19.5524 4.00008 20.0001 4.4478 20.0001 5.00008V8.68637L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L20.0001 15.3138V19.0001C20.0001 19.5524 19.5524 20.0001 19.0001 20.0001H15.3138L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L8.68637 20.0001H5.00008C4.4478 20.0001 4.00008 19.5524 4.00008 19.0001V15.3138L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L4.00008 8.68637V5.00008C4.00008 4.4478 4.4478 4.00008 5.00008 4.00008H8.68637ZM6.00008 6.00008V9.5148L3.5148 12.0001L6.00008 14.4854V18.0001H9.5148L12.0001 20.4854L14.4854 18.0001H18.0001V14.4854L20.4854 12.0001L18.0001 9.5148V6.00008H14.4854L12.0001 3.5148L9.5148 6.00008H6.00008ZM12.0001 16.0001C9.79094 16.0001 8.00008 14.2092 8.00008 12.0001C8.00008 9.79094 9.79094 8.00008 12.0001 8.00008C14.2092 8.00008 16.0001 9.79094 16.0001 12.0001C16.0001 14.2092 14.2092 16.0001 12.0001 16.0001ZM12.0001 14.0001C13.1047 14.0001 14.0001 13.1047 14.0001 12.0001C14.0001 10.8955 13.1047 10.0001 12.0001 10.0001C10.8955 10.0001 10.0001 10.8955 10.0001 12.0001C10.0001 13.1047 10.8955 14.0001 12.0001 14.0001Z"></path>
                                                    </svg>
                                                </div>
                                                <div className="space24" />
                                                <div className="content">
                                                    <Link href="/property-details-v1">Property Management</Link>
                                                    <div className="space16" />
                                                    <p>Managing properties can be time-consuming, but Housebox makes it effortless. Our property management services ensure your investments.</p>
                                                    <div className="space24" />
                                                    <Link href="/property-details-v1" className="readmore">
                                                        learn more{" "}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== OTHERS AREA ENDS =======*/}
                    {/*===== TEAM AREA STARTS =======*/}
                    <div className="team1-section-area sp2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="team-header heading1 space-margin60 text-center">
                                        <h5 data-aos="fade-left" data-aos-duration={800}>
                                            Experts Behind HouseBox
                                        </h5>
                                        <div className="space20" />
                                        <h2 className="text-anime-style-3">The HouseBox Dream Team</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-duration={800}>
                                    <div className="team-widget-boxarea">
                                        <div className="img1 image-anime">
                                            <img src="/assets/img/all-images/team/team-img1.png" alt="housebox" />
                                            <div className="share">
                                                <Link href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={18} viewBox="0 0 17 18" fill="none">
                                                        <path
                                                            d="M14.1333 12.7229C13.4578 12.7229 12.8533 12.994 12.3911 13.4187L6.05332 9.66867C6.09777 9.46084 6.13332 9.25301 6.13332 9.03614C6.13332 8.81928 6.09777 8.61145 6.05332 8.40361L12.32 4.68976C12.8 5.14157 13.4311 5.42169 14.1333 5.42169C15.6089 5.42169 16.8 4.21084 16.8 2.71084C16.8 1.21084 15.6089 0 14.1333 0C12.6578 0 11.4667 1.21084 11.4667 2.71084C11.4667 2.92771 11.5022 3.13554 11.5467 3.34337L5.27999 7.05723C4.79999 6.60542 4.16888 6.3253 3.46665 6.3253C1.9911 6.3253 0.799988 7.53614 0.799988 9.03614C0.799988 10.5361 1.9911 11.747 3.46665 11.747C4.16888 11.747 4.79999 11.4669 5.27999 11.0151L11.6089 14.7741C11.5644 14.9639 11.5378 15.1627 11.5378 15.3614C11.5378 16.8163 12.7022 18 14.1333 18C15.5644 18 16.7289 16.8163 16.7289 15.3614C16.7289 13.9066 15.5644 12.7229 14.1333 12.7229Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="m-0">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space24" />
                                        <div className="content-area">
                                            <Link href="#">Henry Nicolas</Link>
                                            <div className="space14" />
                                            <p>Founder &amp; CEO</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-duration={900}>
                                    <div className="team-widget-boxarea">
                                        <div className="img1 image-anime">
                                            <img src="/assets/img/all-images/team/team-img2.png" alt="housebox" />
                                            <div className="share">
                                                <Link href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={18} viewBox="0 0 17 18" fill="none">
                                                        <path
                                                            d="M14.1333 12.7229C13.4578 12.7229 12.8533 12.994 12.3911 13.4187L6.05332 9.66867C6.09777 9.46084 6.13332 9.25301 6.13332 9.03614C6.13332 8.81928 6.09777 8.61145 6.05332 8.40361L12.32 4.68976C12.8 5.14157 13.4311 5.42169 14.1333 5.42169C15.6089 5.42169 16.8 4.21084 16.8 2.71084C16.8 1.21084 15.6089 0 14.1333 0C12.6578 0 11.4667 1.21084 11.4667 2.71084C11.4667 2.92771 11.5022 3.13554 11.5467 3.34337L5.27999 7.05723C4.79999 6.60542 4.16888 6.3253 3.46665 6.3253C1.9911 6.3253 0.799988 7.53614 0.799988 9.03614C0.799988 10.5361 1.9911 11.747 3.46665 11.747C4.16888 11.747 4.79999 11.4669 5.27999 11.0151L11.6089 14.7741C11.5644 14.9639 11.5378 15.1627 11.5378 15.3614C11.5378 16.8163 12.7022 18 14.1333 18C15.5644 18 16.7289 16.8163 16.7289 15.3614C16.7289 13.9066 15.5644 12.7229 14.1333 12.7229Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="m-0">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space24" />
                                        <div className="content-area">
                                            <Link href="#">Sarah Johnson</Link>
                                            <div className="space14" />
                                            <p>Real Estate Agent</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-duration={1000}>
                                    <div className="team-widget-boxarea">
                                        <div className="img1 image-anime">
                                            <img src="/assets/img/all-images/team/team-img3.png" alt="housebox" />
                                            <div className="share">
                                                <Link href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={18} viewBox="0 0 17 18" fill="none">
                                                        <path
                                                            d="M14.1333 12.7229C13.4578 12.7229 12.8533 12.994 12.3911 13.4187L6.05332 9.66867C6.09777 9.46084 6.13332 9.25301 6.13332 9.03614C6.13332 8.81928 6.09777 8.61145 6.05332 8.40361L12.32 4.68976C12.8 5.14157 13.4311 5.42169 14.1333 5.42169C15.6089 5.42169 16.8 4.21084 16.8 2.71084C16.8 1.21084 15.6089 0 14.1333 0C12.6578 0 11.4667 1.21084 11.4667 2.71084C11.4667 2.92771 11.5022 3.13554 11.5467 3.34337L5.27999 7.05723C4.79999 6.60542 4.16888 6.3253 3.46665 6.3253C1.9911 6.3253 0.799988 7.53614 0.799988 9.03614C0.799988 10.5361 1.9911 11.747 3.46665 11.747C4.16888 11.747 4.79999 11.4669 5.27999 11.0151L11.6089 14.7741C11.5644 14.9639 11.5378 15.1627 11.5378 15.3614C11.5378 16.8163 12.7022 18 14.1333 18C15.5644 18 16.7289 16.8163 16.7289 15.3614C16.7289 13.9066 15.5644 12.7229 14.1333 12.7229Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="m-0">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space24" />
                                        <div className="content-area">
                                            <Link href="#">Sohia Rodriguez</Link>
                                            <div className="space14" />
                                            <p>Marketing Director</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-duration={1200}>
                                    <div className="team-widget-boxarea">
                                        <div className="img1 image-anime">
                                            <img src="/assets/img/all-images/team/team-img4.png" alt="housebox" />
                                            <div className="share">
                                                <Link href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={18} viewBox="0 0 17 18" fill="none">
                                                        <path
                                                            d="M14.1333 12.7229C13.4578 12.7229 12.8533 12.994 12.3911 13.4187L6.05332 9.66867C6.09777 9.46084 6.13332 9.25301 6.13332 9.03614C6.13332 8.81928 6.09777 8.61145 6.05332 8.40361L12.32 4.68976C12.8 5.14157 13.4311 5.42169 14.1333 5.42169C15.6089 5.42169 16.8 4.21084 16.8 2.71084C16.8 1.21084 15.6089 0 14.1333 0C12.6578 0 11.4667 1.21084 11.4667 2.71084C11.4667 2.92771 11.5022 3.13554 11.5467 3.34337L5.27999 7.05723C4.79999 6.60542 4.16888 6.3253 3.46665 6.3253C1.9911 6.3253 0.799988 7.53614 0.799988 9.03614C0.799988 10.5361 1.9911 11.747 3.46665 11.747C4.16888 11.747 4.79999 11.4669 5.27999 11.0151L11.6089 14.7741C11.5644 14.9639 11.5378 15.1627 11.5378 15.3614C11.5378 16.8163 12.7022 18 14.1333 18C15.5644 18 16.7289 16.8163 16.7289 15.3614C16.7289 13.9066 15.5644 12.7229 14.1333 12.7229Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="m-0">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space24" />
                                        <div className="content-area">
                                            <Link href="#">Daniel Williams</Link>
                                            <div className="space14" />
                                            <p>Services Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== TEAM AREA ENDS =======*/}
                    {/*===== TESTIMONIAL AREA STARTS =======*/}
                    <div className="testimonial1-section-area sp1" style={{ backgroundImage: "url(assets/img/all-images/bg/bg1.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="testimonial-header space-margin60 heading1">
                                        <h5 data-aos="fade-left" data-aos-duration={800}>
                                            feedback/testimonial
                                        </h5>
                                        <div className="space20" />
                                        <h2 className="text-anime-style-3">A Legacy Of Happy Clients</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="testimonialmain-slider">
                                        <div className="row align-items-center">
                                            <div className="col-lg-5">
                                                <Slider {...settings2} className="images-area2 slider2">
                                                    <div className="img1 image-anime">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img1.png" alt="housebox" />
                                                    </div>
                                                    <div className="img1 image-anime">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img1.png" alt="housebox" />
                                                    </div>
                                                    <div className="img1 image-anime">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img1.png" alt="housebox" />
                                                    </div>
                                                    <div className="img1 image-anime">
                                                        <img src="/assets/img/all-images/testimonial/testimonial-img1.png" alt="housebox" />
                                                    </div>
                                                </Slider>
                                            </div>
                                            <div className="col-lg-7">
                                                <Slider {...settings1} className="testimonial-slider-area slider1">
                                                    <div className="testimonial-box">
                                                        <img src="/assets/img/icons/quoto-icon1.svg" alt="housebox" />
                                                        <div className="space16" />
                                                        <p>"When I decided to sell my home, I was overwhelmed with where to start. HouseBox stepped in with a clear plan, professional marketing, constant communicate. Within two weeks, my house was sold above asking.”</p>
                                                        <div className="space32" />
                                                        <div className="test-images">
                                                            <div className="auhtor-area">
                                                                <div className="img1">
                                                                    <img src="/assets/img/all-images/testimonial/testimonial-img2.png" alt="housebox" />
                                                                </div>
                                                                <div className="text">
                                                                    <Link href="#">Shakib Mahmud</Link>
                                                                    <div className="space10" />
                                                                    <p>Happy Client</p>
                                                                </div>
                                                            </div>
                                                            <img src="/assets/img/elements/brand1.png" alt="housebox" className="brand1" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-box">
                                                        <img src="/assets/img/icons/quoto-icon1.svg" alt="housebox" />
                                                        <div className="space16" />
                                                        <p>"When I decided to sell my home, I was overwhelmed with where to start. HouseBox stepped in with a clear plan, professional marketing, constant communicate. Within two weeks, my house was sold above asking.”</p>
                                                        <div className="space32" />
                                                        <div className="test-images">
                                                            <div className="auhtor-area">
                                                                <div className="img1">
                                                                    <img src="/assets/img/all-images/testimonial/testimonial-img2.png" alt="housebox" />
                                                                </div>
                                                                <div className="text">
                                                                    <Link href="#">Shakib Mahmud</Link>
                                                                    <div className="space10" />
                                                                    <p>Happy Client</p>
                                                                </div>
                                                            </div>
                                                            <img src="/assets/img/elements/brand1.png" alt="housebox" className="brand1" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-box">
                                                        <img src="/assets/img/icons/quoto-icon1.svg" alt="housebox" />
                                                        <div className="space16" />
                                                        <p>"When I decided to sell my home, I was overwhelmed with where to start. HouseBox stepped in with a clear plan, professional marketing, constant communicate. Within two weeks, my house was sold above asking.”</p>
                                                        <div className="space32" />
                                                        <div className="test-images">
                                                            <div className="auhtor-area">
                                                                <div className="img1">
                                                                    <img src="/assets/img/all-images/testimonial/testimonial-img2.png" alt="housebox" />
                                                                </div>
                                                                <div className="text">
                                                                    <Link href="#">Shakib Mahmud</Link>
                                                                    <div className="space10" />
                                                                    <p>Happy Client</p>
                                                                </div>
                                                            </div>
                                                            <img src="/assets/img/elements/brand1.png" alt="housebox" className="brand1" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-box">
                                                        <img src="/assets/img/icons/quoto-icon1.svg" alt="housebox" />
                                                        <div className="space16" />
                                                        <p>"When I decided to sell my home, I was overwhelmed with where to start. HouseBox stepped in with a clear plan, professional marketing, constant communicate. Within two weeks, my house was sold above asking.”</p>
                                                        <div className="space32" />
                                                        <div className="test-images">
                                                            <div className="auhtor-area">
                                                                <div className="img1">
                                                                    <img src="/assets/img/all-images/testimonial/testimonial-img2.png" alt="housebox" />
                                                                </div>
                                                                <div className="text">
                                                                    <Link href="#">Shakib Mahmud</Link>
                                                                    <div className="space10" />
                                                                    <p>Happy Client</p>
                                                                </div>
                                                            </div>
                                                            <img src="/assets/img/elements/brand1.png" alt="housebox" className="brand1" />
                                                        </div>
                                                    </div>
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== TESTIMONIAL AREA ENDS =======*/}
                    <div className="space100 d-lg-block d-none" />
                    <div className="space50 d-lg-none d-block" />
                    {/*===== CTA AREA STARTS =======*/}
                    <div className="cta1-section-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cta-bg-area" style={{ backgroundImage: "url(assets/img/all-images/bg/cta-bg1.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-5">
                                                <div className="cta-header">
                                                    <h2 className="text-anime-style-3">Step Into Your Dream Home with HouseBox</h2>
                                                    <div className="space16" />
                                                    <p data-aos="fade-left" data-aos-duration={1000}>
                                                        At HouseBox, we believe your next home is more than just a place – it’s where your future begins you’re buy.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-2" />
                                            <div className="col-lg-5" data-aos="zoom-in" data-aos-duration={1000}>
                                                <div className="btn-area1 text-center">
                                                    <Link href="/sidebar-grid" className="theme-btn1">
                                                        Find Your Dream Home{" "}
                                                        <span className="arrow1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                                <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                                                            </svg>
                                                        </span>
                                                        <span className="arrow2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                                                                <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
