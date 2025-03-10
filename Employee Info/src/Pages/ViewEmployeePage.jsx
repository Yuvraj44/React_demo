import EmpDetailsList from "../Componants/EmpDetailsList";
import NavBar from "../Componants/NavBar";
import PageData from "../Componants/PageData";


export default function ViewEmployeePage() {
  return (
    <div className="min-h-screen flex flex-col mt-20">
      <NavBar />
      <EmpDetailsList />
    </div>
  );
}