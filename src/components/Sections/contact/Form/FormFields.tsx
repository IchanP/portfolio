import { TextField, Stack } from "@mui/material";
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
          className="bg-lightbg"
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
          className="bg-lightbg"
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
        error={validationErrors.message}
        helperText={validationErrors.message ? t("Errors.Message") : ""}
        fullWidth
        className="bg-lightbg"
      />
    </>
  );
};

export default FormFields;
