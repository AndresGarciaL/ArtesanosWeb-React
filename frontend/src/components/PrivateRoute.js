import { Route, Link } from 'react-router-dom';

function PrivateRoute
    ({ component: Component, roles, ...rest }) {
    const rol = localStorage.getItem('rol');

    if (rol && roles.includes(rol)) {
        return <Route {...rest} render={(props) => <Component {...props} />} />;
    } else {
        return <Link to="/" />;
    }
}

export default PrivateRoute;