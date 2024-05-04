import { OrderStatus } from "@/types";

type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressValue: number;
};

export const ORDER_STATUS: OrderStatusInfo[] = [
  { label: "New", value: "new", progressValue: 0 },
  { label: "Processing", value: "processing", progressValue: 25 },
  { label: "In-Transit", value: "in-transit", progressValue: 50 },
  { label: "On-Hold", value: "on-hold", progressValue: 75 },
  { label: "Delivered", value: "delivered", progressValue: 100 },
];
