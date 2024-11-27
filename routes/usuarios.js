const express = require('express');
const router = express.Router();
const usuarioRepository = require('../repositories/usuarioRepository');

// Get all users
router.get('/', async (req, res) => {
  try {
    const usuarios = await usuarioRepository.findAll();
    res.json({ usuarios });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Get user with email and password
router.get('/', async (req, res) => {
  try {
    const usuarios = await usuarioRepository.findAll();
    res.json({ usuarios });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Get user by id
router.get('/:id', async (req, res) => {
  const user = await usuarioRepository.findById(req.params.id);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const user = await usuarioRepository.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Update a user
router.put('/:id', (req, res) => {
  const user = usuarioRepository.update(req.params.id, req.body);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Delete a user
router.delete('/:id', (req, res) => {
  const user = usuarioRepository.remove(req.params.id);
  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
