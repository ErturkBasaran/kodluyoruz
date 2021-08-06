import axios from "axios";


const getData = async (id) => {

    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

    const userPost = Object.assign({}, user, {posts: post})
    console.log(userPost)
    

}

export default getData;