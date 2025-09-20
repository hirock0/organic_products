"use client";
import React, { useState } from "react";
import SideBar from "@/components/PageAdmin/SideBar/SideBar";
import { Menu, X } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <main className="h-screen flex flex-col">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4">
                <h1 className="font-bold text-lg">Admin Panel</h1>
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar (slides from right) */}
                <div
                    className={`fixed md:static z-40 top-0 right-0 h-full w-64  overflow-y-auto transform transition-transform duration-300 
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
                >
                    <SideBar />
                </div>

                {/* Overlay for mobile when sidebar open */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-slate-800/80 bg-opacity-40 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto  p-4">{children}</div>
            </div>
        </main>
    );
};

export default Layout;
