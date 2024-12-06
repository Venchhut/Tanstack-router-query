import { Button, Container, Stack, Text, TextInput } from "@mantine/core";
import classes from "./form.module.css";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
const userSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email(),
  password: z.string().min(6, { message: "Password is required" }),
});

type User = z.infer<typeof userSchema>;
export default function SignUp() {
  const form = useForm<User>({
    validate: zodResolver(userSchema),
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  // const handleSubmit = () => {
  //   if (!form.isValid()) return;
  //   console.log(form.values);
  // };
  const handleSubmit = (values: User) => {
    console.log(values);
  };

  console.log(form.values);
  return (
    <div className={classes.content}>
      <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
        <Container>
          <Stack>
            <Text size="xl">Sign Up</Text>
            <TextInput
              label="Name"
              placeholder="Your name"
              error={form.errors.name}
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              placeholder="Your email"
              error={form.errors.email}
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Password"
              placeholder="Your password"
              error={form.errors.password}
              {...form.getInputProps("password")}
            />
            <Button type="submit">Submit</Button>
          </Stack>
        </Container>
      </form>
    </div>
  );
}
