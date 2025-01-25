"use client";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");  // Navigate to the home page
  };
  
  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={goToHome}>Go to Home</button>
    </div>
  );
};

export default UserDashboard;
