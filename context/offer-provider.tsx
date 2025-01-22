"use client";

import React, { createContext, useContext, useState } from "react";

interface OfferSourceProps {
  showInputs: boolean;
  savedInputs: boolean;
  HandleInputs: () => void;
  ChangeSavedInputs: () => void;
  HandleSavedInputs: () => void;
  isDisabled: boolean;
  HandleSelect: () => void;
  showPlus: boolean;
  setShowPlus: React.Dispatch<React.SetStateAction<boolean>>;
  hideEdit: boolean;
  setHideEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OfferSourceContext = createContext<OfferSourceProps | undefined>(
  undefined
);

export const OfferSourceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showInputs, setShowInputs] = useState<boolean>(false);
  const [showPlus, setShowPlus] = useState<boolean>(false);
  const [savedInputs, setSavedInputs] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [hideEdit, setHideEdit] = useState<boolean>(false);

  const HandleSelect = () => {
    setHideEdit(!hideEdit);
    setIsDisabled(!isDisabled);
  };

  const HandleInputs = () => {
    setShowPlus(!showPlus);
    setShowInputs(!showInputs);
  };

  const HandleSavedInputs = () => {
    setSavedInputs(!savedInputs);
  };

  const ChangeSavedInputs = () => {
    setShowInputs(!showInputs);
    setSavedInputs(!savedInputs);
  };

  return (
    <OfferSourceContext.Provider
      value={{
        showInputs,
        savedInputs,
        HandleInputs,
        ChangeSavedInputs,
        HandleSavedInputs,
        isDisabled,
        HandleSelect,
        showPlus,
        setShowPlus,
        hideEdit,
        setHideEdit,
      }}
    >
      {children}
    </OfferSourceContext.Provider>
  );
};

export const useOfferSourceContext = (): OfferSourceProps => {
  const context = useContext(OfferSourceContext);
  if (!context) {
    throw new Error(
      "OfferSourceContext deve ser usado dentro de um OfferSourceProvider"
    );
  }
  return context;
};
