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

// Ruta para añadir una nueva categoría
app.post('/addcategorias', (req, res) => {
  const { nombre } = req.body;
  const query = `INSERT INTO categorias (nombre) VALUES (?)`;
  const values = [nombre];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al añadir la categoría:', err);
      res.status(500).json({ error: 'Error al añadir la categoría' });
      return;
    }

    res.json({ message: 'Categoría añadida correctamente' });
  });
});

// Ruta para añadir un nuevo producto
app.post('/addproducto', (req, res) => {
  const { nombre, descripcion, precio, stock, categoria, image } = req.body;
  const query = `INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id, image) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [nombre, descripcion, precio, stock, categoria, image];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al añadir el producto:', err);
      res.status(500).json({ error: 'Error al añadir el producto' });
      return;
    }

    res.json({ message: 'Producto añadido correctamente' });
  });
});

// RUTA PARA ELIMINAR UNA CATEGORIA 
//RUTA PARA ELIMINAR UN PRODUCTO
app.delete('/delproductos/:id', (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM productos WHERE id = ?`;

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error al eliminar el producto:', err);
      res.status(500).json({ error: 'Error al eliminar el producto' });
      return;
    }

    res.json({ message: 'Producto eliminado correctamente' });
  });
});

// Ruta para modificar un producto
app.put('/editproductos/:id', (req, res) => {
  const id = req.params.id;
  const { nombre, precio } = req.body;
  const query = `UPDATE productos SET nombre = ?, precio = ? WHERE id = ?`;
  const values = [nombre, precio, id];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al modificar el producto:', err);
      res.status(500).json({ error: 'Error al modificar el producto' });
      return;
    }

    res.json({ message: 'Producto modificado correctamente' });
  });
});


//RUTA PARA ELIMINAR UNA CATEGORIA 
app.delete('/delcategoria/:id', (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM categorias WHERE id = ?`;

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error al eliminar la categoría:', err);
      res.status(500).json({ error: 'Error al eliminar la categoría' });
      return;
    }

    res.json({ message: 'Categoría eliminada correctamente' });
  });
});

// Ruta para modificar el nombre de una categoría
app.put('/editcategoria/:id', (req, res) => {
  const id = req.params.id;
  const { nombre } = req.body;
  const query = `UPDATE categorias SET nombre = ? WHERE id = ?`;
  const values = [nombre, id];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al modificar el nombre de la categoría:', err);
      res.status(500).json({ error: 'Error al modificar el nombre de la categoría' });
      return;
    }

    res.json({ message: 'Nombre de la categoría modificado correctamente' });
  });
});

// Register
app.post('/registrar', (req, res) => {
  const { nombre, email, contrasena } = req.body;

  // Generar el hash de la contraseña
  bcrypt.hash(contrasena, 10, (error, hash) => {
    if (error) {
      console.log('Error al generar el hash de la contraseña', error);
      res.status(500).json({ Estatus: 'ERROR', Error: 'Error al registrar usuario' });
    } else {
      const sql = 'INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)';
      connection.query(sql, [nombre, email, hash], (error, resultado) => {
        if (error) {
          console.log('Error al registrar usuario', error);
          res.status(500).json({ Estatus: 'ERROR', Error: 'Error al registrar usuario' });
        } else {
          res.json({ Estatus: 'CORRECTO' });
        }
      });
    }
  });
});

// Login
app.post('/acceso', (req, res) => {
  const { email, contrasena } = req.body;
  const sql = 'SELECT * FROM usuarios WHERE email = ?';
  connection.query(sql, [email], (error, resultado) => {
    if (error) {
      console.log('Error al realizar inicio de sesión', error);
      res.status(500).json({ Estatus: 'ERROR', Error: 'Error al realizar inicio de sesión' });
    } else {
      if (resultado.length > 0) {
        // Verificar la contraseña con bcrypt
        bcrypt.compare(contrasena, resultado[0].contrasena, (error, coincide) => {
          if (coincide) {
            const sql = 'SELECT rol FROM usuarios WHERE email = ?';
            connection.query(sql, [email], (error, resultados) => {
              if (error) {
                console.log('Error al obtener el rol del usuario', error);
                res.status(500).json({ Estatus: 'ERROR', Error: 'Error al realizar inicio de sesión' });
              } else {
                const rol = resultados[0].rol;
                const token = jwt.sign({ usuario: 'administrador', rol }, 'juan', { expiresIn: '1d' });
                res.cookie('token', token);
                res.json({ Estatus: 'CORRECTO', Usuario: token });
              }
            });
          } else {
            res.json({ Estatus: 'ERROR', Error: 'Usuario o contraseña incorrecta' });
          }
        });
      } else {
        res.json({ Estatus: 'ERROR', Error: 'Usuario o contraseña incorrecta' });
      }
    }
  });
});

// Ruta para el dashboard
app.get('/dashboard', verificarToken, (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ error: 'Acceso denegado. Debes iniciar sesión primero.' });
    return;
  }

  try {
    const decodedToken = jwt.verify(token, 'juan');
    const rol = decodedToken.rol;

    if (rol !== 'admin') {
      res.status(403).json({ error: 'Acceso denegado. No tienes permiso para acceder al dashboard.' });
      return;
    }

    // El usuario tiene un token válido y tiene rol de 'admin'
    // Realizar acciones específicas para el dashboard aquí

    res.json({ message: 'Acceso al dashboard permitido.' });
  } catch (error) {
    res.status(401).json({ error: 'Acceso denegado. Token inválido.' });
  }
});

// Función de middleware para verificar el token
function verificarToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ error: 'Acceso denegado. Debes iniciar sesión primero.' });
    return;
  }

  jwt.verify(token, 'juan', (error, decodedToken) => {
    if (error) {
      res.status(401).json({ error: 'Acceso denegado. Token inválido.' });
      return;
    }

    req.usuario = decodedToken.usuario;
    next();
  });
}

// Iniciar server
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
