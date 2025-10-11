import OrderTable from "@/components/adminComp/OrderTable";
import { connectDB } from "@/lib/config/database";
import order from "@/lib/model/OrderSchema";


export default async function OrdersPage() {

  await connectDB()

  const res = await order.find({})

  const orders = JSON.parse(JSON.stringify(res))

  return <OrderTable orders={orders} />;
}
