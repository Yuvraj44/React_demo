import NavBar from "../Componants/NavBar";
import SearchBarById from "../Componants/SeachBarById";
import SearchBarByDept from "../Componants/SearchBarByDept";



export default function SearchPageByDept() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <NavBar />
      <SearchBarByDept placeholder="Dept Id"/>
    </div>
  );
}
