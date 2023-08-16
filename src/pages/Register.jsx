import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import { Formik, Form } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { object, string } from "yup";

const Login = () => {
  const loginSchema = object({
    userName: string().required("Bu alan zorunludur"),
    lastName: string().required("Bu alan zorunludur"),
    firstName: string().required("Bu alan zorunludur"),
    email: string()
      .email("Lütfen valid bir email giriniz")
      .required("Bu alan zorunludur"),
    password: string()
      .required("Bu alan zorunludur")
      .min(8, "En az 8 karakter olmalıdır")
      .max(16, "En fazla 16 karakter girilmelidir")
      .matches(/[a-z]/, "En az bir küçük harf içermelidir")
      .matches(/[A-Z]/, "En az bir büyük harf içermelidir")
      .matches(/[!;:?-_<>%$€₺*/\-+:`;]/, "En az bir özel karakter içermelidir"),
  });
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{ height: "100vh", p: 2 }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary.dark" align="center">
            STOCK APP
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.dark",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color={"secondary.dark"}
          >
            Register
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, action) => {
              //Login fonksiyonu buraya yazılacak
              action.resetForm();
              action.setSubmitting(false);
            }}
          >
            {({ handleChange, handleBlur, values, touched, errors }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <TextField
                    label="User Name"
                    name="username"
                    id="userName"
                    type="text"
                    variant="outlined"
                    onBlur={handleBlur}
                    error={touched.userName && Boolean(errors.userName)}
                    helperText={errors.userName}
                  ></TextField>
                  <TextField
                    label="First Name"
                    name="firstname"
                    id="firstame"
                    type="text"
                    variant="outlined"
                    onBlur={handleBlur}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={errors.firstName}
                  ></TextField>
                  <TextField
                    label="Last Name"
                    name="lastname"
                    id="lastName"
                    type="text"
                    variant="outlined"
                    onBlur={handleBlur}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={errors.lastName}
                  ></TextField>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.value}
                    error={touched.email && Boolean(errors.email)}
                    helperText={errors.email}
                  ></TextField>
                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.value}
                    error={touched.password && Boolean(errors.password)}
                    helperText={errors.password}
                  ></TextField>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Link to="/" xs={12} sm={7} md={6}>
              Hesabınız var mı?
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
