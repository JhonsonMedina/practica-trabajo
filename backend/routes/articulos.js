const pool = require('../db');

async function getArticulos(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM items');
    res.json({ status: 'success', articulos: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: err.message });
  }
}

async function createArticulo(req, res) {
  try {
    const { titulo, contenido, fechaIngreso } = req.body;
    if (!titulo || !contenido) {
      return res.status(400).json({ status: 'error', message: 'faltan campos' });
    }

const [r] = await pool.query(
  'INSERT INTO items (titulo, contenido, fechaIngreso) VALUES (?, ?, ?)',
  [titulo, contenido, fechaIngreso ?? null]
);

const [rows] = await pool.query('SELECT * FROM items WHERE id = ?', [r.insertId]);
res.status(201).json({ status: 'success', item: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: err.message });
  }
}

async function updateArticulo(req, res) {
  try {
    const { id } = req.params;
    const { titulo, contenido, fechaIngreso } = req.body;

const [r] = await pool.query(
  'UPDATE items SET titulo = ?, contenido = ?, fechaIngreso = ? WHERE id = ?',
  [titulo, contenido, fechaIngreso ?? null, id]
);

if (r.affectedRows === 0) {
  return res.status(404).json({ status: 'error', message: 'No encontrado' });
}

const [rows] = await pool.query('SELECT * FROM items WHERE id = ?', [id]);
res.json({ status: 'success', item: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(400).json({ status: 'error', message: err.message });
  }
}

async function deleteArticulo(req, res) {
  try {
    const { id } = req.params;
    const [r] = await pool.query('DELETE FROM items WHERE id = ?', [id]);
    if (r.affectedRows === 0) {
      return res.status(404).json({ status: 'error', message: 'No encontrado' });
    }
    res.json({ status: 'success' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ status: 'error', message: err.message });
  }
}

module.exports = { getArticulos, createArticulo, updateArticulo, deleteArticulo };