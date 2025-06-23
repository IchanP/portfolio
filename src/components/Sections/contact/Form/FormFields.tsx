import { TextField, Stack } from "@mui/material";
import useInputFieldStyling from "hooks/useInputFieldStyling";
import { useTranslations } from "next-intl";

interface FormFieldsProps {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  validationErrors: {
    name?: boolean;
    email?: boolean;
    message?: boolean;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const FormFields = ({
  formData,
  validationErrors,
  handleChange,
}: FormFieldsProps) => {
  const t = useTranslations("Contact.Form");
  const { muiInputFieldStyling } = useInputFieldStyling();

  return (
    <>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} width="100%">
        <TextField
          name="name"
          label={t("NameLabel")}
          value={formData.name}
          onChange={handleChange}
          placeholder={t("NamePlaceholder")}
          required
          error={validationErrors.name}
          helperText={validationErrors.name ? t("Errors.Name") : ""}
          fullWidth
          className="bg-lightbg dark:bg-darkInteract"
          sx={muiInputFieldStyling}
        />
        <TextField
          name="email"
          label={t("EmailLabel")}
          value={formData.email}
          onChange={handleChange}
          placeholder={t("EmailPlaceholder")}
          required
          fullWidth
          error={validationErrors.email}
          helperText={validationErrors.email ? t("Errors.Email") : ""}
          type="email"
          className="bg-lightbg dark:bg-darkInteract"
          sx={muiInputFieldStyling}
        />
      </Stack>

      <TextField
        name="message"
        label={t("MessageLabel")}
        value={formData.message}
        onChange={handleChange}
        placeholder={t("MessagePlaceholder")}
        required
        multiline
        rows={6}
        aria-label="Contact Message"
        error={validationErrors.message}
        helperText={validationErrors.message ? t("Errors.Message") : ""}
        fullWidth
        sx={muiInputFieldStyling}
        className="bg-lightbg dark:bg-darkInteract"
      />
    </>
  );
};

export default FormFields;
