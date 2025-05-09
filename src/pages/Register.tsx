import { useForm, SubmitHandler } from "react-hook-form";
import { Form, Button, Spinner } from "react-bootstrap";
import { TSignUp, registerSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckEmailAvailability } from "@/hooks";
import { Input } from "@/components/forms";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actAuthRegister } from "@/store/auth/authSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {

  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector(state => state.auth);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm<TSignUp>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const { checkEmailAvailability, emailStatus, enteredEmail, resetEmail } =
    useCheckEmailAvailability();

  const onSubmit: SubmitHandler<TSignUp> = (data) => {
    const { firstName, lastName, email, password } = data;
    dispatch(actAuthRegister({ firstName, lastName, email, password })).unwrap().then(() => navigate('/login?registered=true'));
  };

  const emailOnblurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");
    if (isDirty && !invalid && enteredEmail !== value) {
      checkEmailAvailability(value);
    }

    if (isDirty && invalid && enteredEmail) {
      resetEmail();
    }
  };

  return (
    <Form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="First Name"
        name="firstName"
        register={register}
        error={errors.firstName?.message as string}
      />

      <Input
        label="Last Name"
        name="lastName"
        register={register}
        error={errors.lastName?.message as string}
      />

      <Input
        label="Email Address"
        name="email"
        register={register}
        onblur={emailOnblurHandler}
        error={
          errors.email?.message
            ? errors.email?.message
            : emailStatus === "notAvailable"
            ? "Email already in use"
            : emailStatus === "failed" ? "Failed to check availability" : ""
        }
        checkingText={
          emailStatus === "checking" ? "Checking Availability..." : ""
        }
        availableText={emailStatus === "available" ? "Available for use" : ""}
        disabled={emailStatus === "checking"}
      />

      <Input
        label="Password"
        name="password"
        type="password"
        register={register}
        error={errors.password?.message as string}
      />

      <Input
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        register={register}
        error={errors.confirmPassword?.message as string}
      />

      <Button variant="info" type="submit" style={{ color: "#fff" }} disabled={emailStatus === "checking" || loading === 'pending'}>
        {loading === 'pending' ? <>
          <Spinner animation="border" size="sm" /> Loading...
        </> : 'Submit'}
      </Button>

      {error && <p className="text-danger" style={{marginTop: '10px'}}>{error}</p>}
    </Form>
  );
};

export default Register;
