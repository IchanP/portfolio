"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#F5F5F5",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0, 0, 0, 0.23)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(0, 0, 0, 0.6)",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "rgba(0, 0, 0, 0.38)",
  },
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#0288D1",
  padding: "6px 16px",
  fontWeight: 500,
  letterSpacing: "0.2857em",
  boxShadow:
    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
  "&:hover": {
    backgroundColor: "#0277bd",
  },
}));

const ContactForm = () => {
  const t = useTranslations("Contact.Form");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

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

  const socialLinks = [
    {
      icon: <LinkedIn />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/pontus-grandin",
    },
    {
      icon: <GitHub />,
      text: "GitHub",
      href: "https://github.com/pontusgrandin",
    },
    {
      icon: <Email />,
      text: "pontusgrandin@proton.me",
      href: "mailto:pontusgrandin@proton.me",
    },
  ];

  return (
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
      <List sx={{ minWidth: 250 }}>
        {socialLinks.map((link, index) => (
          <ListItem
            key={index}
            component="a"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              py: 1,
              color: "inherit",
              textDecoration: "none",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "rgba(0, 0, 0, 0.56)" }}>
              {link.icon}
            </ListItemIcon>
            <ListItemText
              primary={link.text}
              slotProps={{
                primary: {
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  letterSpacing: "0.00938em",
                },
              }}
            />
          </ListItem>
        ))}
      </List>

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
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} width="100%">
          <StyledTextField
            name="name"
            label={t("NameLabel")}
            value={formData.name}
            onChange={handleChange}
            placeholder={t("NamePlaceholder")}
            required
            fullWidth
          />
          <StyledTextField
            name="email"
            label={t("EmailLabel")}
            value={formData.email}
            onChange={handleChange}
            placeholder={t("EmailPlaceholder")}
            required
            fullWidth
            type="email"
          />
        </Stack>

        <StyledTextField
          name="message"
          label={t("MessageLabel")}
          value={formData.message}
          onChange={handleChange}
          placeholder={t("MessagePlaceholder")}
          required
          multiline
          rows={6}
          fullWidth
        />

        <StyledButton
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          sx={{ alignSelf: "flex-start" }}
        >
          {isSubmitting ? "..." : t("SendButton")}
        </StyledButton>

        {submitStatus === "success" && (
          <Box sx={{ color: "success.main", textAlign: "left" }}>
            {t("Success")}
          </Box>
        )}
        {submitStatus === "error" && (
          <Box sx={{ color: "error.main", textAlign: "left" }}>
            {t("Error")}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ContactForm;
