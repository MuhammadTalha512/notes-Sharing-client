import {
  UploadOutlined,
  FileTextOutlined,
  MessageOutlined,
  StarOutlined,
} from "@ant-design/icons";

const cards = [
  {
    title: "Upload Notes",
    desc: "Share your notes",
    icon: <UploadOutlined />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "View Notes",
    desc: "Browse materials",
    icon: <FileTextOutlined />,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Messages",
    desc: "Chat with others",
    icon: <MessageOutlined />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Favorites",
    desc: "Saved materials",
    icon: <StarOutlined />,
    color: "bg-yellow-100 text-yellow-600",
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-10 text-white mb-10">
        <h1 className="text-3xl font-bold">Welcome back, Alex!</h1>
        <p className="mt-2 text-blue-100">
          Continue your learning journey
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 border hover:shadow-md transition cursor-pointer"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full ${card.color}`}
            >
              <span className="text-xl">{card.icon}</span>
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              {card.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
