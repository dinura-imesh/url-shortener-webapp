import React from "react";
import { HomePage } from "../pages/HomePage";

export const routes = [
  {
    path: "/",
    component: (props?: any) => (
      <React.Fragment>
        <HomePage />
      </React.Fragment>
    ),
  },
];
