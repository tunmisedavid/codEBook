import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getUserOrders } from "../../services";

import UseTitle from "../../hooks/UseTitle";
  
import EmptyDashboard from "./components/EmptyDashboard";
import DashboardCard from "./components/DashboardCard";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  UseTitle("Dashboard");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrders();
        setOrders(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }
    fetchOrders();
  }, []);
  return (
    <main className="dark:bg-gray-900 ">
      <section className="dark:bg-gray-900 ">
        <p className="text-2xl text-center font-semibold dark:text-slate-100 py-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      <section className="dark:bg-gray-900 dark:text-white">
        {orders.length &&
          orders.map((order) => <DashboardCard key={order.id} order={order} />)}
      </section>

      <section className="dark:bg-gray-900 ">
        {!orders.length && <EmptyDashboard />}
      </section>
    </main>
  );
};

export default Dashboard;
