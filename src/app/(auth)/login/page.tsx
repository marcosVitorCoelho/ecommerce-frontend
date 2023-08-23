"use client";

import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import CustomInput from "@/components/Input";
import { Button } from "@mui/material";
import * as S from "../style";
import Link from "next/link";
import UserAuthenticationContext from "@/contexts/UserAuthContext";
import { useContext } from "react";
import { checkUserAuth } from "@/utils/checkUserAuth";

const SignInSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Preencha seu email"),
  password: yup.string().required("Digite sua senha"),
});

type userLoginSchema = yup.InferType<typeof SignInSchema>

export default function Login() {
  const { authUser } = useContext(UserAuthenticationContext);
  const handleSubmit = async (values: userLoginSchema) => {
    try {
      authUser(values);
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues: userLoginSchema = {
    email: "",
    password: "",
  };

  

  return (
    <S.FormContainer>
      <h1>Login</h1>
      {!checkUserAuth() ? (
        <>
          <Formik
            initialValues={initialValues}
            validationSchema={SignInSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <S.FormInputContainer>
                  <Field
                    name="email"
                    label="Email"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    component={CustomInput}
                  />
                  <Field
                    name="password"
                    type="password"
                    label="Password"
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    component={CustomInput}
                  />
                  <Button variant="contained" type="submit">
                    Login
                  </Button>
                </S.FormInputContainer>
              </Form>
            )}
          </Formik>
          <Link href="/createuser">Crie uma conta</Link>
        </>
      ) : (
        <>
          <p>Você já está logado</p>
          <Link href="/">Ir para a Home</Link>
        </>
      )}
    </S.FormContainer>
  );
}
