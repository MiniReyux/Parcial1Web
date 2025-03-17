import { Form, InputGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import { useIntl } from "react-intl";

const backgroundStyle = {
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "55%",
    };

const formStyle = {
    background: "white",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "55%",
    textAlign: "center",
    };

const sideStyle = {
    background: "#30362F",
    width: "45%",
    alignItems: "center",
}

function Login() {
    const [formValues, setFormValues] = useState({username:"", password:""});
    const [errors, setErrors] = useState({password: ""});
    const navigate = useNavigate();
    const intl = useIntl(); 

    const handleUsernameChange = ((e) => {
        setFormValues({...formValues, username: e.target.value});
    });

    const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value});
        setErrors({ ...errors, password: "" });
    });

    const clickSubmit = ((e) => {
        let newErrors = {};
        if (formValues.password.length < 6 || formValues.password.length > 8) {
            newErrors.password = "la contraseña estar entre 5 y 8 caracteres";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        alert("Logged in");
        navigate("/home");
    });

    return(
        <div>
            <div className="flex-grow-1 d-flex text-center" >
                <div >
                    <img src={ require('../data/noun-food-7543523.png') } width={"50px"}/>
                    <h5><FormattedMessage id="slogan"/></h5>
                    <h6><FormattedMessage id="slogan_sub"/></h6>
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="450px" />
                </div>
                <aside style={sideStyle}>

                    <div style={formStyle}>
                        <Form onSubmit={clickSubmit}>
                            <Form.Group>
                                <Form.Control type='text' value={formValues.username} placeholder={intl.formatMessage({ id: "user"})} onChange={handleUsernameChange}>

                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <InputGroup>
                                    <Form.Control type="password" value={formValues.password} placeholder={intl.formatMessage({ id: "password"})} onChange={handlePasswordChange}>

                                    </Form.Control>
                                </InputGroup>
                                
                            </Form.Group>

                            <Button variant='link'>
                                <FormattedMessage id="forgot_psswd"/>
                            </Button>

                            <Button variant="primary" type="submit">
                                <FormattedMessage id="log_in"/>
                            </Button>
                        </Form>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Login;