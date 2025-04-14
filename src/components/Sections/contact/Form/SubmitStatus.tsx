import Box from "@mui/material/Box";
import { useTranslations } from "next-intl";

interface SubmitStatusProps {
  submitStatus: "success" | "error" | null;
}

const SubmitStatus = ({ submitStatus }: SubmitStatusProps) => {
  const t = useTranslations("Contact.Form");

  if (submitStatus === null) return null;

  return (
    <Box
      sx={{
        color: submitStatus === "success" ? "success.main" : "error.main",
        textAlign: "left",
      }}
    >
      {submitStatus === "success" ? t("Success") : t("Error")}
    </Box>
  );
};

export default SubmitStatus;
