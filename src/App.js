import react from 'react'
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import RowPost from './Component/Rowpost/RowPost';
import {originals,action,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries, Fantasy, ScienceFiction, Drama , Animations} from "./urls"


function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Banner />
     <RowPost title="Netflix original" url={originals} />
     <RowPost title="Action"  isSmall url={action}/>
     <RowPost title="Horror"  isSmall url={HorrorMovies}/>
     <RowPost title="Comedy"  isSmall url={ComedyMovies}/>
     <RowPost title="Romance"  isSmall url={RomanceMovies}/>
     <RowPost title="Documentry"  isSmall url={Documentaries}/>
     <RowPost title="Animation"  isSmall url={Animations}/>
     <RowPost title="Fantasy"  isSmall url={Fantasy}/>
     <RowPost title="Science fiction"  isSmall url={ScienceFiction}/>
     <RowPost title="Drama"  isSmall url={Drama}/>

      
    </div>
  );
}

export default App;
