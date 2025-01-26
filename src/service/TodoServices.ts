import axios from 'axios'


const getTodos = ()=>{

    return axios.get("https://jsonplaceholder.typicode.com/posts")

}

const TodoServices ={
    getTodos
}
export default TodoServices