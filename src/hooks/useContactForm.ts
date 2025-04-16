import { useState } from "react";
import { ValidationErrors } from "./useValidateFormData";
import { FormData } from "./useFormState";

// NOTE - This is not a secret key, but a public access key for the web3 contactform API.
const webThreeAccessKey = "100f5f09-7514-4673-b764-2dba05bf7172";

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

    formData.access_key = webThreeAccessKey;
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
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
