
'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,

	// Navigation
	navigation: {
		nextEl: '.h1n',
		prevEl: '.h1p',
	},

	// Pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

			breakpoints:{
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
	}
};

export default function PropertyLocation4() {
	return (
		<>

			<div className="property-loaction3-section sp2">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="heading2 text-center space-margin60">
								<h5 data-aos="fade-left" data-aos-duration={800}>property location</h5>
								<div className="space20" />
								<h2 className="text-anime-style-3">Our Property Location</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<Swiper {...swiperOptions} className="loaction-slider-property owl-carousel">
							<SwiperSlide className="propety-loaction">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img12.png" alt="housebox" />
								</div>
								<div className="content-area">
									<Link href="/property-details-v1">San Francisco</Link>
									<h3>32</h3>
								</div>
							</SwiperSlide>
							<SwiperSlide className="propety-loaction">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img13.png" alt="housebox" />
								</div>
								<div className="content-area">
									<Link href="/property-details-v1">Los Angeles</Link>
									<h3>24</h3>
								</div>
							</SwiperSlide>
							<SwiperSlide className="propety-loaction">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img14.png" alt="housebox" />
								</div>
								<div className="content-area">
									<Link href="/property-details-v1">New York</Link>
									<h3>16</h3>
								</div>
							</SwiperSlide>
							<SwiperSlide className="propety-loaction">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img15.png" alt="housebox" />
								</div>
								<div className="content-area">
									<Link href="/property-details-v1">San Diego</Link>
									<h3>17</h3>
								</div>
							</SwiperSlide>
							<SwiperSlide className="propety-loaction">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img16.png" alt="housebox" />
								</div>
								<div className="content-area">
									<Link href="/property-details-v1">Dallas Texas</Link>
									<h3>12</h3>
								</div>
							</SwiperSlide>
							<SwiperSlide className="propety-loaction">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img12.png" alt="housebox" />
								</div>
								<div className="content-area">
									<Link href="/property-details-v1">San Francisco</Link>
									<h3>32</h3>
								</div>
							</SwiperSlide>
							<SwiperSlide className="propety-loaction">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img13.png" alt="housebox" />
								</div>
								<div className="content-area">
									<Link href="/property-details-v1">Los Angeles</Link>
									<h3>24</h3>
								</div>
							</SwiperSlide>
							<SwiperSlide className="propety-loaction">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img14.png" alt="housebox" />
								</div>
								<div className="content-area">
									<Link href="/property-details-v1">New York</Link>
									<h3>16</h3>
								</div>
							</SwiperSlide>
							<SwiperSlide className="propety-loaction">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img15.png" alt="housebox" />
								</div>
								<div className="content-area">
									<Link href="/property-details-v1">San Diego</Link>
									<h3>17</h3>
								</div>
							</SwiperSlide>
							<SwiperSlide className="propety-loaction">
								<div className="img1">
									<img src="/assets/img/all-images/property_location/property-img16.png" alt="housebox" />
								</div>
								<div className="content-area">
									<Link href="/property-details-v1">Dallas Texas</Link>
									<h3>12</h3>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</>
	)
}
