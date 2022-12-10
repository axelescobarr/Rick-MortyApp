import s from '../stylesComponents/SearchBar.module.css';
import "../stylesComponents/FilterCharacters.css"
import { useState, useEffect } from 'react';
import Card from './Card';


export default function FilterCharactersByGender (props){

    const [gender, setgender] = useState("");
    const [filterCharacters, setfilterCharacters] = useState();

    const getCharacterName = (event) =>{
        let nameCharacterValue = event.target.value;
        setgender(nameCharacterValue);
    }
    const searchUser = () =>{
        fetch(`https://rickandmortyapi.com/api/character/?gender=${gender}`)
        .then(res => res.json())
        .then(data => setfilterCharacters(data.results))
        setgender(''); 
        }


    return(
        <div>
            <div className={s.searchB}>
                <input onChange={getCharacterName} type='text' value={gender} placeholder='Nombre del personaje'/>
                <button onClick={searchUser} className={s.buscar}>{console.log(filterCharacters)}Buscar</button>
            </div>
            <div className='usersContainer'>
                 {filterCharacters && filterCharacters.map(user => {
                    return(
                        <Card id={user.id} name={user.name} species={user.species} gender={user.gender} image={user.image} key={user.id} onClose={() => window.alert('Emulamos que se cierra la card')}/>
                    )
                 })}

                 {console.log(filterCharacters)}
            </div>
            <div className='errorContainer'>
                {filterCharacters === undefined && <h1 className='error'>Personaje no encontrado</h1>}
            </div>            
        </div>
       
    )
}