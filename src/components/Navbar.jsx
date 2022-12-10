
import React, {useState} from "react";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import { getUsers } from "../Redux/actions";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import '../stylesComponents/Navbar.css';

const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)


    const dispatch = useDispatch();

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)

    

    }
    

    return(
        <div style={{width: '100%', height: '85px'}}>
            
            <nav>
                <div className='burger-menu' onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                <div className='text'>
                    <h1>RICK & MORTY</h1>
                </div>
            </nav> 

            <div className={menu_class}>
                <ul className="liContainer">
                    <li className='link'><NavLink className='textLink' to= "/allcharacters">All the characters</NavLink></li>
                    <li className='link'><NavLink className='textLink' to= "/filtercharacters">Filter character</NavLink></li>
                    <li className='link'><NavLink className='textLink' to= "/board">Drawing board</NavLink></li>
                    <li className='link'><NavLink className='textLink' to= "/createcharacter">Create character</NavLink></li>
                    <li className='link'><NavLink className='textLink' to= "/">Home</NavLink></li>
                </ul> 
            </div>
        </div>
    )

    }
export default Navbar;