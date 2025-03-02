import EmpDetailsList from "../Componants/EmpDetailsList";
import NavBar from "../Componants/NavBar";
import PageData from "../Componants/PageData";
import SearchBar from "../Componants/SeachBar";

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <SearchBar />
      <EmpDetailsList />
    </div>
  );
}
