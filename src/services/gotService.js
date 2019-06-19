
export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        }
              
        return await res.json();
    };

    getAllHouses() {
        return this.getResource("/houses")
    }

    getAllBooks() {
        return this.getResource("/books")
    }

    getAllCharacters() {
        return this.getResource("/characters?page=5&pageSize=10")
    }

    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }

    getBook(id) {
        return this.getResource(`/books/${id}`);
    }

    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }
}
