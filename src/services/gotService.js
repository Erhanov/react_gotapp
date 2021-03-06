export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        }
              
        return await res.json();
    };

    getAllHouses = async () => {
        const result = await this.getResource("/houses");
        return result.map(this._transformHouses);
    }

    getAllBooks = async () => {
        const result = await this.getResource("/books");
        return result.map(this._transformBook);
    }

    getAllCharacters = async () => {
        const result = await this.getResource("/characters?page=5&pageSize=10");
        return result.map(this._transformCharacter);
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouses(house);
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    _transformCharacter(char) {

        return {
            name : char.name,
            gender : char.gender,
            born : char.born,
            died : char.died,
            culture : char.culture,
            id : char.url.replace(/\D+/, '')
        }
    }

    _transformHouses(house) {
        return {
            name : house.name,
            region : house.region,
            words : house.words,
            titles : house.titles,
            overlord : house.overlord,
            ancestralWeapons : house.ancestralWeapons,
            id : house.url.replace(/\D+/, '')
        }
    }

    _transformBook(book) {
        return {
            name : book.name,
            numberOfPages : book.numberOfPages,
            publisher : book.publisher,
            released : book.released,
            id : book.url.replace(/\D+/, '')
        }
    }
}
