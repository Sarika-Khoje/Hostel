function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        backgroundColor: "#ddd6fe",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <p><strong>Person 1</strong></p>
      <ul>
        <li>My Profile</li>
        <li>My Issues</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;
