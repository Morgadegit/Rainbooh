import React from "react";
import {Form, Formik} from 'formik';
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/inputField";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMaps";
import { useRouter } from "next/router";

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
    const router = useRouter()
    const [, register] = useRegisterMutation();
    return (
        <Wrapper variant={"small"}>
        <Formik 
        initialValues={{username : "", password: ""}}
        onSubmit={async (values, {setErrors}) => {
            const response  = await register(values);
            if (response.data?.register.errors)
                setErrors(toErrorMap(response.data.register.errors));
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
                <Button mt={4} isLoading={props.isSubmitting} type='submit' colorScheme="blue">Register</Button>
                </Form>
            )}
        </Formik>
        </Wrapper>
    );
}

export default Register