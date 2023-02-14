import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllOptions, toggleSidebar } from "../../features/options/optionsSlice";
import { SearchBar } from "../search/search"
import Logo from "../../assets/inspireddion_logo.webp"



export const Navigation = () => {
  const dispatch = useDispatch();
  const options = useSelector(selectAllOptions);

  return (
    <nav className="topNav">
      <Link to={"/"} className="navLogo" >
        <img src={Logo} alt="Inspireddion logo" />
      </Link>

      <SearchBar />

      <button className={options.sidebarOpen ? "toggleSidebarButton open" : "toggleSidebarButton"}
        onClick={() => {
          dispatch(toggleSidebar());
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};
