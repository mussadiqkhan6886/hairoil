"use client";

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FaEdit } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

interface Order {
  id: number;
  orderId: string;
  userName: string;
  email: string;
  totalPrice: number;
  status: string;
  paymentMethod: string;
  date: string;
}

export default function OrderTable({ orders }: { orders: Order[] }) {


    const handleEdit = (id: number) => {
        console.log("edit")
    }

  const columns = [
    { field: "orderId", headerName: "Order ID", flex: 1 },
    { field: "userName", headerName: "Customer", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "totalPrice", headerName: "Total (Rs)", width: 120 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params: any) => {
        const status = params.value;
        const color =
          status === "pending"
            ? "#facc15"
            : status === "processing"
            ? "#60a5fa"
            : status === "shipped"
            ? "#34d399"
            : status === "delivered"
            ? "#22c55e"
            : "#f87171";

        return (
          <span
            style={{
              backgroundColor: color,
              color: "white",
              padding: "4px 10px",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: "bold",
            }}
          >
            {status}
          </span>
        );
      },
    },
    { field: "paymentMethod", headerName: "Payment", width: 120 },
    { field: "date", headerName: "Date", width: 130 },
    {
          field: 'actions',
          headerName: 'Actions',
          sortable: false,
          width: 120,
          renderCell: (params: any) => (
            <Box>
              <IconButton color="primary" onClick={() => handleEdit(params.row._id)}>
                <FaEdit />
              </IconButton>
            </Box>
          ),
        },
  ];

  return (
    <div style={{ height: "auto", width: "100%" }}>
      <h2 className="text-2xl font-semibold mb-3">Orders</h2>
      <DataGrid
        rows={orders}
        columns={columns}
        disableRowSelectionOnClick
        autoHeight // ✅ Makes it expand for all data
        showToolbar
      />
    </div>
  );
}
