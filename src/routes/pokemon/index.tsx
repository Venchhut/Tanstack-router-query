import { createFileRoute, Link } from "@tanstack/react-router";
import { getPokemonList } from "../../api/pokemon";
interface Pokemon {
  id: number;
  name: string;
}

export const Route = createFileRoute("/pokemon/")({
  component: RouteComponent,
  loader: getPokemonList,
});

function RouteComponent() {
  const pokemons = Route.useLoaderData();
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {pokemons.map((pokemon: Pokemon) => (
          <li key={pokemon.id}>
            <Link to={pokemon.id} activeProps={{ style: { color: "red" } }}>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
