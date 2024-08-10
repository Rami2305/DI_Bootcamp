const axios = require('axios')


// Define la función fetchPosts que hace una solicitud GET a la API de JSONPlaceholder
const fetchPosts = async () => {
    try {
        // Realiza la solicitud GET
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};


module.exports = {
    fetchPosts
};