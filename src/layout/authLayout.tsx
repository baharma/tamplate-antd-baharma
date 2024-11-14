import React, { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

const AuthLayout: React.FC<PageProps> = ({ children }) => {
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
