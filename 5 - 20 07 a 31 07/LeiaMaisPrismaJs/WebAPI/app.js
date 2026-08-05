import express from 'express';
import { livroService } from './src/Services/livroService.js';
import {generoService} from './src/Services/generoService.js'
import { autorService } from './src/Services/autorService.js';
import { editoraService } from './src/Services/editoraService.js';
import cors from 'cors';


const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}))

app.use(express.json());

app.listen(3000,() => {
  console.log('server runinng')
})

// LIVROS
app.get("/livros", async (req, res) => {
  try {
    const data = await livroService.getAll();
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.get("/livros/:idLivro", async (req, res) => {
  try {
    const { idLivro } = req.params;
    const id = parseInt(idLivro);

    const data = await livroService.getById(id);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.post("/livros", async (req, res) => {
  try {
    const { livro } = req.body;

    const data = await livroService.addAsync(livro);
    console.log(data);
    res.status(201).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.put("/livros/:idLivro", async (req, res) => {
  try {
    const { livro } = req.body;
    const { idLivro } = req.params;
    const id = parseInt(idLivro);

    const data = await livroService.updateAsync(livro, id);
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.delete("/livros/:idLivro", async (req, res) => {
  try {
    const { idLivro } = req.params;
    const id = parseInt(idLivro);

    const data = await livroService.deleteAsync(id);
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});


//GENEROS
app.get("/genero", async (req, res) => {
  try {
    const data = await generoService.getAll();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.get("/genero/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await generoService.getById(parseInt(id));
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.post("/genero", async (req, res) => {
  try {
    const { genero } = req.body;
    const data = await generoService.addAsync(genero);
    res.status(201).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.delete("/genero/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await generoService.deleteAsync(parseInt(id));
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.put("/genero/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { genero } = req.body;
    const data = await generoService.updateAsync(genero,parseInt(id));
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});


// AUTORES

app.get("/autor", async (req, res) => {
  try {
    const data = await autorService.getAll();
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.get("/autor/:idautor", async (req, res) => {
  try {
    const { idautor } = req.params;
    const id = parseInt(idautor);

    const data = await autorService.getById(id);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.post("/autor", async (req, res) => {
  try {
    const { autor } = req.body;

    const data = await autorService.addAsync(autor);
    console.log(data);
    res.status(201).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.put("/autor/:idautor", async (req, res) => {
  try {
    const { autor } = req.body;
    const { idautor } = req.params;
    const id = parseInt(idautor);

    const data = await autorService.updateAsync(autor, id);
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.delete("/autor/:idautor", async (req, res) => {
  try {
    const { idautor } = req.params;
    const id = parseInt(idautor);

    const data = await autorService.deleteAsync(id);
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

//EDITORA

app.get("/editora", async (req, res) => {
  try {
    const data = await editoraService.getAll();
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.get("/editora/:ideditora", async (req, res) => {
  try {
    const { ideditora } = req.params;
    const id = parseInt(ideditora);

    const data = await editoraService.getById(id);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.post("/editora", async (req, res) => {
  try {
    const { editora } = req.body;

    const data = await editoraService.addAsync(editora);
    console.log(data);
    res.status(201).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.put("/editora/:ideditora", async (req, res) => {
  try {
    const { editora } = req.body;
    const { ideditora } = req.params;
    const id = parseInt(ideditora);

    const data = await editoraService.updateAsync(editora, id);
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.delete("/editora/:ideditora", async (req, res) => {
  try {
    const { ideditora } = req.params;
    const id = parseInt(ideditora);

    const data = await editoraService.deleteAsync(id);
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});
