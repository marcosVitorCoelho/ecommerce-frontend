export default abstract class App_Routes {
  static readonly PUBLIC = {
    home: "/",
    login: "/login",
    register: "/createuser",
    forgotPassword: "/forgotpassword",
    products: "/products",
    category: "/category",
    brand: "/brand",
  };

  static readonly PRIVATE = {
    cart: "/cart",
  };
}
