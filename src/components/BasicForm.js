import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  Checkbox,
  RadioGroup,
  FormGroup,
  FormHelperText,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Grid
} from "@material-ui/core";

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
    <Container>
      <Grid container spacing={3}>
        <Grid container item xs={12} justify="center">
          <Typography variant="h5">Login</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            style={{ width: "100%" }}
            label="Email"
            id="email"
            type="email"
            onChange={e => formChange("email", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            style={{ width: "100%" }}
            label="Password"
            id="password"
            type="password"
            onChange={e => formChange("password", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.rememberMe}
                  onChange={() =>
                    formChange("rememberMe", !formData.rememberMe)
                  }
                />
              }
              label="Remember Me?"
            />
          </FormGroup>
        </Grid>

        <Grid container item xs={12} justify="flex-end">
          <Button variant="contained" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
