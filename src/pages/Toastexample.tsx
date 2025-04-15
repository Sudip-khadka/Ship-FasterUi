import React, { useState } from "react";
import  {Toast, ToastProps } from "../components/internal/toast/Toast";

const SimpleToastExample: React.FC = () => {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const triggerToast = (variant: ToastProps["variant"] = "success") => {
    setToast({
      message: `This is a ${variant} toast notification!`,
      variant,
      onClose: () => setToast(null),
    });
  };

  return (
    <div className="p-4 space-x-4">
      <button
        onClick={() => triggerToast("success")}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Success Toast
      </button>
      <button
        onClick={() => triggerToast("error")}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Error Toast
      </button>
      <button
        onClick={() => triggerToast("warning")}
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Warning Toast
      </button>
      <button
        onClick={() => triggerToast("info")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Info Toast
      </button>

      {toast && <Toast {...toast} />}
    </div>
  );
};

export default SimpleToastExample;
