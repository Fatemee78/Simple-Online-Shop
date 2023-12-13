import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import './nav.css'

const Nav =()=>{

    //count how many product be selected
    const {cartItems} = useContext(ShopContext)
    const itemCart = cartItems.reduce((prev, current)=>{
        return prev + current.count
    }, 0)

    return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
            <a href="/" className="navbar-brand" >Online Shop</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className='nav-link'>Shop</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className='nav-link'>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                        {      itemCart>0 &&                   
                        <span className='cart-items-count'>{itemCart}</span>
                        }                    
                    </Link>

                </li>

            </ul>
        </div>
    </div>
        )
}

export default Nav;