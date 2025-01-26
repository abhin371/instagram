import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import Post from '../types/PostTypes'
import { Link } from 'react-router-dom'




const PostCard = (props: { post: Post }) => {
    return (
        <div>

            <Card>
                <CardContent>
                    <Typography variant="body1">{props.post.id}</Typography>
                    <Typography variant="body2">{props.post.title}</Typography>
                </CardContent>
                <CardActions>
                    <Button component={Link} to="/todos">Todo Project</Button>
                </CardActions>
            </Card>

        </div>
    )
}


export default PostCard