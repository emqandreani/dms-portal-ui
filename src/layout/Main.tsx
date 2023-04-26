import { Footer, Header, useToggle } from "@architecture-it/stylesystem";
import { UserAvatar, SidebarWrapper } from "@architecture-it/azure-b2c";

import styles from "./Main.module.scss";

interface IMainProps {
  children: React.ReactNode;
}

export default function Main({ children }: IMainProps) {
  const [open, { handleOpen, handleClose }] = useToggle();

  return (
    <div className={styles.container}>
      <Header onClickButton={handleOpen}>
        <UserAvatar />
      </Header>
      <SidebarWrapper open={open} onClose={handleClose} onOpen={handleOpen} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
