import { useEffect, useState } from "react"

const urlImage = "https://cataas.com/cat/says/";

interface props {
    fact: null | string
}

export const useCatImage = ({ fact }: props) => {
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {

        if (!fact) return;

        fetch(`${urlImage}${fact.split(' ', 3).join(' ')}?json=true`)
            .then(rs => rs.json())
            .then(info => {
                setImage(info.url);
            });

    }, [fact]);

    console.log("useCatImage");
    return { image }
}