import React, { useState } from 'react'
import Todo from '../types/TodoTypes'
import { Button, Card, CardActions, CardContent, Container, Grid2 as Grid, IconButton, TextField, Typography } from '@mui/material'
import { Delete as DeleteIcon } from "@mui/icons-material";
import { v4 as uuidv4 } from 'uuid';

const TodoPage = () => {

    const [todo, setTodo] = useState<Todo[]>([])

    // const [title, setTitle] = useState("")
    // const [body, setBody] = useState("")

    const [formdata, setFormdata] = useState<Todo>({
        id: '',
        title: '',
        body: ''
    })



    return (
        <div>
            <Container>
                <br />
                <br />
                <form onSubmit={(event) => {
                    event.preventDefault();
                    console.log("hi")
                    setTodo((currentTodo) => {
                        return [...currentTodo, { ...formdata, id: uuidv4() }]


                    })

                    setFormdata({
                        id: '',
                        title: '',
                        body: ''
                    })
                    // setTitle("")
                    // setBody("")

                }}>
                    <Grid container spacing={3}>
                        <Grid size={{ sm: 12, md: 6 }}>
                            <TextField
                                type='text'
                                label='Title'
                                variant='outlined'
                                onChange={(event) => {
                                    // setTitle(event.target.value)
                                    setFormdata((formdata) => {
                                        return {
                                            ...formdata,
                                            title: event.target.value
                                        }
                                    })

                                }}
                                value={formdata.title}
                                fullWidth

                                required
                            />
                        </Grid>
                        <Grid size={{ sm: 12, md: 6 }}>
                            <TextField
                                type='text'
                                label='Body'
                                variant='outlined'
                                onChange={(event) => {
                                    // setBody(event.target.value)
                                    setFormdata((formdata) => {
                                        return {

                                            ...formdata,
                                            body: event.target.value
                                        }
                                    })

                                }}
                                value={formdata.body}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid size={{ sm: 12, }} >
                            <Grid container justifyContent="center">
                                <Button type='submit' variant="contained">Create</Button>
                            </Grid>                        </Grid>
                    </Grid>

                </form>
                <br />
                {/* {JSON.stringify(formdata)} */}
                <br />
                <Grid container spacing={3}>
                    {todo.map((todo) => {
                        return (
                            <Grid size={{ sm: 12, md: 6, lg: 4 }} key={todo.id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant='body1'>{todo.id}</Typography>
                                        <Typography variant='body1'>{todo.title}</Typography>
                                        <Typography variant='body1'>{todo.body}</Typography>

                                    </CardContent>
                                    <CardActions>
                                        <IconButton sx={{ marginLeft: 'auto' }} onClick={() => {
                                            setTodo((currentTodo) => {
                                                return currentTodo.filter((_todo) => {
                                                    return _todo.id !== todo.id
                                                })
                                            })


                                        }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}

                </Grid>
            </Container>

        </div >
    )
}

export default TodoPage