import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import About3 from "@/components/sections/About3"
import Cta1 from "@/components/sections/Cta1"
import Cta3 from "@/components/sections/Cta3"
import Hero1 from "@/components/sections/Hero1"
import Hero3 from "@/components/sections/Hero3"
import Items1 from "@/components/sections/Items1"
import Items3 from "@/components/sections/Items3"
import Others1 from "@/components/sections/Others1"
import Others3 from "@/components/sections/Others3"
import Project1 from "@/components/sections/Project1"
import Properties1 from "@/components/sections/Properties1"
import Properties3 from "@/components/sections/Properties3"
import PropertyLocation1 from "@/components/sections/PropertyLocation1"
import PropertyLocation3 from "@/components/sections/PropertyLocation3"
import PropertyLocation4 from "@/components/sections/PropertyLocation4"
import Team1 from "@/components/sections/Team1"
import Team2 from "@/components/sections/Team2"
import Team3 from "@/components/sections/Team3"
import Testimonial1 from "@/components/sections/Testimonial1"
import Testimonial3 from "@/components/sections/Testimonial3"
import Work from "@/components/sections/Work"
import Home3 from "./index3/page"
import Home2 from "./index2/page"
import Header3 from "@/components/layout/header/Header3"
export default function Home() {
	return (
		<>
			<Layout headerStyle={3} footerStyle={3}>
				<Home3/>
			</Layout>

				{/* <Hero1 />
				<Others1 />
				<About1 />
				<Properties1 />
				<Project1 />
				<Items1 />
				<PropertyLocation1 />
				<Testimonial1 />
				<Team1 />
				<Cta1 /> */}
		</>
	)
}