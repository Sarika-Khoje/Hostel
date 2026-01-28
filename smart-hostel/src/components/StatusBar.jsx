function StatusBar() {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <span>Pending</span>
      <span>In Progress</span>
      <span>Resolved</span>
    </div>
  );
}

export default StatusBar;
