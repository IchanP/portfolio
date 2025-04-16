import { useState } from "react";
import { FormData } from "./useFormState";

export interface ValidationErrors {
  name?: boolean;
  email?: boolean;
  message?: boolean;
}

const useValidateFormData = () => {
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {},
  );

  const validateFormData = (data: FormData): ValidationErrors => {
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
  };

  return { validationErrors, setValidationErrors, validateFormData };
};

export default useValidateFormData;
