import s from '../stylesComponents/Card.module.css'
import image from "../imagenes/imageDefault.jpg"
export default function Card(props) {
   return (
      <div className={s.caja}>
         <div className={s.highCard}>
         <h2>{props.id}</h2>
         <button className={s.boton} onClick={props.onClose}>X</button>
         </div>
            <h2 className={s.name}>{props.name}</h2>
            <div className={s.txto}>
                <h2>{props.species}</h2>
                <h2>{props.gender}</h2>
            </div> 
         <img className={s.ima} src={image} alt="image.jpg" />
      </div>
   );
}
