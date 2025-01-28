"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalProps {
  callModal: boolean;
  setCallModal: React.Dispatch<React.SetStateAction<boolean>>;
  accountModal: boolean;
  setAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
  callDeleteProject: boolean;
  setCallDeleteProject: React.Dispatch<React.SetStateAction<boolean>>;
  callOfferModal: boolean;
  setCallOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  triggerLogo: boolean;
  setTriggerLogo: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [callModal, setCallModal] = useState(false);
  const [accountModal, setAccountModal] = useState(false);
  const [callDeleteProject, setCallDeleteProject] = useState(false);
  const [callOfferModal, setCallOfferModal] = useState(false);
  const [triggerLogo, setTriggerLogo] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        callModal,
        setCallModal,
        accountModal,
        setAccountModal,
        callDeleteProject,
        setCallDeleteProject,
        callOfferModal,
        setCallOfferModal,
        triggerLogo,
        setTriggerLogo,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ModalContext deve ser usado dentro de um ModalProvider");
  }
  return context;
};
