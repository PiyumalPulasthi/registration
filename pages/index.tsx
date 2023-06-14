import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the User Registration and Login System</h1>
      <Link href="/register">
        Register
      </Link>
      <Link href="/login">
        Login
      </Link>
    </div>
  );
};

export default HomePage;