import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import '../stylesComponents/Welcome.css'

import { getAllHouses } from "../Redux/actions";

export default function Welcome (props) {

    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses)

    useEffect(()=>{
        dispatch(getAllHouses());
    },[]);

    return(
        <div className="container">
            <div className="containerItems">
                <div className="containerItemsShadow">
                    <div className="textContainer">
                        <h1>Welcome to Rick & Morty App</h1>
                        <h1>You want to do?</h1>
                    </div>
                    <ul className="liBtnContainer">
                        <li className='welcomeLink'><NavLink className='welcomeTextLink' to= "/allcharacters">See all characters</NavLink></li>
                        <li className='welcomeLink'><NavLink className='welcomeTextLink' to= "/filtercharacters">Search characters</NavLink></li>               
                    </ul> 
                </div>
            </div>
        </div>
    )
    }