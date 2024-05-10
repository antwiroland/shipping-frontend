import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useGetSingleShippment, useUpdateShippment } from "@/api/Shipment";
import LoadingButton from "../LoadingButton";
import { useEffect } from "react";
import LoadingPage from "../LoadingPage";

const formSchema = z.object({
  recieverName: z
    .string()
    .min(3, "Name must contain at least three characters"),
  from: z.string().min(3, "From must contain at least three character"),
  currentLocation: z
    .string()
    .min(3, "Current Location must contain at least three character"),
  destination: z
    .string()
    .min(3, "Destination must contain at least three character"),
  address: z.string().min(3, "Address must contain at least three character"),
  paymentAmount: z.string().min(1, "Please provide payment amount"),
  weight: z.string().min(1, "Weight must contain at least one character"),

  trackingId: z
    .string()
    .min(3, "Tracking Id must contain at least three character"),
  remarks: z.string().min(3, "Remarks must contain at least three character"),
});

type UpadateShippment = z.infer<typeof formSchema>;
type Props = {
  shippmentId: string;
};
const EditShippmentForm = ({ shippmentId }: Props) => {
  const form = useForm<UpadateShippment>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recieverName: "",
      from: "",
      currentLocation: "",
      destination: "",
      address: "",
      weight: "",
      trackingId: "",
      remarks: "",
    },
  });

  const { updateShippment, isLoading: isUpdateShippmentLoading } =
    useUpdateShippment();
  const { shippment, isLoading: isShippmentLoading } =
    useGetSingleShippment(shippmentId);

  if (isShippmentLoading) {
    <LoadingPage />;
  }

  useEffect(() => {
    if (!shippment) {
      return;
    }
    form.reset(shippment);
  }, [form, shippment]);

  const onSave = async (data: UpadateShippment) => {
    const response = await updateShippment({ id: shippmentId, data });
    if (response._id) {
      window.location.reload();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-50 md:p-10 rounded-lg"
      >
        <FormField
          control={form.control}
          name="recieverName"
          render={({ field }) => (
            <FormItem>
              <Label>Reciever's Name</Label>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="from"
            render={({ field }) => (
              <FormItem className="flex-1">
                <Label>From</Label>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currentLocation"
            render={({ field }) => (
              <FormItem className="flex-1">
                <Label>City Location</Label>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem className="flex-1">
                <Label>Destination</Label>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <Label>Address</Label>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentAmount"
          render={({ field }) => (
            <FormItem className="md:w-[20%]">
              <Label>Payment Amount</Label>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem className="md:w-[20%]">
              <Label>Weight</Label>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="trackingId"
          render={({ field }) => (
            <FormItem className="md:w-[20%]">
              <Label>Tracking Id</Label>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="remarks"
          render={({ field }) => (
            <FormItem>
              <Label>Remarks</Label>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isUpdateShippmentLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-orange-500">
            Save
          </Button>
        )}
      </form>
    </Form>
  );
};

export default EditShippmentForm;
