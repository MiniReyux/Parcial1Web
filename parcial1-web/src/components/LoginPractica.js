import { isValidElement, useState } from 'react';
import { Form, Button, InputGroup } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function LoginPractica() {
    const [formValues, setFormValues] = useState({email:"", password:""});
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({email: "", password: ""});
    const navigate = useNavigate();

    const handleEmailChange = ((e) => {
        setFormValues({...formValues, email: e.target.value});
        setErrors({ ...errors, email: "" });
        });
     
    const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value});
        setErrors({ ...errors, password: "" });
        });
     
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        };

    const validEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
        };
    const clickSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!validEmail(formValues.email)) {
            newErrors.email = "dirección email inválida";
        }
        if (formValues.password.length != 8) {
            newErrors.password = "la contraseña debe ser de 8 caracteres";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        alert("Logged in");
        navigate("/home");
        }
    
    const backgroundStyle = {
        backgroundImage:"url('https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        };

    const formStyle = {
        background: "white",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "450px", 
        textAlign: "left",
        };

    return (
        <div style={backgroundStyle}>
            <div style={formStyle}>

                <h2 className='mb-4'>Log in</h2>

                <Form onSubmit={clickSubmit}>

                    <Form.Group className="mb-6" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={formValues.email} onChange={handleEmailChange} isInvalid={!!errors.email}/>
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <Form.Control type={showPassword ? "text" : "password"} value={formValues.password} onChange={handlePasswordChange} isInvalid={!!errors.password}/>
                            <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </Button>
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </InputGroup>
                        <Form.Text className="text-muted">8 char long</Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                    Log in
                    </Button>
                </Form>

            </div>
        </div>
        );
}

export default LoginPractica;