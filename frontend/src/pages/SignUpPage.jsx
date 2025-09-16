//import Navbar from "../components/Navbar";
import { useState } from "react";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { signup, isSigningUp } = useAuthStore();

    const validateForm = () => {};
    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <div className="min-h-screen grid lg:grid-cols-2"></div>
    {/*Left side */}
    <div className="flex flex-col justify-center items-center p-6 sm:p-12 lg:px-16 xl:px-32">
        <div className="w-full max-w-md space-y-8">

    </div>
  );
};

export default SignUpPage;
