import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/forms";
import { Button, Form } from "react-bootstrap";
import { loginSchema, TLogin } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TLogin>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<TLogin> = (data) => {
    console.log(data);
  }

  return (
    <Form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email Address"
        name="email"
        register={register}
        error={errors.email?.message as string}
      />

      <Input
        label="Password"
        name="password"
        register={register}
        error={errors.password?.message as string}
      />

      <Button variant="info" type="submit" style={{ color: "#fff" }}>
        Submit
      </Button>
    </Form>
  );
};

export default Login;
