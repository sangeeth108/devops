"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/landing/nav";
import OwnerDashboard from "@/components/OwnerDashboard/page";

const OwnerDashboardPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <OwnerDashboard />
      </div>
    </>
  );
};

export default OwnerDashboardPage;