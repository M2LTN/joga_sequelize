const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const article = require('../models/article');
const articleAdminController = require('../controllers/admin/article')

router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);
router.get('/author/:id', articleController.getArticleByAuthor);

router.post('/admin/article/create', articleAdminController.createArticle);
router.patch('/admin/article/edit/:id', articleAdminController.updateArticle);
router.post('/admin/article/delete/:id', articleAdminController.deleteArticle);
router.post('/admin/article/edit/:id', articleAdminController.updateArticle);
module.exports = router;
