//import React from "react";
import { SigninInterface } from "../interfaces/ISignin";
import { EmployeeInterface } from "../interfaces/IEmployee";
import { StudentInterface } from "../interfaces/IStudent";

const apiUrl = "http://localhost:8080";


// --------------------------------Student --------------------------------------
// ---------------------------------------------------------------------------------

async function Login(data: SigninInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/login_employee`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("uid", res.data.id);
        // เก็บข้อมูล position ที่ login เข้ามา
        localStorage.setItem("position", res.data.position);
        // เก็บข้อมูล position ที่ login เข้ามา
        localStorage.setItem("role", res.data.role);
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function LoginStudent(data: SigninInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/login_student`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("uid", res.data.id);
        // เก็บข้อมูล position ที่ login เข้ามา
        localStorage.setItem("position", res.data.position);
        // เก็บข้อมูล position ที่ login เข้ามา
        localStorage.setItem("role", res.data.role);
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function GetJob_Positions() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/job_positions`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function GetProvinces() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/provinces`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function GetEmployees() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/employees`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function CreateEmployees(data: EmployeeInterface) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/employees`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}


//*get token by ID
async function GetEmployeeByUID() {
  let uid = localStorage.getItem("uid");
  const requestOptions = {
      method: "GET",
      headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
      },
  };

  let res = await fetch(`${apiUrl}/employee/${uid}`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
          if (res.data) {
              console.log(res.data);
              return res.data;
          } else {
              return false;
          }
      });

  return res;
}

// -------------------------------- Employee --------------------------------------
// ---------------------------------------------------------------------------------

async function GetGender() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/genders`, requestOptions)  
    .then((response) => response.json()) 
    .then((res) => {   
      if (res.data) { 
        return res.data;
      } else {
        return false;
      }
    });
  
  return res;
}

async function GetProvince() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/provinces`, requestOptions)
    .then((response) => response.json())
    .then((res) => { 
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function GetRole() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/roles`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function GetProgram() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/programs`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function GetStudent() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/students`, requestOptions)
    .then((response) => response.json())
    .then((res) => { 
      if (res.data) { 
        console.log(res)
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function CreateStudent(data: StudentInterface) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/students`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

export {
  //employee
  Login,
  LoginStudent,
  GetJob_Positions,
  GetProvinces,
  GetEmployees,
  CreateEmployees,
  GetEmployeeByUID,
  //student
  GetGender,
  GetProvince,
  GetRole,
  GetProgram,
  CreateStudent,
  GetStudent
  
};