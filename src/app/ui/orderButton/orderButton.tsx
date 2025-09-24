"use client";

import { useState } from "react";

export default function Home() {
  const [token, setToken] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  async function login() {
    const res = await fetch("/api/pathao/auth", { method: "POST" });
    const data = await res.json();
    setToken(data.access_token);
    localStorage.setItem("pathao_token", data.access_token);
  }

  async function createOrder() {
    if (!token) return alert("Login first!");

    const order = {
      store_id: 148878, // replace with your approved store_id
      merchant_order_id: "later I will rpovide",
      recipient_name: "Demo Recipient",
      recipient_phone: "01700554293",
      recipient_address: "Jashore, Bangladesh",
      delivery_type: 48,
      item_type: 2,
      special_instruction: "Need to Delivery before 5 PM",
      item_quantity: 1,
      item_weight: 1,
      item_description: "this is a Cloth item, price- 3000",
      amount_to_collect: 900
    };

    const res = await fetch("/api/pathao/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ access_token: token, order }),
    });

    const data = await res.json();
    setResult(data);
    console.log("Order Response:", data);
  }

  async function getStores() {
    if (!token) return alert("Login first!");

    const res = await fetch("/api/pathao/stores", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setResult(data);
    console.log("Stores Response:", data);
  }

  async function createStore() {
    if (!token) return alert("Login first!");

    const storeData = {
      name: "Hirock",
      contact_name: "Hirock",
      contact_number: "01700554293",
      secondary_contact: "01945054264",
      otp_number: "01700554293",
      address: "House 123, Road 4, Sector 10, Uttara, Dhaka-1230, Bangladesh",
      city_id: 1, // replace with actual city_id
      zone_id: 2, // replace with actual zone_id
      area_id: 3, // replace with actual area_id
    };

    const res = await fetch("/api/pathao/store", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(storeData),
    });

    const data = await res.json();
    setResult(data);
    console.log("Create Store Response:", data);
  }

  return (
    <div className="p-6 space-y-4">
      <button
        onClick={login}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Get Access Token
      </button>

      <button
        onClick={getStores}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        Get Stores
      </button>

      <button
        onClick={createStore}
        className="px-4 py-2 bg-orange-600 text-white rounded"
      >
        Create Store
      </button>

      <button
        onClick={createOrder}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Create Order
      </button>

      {result && (
        <pre className="bg-gray-100 p-4">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
