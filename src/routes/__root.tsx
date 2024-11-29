import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Container, Group } from "@mantine/core";
import classes from "./style.module.css";

export const Route = createRootRoute({
  component: RootComponent,
});
const activeProps = {
  style: {
    color: "red",
  },
};
function RootComponent() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <Container className={classes.inner}>
          <Link
            to="/"
            activeProps={activeProps}
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Home
          </Link>
          <Link to="/posts" activeProps={activeProps}>
            Post
          </Link>
          <Link
            to="/layout-a"
            activeProps={{
              className: "font-bold",
            }}
          >
            Layout
          </Link>{" "}
          <Link to="/profile">Profile</Link>
        </Container>
      </header>
      <Outlet />
    </React.Fragment>
  );
}
