import "@/styles/plugins/bootstrap.min.css"
import "@/styles/plugins/aos.css"
import "@/styles/plugins/fontawesome.css"
import "@/styles/plugins/magnific-popup.css"
import "@/styles/plugins/mobile.css"
import "@/styles/plugins/nice-select.css"
import "@/styles/plugins/owlcarousel.min.css"
import "@/styles/plugins/sidebar.css"
import "@/styles/plugins/slick-slider.css"
import "@/styles/plugins/swiper-slider.css"
import "@/styles/main.css"

import StoreProvider from '@/features/StoreProvider'
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	// variable: "--ztc-family-font1",
	display: 'swap',
})

export const metadata: Metadata = {
	title: "HouseBox - Real Esate Next.js Template",
	description: "Made by AliThemes",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} homepage1-body`}>
				<StoreProvider>
					{children}
				</StoreProvider>
			</body>
		</html>
	)
}
