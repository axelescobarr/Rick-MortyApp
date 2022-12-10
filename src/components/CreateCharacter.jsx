import s from '../stylesComponents/CreateCharacter.module.css';
import CreateCard from './CreateCard';
import { useState } from 'react';

const CreateCharacter = (props) => {

    const[state,setState] = useState({name: "", gender: "", species: ""});
    const[users,setUsers] = useState([]);
    const[id,setID] = useState(826);



    const changeName = (event) => {
        let nameValue = event.target.value;
        setState({...state, name: nameValue})
      }
      
      const changeGender = (event) => {
        let nameValue = event.target.value;
        setState({...state, gender: nameValue})
      }
      
      const changeSpecies = (event) => {
        let nameValue = event.target.value;
        setState({...state, species: nameValue})
      }
      
      const dispatchState = (e) => {
        setUsers([...users, state]);
        setState({name: "", gender: "", species: ""});
        setID(id + 1);
        e.preventDefault();
      }

    return(
        <div className={s.containerCreate}>
            <h1 className={s.text}>Create Character</h1>
            <form className={s.form} onSubmit={dispatchState}>
                <div className={s.inputContainer}>
                    <label className={s.label}>Name: </label>
                    <input  onChange={changeName} key="hola" type="text" name="name" value={state.name}/>
                </div>
                <div className={s.inputContainer}>
                    <label className={s.label}>Gender: </label>
                    <input onChange={changeGender} key="hola1" type="text" name="region" value={state.gender}/>
                </div>
                <div className={s.inputContainer}>
                    <label className={s.label}>Species: </label>
                    <input onChange={changeSpecies} key="hola2" type="text" name="words" value={state.species}/>
                </div>
                <button className={s.boton} type="submit">Create character</button>
            </form>
            <div className={s.cardContainer}>
                {users && users.map(character => <CreateCard id={id} name={character.name} gender={character.gender} species={character.species}/> )}
            </div>
        </div>
    )
} 
{/*  */}
export default CreateCharacter