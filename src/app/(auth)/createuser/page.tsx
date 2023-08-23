"use client";

import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import CustomInput from "@/components/Input";
import { Button } from "@mui/material";
import * as S from "../style";
import Link from "next/link";
import { useContext } from "react";
import UserAuthenticationContext from "@/contexts/UserAuthContext";

const SignInSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Preencha seu email"),
  password: yup.string().required("Digite sua senha"),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  firstName: yup
    .string()
    .required("O primeiro nome é obrigatório")
    .min(2, "O primeiro nome deve ter pelo menos 2 caracteres")
    .max(50, "O primeiro nome deve ter no máximo 50 caracteres")
    .matches(
      /^[a-zA-ZÀ-ÿ\s']+$/,
      "O primeiro nome deve conter apenas letras e espaços"
    ),
  lastName: yup
    .string()
    .required("O sobrenome é obrigatório")
    .min(2, "O sobrenome deve ter pelo menos 2 caracteres")
    .max(50, "O sobrenome deve ter no máximo 50 caracteres")
    .matches(
      /^[a-zA-ZÀ-ÿ\s']+$/,
      "O sobrenome deve conter apenas letras e espaços"
    ),
});

type userCreationSchema = yup.InferType<typeof SignInSchema>

export default function CreateUser() {
  const { createUser } = useContext(UserAuthenticationContext);

  const handleSubmit = async (values: userCreationSchema) => {
    try {
      createUser(values);
    } catch (error) {
      console.warn(error);
    }
  };

  const initialValues: userCreationSchema = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <S.FormContainer usersignup={true}>
      <h1>Create Your Account!</h1>
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
                name="firstName"
                label="Name"
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                component={CustomInput}
              />
              <Field
                name="lastName"
                label="Last Name"
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                component={CustomInput}
              />
              <Field
                name="email"
                label="Email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                component={CustomInput}
              />
              <Field
                name="password"
                label="Password"
                type="password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                component={CustomInput}
              />
              <Field
                name="confirmPassword"
                label="Confirm your password"
                type="password"
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                component={CustomInput}
              />
              <Button variant="contained" type="submit">
                Create Account
              </Button>
            </S.FormInputContainer>
          </Form>
        )}
      </Formik>
      <Link href="/login">Have an account already? Login</Link>
    </S.FormContainer>
  );
}
