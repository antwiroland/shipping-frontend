import { useDeleteShippment, useGetShippments } from "@/api/Shipment";
import NavBar from "@/components/admin/NavBar";
import Footer from "@/components/footer/Footer";
import LoadingPage from "@/components/LoadingPage";
import ShippmentCard from "@/components/shippment/ShippmentCard";
import ShippmentForm from "@/components/shippment/ShippmentForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


function Admin() {
  const { shippments, isLoading: isShippmentLoading } = useGetShippments();
  const { deleteShippment, isLoading: isDeletingLoading } =
    useDeleteShippment();

  if (isShippmentLoading) {
    <LoadingPage />;
  }
  return (
    <>
      <NavBar />
      <div className="container mx-auto flex-1 py-10">
        <Tabs defaultValue="manage-shippment">
          <TabsList>
            <TabsTrigger value="manage-shippment">Manage Shippment</TabsTrigger>
            <TabsTrigger value="create-shippment">Create Shippment</TabsTrigger>
          </TabsList>

          <TabsContent value="manage-shippment">
            {!shippments ? (
              <span>No Shippment found</span>
            ) : (
              <div className="flex flex-col gap-2">
                {shippments.map((shippment) => (
                  <ShippmentCard
                    key={shippment._id}
                    remove={() => deleteShippment(shippment._id)}
                    shippment={shippment}
                    isLoading={isDeletingLoading}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="create-shippment">
            <ShippmentForm />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
