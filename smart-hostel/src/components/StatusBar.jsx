function StatusBar() {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 flex justify-between">
      <span className="text-gray-600 font-medium">Pending</span>
      <span className="text-gray-600 font-medium">In Progress</span>
      <span className="text-gray-600 font-medium">Resolved</span>
    </div>
  );
}

export default StatusBar;
