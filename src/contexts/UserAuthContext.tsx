import SessionConstants from "@/constants/SessionConstants";
import { apiBase } from "@/services/api";
import { ReactNode, createContext } from "react";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

interface UserAuthentcationContextType {
  createUser: (values: IFormSignUp) => void;
  authUser: (
    values: IFormSignIn
  ) => Promise<{ firstName: string; token: string } | undefined>;
  logoff: () => void;
}

interface UserAuthentcationContextProps {
  children: ReactNode;
}

export interface IFormSignIn {
  email: string;
  password: string;
}

export interface IFormSignUp extends IFormSignIn {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

interface IUserLoginResponse {
  data: {
    firstName: string;
    token: string;
  };
}
const UserAuthenticationContext = createContext(
  {} as UserAuthentcationContextType
);

const UserAuthenticationProvider: React.FC<UserAuthentcationContextProps> = ({
  children,
}) => {
  const { push } = useRouter();

  const authUser = async (values: IFormSignIn) => {
    const newCookies = new Cookies();
    try {
      const { data } = await apiBase.post<IUserLoginResponse>(
        "/user/login",
        values
      );
      newCookies.set(SessionConstants.ACCESS_TOKEN_COOKIE_KEY, data.token);
      push("/");
      return data;
    } catch (error) {
      console.warn(error);
    }
  };

  const createUser = async (values: IFormSignUp) => {
    try {
      const data = await apiBase.post("/user/register", values);
      push("/login");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const logoff = async () => {
    try {
      const data = await apiBase.get("/user/logout");
      push("/login");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserAuthenticationContext.Provider
      value={{ createUser, authUser, logoff }}
    >
      {children}
    </UserAuthenticationContext.Provider>
  );
};

export default UserAuthenticationContext;
export { UserAuthenticationProvider };
