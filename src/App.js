import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import AllCharacters from './components/AllCharacters.jsx';
import FilterCharacters from './components/FilterCharacters'
import FilterCharactersByName from './components/FilterCharacterByName.jsx';
import FilterCharactersByGender from './components/FilterCharacterByGender.jsx';
import FilterCharactersBySpecie from './components/FilterCharacterBySpecie.jsx';
import FilterCharactersByStatus from './components/FilterCharacterByStatus.jsx';
import Welcome from './components/Welcome.jsx';
// import Board from './components/Board';
import CreateCharacter from './components/CreateCharacter';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Route path='/'>
        <Navbar/>
      </Route>
      <Route exact path='/'>
        <Welcome/>
      </Route>
      {/* <Route exact path='/board'>
        <Board/>
      </Route> */}
      <Route exact path='/allcharacters'>
        <AllCharacters/>
      </Route>
      <Route exact path='/filtercharacters'>
        <FilterCharacters/>
      </Route>
      <Route exact path='/filtercharacters/name'>
        <FilterCharactersByName/>
      </Route>
      <Route exact path='/filtercharacters/status'>
        <FilterCharactersByStatus/>
      </Route>
      <Route exact path='/filtercharacters/specie'>
        <FilterCharactersBySpecie/>
      </Route>
      <Route exact path='/filtercharacters/gender'>
        <FilterCharactersByGender/>
      </Route>
      <Route exact path='/createcharacter'>
        <CreateCharacter/>
      </Route>
      <Route path='/'>
        <Footer/>
      </Route>
    </div> 
  )
}

export default App;

{/* <SearchBar onSearch={(characterID) => window.alert(characterID)}/> */}