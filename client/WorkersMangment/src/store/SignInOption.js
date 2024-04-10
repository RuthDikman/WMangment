import { observable, makeObservable, action } from "mobx";
class SignInOption {
  isLogin = localStorage.getItem("isLogin") == null ? false : true;

  constructor() {
    makeObservable(this, {
      isLogin: observable,
      setIsLogin: action,
      managerIdentification: action,
    });
  }
  managerIdentification = async (name, password) => {
    const admin = {
      name: name,
      password: password,
    };
    const response = await fetch("https://localhost:7126/api/Auth", {
      method: "POST",
      body: JSON.stringify(admin),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem("Token", data.token);
      localStorage.setItem("isLogin", true);
      return true;
    }
    return false;
  };
  setIsLogin = (val) => {
    this.isLogin = val;
  };
}
export default new SignInOption();
