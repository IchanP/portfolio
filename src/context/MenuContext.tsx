import React, { createContext, useState, useContext } from "react";

interface MenuContextType {
  isMenuOpen: boolean;
  handleMenuState: () => void;
}

const MenuContext = createContext<MenuContextType | null>(null);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuState = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, handleMenuState }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === null) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
