import { useState } from "react";
import axios from "axios";

export const useFetchAllCharacter = () => {
    const [characters, setCharacters] = useState();
    const getAllCharacter = async (
        id = "",
        name = "",
        status = "",
        specie = "",
        gender = "",
        page
    ) => {
        const url = `https://rickandmortyapi.com/api/character/${id}?name=${name}&status=${status}&species=${specie}&gender=${gender}&page=${page}`;

        let exist = true;
        await axios
            .get(url)
            .then(({ data }) => {
                setCharacters(data);
            })
            .catch((err) => {
                console.log(err);
                exist = false;
            });

        const isLoading = false;
        return { isLoading, exist };
    };

    return [characters, getAllCharacter];
};
