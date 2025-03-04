import NavBar from "../Componants/NavBar";
import AddEmployee from "../Componants/AddEmployee";
import PageData from "../Componants/PageData";
import UpdateEmployee from "../Componants/UpdateEmployee";

export default function UpdateEmpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 ml-80">
      <NavBar />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-3xl bg-white p-10 shadow-lg rounded-lg">
          <div className="text-center mt-20">
            <PageData data={"Update"} />
          </div>
          <div className="">
            <UpdateEmployee />
          </div>
        </div>
      </div>
    </div>
  );
}
