export default abstract class App_Routes {
  static readonly PUBLIC = {
    home: "/",
    login: "/login",
    register: "/createuser",
    forgotPassword: "/forgotpassword",
    category: "/category",
    brand: "/brand",
    tbjn: "/tbjn",
  };

  static readonly PRIVATE = {
    cart: "/cart",
  };
}
