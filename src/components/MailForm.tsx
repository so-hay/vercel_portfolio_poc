// "use client"
import React from "react"

const Header: React.FC = () => {
	return(
		<header className="bg-white sticky top-0 text-gray-600 p-4 z-50">
		<nav className="container mx-auto flex justify-between">
			<div className="text-xl font-mono">MailForm</div>
			<ul className="items-center flex space-x-6">
			</ul>
		</nav>
		</header>
	)
}
export default Header