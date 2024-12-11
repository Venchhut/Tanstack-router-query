import { Route } from "../routes";

function ShopProducts() {
  const search = Route.useSearch();
  console.log(search);
  // Provide default values if search is undefined
  const page = search?.page ?? 1; // Default to 1
  const filter = search?.filter ?? ""; // Default to empty string
  const sort = search?.sort ?? "newest"; // Default to 'newest'
  console.log(filter);

  return (
    <div>
      <h1>Shop Products</h1>
      <p>
        <strong>Page:</strong> {page}
      </p>
      <p>
        <strong>Filter:</strong> {filter}
      </p>
      <p>
        <strong>Sort:</strong> {sort}
      </p>
      <p>Here you can display filtered, sorted, and paginated products.</p>
    </div>
  );
}

export default ShopProducts;
