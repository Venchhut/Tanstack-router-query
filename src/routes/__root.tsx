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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ul>
          <li>
            <Link to="/about" activeProps={activeProps}>
              about
            </Link>
          </li>
          <li>
            <Link to="/profile" activeProps={activeProps}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/pokemon/" activeProps={activeProps}>
              Pokemon
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              activeProps={activeProps}
              search={{
                query: "hello",
                hasDiscount: true,
                categories: ["electronics", "jewelery"],
              }}
            >
              Search
            </Link>
          </li>
          <li>
            <Link to="/form" activeProps={activeProps}>
              Zod form
            </Link>
          </li>
          <li>
            <Link to="/folder">Breadcrumb</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </React.Fragment>
  );
}
