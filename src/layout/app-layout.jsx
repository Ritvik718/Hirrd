import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import React from "react";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>

      <main className="min-h-screen container mx-auto">
        <Header />
        <Outlet />
      </main>

      <footer className="p-10 text-center bg-gray-800 mt-10 text-white">
        Made by Ritvik
      </footer>
    </div>
  );
};

export default AppLayout;
