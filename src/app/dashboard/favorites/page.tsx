import { PokemonGrid } from "@/components";

export const metadata = {
    title: 'favoritos',
    description: 'lorem'
}


export default async function PokemonsPage() {


    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokémons favoritos<small>Global State</small></span>

            <PokemonGrid pokemons={[]} />
        </div>
    )
}