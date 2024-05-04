import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import LoadingButton from "../LoadingButton";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, "Password must be more 4 characters"),
});

export type UserForm = z.infer<typeof FormSchema>;

type Props = {
  onSave: (user: UserForm) => void;
  isLoading: boolean;
  title: string;
};
const LoginForm = ({ onSave, isLoading, title }: Props) => {
  const form = useForm<UserForm>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-2 bg-gray-10 md:p-10"
      >
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <Label>Email</Label>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <Label>Password</Label>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button className="text-white bg-orange-500">{title}</Button>
        )}
      </form>
    </Form>
  );
};

export default LoginForm;
