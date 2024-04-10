import { observable, makeObservable, action } from "mobx";

class PositionsOptions {
  listPositions = [];
  constructor() {
    makeObservable(this, {
      listPositions: observable,
      postPosition: action,
      getPositions: action,
    });
  }
  getPositions = async () => {
    const response = await fetch("https://localhost:7126/api/JobPosition");
    if (response.status === 200) {
      this.listPositions = await response.json();
      console.log(this.listPositions);
    } else {
      console.log("error");
      return null;
    }
  };
  postPosition = async (name) => {
    let position = { name: name };
    const token = localStorage.getItem("Token");
    const responses = await fetch("https://localhost:7126/api/JobPosition", {
      method: "POST",
      body: JSON.stringify(position),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (responses.status === 200) {
      console.log("success");
    } else {
      console.log("error");
      return null;
    }
  };
}

export default new PositionsOptions();
