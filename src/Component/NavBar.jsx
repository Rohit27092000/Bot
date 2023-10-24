import { ReactComponent as Sun } from "./image/Sun.svg";
import { ReactComponent as Moon } from "./image/Moon.svg";
import "./DarkMode.css";


function NavBar(props) {
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==="dark"? "dark":"yellow"}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ChatBOT</a>
    
    <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle' onClick={props.toggleMode}>
                <Sun />
                <Moon />
            </label>
        </div>
    </div>

</nav>
  );
}

export default NavBar;