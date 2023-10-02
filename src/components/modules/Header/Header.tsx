import { NavList } from "@/components/elements/NavList/NavList";
import { SunIcon, Bars3Icon } from "@heroicons/react/20/solid";

export function Header() {
  return (
    <header className="container mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <Bars3Icon className="h-5 w-5" />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <NavList />
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl hidden sm:flex">Wander Jr. Cruz</a>
        </div>
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavList />
          </ul>
        </nav>
        <div className="navbar-end gap-4">
          <button className="btn"><SunIcon className="h-4 w-4" /></button>
          <select className="select select-bordered">
            <option disabled selected>Language</option>
            <option>Português</option>
            <option>English</option>
          </select>
        </div>
      </div>
    </header>
  );
}
