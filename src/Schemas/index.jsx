import * as Yup from "yup";

export const ContactSchema=Yup.object({
    name:Yup.string().min(2).max(20).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    phonenumber:Yup.number().min(11).required("Please enter your phone number!")
})


export const SignupSchema=Yup.object({
    name:Yup.string().min(2).max(20).required("Please enter your ful name!"),
    email:Yup.string().email("Please enter a valid email address").required("Email address is required!"),
    password:Yup.string().min(6).required("password is required!"),
    confirm_pass:Yup.string().required().oneOf([Yup.ref('password'),null],"Password does not match!")
})

export const SigninSchema=Yup.object({
    email:Yup.string().email("Please enter a valid email address").required("Email address is required!"),
    password:Yup.string().min(6).required("password is required!"),
})

export const SubcriptionSchema=Yup.object({
    email:Yup.string().email("Please enter a valid email address").required("Email address is required!")
})

export const ForgotPasswordSchema=Yup.object({
    email:Yup.string().email("Please enter a valid email address").required("Email address is required!")
})

export const ResetPassSchema=Yup.object({
    email:Yup.string().email("Please enter a valid email address").required("Email address is required!"),
    verification_code:Yup.string().required("Code is required"),
    password:Yup.string().min(6).required("password is required!"),
    confirm_pass:Yup.string().required().oneOf([Yup.ref('password'),null],"Password does not match!")
})

