import { data } from "@/data/data";
import React from "react";
import {
  BsPersonFIll,
  BsPersonFill,
  BsThreeDotsVertical,
} from "react-icons/bs";

function customers() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className="">Customers</h2>
        <h2>Welcome back, Don</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden md:grid">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <BsPersonFill className="text-purple-800" />
                  </div>
                  <p className="pl-4">{order.name.first + " " + order.name.last}</p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">{order.name.first}@gmail.com</p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                    <p>{order.method}</p>
                    <BsThreeDotsVertical/>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default customers;
