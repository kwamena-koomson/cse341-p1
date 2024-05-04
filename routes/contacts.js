const router = require('express').Router();

const userController = require('../controllers/users');

router.get('/', userController.getAll);

router.get('/:id', userController.getSingle);

router.post('/', userController.createUser);

router.put('/', userController.updateUser);

router.delete('/', userController.deleteUser);


module.exports = router;