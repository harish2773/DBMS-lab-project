import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import UserMenu from "../../components/Layout/UserMenu";

const UserOrders = () => {

  const [orders, setOrders] = useState([]);

    const getAllOrders = async () => {
        try {
          const { data } = await axios.get(
            "http://localhost:5000/api/orders/get-all-orders"
          );
          if (data?.success) {
            setOrders(data?.orders);
          }
        } catch (error) {
          console.log(error);
          // toast.error("Something went wrong in getting orders");
        }
      };

      useEffect(() => {
        getAllOrders();
      }, []);


  return (
    <>
    <Layout title={"DashBoard - User Orders"}>
    <div className="container-fluid m-3 p-3 dashboard">
    <div className="row">
    <div className="col-md-3">
    <UserMenu />

    </div>
    <div className="col-md-9">
    <h1>Orders</h1>
    <br></br>
    <div>
    <table className="table">
    <thead>

    <tr>
    <th scope="col">Order ID</th>
    <th scope="col">Customer</th>
    {/* <th scope="col">Payment</th> */}
    <th scope="col">Status</th>
    <th scope="col">Shipping Address</th>
    <th scope="col">Total Amount</th>
    <th scope="col">Order Date</th>
    <th scope="col">Delivery Date</th>
    </tr>
    </thead>

    <tbody>
        {orders.map((c) => (

            <>
            <tr key={c.order_id}>
            <td>{c.order_id}</td>
            <td>{c.customer.username}</td>
            {/* <td>{c.payment}</td> */}
            <td>{c.status}</td>
            <td>{c.shipping_address}</td>
            <td>{c.total_amount}</td>
            <td>{c.order_date}</td>
            <td>{c.delivery_date}</td>
            <td>
            <button className="btn btn-info ms-2">
                View
            </button>
            </td>
            </tr>
            </>
        ))}


    </tbody>
    </table>
    </div>
    </div>
    </div>
    </div>

    </Layout>

      
    </>
  )
}

export default UserOrders
