import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-md">
        <a href="/">LogoPlaceholder</a>

        <nav>
          <ul className="flex gap-md">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  [
                    isActive ? "underline" : "",
                    "hover:scale-110 active:scale-95 transition-all",
                  ].join(" ")
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  [
                    isActive ? "underline" : "",
                    "hover:scale-110 active:scale-95 transition-all",
                  ].join(" ")
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="grow">
        <Outlet />
      </div>

      <footer className="px-md py-lg">
        <p className="text-center">Model D</p>
        <p className="text-center">Jobloop</p>
      </footer>
    </div>
  );
}
