import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../services/authService';
import food from '/assets/AdminImages/food.jpg';

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [success, setSuccess] = useState(null);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setApiError(null);
      setSuccess(null);
      const response = await forgotPassword(data.email);
      setSuccess(response.message); // Use response.message instead of the entire object
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      setApiError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-nutricare-bg-light font-sans flex flex-col overflow-hidden">
      <main className="flex flex-1">
        {/* Left Column - Creative Design */}
        <div className="hidden md:block md:w-1/2 relative bg-nutricare-bg-light overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-nutricare-primary-dark/20 to-nutricare-green/20"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-nutricare-primary-light/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-nutricare-green/20 rounded-full translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-nutricare-primary-dark/15 rounded-full"></div>
          </div>
          <div className="relative h-full flex flex-col justify-between py-8 px-8 z-10">
            <div className="flex justify-center mb-2">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-3">
                <img
                  src="/Logo1.png"
                  alt="NutriDiet Logo"
                  className="w-12 h-12 object-contain"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/48?text=Logo')}
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-center text-nutricare-text-dark mb-4">NutriDietMitra</h1>
            <div className="flex-grow flex flex-col items-center justify-center">
              <div className="w-full max-w-xs relative mb-6">
                <img
                  src={food}
                  alt="Healthy Food"
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-nutricare-primary-dark rounded-full flex items-center justify-center shadow-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-nutricare-green rounded-full flex items-center justify-center shadow-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-nutricare-text-dark mb-2">Your Nutrition Journey Starts Here</h2>
                <p className="text-sm text-nutricare-text-gray max-w-xs mx-auto">
                  Track your meals, reach your goals, and transform your relationship with food.
                </p>
              </div>
            </div>
            <div className="w-full max-w-xs mx-auto space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-nutricare-primary-light/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-nutricare-primary-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-nutricare-text-dark">Personalized Meal Plans</h3>
                  <p className="text-xs text-nutricare-text-gray">Tailored to your dietary needs</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-nutricare-green/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-nutricare-green-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-nutricare-text-dark">Progress Tracking</h3>
                  <p className="text-xs text-nutricare-text-gray">Monitor your nutrition goals</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-nutricare-primary-light/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-nutricare-primary-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-nutricare-text-dark">Expert Guidance</h3>
                  <p className="text-xs text-nutricare-text-gray">Access to nutritionists</p>
                </div>
              </div>
            </div>
            <div className="text-center text-xs text-nutricare-text-gray">
              <p>© 2025 NutriDiet. All rights reserved.</p>
            </div>
          </div>
        </div>
        {/* Right Column - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 bg-white shadow-xl overflow-auto">
          <div className="w-full max-w-md">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-nutricare-text-dark">Forgot Password</h2>
                <p className="mt-1 text-sm text-nutricare-text-gray">Enter your email to receive a password reset link</p>
              </div>
              <div className="w-15 h-15 bg-gradient-to-br from-nutricare-primary-light/60 to-nutricare-green/60 rounded-lg flex items-center justify-center shadow-md">
                <img
                  src="/Logo1.png"
                  alt="NutriDiet Logo"
                  className="w-10 h-10 object-contain"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/40?text=Logo')}
                />
              </div>
            </div>
            {apiError && (
              <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-4 w-4 text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p>{apiError}</p>
                  </div>
                </div>
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-nutricare-green/10 border-l-4 border-nutricare-green-dark text-nutricare-text-dark text-xs rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-4 w-4 text-nutricare-green-dark"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p>{success}</p>
                  </div>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-nutricare-text-dark mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-4 w-4 text-nutricare-text-gray"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email address',
                      },
                    })}
                    placeholder="you@example.com"
                    type="email"
                    className="w-full py-2 pl-10 pr-4 border border-nutricare-green/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-nutricare-primary-light focus:border-transparent transition shadow-sm text-sm"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 bg-gradient-to-r from-nutricare-primary-light/60 to-nutricare-green/60 text-nutricare-text-dark font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nutricare-green-dark transition shadow-md flex justify-center items-center text-sm"
                aria-label="Send reset link"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-2 h-3 w-3 text-nutricare-text-dark"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : null}
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
            <div className="text-center mt-4">
              <p className="text-xs text-nutricare-text-gray">
                Return to{' '}
                <Link to="/login" className="font-medium text-nutricare-primary-dark hover:underline transition">
                  Sign in
                </Link>
              </p>
              <p className="text-xs text-nutricare-text-gray mt-2">
                Don't have an account?{' '}
                <Link to="/signup" className="font-medium text-nutricare-primary-dark hover:underline transition">
                  Sign up now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;