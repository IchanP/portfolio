import { useTranslations } from "next-intl";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ValidationErrors {
  name?: boolean;
  email?: boolean;
  message?: boolean;
}

const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const errors = validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsSubmitting(false);
      return;
    }

    setValidationErrors({});

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
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    validationErrors,
    handleSubmit,
    handleChange,
  };
};

export default useContactForm;

function validateFormData(data: FormData): ValidationErrors {
  const errors: ValidationErrors = {};
  if (data.name.length > 50) {
    errors.name = true;
  }

  if (data.email.length > 100) {
    errors.email = true;
  }

  if (data.message.length > 500) {
    errors.message = true;
  }

  return errors;
}
