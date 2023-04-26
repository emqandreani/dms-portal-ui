import Typography from "@mui/material/Typography";
import { useAccount, useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import PrincipalSkeleton from "skeletons/Principal";
import { Link } from "react-router-dom";

import styles from "./Home.module.scss";

export default function Home() {
  const account = useAccount();
  const { inProgress } = useMsal();

  if (inProgress !== InteractionStatus.None) {
    // Cuando inicia la aplicación verifica si existe alguna cuenta y está loggeado. Este proceso es asíncrono
    return <PrincipalSkeleton />;
  }

  if (account) {
    return (
      <>
        <Typography variant="h1">
          <span className={styles.span}>Bienvenido</span> {account.name}
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="https://uicontainer-dms-distributor-settlement-test.apps.ocptest.andreani.com.ar/">
            Container
          </Link>
          <Link to="https://test-unificacion-home-unificacion-test.apps.ocptest.andreani.com.ar/">
            Unificación
          </Link>
          <Link to="/catalogo">Catálogo</Link>
        </div>
      </>
    );
  }

  return (
    <Typography variant="h3">Por favor logeate para ver la información de usuario.</Typography>
  );
}
