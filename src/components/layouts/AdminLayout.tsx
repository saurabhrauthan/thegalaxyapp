import React, { ReactNode } from "react";

interface AdminProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AdminLayout;
