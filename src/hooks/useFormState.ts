import { useState } from "react";

export interface FormData {
  name: string;
  email: string;
  message: string;
}

const useFormState = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return { formData, setFormData, handleChange };
};

export default useFormState;
