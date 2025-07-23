import React from 'react';

const notifications = [
  {
    id: 1,
    title: "System Update",
    message: "A new system update is available.",
    time: "2 min ago",
    type: "info",
  },
  {
    id: 2,
    title: "New Message",
    message: "You have received a new message from admin.",
    time: "10 min ago",
    type: "success",
  },
  {
    id: 3,
    title: "Warning Alert",
    message: "Please verify your email address.",
    time: "1 hr ago",
    type: "warning",
  },
  {
    id: 4,
    title: "Error Detected",
    message: "An error occurred during your last action.",
    time: "2 hrs ago",
    type: "error",
  },
];

const typeColors: Record<string, string> = {
  info: "bg-blue-100 text-blue-700",
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  error: "bg-red-100 text-red-700",
};

const NotificationPage = () => {
  return (
    <div className="p-8 w-full h-half">
      <h2 className="text-2xl font-bold text-indigo-950 mb-6">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`flex items-start gap-4 rounded-xl shadow-sm p-4 bg-white border border-gray-100`}
          >
            <div className={`w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold ${typeColors[n.type]}`}>
              {n.title.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg text-indigo-950 mb-1">{n.title}</div>
              <div className="text-gray-600 mb-1">{n.message}</div>
              <div className="text-xs text-gray-400">{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;