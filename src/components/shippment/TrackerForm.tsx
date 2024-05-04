import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect } from "react";

const trackerSchema = z.object({
  tracker: z.string().nonempty({
    message: "Shipment Id is required",
  }),
});

export type TrackerData = z.infer<typeof trackerSchema>;

type Props = {
  onSubmit: (tracker: TrackerData) => void;
  tracker?: string;
};

function TrackerForm({ tracker, onSubmit }: Props) {
  const form = useForm<TrackerData>({
    resolver: zodResolver(trackerSchema),
    defaultValues: {
      tracker: "",
    },
  });

  useEffect(() => {
    form.reset();
  }, [form, tracker]);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex gap-3 items-center justify-between border-2 rounded-full p-3 ${
          form.formState.errors.tracker && "border-red-500"
        }`}
      >
        <FormField
          name="tracker"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter shippment id"
                  className="bg-white shadow-none border-none text-xl focus-visible:ring-0"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="text-white bg-orange-500 rounded-full">
          Track
        </Button>
      </form>
    </Form>
  );
}

export default TrackerForm;
