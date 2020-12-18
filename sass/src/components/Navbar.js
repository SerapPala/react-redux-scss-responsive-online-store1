import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AiOutlineShopping} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    const [state,setState] = React.useState(false);
    React.useEffect(()=> {
        window.addEventListener("scroll", handleScroll);
    }, [])
    const handleScroll = () => {
        if (window.scrollY > 120){
            setState(true);
        }else {
            setState(false);
        }
    }
    const {totalQuantities} = useSelector(state => state.CartReducer)

    return (
        <div className={`navbar ${state ? 'whiteBg' : 'whiteBg'} `}>
            <div className="container">
                <div className="navbar__container">
                    
                        <div className="navbar__left">
                        <   Link to="/"><img src={state ? './images/1.png' : './images/1.png'} alt=""></img><img src={state ? './images/logo.svg' : './images/logo.svg'} alt=""></img></Link>
                        </div>

                        <div className="navbar__center">
                        <form className="search__form">
                            <IoIosSearch className="search__icon" />
                            <input className="search" type="text" placeholder="Arama Yap" />
                            <input className="search__submit--hidden" type="submit" />
                        </form>
                        </div>

                        <div className="navbar__right">
                            <Link to="/cart">
                                <div className="navbar__right--basket">
                                <AiOutlineShopping className="cart-icon" />
                                <span className="cart-count">{totalQuantities}</span>
                                </div>
                            </Link>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar