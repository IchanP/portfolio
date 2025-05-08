"use client";
import { useTranslations } from "next-intl";
import { Button, Box } from "@mui/material";
import useContactForm from "../../../../hooks/useContactForm";
import SubmitStatus from "./SubmitStatus";
import FormFields from "./FormFields";
import useValidateFormData from "hooks/useValidateFormData";
import useFormState from "hooks/useFormState";

const ContactForm = () => {
  const t = useTranslations("Contact");
  const { validationErrors, setValidationErrors, validateFormData } =
    useValidateFormData();
  const { isSubmitting, submitStatus, handleSubmit, setSubmitStatus } =
    useContactForm();
  const { formData, setFormData, handleChange } = useFormState();

  const handleClose = () => {
    setSubmitStatus(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = await handleSubmit(formData, validateFormData);
    if (errors) {
      setValidationErrors(errors);
    } else {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
            maxWidth: "730px",
          }}
        >
          <FormFields
            formData={formData}
            validationErrors={validationErrors}
            handleChange={handleChange}
          />
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "..." : t("Form.SendButton")}
          </Button>
          <SubmitStatus submitStatus={submitStatus} onClose={handleClose} />
        </Box>
      </Box>
    </>
  );
};
export default ContactForm;
