import { useEffect, useState } from "react";
import { getRandomCatFact } from "../controllers/requests";

export const useCatFact = () => {
    const [fact, setFact] = useState(null);

    const refreshRandomFact = () => {
        getRandomCatFact().then(rs => {
            setFact(rs.fact);
        });
    }

    useEffect(() => {
        refreshRandomFact();
    }, []);

    console.log("useCatFact");
    return { fact, refreshRandomFact };
}