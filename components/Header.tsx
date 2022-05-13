import Breadcrumb from "./Breadcrumb";
import StarButton from "./StarButton";

export default function Header() {
  return (
    <header className="flex items-center py-4 px-6 shadow">
      <Breadcrumb/>
      <div className="hidden sm:block ml-auto">
        <StarButton/>
      </div>
    </header>
  );
}
