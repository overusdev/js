export class Api {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/posts/';
        this.loaderElement = document.querySelector('.loader');
    }

    async getItems() {
        try {
            console.log('fetching...');
            this.loaderElement.style.display = 'block';
            const response = await fetch(this.url)
                .then((response) => response.json())
                .then((data) => data);

            return response;
        }
        catch(e) {
            console.log(e);
        }
        finally{
            console.log('complete!');
            this.loaderElement.style.display = 'none';
        }
    }
}