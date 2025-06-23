import { useIsDarkmode } from "stores/DarkModeState";

const useInputFieldStyling = () => {
  const isDarkMode = useIsDarkmode((state) => state.isDarkMode);

  const muiInputFieldStyling = {
    "& .MuiInputBase-input": {
      color: isDarkMode ? "white" : "",
    },
    "& .MuiFormLabel-root": {
      color: isDarkMode ? "white" : "#025F92",
      opacity: "100%",
    },
    // Targets the label
    "& .MuiInputLabel-root.Mui-focused": {
      color: isDarkMode ? "#2BAFF8" : "",
      opacity: "100%",
    },
    //  Targets the outline
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.3)",
      },
      "&.Mui-focused fieldset": {
        borderColor: isDarkMode ? "#2BAFF8" : "",
      },
      "&:hover fieldset": {
        borderColor: isDarkMode ? "#2BAFF8" : "",
      },
    },
  };

  return { muiInputFieldStyling };
};

export default useInputFieldStyling;
