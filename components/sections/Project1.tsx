
import Link from 'next/link'

export default function Project1() {
	return (
		<>

			<div className="project1-section-area sp2">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="project-heading heading1 space-margin60 text-center">
								<h5>3 step to buy sell property</h5>
								<div className="space20" />
								<h2 className="text-anime-style-3">See How Realton Can Help</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
							<div className="project-featured-box">
								<div className="img1">
									<img src="/assets/img/all-images/project/project-img1.png" alt="housebox" />
								</div>
								<div className="space40" />
								<div className="btn-area">
									<Link href="/sidebar-grid">Buy A Property</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
							<div className="project-featured-box">
								<div className="img1">
									<img src="/assets/img/all-images/project/project-img2.png" alt="housebox" />
								</div>
								<div className="space40" />
								<div className="btn-area">
									<Link href="/sidebar-grid">Sell A Property</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
							<div className="project-featured-box">
								<div className="img1">
									<img src="/assets/img/all-images/project/project-img3.png" alt="housebox" />
								</div>
								<div className="space40" />
								<div className="btn-area">
									<Link href="/sidebar-grid">Rent A Property</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
