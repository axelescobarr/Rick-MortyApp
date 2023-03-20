// import React, {useRef} from 'react';
// import CanvasDraw from 'react-canvas-draw';
// import s from "../stylesComponents/Board.module.css"
// const Board = (props) => {

//     const dibujo = useRef(null)
//     const segundoDibujo = useRef(null)


//     const handleClick = () => {
//        const data = dibujo.current.getSaveData();
//        segundoDibujo.current.loadSaveData(data)
//     }

//     const clear = () => {
//         dibujo.current.clear()
//     }

//     return(
//         <div className={s.boardContainer}>

        

//         <CanvasDraw  
//             style={{border: '2px solid black',
//                    width: '500px',
//                    height: '528px',
//                     marginRight: '90px',
//                    borderRadius: '20px',
                  
//         }} ref={dibujo}   brushColor="red"  hideGrid={true}/>
//         <div className={s.botonContainer}>

//         <button onClick={handleClick} className={s.drawBoton}>Reproducir dibujo</button>

//         <button onClick={clear} className={s.drawBoton}>Limpiar pizarra</button>

//         </div>

//         <CanvasDraw style={{border: '2px solid black',
//                    width: '500px',
//                    height: '528px',
//                    margin: '30px',
//                    marginLeft: '100px',
//                    borderRadius: '20px'
//         }} ref={segundoDibujo}  disabled={true} brushColor="red"  hideGrid={true}/>

//         </div>
//     )
// }

// export default Board;