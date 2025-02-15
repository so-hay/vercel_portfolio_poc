"use client"
import React from "react"
import Link from "next/link"

const Header: React.FC = () => {
	return(
		<header className="bg-white text-gray-600 p-4">
		<nav className="container mx-auto flex justify-between">
			<div className="text-xl font-mono">My portfolio</div>
			<ul className="flex space-x-6">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="#/About">Profile</Link>
				</li>
				<li>
					<Link href="#/Study">Study</Link>
				</li>
			</ul>
		</nav>
		</header>
	)
}
export default Header