import {
    Link
  } from "react-router-dom";

const Nav = () => {
    return (
        <header>
        <nav>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLkrGU4-uQBJO3JOzUpi0iPYaG7aLZMhA8jw&usqp=CAU"
                alt="sports car logo" height="100%" />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">products</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Nav;