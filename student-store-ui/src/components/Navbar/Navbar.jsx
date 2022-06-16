import * as React from "react"
import "./Navbar.css"
import Logo from "/Users/amaar/tdd-student-store-starter/student-store-ui/src/components/Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className="link">
        <a href="/" className="link">Home</a>
        <a href="/" className="link">About</a>
        <a href="/" className="link">Buy Now</a>
      </div>
    </nav>
  )
}
