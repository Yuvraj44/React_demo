import NavBar from "../Componants/NavBar";
import SearchBarByName from "../Componants/SearchBarByName";


export default function SearchPageByName() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <NavBar />
      <SearchBarByName placeholder="Name"/>
    </div>
  );
}
