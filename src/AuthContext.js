const AuthContext = React.createContext({
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

export const AuthContextProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (uid) => {
    setIsLoggedIn(uid);
    localStorage.setItem("isLoggedIn", uid);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        lougoutHandler: logoutHandler,
      }}
    >
      {PaymentResponse.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
