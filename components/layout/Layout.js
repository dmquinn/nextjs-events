import React, { useContext } from "react";
import Header from "./Header";
import Hamburger from "../ui/Hamburger";
import Notification from "../ui/Notification";
import NotificationContext from "../../store/notifacationContext";

const Layout = (props) => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;
  return (
    <>
      <Hamburger />
      <Header />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
