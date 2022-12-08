import express from 'express'

const app = express();

interface User {
  id: number;
  name: string;
  email: string;
  likes: number;
}

app.get('/', (req, res) => {
  const user: User = { id: 1, name: 'John Doe', email: 'johndoe@email.com', likes: 0 }

  return res.json(user)
})

app.listen(3333, () => {
  console.log('Server started successfully on http://localhost:3333 ');
})



