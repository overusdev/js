export function usePromises () {

    const block = document.querySelector('.block');

    const getPosts = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts/')
            .then( res => res.json())
            .then( data => console.log( data ));
    };

    block.addEventListener( 'click', getPosts );
}
