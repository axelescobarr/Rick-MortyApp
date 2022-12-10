import Card from './Card';
import s from '../stylesComponents/CardsContainer.module.css'
import { useEffect, useState } from 'react';



export default function CardsContainer(props) {

   const [users, setUsers] = useState(0);
   const [page, setPage] = useState(1);

   // const users = useSelector((state) => state.users);


   useEffect(() => {
      {fetch('https://rickandmortyapi.com/api/character/?page=' + page)
      .then(response => response.json())
      .then(users => setUsers(users.results))}
      
   },[page]);

   const incrementPage = () =>{
      setPage(page + 1);
      console.log(page)
   }
   
   const decrementPage = () =>{
      setPage(page - 1);
      console.log(page)
   }
   
   return(
      <div className={s.main}>
         <div className={s.buttonContainer}> 
            <button className={s.boton1} onClick={decrementPage}>&lt;</button>
            <h2 style={{color: 'white'}}>Page {page} de 42</h2>
            <button className={s.boton2} onClick={incrementPage}>&gt;</button>
         </div>
         <div className={s.cardsContainer}>
            { users.length && users.map(user => <Card id={user.id} name={user.name} species={user.species} gender={user.gender} image={user.image} key={user.id} onClose={() => window.alert('Emulamos que se cierra la card')}/>)}
         </div> 
         <div className={s.buttonContainer}> 
            <button className={s.boton1} onClick={decrementPage}>&lt;</button>
            <h2 style={{color: 'white'}}>Page {page} de 42</h2>
            <button className={s.boton2} onClick={incrementPage}>&gt;</button>
         </div>
      
      </div> 

   )
}
