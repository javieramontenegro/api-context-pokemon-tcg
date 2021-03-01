//me tiraba error agregarla
const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
const base_url = "https://api.pokemontcg.io/v2/cards";
const types = "?q=types:";
// la verda no supe como integrar el api key como ellos explicaban en la documentacion
const api_key = "aee24460-cb0f-4725-a129-6d4dccff0459";

export const allCards = () => `${base_url}`;
export const filterTypes = (type) => `${base_url}${types}${type}`;
