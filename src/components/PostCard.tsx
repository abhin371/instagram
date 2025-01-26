import { Card, CardContent, Typography } from '@mui/material'
import Post from '../types/PostTypes'




const PostCard = (props: { post: Post }) => {
    return (
        <div>

            <Card>
                <CardContent>
                    <Typography variant="body1">{props.post.id}</Typography>
                    <Typography variant="body2">{props.post.title}</Typography>
                </CardContent>
            </Card>

        </div>
    )
}


export default PostCard