import Navbar from "../components/Navbar";

const SignUpPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Sign Up Page</h1>
        <p className="text-gray-600">Create your account below.</p>
      </div>
    </div>
  );
};

export default SignUpPage;
