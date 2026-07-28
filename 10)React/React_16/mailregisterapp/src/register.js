import { useState } from 'react';

const initialState = {
  fullName: '',
  email: '',
  password: ''
};

const initialErrors = {
  fullName: '',
  email: '',
  password: ''
};

function Register() {
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    const fieldErrors = { ...errors };

    switch (name) {
      case 'fullName':
        fieldErrors.fullName =
          value.trim().length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
      case 'email':
        fieldErrors.email =
          /.+@.+\..+/.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        fieldErrors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    setErrors(fieldErrors);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    validateField(name, value);
  };

  const validateForm = () => {
    const validationErrors = {
      fullName: '',
      email: '',
      password: ''
    };

    validationErrors.fullName =
      formValues.fullName.trim().length < 5
        ? 'Full Name must be 5 characters long!'
        : '';
    validationErrors.email =
      /.+@.+\..+/.test(formValues.email)
        ? ''
        : 'Email is not valid!';
    validationErrors.password =
      formValues.password.length < 8
        ? 'Password must be 8 characters long!'
        : '';

    setErrors(validationErrors);

    return (
      validationErrors.fullName === '' &&
      validationErrors.email === '' &&
      validationErrors.password === ''
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (validateForm()) {
      alert('Valid Form');
      setFormValues(initialState);
      setErrors(initialErrors);
      setSubmitted(false);
    } else {
      if (errors.fullName) alert(errors.fullName);
      else if (errors.email) alert(errors.email);
      else if (errors.password) alert(errors.password);
    }
  };

  return (
    <div className="register-container">
      <h1>Register Here!!!</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="fullName">Name:</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formValues.fullName}
            onChange={handleChange}
          />
          {submitted && errors.fullName && (
            <span className="error-text">{errors.fullName}</span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {submitted && errors.email && (
            <span className="error-text">{errors.email}</span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {submitted && errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
