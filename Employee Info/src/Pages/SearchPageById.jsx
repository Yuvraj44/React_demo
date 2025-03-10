import NavBar from "../Componants/NavBar";
import SearchBarById from "../Componants/SeachBarById";



export default function SearchPageById() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <NavBar />
      <SearchBarById placeholder="EmpId"/>
    </div>
  );
}
