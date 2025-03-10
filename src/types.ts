export type Shippment = {
  _id: string;
  recieverName: string;
  from: string;
  currentLocation: string;
  destination: string;
  address: string;
  weight: string;
  trackingId: string;
  status: OrderStatus;
  paymentAmount: number;
  paymentStatus: PaymentStatus;
  remarks: string;
};

export type UpadateShippment = {
  recieverName: string;
  from: string;
  currentLocation: string;
  destination: string;
  address: string;
  weight: string;
  remarks: string;
};

export type OrderStatus =
  | "new"
  | "processing"
  | "in-transit"
  | "on-hold"
  | "delivered";

export type PaymentStatus = "paid" | "pending-payment";

export type User = {
  _id: string;
  email: string;
  token: string;
};
