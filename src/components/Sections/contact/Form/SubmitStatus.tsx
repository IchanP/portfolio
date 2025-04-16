import { useEffect } from "react";
import { useTranslations } from "next-intl";

interface SubmitStatusProps {
  submitStatus: "success" | "error" | null;
  onClose: () => void; // Add a prop to handle closing the alert
}

const SubmitStatus = ({ submitStatus }: SubmitStatusProps) => {
  const t = useTranslations("Contact.Form");

  useEffect(() => {
    if (submitStatus !== null) {
      console.log("test: ", submitStatus);
      alert(submitStatus === "success" ? t("Success") : t("Error"));
    }
  }, [submitStatus, t]);

  return null;
};

export default SubmitStatus;
