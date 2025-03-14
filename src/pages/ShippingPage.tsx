import { useGetTrackShippment } from "@/api/Shipment";
import Footer from "@/components/footer/Footer";
import LoadingPage from "@/components/LoadingPage";
import OrderProgress from "@/components/shippment/OrderProgress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ORDER_STATUS } from "@/config/order-status";
import { PAYMENT_STATUS } from "@/config/payment-status";
import { Link, useParams } from "react-router-dom";

const ShippingPage = () => {
  const { trackingId } = useParams();
  const { shippment, isLoading: isShippmentLoading } = useGetTrackShippment(
    trackingId as string
  );
  if (isShippmentLoading) {
    <LoadingPage />;
  }

  const getShippmentStatus = () => {
    return (
      ORDER_STATUS.find((o) => o.value === shippment?.status) || ORDER_STATUS[0]
    );
  };

  const getShippmentPaymentStatus = () => {
    return (
      PAYMENT_STATUS.find((o) => o.value === shippment?.paymentStatus) ||
      PAYMENT_STATUS[0]
    );
  };
  return (
    <>
      <div className="container mx-auto flex-1 py-10">
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="bg-orange-500 float-start w-[30%] md:w-[10%] flex items-center justify-center rounded-full text-white"
          >
            Back
          </Link>
          {shippment ? (
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="flex  items-center text-sm md:text-xl gap-3">
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between flex-col md:flex-row md:gap-6">
                      <span>Receiver's Name: </span>
                      <span className="flex flex-1 text-wrap">
                        {shippment.recieverName}
                      </span>
                    </div>

                    <div className="flex justify-between flex-col md:flex-row md:gap-6">
                      <span>Receiver's Address: </span>

                      <span className="flex flex-1 text-wrap">
                        {shippment.address}
                      </span>
                    </div>
                  </div>
                </CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col gap-3 space-y-3">
                <div className="flex gap-2">
                  <span className="text-sm md:text-xl font-bold">Status:</span>
                  <span
                    className={`text-sm md:text-xl flont-bold text-green-500 ${
                      getShippmentStatus().value === "on-hold" && "text-red-500"
                    }`}
                  >
                    {getShippmentStatus().label}
                  </span>
                </div>

                <OrderProgress value={getShippmentStatus().progressValue} />

                <div className="flex gap-2">
                  <span className="text-sm md:text-xl font-bold">From:</span>
                  <span className="text-sm md:text-xl flont-bold">
                    {shippment.from}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-sm md:text-xl font-bold">
                    Current Location:
                  </span>
                  <span className="text-sm md:text-xl flont-bold">
                    {shippment.currentLocation}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-sm md:text-xl font-bold">
                    Destination:
                  </span>
                  <span className="text-sm md:text-xl flont-bold">
                    {shippment.destination}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-sm md:text-xl font-bold">
                    Payment Amount:
                  </span>

                  <span className="text-sm md:text-xlflont-bold">
                    {shippment.paymentAmount}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-sm md:text-xl font-bold">
                    Payment Status:
                  </span>
                  <span
                    className={`text-sm md:text-xl flont-bold ${
                      getShippmentPaymentStatus().value === "paid"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {getShippmentPaymentStatus().label}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-sm md:text-xl font-bold">Weigth:</span>
                  <span className="text-sm md:text-xl flont-bold">
                    {shippment.weight}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-sm md:text-xl font-bold">Remarks</span>
                  <div className="shadow-md px-2 py-3">{shippment.remarks}</div>
                </div>
              </CardContent>
            </Card>
          ) : !shippment && !isShippmentLoading ? (
            <div className="flex items-center justify-center">
              <span className="text-sm md:text-xl">
                No package with given ID found !
              </span>
            </div>
          ) : (
            <LoadingPage />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingPage;
