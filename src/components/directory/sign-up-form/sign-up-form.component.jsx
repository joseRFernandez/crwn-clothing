import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          name="displayName"
          required
          autoComplete="username"
          onChange={handleChange}
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="none"
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          autoComplete="new-password"
          onChange={handleChange}
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          autoComplete="new-password"
          onChange={handleChange}
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
