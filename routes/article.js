const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const article = require('../models/article');

router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);
router.get('/author/:id', articleController.getArticleByAuthor);
module.exports = router;
