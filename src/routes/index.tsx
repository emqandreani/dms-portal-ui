import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import dynamicImport from "@architecture-it/microfront-utils/dynamicImport";
import { IRemoteAppProps } from "remote/App";
import { useUser } from "@architecture-it/azure-b2c";
import { useAccount, useIsAuthenticated } from "@azure/msal-react";
import { store } from "store/store";

import PrincipalSkeleton from "../skeletons/Principal";

const Home = lazy(() => import("../pages/Home"));
const User = lazy(() => import("../pages/User"));
const Person = lazy(() => import("../pages/Person"));
const RemoteCatalogApp = lazy(() => dynamicImport<IRemoteAppProps>("catalog/App", { debug: true }));

import ProtectedRoute from "./ProtectedRoute";
import InteractionRoute from "./InteractionRoute";
import { SecureWrapperImplementation } from "./SecureWrapperImplementation";

export default function AppRoutes() {
  const isAuth = useIsAuthenticated();
  const account = useAccount();

  return (
    <Suspense fallback={<PrincipalSkeleton />}>
      <Routes>
        <Route element={<InteractionRoute />}>
          <Route element={<ProtectedRoute />}>
            <Route element={<User />} path="user" />
            <Route element={<Person />} path="person" />
          </Route>
          <Route index element={<Home />} />
          <Route element={<SecureWrapperImplementation />} path="catalogo/*">
            <Route element={<RemoteCatalogApp account={account} store={store} />} path="*" />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
