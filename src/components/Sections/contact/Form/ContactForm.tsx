"use client";
import { useTranslations } from "next-intl";
import { Button, Box } from "@mui/material";
import useContactForm from "./useContactForm";
import SubmitStatus from "./SubmitStatus";
import FormFields from "./FormFields";

const ContactForm = () => {
  const t = useTranslations("Contact");
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleSubmit,
    validationErrors,
    handleChange,
  } = useContactForm();

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
          onSubmit={handleSubmit}
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

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={{ alignSelf: "flex-scenter" }}
          >
            {isSubmitting ? "..." : t("Form.SendButton")}
          </Button>

          <SubmitStatus submitStatus={submitStatus} />
        </Box>
      </Box>
    </>
  );
};
export default ContactForm;
