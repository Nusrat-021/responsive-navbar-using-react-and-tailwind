import PropTypes from "prop-types";

const NavLink = ({route}) => {
    return (
        <div className="ml-10">
            <li><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

NavLink.propTypes = {
    route:PropTypes.object.isRequired,
}
export default NavLink;