"use client";

import { login } from "../../../actions/userController";
import { useActionState, startTransition } from "react";

export default function Login() {
  const [formState, formAction] = useActionState(login, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-center font-semibold text-4xl text-gray-600 mb-7">
        Giriş Yap
      </h2>
      <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
        <div className="mb-3">
          <input
            name="email"
            autoComplete="off"
            type="text"
            placeholder="email"
            className="border border-gray-300  rounded-sm w-full px-4 py-1"
          />
        </div>
        <div className="mb-5">
          <input
            name="password"
            autoComplete="off"
            type="password"
            placeholder="şifre"
            className="border border-gray-300 rounded-sm w-full px-4 py-1"
          />
          {formState.success == false && (
            <div role="alert" className="alert alert-warning mt-2">
              <div className="flex items-center space-x-2">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current text-red-500"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-red-500 ">{formState.message}</span>
              </div>
            </div>
          )}
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
