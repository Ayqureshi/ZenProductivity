import img1 from '../images/zenpro.png';
import "./NavbarStyles.css";
function Navbar(){
    return(
        <>
        <nav>
            <img src={img1} alt =""/>
            <div>
                <ul id="navbar">
                    <li><a href="index.html">ABOUT US</a></li>
                    <li><a href="index.html">COMMUNITY</a></li>
                    <li><a href="index.html">AUDIO</a></li>
                    <li><a href="index.html">ARTICLES</a></li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;