// SecureWrapperImplementation.tsx
import React from "react";
import { SecureWrapper } from "@architecture-it/microfront-utils/SecureWrapper";
import Skeleton from "@mui/material/Skeleton";
import { Outlet } from "react-router-dom";

export const SecureWrapperImplementation = () => {
  return (
    <SecureWrapper suspenseFallback={<Skeleton />}>
      <Outlet />
    </SecureWrapper>
  );
};
