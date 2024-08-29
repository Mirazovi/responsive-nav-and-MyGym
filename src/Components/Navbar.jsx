
import PropTypes from 'prop-types'; 
const Navbar = ({route}) => {
    return (
        <div>
            <li><a href={route.path}>{route.name}</a></li>
        </div>
    );
};
Navbar.propTypes = {
    route:PropTypes.object
}
export default Navbar;