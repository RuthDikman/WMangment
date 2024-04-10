import { observable, makeObservable, action } from "mobx";

class WorkerOptions {
  listWorkers = [];
  constructor() {
    makeObservable(this, {
      listWorkers: observable,
      getWorkers: action,
      postWorker: action,
      getWorkerByTz: action,
      deleteWorker: action,
    });
  }

  getWorkers = async () => {
    const response = await fetch("https://localhost:7126/api/Customers");
    if (response.status === 200) {
      this.listWorkers = await response.json();
      console.log(this.listWorkers);
    } else {
      console.log("error");
      return null;
    }
  };
  getWorkerByTz = async (tz) => {
    const response = await fetch(`https://localhost:7126/api/Customers/${tz}`);
    if (response.status === 200) {
      const worker = await response.json();
      console.log("Worker data from API:", worker);
      let list = [];
      for (let i = 0; i < worker.roles.length; i++) {
        list.push({
          JobPositionName: worker.roles[i].jobPositionName,
          DateStartRole: worker.roles[i].dateStartRole,
          IsManagerial: worker.roles[i].isManagerial,
        });
      }
      worker.roles = list;
      return worker;
    } else {
      return null;
    }
  };

  postWorker = async (worker) => {
    let isMale = null;
    if (worker.gender == "Female") {
      isMale = 2;
    } else {
      isMale = 0;
    }
    let newWorker = {
      Tz: worker["tz"],
      FirstName: worker["firstName"],
      LastName: worker["lastName"],
      DateOfBirth: worker["dateOfBirth"],
      DateOfStartingWork: worker["dateOfStartingWork"],
      Gender: isMale,
      Status: true,
      Roles: worker["roles"],
    };
    const token = localStorage.getItem("Token");
    const responses = await fetch("https://localhost:7126/api/Customers", {
      method: "POST",
      body: JSON.stringify(newWorker),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (responses.status === 200 || responses.status == 204) {
      let x = await responses.json();
      console.log("success");
    } else {
      console.log("error");
    }
  };
  deleteWorker = async (tz) => {
    const token = localStorage.getItem("Token");
    const response = await fetch(`https://localhost:7126/api/Customers/${tz}`, {
      method: "DELETE",
      body: JSON.stringify(tz), // Send the entire worker object
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200 || response.status === 204) {
      await this.getWorkers();
      console.log("Worker deleted successfully");
    } else {
      console.log("Error deleting worker");
    }
  };
  updateWorker = async (worker) => {
    let isMale = null;
    if (worker.gender == "Female") {
      isMale = 2;
    } else {
      isMale = 0;
    }
    let updateWorker = {
      Tz: worker["tz"],
      FirstName: worker["firstName"],
      LastName: worker["lastName"],
      DateOfBirth: worker["dateOfBirth"],
      DateOfStartingWork: worker["dateOfStartingWork"],
      Gender: isMale,
      Status: true,
      Roles: worker["roles"],
    };
    const token = localStorage.getItem("Token");
    const response = await fetch(
      `https://localhost:7126/api/Customers/${worker.workerId}`,
      {
        method: "PUT",
        body: JSON.stringify(updateWorker),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200 || response.status == 204) {
      console.log("success");
    } else {
      console.log("error");
    }
  };
}
export default new WorkerOptions();
