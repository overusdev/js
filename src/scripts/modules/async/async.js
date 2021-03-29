export function useAsync () {

    const block = document.querySelector('.block');
    const resultBlock = document.querySelector('.result');

    const getItems = ( items ) => {
        items.forEach( element => {
            resultBlock.innerText = element.title;
            // console.log( element );
        });
    };

    const getPosts = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts/');
            let messages = await response.json();

            console.log(messages);
            
            return getItems(messages);
    };

    block.addEventListener( 'click', getPosts );
}