import React from 'react';
import { Redirect, Route } from 'react-router';
import ReactLoading from 'react-loading';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                <ReactLoading type={"spinningBubbles"} color={"#7ea0ff"} height={100} width={100} />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;