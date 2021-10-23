import { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Submitted } from "./Submitted";
import "./emp.css";

export const EmpCard = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target);
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validation(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validation = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "username is required !";
    }
    if (!values.email) {
      errors.email = "email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "invalid email address";
    }
    if (!values.password) {
      errors.password = "password is required !";
    } else if (values.password.length < 4) {
      errors.password = "password must be more than four characters";
    } else if (values.password.length > 10) {
      errors.password = "password can't exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <>
      <Card id="card_main">
        <Card.Body>
          <Card.Title id="card_title">Form</Card.Title>
          <hr />
          <br />
          <Form onSubmit={handleSubmit} id="input_form">
            <Form.Group>
              <Form.Label>
                Username<sup className="sup">*</sup>
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="enter username"
                id="inputbox"
                value={formValues.username}
                onChange={handleChange}
              />
              <span className="err_msg">{formErrors.username}</span>
              <br />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Email<sup className="sup">*</sup>
              </Form.Label>
              <Form.Control
                name="email"
                placeholder="enter email"
                id="inputbox"
                value={formValues.email}
                onChange={handleChange}
              />
              <span className="err_msg">{formErrors.email}</span>

              <br />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Password<sup className="sup">*</sup>
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="enter password"
                id="inputbox"
                value={formValues.password}
                onChange={handleChange}
              />
              <span className="err_msg">{formErrors.password}</span>
            </Form.Group>
            <br />
            <Button type="submit" name="submit" id="submit_btn">
              Submit
            </Button>
          </Form>
          <br />
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="submitted">submitted succesfully !</div>
          ) : (
            <span className="required">
              <sup className="sup">*</sup> all required field
            </span>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
