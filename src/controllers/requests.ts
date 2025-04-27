const urlFact = "https://catfact.ninja/fact";

export const getRandomCatFact = () => {
    return fetch(urlFact)
    .then(rs => rs.json());
}