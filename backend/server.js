import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecommerce',
});

connection.connect((error) => {
  if (error) {
    console.log('No fue posible la conexión');
  } else {
    console.log('Conexión con el servidor exitosa');
  }
});

// Ruta para obtener todos los productos
app.get('/productos', (req, res) => {
  const query = 'SELECT * FROM productos';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los productos:', err);
      res.status(500).json({ error: 'Error al obtener los productos' });
      return;
    }

    res.json(results);
  });
});

// Ruta para obtener todas las categorías
app.get('/categorias', (req, res) => {
  const query = 'SELECT * FROM categorias';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener las categorías:', err);
      res.status(500).json({ error: 'Error al obtener las categorías' });
      return;
    }

    res.json(results);
  });
});

// Ruta para obtener los productos por categoría
app.get('/categorias/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM productos WHERE categoria_id = ?`;

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error al obtener los productos por categoría:', err);
      res.status(500).json({ error: 'Error al obtener los productos por categoría' });
      return;
    }

    res.json(results);
  });
});

// Ruta para añadir un nuevo producto
app.post('/productos', (req, res) => {
  const { nombre, descripcion, precio, stock, categoria_id, imagen } = req.body;
  const query = `INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id, imagen) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [nombre, descripcion, precio, stock, categoria_id, imagen];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al añadir el producto:', err);
      res.status(500).json({ error: 'Error al añadir el producto' });
      return;
    }

    res.json({ message: 'Producto añadido correctamente' });
  });
});

//Register
app.post('/registrar', (req, res) => {
  const { nombre, email, contrasena } = req.body;

  // Generar el hash de la contraseña
  bcrypt.hash(contrasena, 10, (error, hash) => {
    if (error) {
      console.log("Error al generar el hash de la contraseña", error);
      res.status(500).json({ Estatus: "ERROR", Error: "Error al registrar usuario" });
    } else {
      const sql = "INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)";
      connection.query(sql, [nombre, email, hash], (error, resultado) => {
        if (error) {
          console.log("Error al registrar usuario", error);
          res.status(500).json({ Estatus: "ERROR", Error: "Error al registrar usuario" });
        } else {
          res.json({ Estatus: "CORRECTO" });
        }
      });
    }
  });
});

//Login
app.post('/acceso', (req, res) => {
  const { email, contrasena } = req.body;
  const sql = "SELECT * FROM usuarios WHERE email = ?";
  connection.query(sql, [email], (error, resultado) => {
    if (error) {
      console.log("Error al realizar inicio de sesión", error);
      res.status(500).json({ Estatus: "ERROR", Error: "Error al realizar inicio de sesión" });
    } else {
      if (resultado.length > 0) {
        // Verificar la contraseña con bcrypt
        bcrypt.compare(contrasena, resultado[0].contrasena, (error, coincide) => {
          if (coincide) {
            const token = jwt.sign({ usuario: 'administrador' }, 'juan', { expiresIn: '1d' });
            res.cookie('token', token);
            res.json({ Estatus: "CORRECTO", Usuario: token });
          } else {
            res.json({ Estatus: "ERROR", Error: "Usuario o contraseña incorrecta" });
          }
        });
      } else {
        res.json({ Estatus: "ERROR", Error: "Usuario o contraseña incorrecta" });
      }
    }
  });
});


//Iniciar server
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
