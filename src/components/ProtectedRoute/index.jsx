import React from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ userData, children }) {
  const navigate = useNavigate();
  if (userData == null && localStorage.getItem("user-info") == null) {
    return navigate("/");
  } else {
    return children;
  }
}
export default ProtectedRoute;
