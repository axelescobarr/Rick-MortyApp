import s from '../stylesComponents/SearchBar.module.css'
export default function SearchBar(props) {
   return (
      <div className={s.searchB}>
      <input type='search' />
        <button className={s.buscar} onClick={props.onSearch}>Buscar</button>
      </div>
   );
}
