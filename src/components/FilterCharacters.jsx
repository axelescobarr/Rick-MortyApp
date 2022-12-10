import "../stylesComponents/FilterCharacters.css";
import { NavLink } from "react-router-dom";
import Card from './Card';
import FilterCharactersByName from './FilterCharacterByName';


export default function FilterCharacters (props){

    return(
        <div className='menuContainer'>
          <div className='menuFilter'>
            <h1>How do you want to filter the characters?</h1>
            <ul className="liContainer">
                <li className='filterlink'><NavLink className='filtertextLink' to= "/filtercharacters/name">Filter by name</NavLink></li>
                <li className='filterlink'><NavLink className='filtertextLink' to= "/filtercharacters/status">Filter by state</NavLink></li>
                <li className='filterlink'><NavLink className='filtertextLink' to= "/filtercharacters/specie">Filter by species</NavLink></li>
                <li className='filterlink'><NavLink className='filtertextLink' to= "/filtercharacters/gender">Filter by gender</NavLink></li>
            </ul> 
          </div>
        </div>
       
    )
}