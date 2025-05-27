// get connection to database ORM object
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

// read models data for table representation
const models = require('../../models')

// create new article into data table
const createArticle = (req, res) => {
  // get form data
  let name = req.body.name
  let slug = req.body.slug
  let image = req.body.image
  let body = req.body.body

  // create new article by Article model
  const newArticle = models.Article.create({
    // add values for NOT NULL fields
    // left one - data table fields
    // right one - values from form
    name: name,
    slug: slug,
    image: image,
    body: body,
    // publish date generate as now()
    published: new Date().toISOString().slice(0, 19).replace('T', ' ')
  })

  .then(article => {
    console.log(article)
    return res.status(200).json({ message: 'New article is added' });
  })
  .catch(error => {
    return res.status(500).send(error.message);
  })
}

const updateArticle = (req, res) => {
  let name = req.body.name;
  let slug = req.body.slug;
  let image = req.body.image;
  let body = req.body.body;

  models.Article.findOne({
    where: { id: req.params.id },
  })

    .then((article) => {
      if (!article) {
        return res.status(404).json({ message: "Can't find the article" });
      }
      return article.update({
        name: name,
        slug: slug,
        image: image,
        body: body,
      });
    })
    .then((updatedArticle) => {
      console.log(updatedArticle);
      return res
        .status(200)
        .json({ message: "Article is updated!", updatedArticle });
    })
    .catch((error) => {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error while updating article!", error: error.message });
    });
};

const deleteArticle = (req, res) => {
  models.Article.destroy({
    where: { id: req.params.id },
  })
    .then((deletedCount) => {
      if (deletedCount === 0) {
        return res
          .status(404)
          .json({ message: "Article not found" });
      }

      return res.status(200).json({ message: "Deleted article" });
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "Error while deleting article!", error: error.message });
    });
};

// export controller functions
module.exports = {
  createArticle,
  updateArticle,
  deleteArticle
}
