import { Container, Grid2 as Grid } from "@mui/material";
import { useEffect, useState } from "react";
import TodoServices from '../service/TodoServices';
import PostCard from "../components/PostCard";
import Post from "../types/PostTypes";




const HomePage = () => {


  const [posts, setPosts] = useState<Post[]>([])


  useEffect(() => {
    TodoServices.getTodos().then((res: {
      data: Post[]
    }) => {
      setPosts(res.data)
    })


  }, [])


  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          {
            posts.map((post) => {
              return (
                <Grid size={{ sm: 12, md: 6, lg: 4 }}>
                  <PostCard post={post} />
                </Grid>



              )
            })
          }
        </Grid>
      </Container>

    </div>
  )
}

export default HomePage
