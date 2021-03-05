import React from "react"

function Header() {
  return (
    <header className="header">
      <nav className="flex items-center">
        <a href="#" className="header__logo">
          {"<Ojay />"}
        </a>

        <ul className="flex place-content-between mb-0 ml-0 header__navMenu">
          <li className="mb-0">
            <a href="#">Home</a>
          </li>
          <li className="mb-0">
            <a href="#">About</a>
          </li>
          <li className="mb-0">
            <a href="#">Projects</a>
          </li>
          <li className="mb-0">
            <a href="#">Writing</a>
          </li>
          <li className="mb-0">
            <a href="#">Speaking</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
