import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      
      {/* Sidebar */}
      <div style={{ width: "200px", borderRight: "1px solid gray" }}>
        <h3>Dashboard Menu</h3>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/settings">Settings</Link></li>
        </ul>
      </div>

      {/* Page Content */}
      <div style={{ padding: "20px" }}>
        {children}
      </div>

    </div>
  );
}