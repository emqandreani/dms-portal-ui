import React from "react";
import { SecureWrapper as SecureWrapperMFE } from "@architecture-it/microfront-utils";

interface ISecureWrapper {
  children: React.ReactNode;
}

const SecureWrapper = ({ children }: ISecureWrapper) => {
  return (
    <SecureWrapperMFE
      suspenseFallback={<>Cargando el módulo...</>}
    >{children}</SecureWrapperMFE>
  )
};

export default SecureWrapper;