import NavBar from "../Componants/NavBar";

import PageData from "../Componants/PageData";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex items-center justify-center">
        <PageData data={"Hi, Welcome to the Employee Management System"} />
      </div>
    </div>
  );
}
