import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { OrderStatus, PaymentStatus, Shippment } from "@/types";
import LoadingButton from "../LoadingButton";
import { ORDER_STATUS } from "@/config/order-status";
import { PAYMENT_STATUS } from "@/config/payment-status";
import {
  useUpdateShippmentPaymentStatus,
  useUpdateShippmentStatus,
} from "@/api/Shipment";
import { useEffect, useState } from "react";
import EditShippmentForm from "./EditShippmentForm";

type Props = {
  shippment: Shippment;
  remove: (id: string) => void;
  isLoading: boolean;
};
function ShippmentCard({ shippment, remove, isLoading }: Props) {
  const { updateShippmentStatus, isLoading: isUpdateShippmentStatusLoading } =
    useUpdateShippmentStatus();
  const {
    updateShippmentPaymentStatus,
    isLoading: isUpdateShippmentPaymentStatusLoading,
  } = useUpdateShippmentPaymentStatus();
  const [status, setStatus] = useState<OrderStatus>(shippment.status);
  const [payment, setPayment] = useState<PaymentStatus>(
    shippment.paymentStatus
  );

  useEffect(() => {
    setStatus(shippment.status);
  }, [shippment, shippment.status]);

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateShippmentStatus({
      id: shippment._id,
      status: newStatus,
    });
    setStatus(newStatus);
  };

  const handlePaymentStatusChange = async (newPaymentStatus: PaymentStatus) => {
    await updateShippmentPaymentStatus({
      id: shippment._id,
      paymentStatus: newPaymentStatus,
    });
    setPayment(newPaymentStatus);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="grid md:grid-cols-3 gap-4  mb-3 text-xl">
          <div>
            Name:{" "}
            <span className="ml-2 font-normal">
              {shippment.recieverName.length > 10
                ? shippment.recieverName.slice(0, 10) + "..."
                : shippment.recieverName}
            </span>
          </div>

          <div>
            Address:{" "}
            <span className="ml-2 font-normal">
              {shippment.address.length > 16
                ? shippment.address.slice(0, 16) + "..."
                : shippment.address}
            </span>
          </div>

          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-blue-950 text-white">
                  Edit
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50">
                <EditShippmentForm shippmentId={shippment._id} />
              </DialogContent>
            </Dialog>
            {isLoading ? (
              <LoadingButton />
            ) : (
              <Button
                onClick={() => remove(shippment._id)}
                variant="outline"
                className="bg-red-500 text-white"
              >
                Remove
              </Button>
            )}
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <span className="text-md">Tracking ID:</span>
          <span className="text-md font-bold">{shippment.trackingId}</span>
        </div>
        <Separator />
        <Label htmlFor="paymentStatus" className="text-md">
          What is the is payment status
        </Label>

        <Select
          value={payment}
          disabled={
            isUpdateShippmentStatusLoading ||
            isUpdateShippmentPaymentStatusLoading
          }
          onValueChange={(value) =>
            handlePaymentStatusChange(value as PaymentStatus)
          }
        >
          <SelectTrigger id="paymentStatus">
            <SelectValue placeholder="Payment Status" />
          </SelectTrigger>
          <SelectContent position="popper">
            {PAYMENT_STATUS.map((paymentStatus) => (
              <SelectItem key={paymentStatus.value} value={paymentStatus.value}>
                {paymentStatus.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Separator />
        <Label htmlFor="status" className="text-md">
          What is the status of Shippment
        </Label>

        <Select
          value={status}
          disabled={
            isUpdateShippmentStatusLoading ||
            isUpdateShippmentPaymentStatusLoading
          }
          onValueChange={(value) => handleStatusChange(value as OrderStatus)}
        >
          <SelectTrigger id="status">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent position="popper">
            {ORDER_STATUS.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}

export default ShippmentCard;
