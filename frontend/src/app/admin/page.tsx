export default function AdminDashboard() {
  const stats = [
    { label: 'Total Articles', value: '1,245', icon: '📄' },
    { label: 'Pending Review', value: '12', icon: '⏳' },
    { label: 'Total Reporters', value: '45', icon: '✍️' },
    { label: 'Monthly Visitors', value: '850K', icon: '📈' },
  ];

  const recentPending = [
    { id: '1', title: 'New Economic Policy Impact', author: 'Sunil Kumar', date: '10 mins ago' },
    { id: '2', title: 'Tech Innovation in Mumbai', author: 'Aisha Gupta', date: '1 hour ago' },
    { id: '3', title: 'Sports: IPL 2026 Predictions', author: 'Rohan Sharma', date: '3 hours ago' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((item) => (
          <div key={item.label} className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="text-gray-500 text-sm font-medium">{item.label}</div>
            <div className="text-2xl font-bold">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-xl font-bold mb-6">Pending Review</h2>
          <div className="space-y-4">
            {recentPending.map((article) => (
              <div key={article.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-bold">{article.title}</h3>
                  <p className="text-sm text-gray-500">By {article.author} • {article.date}</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700">Approve</button>
                  <button className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <p className="text-sm"><strong>Editor Sarah</strong> approved "World Peace Summit" article.</p>
                <p className="text-xs text-gray-400">5 mins ago</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <p className="text-sm"><strong>Reporter Rohan</strong> submitted 2 new drafts.</p>
                <p className="text-xs text-gray-400">15 mins ago</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
              <div>
                <p className="text-sm"><strong>Admin</strong> updated Category: "Technology".</p>
                <p className="text-xs text-gray-400">45 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
