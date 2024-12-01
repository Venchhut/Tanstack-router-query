import { createFileRoute } from "@tanstack/react-router";
type ItemFilters = {
  query: string;
  hasDiscount: boolean;
  categories: Category[];
};

type Category =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): ItemFilters => {
    return {
      query: search.query as string,
      hasDiscount: search.hasDiscount as boolean,
      categories: search.categories as Category[],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { query, hasDiscount, categories } = Route.useSearch();
  return (
    <div>
      <p>Query: {query}</p>
      <p>Has discount: {hasDiscount ? "yes" : "no"}</p>
      <p>Categories: {categories.join(", ")}</p>
    </div>
  );
}
