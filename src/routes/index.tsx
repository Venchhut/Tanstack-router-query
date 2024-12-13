import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import ShopProducts from "../components/SearchTest";
import BudgetCard from "../components/BudgetCard";
import RecentTransactions from "../components/Transition";

const productSearchSchema = z.object({
  page: z.coerce.number().catch(1),
  filter: z.string().catch(""),
  sort: z.enum(["newest", "oldest", "price"]).catch("newest"),
});

// Infer the TypeScript type from the Zod schema
type ProductSearch = z.infer<typeof productSearchSchema>;

// Create the route with validateSearch
export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    // Use Zod to validate and parse the search parameters
    return productSearchSchema.parse(search);
  },
  component: RouteComponent,
});

// RouteComponent to display the ShopProducts component
function RouteComponent() {
  return (
    <>
      <BudgetCard />
      <ShopProducts />
      <RecentTransactions />
    </>
  );
}
