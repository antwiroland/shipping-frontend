import { PaymentStatus } from "@/types";

type PaymentStatusInfo = {
  label: string;
  value: PaymentStatus;
};

export const PAYMENT_STATUS: PaymentStatusInfo[] = [
  { label: "Paid", value: "paid" },
  { label: "Pending Payment", value: "pending-payment" },
];
