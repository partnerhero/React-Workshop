import React from "react";

export default function BasicForm() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const formChange = (id, value) => {
    let newFormData = { ...formData };
    newFormData[id] = value;
    setFormData(newFormData);
  };

  const onSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <h3>My Basic Form</h3>
      <br />

      <h6>Email</h6>
      <input
        type="text"
        onChange={e => formChange("email", e.target.value)}
        value={formData.email}
      />

      <h6>Password</h6>
      <input
        type="password"
        onChange={e => formChange("password", e.target.value)}
        value={formData.password}
      />
      <br />

      <label htmlFor="remember">Remember Me</label>
      <input
        type="checkbox"
        name="remember"
        onChange={e => formChange("rememberMe", !formData.rememberMe)}
        checked={formData.rememberMe}
      />

      <br />
      <input type="submit" value="Submit" onClick={onSubmit} />
    </div>
  );
}
