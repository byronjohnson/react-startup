import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID baAsnw73DRkWDm1BAgMWnzjpyQogI5qSULI51HWTeNc'
    }
});