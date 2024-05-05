import { useState } from "react";
import { ORDER_STATUS } from "@/config/order-status";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
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
import { useCreateShippment } from "@/api/Shipment";
import LoadingButton from "../LoadingButton";

export const formSchema = z.object({
  recieverName: z
    .string()
    .min(3, "Name must contain at least three characters"),
  from: z.string().min(3, "From must contain at least three characters"),
  currentLocation: z
    .string()
    .min(3, "Current Location must contain at least three characters"),
  destination: z
    .string()
    .min(3, "Destination must contain at least three characters"),
  address: z.string().min(3, "Address must contain at least three characters"),

  paymentAmount: z.string().min(1, "Please provide payment amount"),
  weight: z.string().min(1, "Weight must contain at least one characters"),

  trackingId: z
    .string()
    .min(3, "Tracking Id must contain at least three characters"),

  status: z.string().min(3, "Status must contain at least three characters"),

  remarks: z.string().min(3, "Remarks must contain at least three characters"),
});

export type ShippmentData = z.infer<typeof formSchema>;
const ShippmentForm = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const form = useForm<ShippmentData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recieverName: "",
      from: "",
      currentLocation: "",
      destination: "",
      address: "",
      weight: "",
      paymentAmount: "",
      trackingId: "",
      status: "",
      remarks: "",
    },
  });
  const { createShippment, isLoading: isCreatingLoading } =
    useCreateShippment();

  const onSave = async (data: ShippmentData) => {
    const response = await createShippment(data);
    if (response._id) {
      form.reset();
    }
  };

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    form.setValue("status", value);
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
          name="status"
          render={({ field }) => (
            <FormItem className="md:w-[30%]">
              <Label>Status</Label>
              <FormControl>
                <Select
                  {...field}
                  onValueChange={(value) => handleStatusChange(value as string)}
                  value={selectedStatus}
                >
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {ORDER_STATUS.map((status, index) => (
                      <SelectItem key={index} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
        {isCreatingLoading ? (
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

export default ShippmentForm;
