import { useCatFact } from "../../hooks/useCatFact";
import { useCatImage } from "../../hooks/useCatImage";

const CatInfo = () => {

    const { fact, refreshRandomFact } = useCatFact();
    const { image } = useCatImage({ fact });

    return (
        <div>
            <p id="fact">{fact}</p>
            <div style={{
                width: "100%"
            }}>
                {!image ? <p>Loadding...</p> : <img
                    style={{
                        width: "700px",
                        height: "700px"
                    }}
                    src={image}
                    alt="Cat image"
                ></img>}
            </div>
            <button onClick={refreshRandomFact}>Get new fact</button>
        </div>
    )
}

export default CatInfo;