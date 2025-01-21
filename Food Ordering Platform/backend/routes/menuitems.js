const express = require('express');
const MenuItem = require('../models/MenuItem');

const router = express.Router();


// CREATE a new MenuItem
router.post('/create/menu-items', async (req, res) => {
    try {
      const { owner, name, description, price, image, quantity } = req.body;
  
      // Create a new menu item
      const menuItem = new MenuItem({
        owner,
        name,
        description,
        price,
        image,
        quantity,
      });
  
      const savedItem = await menuItem.save();
      res.status(201).json(savedItem);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create menu item', message: error.message });
    }
  });



  // DELETE a MenuItem by ID
router.delete('/menu-items/:id', async (req, res) => {
    try {
      const menuItemId = req.params.id;
      const deletedItem = await MenuItem.findByIdAndDelete(menuItemId);
  
      if (!deletedItem) {
        return res.status(404).json({ error: 'MenuItem not found' });
      }
      res.status(200).json({ message: 'MenuItem deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete menu item', message: error.message });
    }
  });



  // GET all MenuItems by owner
router.get('/menu-items/owner/:ownerId', async (req, res) => {
    try {
      const ownerId = req.params.ownerId;
  
      // Fetch all menu items belonging to the specified owner
      const menuItems = await MenuItem.find({ owner: ownerId });
  
      if (menuItems.length === 0) {
        return res.status(404).json({ message: 'No menu items found for this owner' });
      }
      res.status(200).json(menuItems);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch menu items', message: error.message });
    }
  });

  
// GET all MenuItems
router.get('/menu-items', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();

    if (menuItems.length === 0) {
      return res.status(404).json({ message: 'No menu items found' });
    }
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu items', message: error.message });
  }
});


  
  module.exports = router;