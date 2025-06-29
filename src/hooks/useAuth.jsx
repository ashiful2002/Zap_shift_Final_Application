import React, { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";

const useAuth = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};

export default useAuth;
