import App_Routes from "@/constants/RoutesConstants";

/**
 * @param asPath string
 * @returns boolean
 */

export const checkPublicRoute = (asPath: string) => {
  const appPublicRoutes = Object.values(App_Routes.PUBLIC);
  return appPublicRoutes.includes(asPath) || asPath.includes("product");
};
