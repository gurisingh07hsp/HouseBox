import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Cta1 from "@/components/sections/Cta1"
import Hero1 from "@/components/sections/Hero1"
import Items1 from "@/components/sections/Items1"
import Others1 from "@/components/sections/Others1"
import Project1 from "@/components/sections/Project1"
import Properties1 from "@/components/sections/Properties1"
import PropertyLocation1 from "@/components/sections/PropertyLocation1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
export default function Home() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<Hero1 />
				<Others1 />
				<About1 />
				<Properties1 />
				<Project1 />
				<Items1 />
				<PropertyLocation1 />
				<Testimonial1 />
				<Team1 />
				<Cta1 />
			</Layout>
		</>
	)
}