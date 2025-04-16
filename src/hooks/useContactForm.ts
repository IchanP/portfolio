import { useState } from "react";
import { ValidationErrors } from "./useValidateFormData";
import { FormData } from "./useFormState";

const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleSubmit = async (
    formData: FormData,
    validateFormData: (data: FormData) => ValidationErrors,
  ) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    const errors = validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false);
      return errors;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      return null;
    } catch (error: unknown) {
      console.error(error);
      setSubmitStatus("error");
      return errors;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitStatus,
    handleSubmit,
  };
};

export default useContactForm;
