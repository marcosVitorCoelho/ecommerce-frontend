"use client"
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import App_Routes from "@/constants/RoutesConstants";
import { checkUserAuth } from "@/utils/checkUserAuth";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter();

  const isUserAuthenticated = checkUserAuth();

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(App_Routes.PUBLIC.login);
    }
  }, [isUserAuthenticated, push]);

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
};

export default PrivateRoute;
