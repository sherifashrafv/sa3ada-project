import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ userData, children }) {
  if (userData == null) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}
