import { useEffect, useState } from "react";

const urlFact = "https://catfact.ninja/fact";
const urlImage = "https://cataas.com/cat/says/";


const CatInfo = () => {

    const [fact, setFact] = useState<null | string>(null);
    const [image, setImage] = useState<null | string>(null);

    const searchFact = async () => {
        const info = await fetch(urlFact).then(rs => rs.json());
        if(info)
            setFact(info.fact);
    }
    
    useEffect(() => {
        searchFact();
    }, []);

    useEffect(() => {

        if(!fact) return;

        fetch(`${urlImage}${fact.split(' ', 3).join(' ')}?json=true`)
        .then(rs => rs.json())
        .then(info => {
            setImage(info.url);
        });

    }, [fact]);

    return(
        <div>
            <p>{fact}</p>
            <div style={{
                width: "100%"
            }}>
                {image && <img 
                style={{
                    width: "700px",
                    height: "700px"
                }} 
                src={image}
                alt="Cat image"
                ></img>}
            </div>
            <button onClick={searchFact}>Get new fact</button>
        </div>
    )
}

export default CatInfo;