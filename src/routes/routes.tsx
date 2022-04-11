import React from "react";
import { Docs } from "../pages/Docs";
import { HomePage } from "../pages/HomePage";

export const routes = [
  {
    path: "/",
    component: (props?: any) => <HomePage />,
  },
  {
    path: "/docs",
    component: (props?: any) => <Docs />,
  },
];
