const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

/**
 * App Routes
 */
router.get("/", recipeController.homepage);
// router.post("/search", recipeController.searchRecipe);

router.get("/explore-latest", recipeController.exploreLatest);
// router.get("/recom", recipeController.submitRecipeOnPost);

// router.get("/recom", recipeController.getRecom);
// router.post("/ingred", recipeController.showIngreNames);
router.post("/ingrd", recipeController.submitRecipeOnPost);
router.post("/recom", recipeController.displayRecipes);
module.exports = router;
