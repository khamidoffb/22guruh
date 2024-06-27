import { useEffect, useState } from "react";
import Card from "../Card/Card";
import css from './Intro.module.css'
function Intro() {
    let [posts, setPosts] = useState([])

    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    const handleAlert = ()=>{
        alert("Knopka bosildi")
    }
    return (
        <div className={css.grid}>
            {posts.map((post) => {
                return <Card
                    title={post.title}
                    text={post.body}
                    img="https://eaten.uz/images/logo.png"
                    handleAlert={handleAlert}
                    key={post.id}
                />
            })}
        </div>
    )
}
export default Intro;