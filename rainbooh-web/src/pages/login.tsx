import React from "react";
import {Form, Formik} from 'formik';
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/inputField";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMaps";
import { useRouter } from "next/router";

export const Login: React.FC<{}> = ({}) => {
    const router = useRouter()
    const [, login] = useLoginMutation();
    return (
        <Wrapper variant={"small"}>
        <Formik 
        initialValues={{username : "", password: ""}}
        onSubmit={async (values, {setErrors}) => {
            const response  = await login(values);
            if (response.data?.login.errors)
                setErrors(toErrorMap(response.data.login.errors));
            else
                router.push('/')
        }}
        >
            {( props ) => (
                <Form>
                <InputField name='username' placeholder='username' label="Username" />
                <Box mt={6}>
                <InputField name='password' placeholder='password' label="Password" type="password"/>
                </Box>
                <Button mt={4} isLoading={props.isSubmitting} type='submit' colorScheme="blue">Log In</Button>
                </Form>
            )}
        </Formik>
        </Wrapper>
    );
}

export default Login;