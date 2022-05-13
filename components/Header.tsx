import Breadcrumb from "./Breadcrumb";
import StarButton from "./StarButton";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-center sm:justify-start items-center py-4 px-6 shadow">
      <Breadcrumb/>
      <div className="mt-4 sm:ml-auto sm:mt-0">
        <StarButton/>
      </div>
    </header>
  );
}
