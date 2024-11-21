import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          padding: "1rem",
          fontSize: "1.5rem",
          textDecoration: "none",
        }}
      >
        <Link to="/" activeProps={activeProps}>
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
      </div>
      <Outlet />
    </React.Fragment>
  );
}
