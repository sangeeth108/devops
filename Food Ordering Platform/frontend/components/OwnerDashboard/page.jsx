import Link from 'next/link';

const OwnerDashboard = () => {
  return (
    <div>
      <h1>Owner Dashboard</h1>
      <Link href="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default OwnerDashboard;
