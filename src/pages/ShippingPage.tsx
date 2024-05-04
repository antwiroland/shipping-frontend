import { useGetTrackShippment } from "@/api/Shipment";
import Footer from "@/components/footer/Footer";
import LoadingPage from "@/components/LoadingPage";
import OrderProgress from "@/components/shippment/OrderProgress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ORDER_STATUS } from "@/config/order-status";
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
                <CardTitle className="flex items-center justify-between text-xl">
                  <div>
                    Name: <span>{shippment.recieverName}</span>
                  </div>

                  <div>
                    Address: <span>{shippment.address}</span>
                  </div>
                </CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col gap-3 space-y-3">
                <div className="flex gap-2">
                  <span className="text-xl font-bold">Status:</span>
                  <span className="text-xl flont-bold">
                    {getShippmentStatus().label}
                  </span>
                </div>

                <OrderProgress value={getShippmentStatus().progressValue} />

                <div className="flex gap-2">
                  <span className="text-xl font-bold">From:</span>
                  <span className="text-xl flont-bold">{shippment.from}</span>
                </div>

                <div className="flex gap-2">
                  <span className="text-xl font-bold">Current Location:</span>
                  <span className="text-xl flont-bold">
                    {shippment.currentLocation}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-xl font-bold">Destination:</span>
                  <span className="text-xl flont-bold">
                    {shippment.destination}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-xl font-bold">Weigth:</span>
                  <span className="text-xl flont-bold">{shippment.weight}</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xl font-bold">Remarks</span>
                  <div className="shadow-md px-2 py-3">{shippment.remarks}</div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="flex items-center justify-center">
              <span className="text-xl">No package with given ID found !</span>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingPage;
