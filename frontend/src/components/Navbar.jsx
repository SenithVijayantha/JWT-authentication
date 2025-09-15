import { Link } from "react-router";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <Link to="/" class="btn btn-ghost text-xl">Home</Link>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/profile"} class="justify-between">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
