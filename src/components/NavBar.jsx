// const ButttonCelulares =<button>Celulares</button>
// const ButttonTablets =<button>Tablets</button>
// const ButttonNotebooks =<button>Notebooks</button>
import React from "react"
import CartWidget from "./CartWidget"


const NavBar=()=>{
    return (
        <header>
            <img width="42" height="42"  src="logo.png" alt="Logo" />
            <h3>Ibanez ECommerce</h3>
            <CartWidget contador={6} />
            <nav>
                <ul>
                <li><a href="#">Celulares</a></li>
                <li><a href="#">Tablets</a></li>
                <li><a href="#">Notebooks</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar