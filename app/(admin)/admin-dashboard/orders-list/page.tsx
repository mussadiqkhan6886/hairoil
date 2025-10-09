import OrderTable from "@/components/adminComp/OrderTable";

const dummyOrders = [
  {
    id: 1,
    orderId: "ORD-2025-001",
    userName: "Ali Khan",
    email: "ali@example.com",
    totalPrice: 4200,
    status: "pending",
    paymentMethod: "COD",
    date: "2025-10-09",
  },
  {
    id: 2,
    orderId: "ORD-2025-002",
    userName: "Sara Ahmed",
    email: "sara@example.com",
    totalPrice: 2500,
    status: "shipped",
    paymentMethod: "Card",
    date: "2025-10-08",
  },
  {
    id: 3,
    orderId: "ORD-2025-003",
    userName: "Bilal Hussain",
    email: "bilal@example.com",
    totalPrice: 3000,
    status: "delivered",
    paymentMethod: "COD",
    date: "2025-10-07",
  },
];

export default function OrdersPage() {
  return <OrderTable orders={dummyOrders} />;
}
