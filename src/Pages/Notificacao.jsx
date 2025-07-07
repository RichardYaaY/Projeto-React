import { useNotifications } from "../Pages/NotificationsContext";

export default function Notificacao() {
  const { notifs, markAsRead, addNotification } = useNotifications();

  const naoLidas = notifs.filter((n) => !n.read);
  const lidas = notifs.filter((n) => n.read);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notificações</h1>

      <div style={{ backgroundColor: "#e0e7ff", padding: "10px", borderRadius: "8px", marginBottom: "20px" }}>
        <h2 className="text-xl font-semibold mb-2">Não lidas</h2>
        {naoLidas.length > 0 ? (
          naoLidas.map((n) => (
            <div
              key={n.id}
              onClick={() => markAsRead(n.id)}
              style={{ backgroundColor: "#c7d2fe", padding: "10px", borderRadius: "5px", marginBottom: "8px", cursor: "pointer" }}
            >
              <strong>{n.title}</strong>
              <p>{n.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Sem notificações novas.</p>
        )}
      </div>

      <div style={{ backgroundColor: "#f3f4f6", padding: "10px", borderRadius: "8px" }}>
        <h2 className="text-xl font-semibold mb-2">Lidas</h2>
        {lidas.length > 0 ? (
          lidas.map((n) => (
            <div
              key={n.id}
              style={{ backgroundColor: "#e5e7eb", padding: "10px", borderRadius: "5px", marginBottom: "8px", opacity: 0.8 }}
            >
              <strong>{n.title}</strong>
              <p>{n.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Nenhuma notificação lida ainda.</p>
        )}
      </div>
    </div>
  );
}
