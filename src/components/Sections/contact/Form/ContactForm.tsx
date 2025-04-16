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
  const { isSubmitting, submitStatus, handleSubmit } = useContactForm();
  const { formData, setFormData, handleChange } = useFormState();

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
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",
          px: 3,
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

          <SubmitStatus submitStatus={submitStatus} />
        </Box>
      </Box>
    </>
  );
};
export default ContactForm;
