import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <div className="navbar navigation navbar-expand-lg">
            <div className="container">
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><MenuRoundedIcon/></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item me-4">
                            <Link className="nav-link links" to="/">All</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link links" to="/tech">Tech</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link links" to="/bitcoin">Bitcoin</Link>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link links" href="#">Entertainment</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link links" href="#">Fashion</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link links" href="#">Sport</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;