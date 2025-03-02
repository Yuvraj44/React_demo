import NavBar from "../Componants/NavBar";
import AddEmployee from "../Componants/AddEmployee";
import PageData from "../Componants/PageData";
import DeleteEmployee from "../Componants/DeleteEmployee";

export default function DeleteEmpPage() {
  return (
    <div className="min-h-screen flex flex-col ml-100">
      <NavBar />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-3xl bg-white p-10 shadow-lg rounded-lg">
          <div className="text-center">
            <PageData data={"Delete"} />
          </div>
          <DeleteEmployee />
        </div>
      </div>
    </div>
  );
}
