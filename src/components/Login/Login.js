import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';


    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }
    return (
        <Container className="text-center mt-5 pt-3">
            <div className="mx-auto py-5 mt-3 shadow-lg mx-2 d-flex align-items-center" style={{maxWidth: 430, height: 470, borderRadius: 10}}>
                <div className="mx-auto">
                    <h2 className="primary-color fw-bold">Login With</h2>
                    <Button
                        onClick={handleGoogleSignIn}
                        className="rounded-pill border border-1 my-4 d-flex align-items-center mx-auto" variant="light">
                        <img
                            className="google-icon"
                            height={30}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                        <span className="px-4">Continue With Google</span>
                    </Button>
                    <p>
                        Don't have an account?<Link to="#"> create an account</Link>
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default Login;