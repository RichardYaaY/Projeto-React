// src/Pages/NotificationsContext.jsx
import React, { createContext, useContext, useState } from "react";

const NotificationsContext = createContext();

export function NotificationsProvider({ children }) {
  /*const [notifs, setNotifs] = useState([]);*/

  const [notifs, setNotifs] = useState(
  process.env.NODE_ENV === "development"
    ? [
        { id: 1, title: "Nova mensagem", text: "Você tem uma mensagem nova.", read: false },
        { id: 2, title: "Atualização", text: "Seu sistema foi atualizado.", read: true },
      ]
    : []
);


  function markAsRead(id) {
    setNotifs((prevNotifs) =>
      prevNotifs.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  }

  return (
    <NotificationsContext.Provider value={{ notifs, markAsRead }}>
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error("useNotifications must be used within a NotificationsProvider");
  }
  return context;
}
