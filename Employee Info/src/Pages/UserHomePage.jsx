

import PageData from "../Componants/PageData";
import UserNavBar from "../Componants/UserNavBar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <UserNavBar />
      <div className="flex-grow flex items-center justify-center">
        <PageData data={"Hi, Welcome to the Employee Management System"} />
      </div>
    </div>
  );
}
