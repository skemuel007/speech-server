const express = require('express');
const router = express.Router();
const voiceController = require('../app/api/controllers/voices');

router.get('/', voiceController.getAll);
router.post('/', voiceController.create);
router.get('/:voiceId', voiceController.getById);
router.put('/:voiceId', voiceController.updateById);
router.delete('/:voiceId', voiceController.deleteById);

module.exports = router;