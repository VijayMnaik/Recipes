// require("../models/database");
require("mongoose");
const req = require("express/lib/request");
const { redirect, append } = require("express/lib/response");

// exports.newIngred = (req, res) => {
//   // console.log("vijay");
//   res.render("index", { title: "Cooking Blog - Home" });
// };

exports.homepage = async (req, res) => {
  try {
    res.render("index", { title: "Cooking Blog - Home" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

// exports.searchRecipe = async (req, res) => {
//   try {
//     let searchTerm = req.body.searchTerm;
//     let recipe = await Recipe.find({
//       $text: { $search: searchTerm, $diacriticSensitive: true },
//     });
//     res.render("search", { title: "Cooking Blog - Search", recipe });
//   } catch (error) {
//     res.status(500).send({ message: error.message || "Error Occured" });
//   }
// };

/**
 * GET /explore-latest
 * Explplore Latest
 */
exports.exploreLatest = async (req, res) => {
  try {
    res.render("explore-latest", {
      title: "Cooking Blog - Explore Latest",
    });
  } catch (error) {
    res.satus(500).send({ message: error.message || "Error Occured" });
  }
};

exports.submitRecipeOnPost = async (req, res) => {
  try {
    let imageUploadFile;
    let uploadPath;
    let newImageName;
    let imgarray = [];

    if (!req.files || Object.keys(req.files).length === 0) {
      console.log("No Files where uploaded.");
    } else {
      console.log(Object.keys(req.files).length);
      let n = Object.keys(req.files).length;
      for (let i = 1; i <= n; i++) {
        let imgname = "req.files.image" + i;
        imageUploadFile = eval(imgname);
        // console.log(req.files.imgname);
        newImageName = Date.now() + imageUploadFile.name;
        uploadPath =
          require("path").resolve("./") + "/public/uploads/" + newImageName;
        // console.log(uploadPath);
        imgarray.push(newImageName);
        // console.log(imgarray);
        imageUploadFile.mv(uploadPath, function (err) {
          if (err) return res.status(500).send(err);
        });
      }
    }

    res.render("ingrd", {
      imgarray: imgarray,
      ingredients: ingredients,
    });
  } catch (error) {
    // // console.log(error);
    // // const k = 1;
    // req.flash("infoSubmit", "eror at subtmitting recipe");
    res.render("index", { title: "Cooking Blog - Home" });
  }
};

// exports.getRecom = (req, res) => {
//   // console.log(req.body);
//   console.log("vijay");
//   // res.render("recom", { title: "Cooking Blog - Home" });
// };
// exports.postRecom = async (req, res) => {
//   console.log(req.body);
//   res.render("recom", { data: req.body });
// };
//
ingredients = ["apple", "banana", "coke"];

exports.displayRecipes = (req, res) => {
  res.render("recom", {
    recipes: recipes,
  });
};

var recipes = {
  0: {
    index: "1028.0",
    ingredients:
      " 1 cup Rice  2 teaspoons Cumin seeds (Jeera)  2 tablespoons Ghee Salt , to taste ",
    instructions:
      "To begin making the\u00a0Jeera Rice Recipe, we will first cook the rice in a saucepan/handi. First, rinse the rice well in water. Place the washed rice in the saucepan, add salt, 1 tablespoon ghee and two cups of water.Bring the rice to a brisk boil.Once the rice comes to a brisk boil, cover the pan, turn the heat to low and cook the rice until all the water is completely absorbed. Once all the water is absorbed, turn off the heat.Allow the rice to rest for 10 minutes before you can mix the roasted cumin into it. The rice will fluff up as it rests.After 10 minutes, heat a tablespoon of ghee in a small pan. Add the cumin seeds and allow it to crackle. Once it crackles and you can smell the roasted aromas, turn off the heat.Pour the roasted cumin (jeera) into the cooked rice and using a slotted spoon, stir the rice gently and fluff it up.The Jeera Rice\u00a0 is now ready to be served along with\u00a0Dals & Kadhi's\u00a0\u00a0to make a great weeknight dinner.Serve\u00a0Jeera Rice\u00a0along with\u00a0Tadka Dal,\u00a0Paneer Butter Masala\u00a0and\u00a0Garlic Naan\u00a0for a weekend lunch with your family.",
    prep_time: "Total in 30 M",
    title: "Jeera Rice Recipe - Cumin And Ghee Flavored Rice",
  },
  1: {
    index: "1028.0",
    ingredients:
      " 1 cup Rice  2 teaspoons Cumin seeds (Jeera)  2 tablespoons Ghee Salt , to taste ",
    instructions:
      "To begin making the\u00a0Jeera Rice Recipe, we will first cook the rice in a saucepan/handi. First, rinse the rice well in water. Place the washed rice in the saucepan, add salt, 1 tablespoon ghee and two cups of water.Bring the rice to a brisk boil.Once the rice comes to a brisk boil, cover the pan, turn the heat to low and cook the rice until all the water is completely absorbed. Once all the water is absorbed, turn off the heat.Allow the rice to rest for 10 minutes before you can mix the roasted cumin into it. The rice will fluff up as it rests.After 10 minutes, heat a tablespoon of ghee in a small pan. Add the cumin seeds and allow it to crackle. Once it crackles and you can smell the roasted aromas, turn off the heat.Pour the roasted cumin (jeera) into the cooked rice and using a slotted spoon, stir the rice gently and fluff it up.The Jeera Rice\u00a0 is now ready to be served along with\u00a0Dals & Kadhi's\u00a0\u00a0to make a great weeknight dinner.Serve\u00a0Jeera Rice\u00a0along with\u00a0Tadka Dal,\u00a0Paneer Butter Masala\u00a0and\u00a0Garlic Naan\u00a0for a weekend lunch with your family.",
    prep_time: "Total in 30 M",
    title: "Jeera Rice Recipe - Cumin And Ghee Flavored Rice",
  },
  2: {
    index: "1028.0",
    ingredients:
      " 1 cup Rice  2 teaspoons Cumin seeds (Jeera)  2 tablespoons Ghee Salt , to taste ",
    instructions:
      "To begin making the\u00a0Jeera Rice Recipe, we will first cook the rice in a saucepan/handi. First, rinse the rice well in water. Place the washed rice in the saucepan, add salt, 1 tablespoon ghee and two cups of water.Bring the rice to a brisk boil.Once the rice comes to a brisk boil, cover the pan, turn the heat to low and cook the rice until all the water is completely absorbed. Once all the water is absorbed, turn off the heat.Allow the rice to rest for 10 minutes before you can mix the roasted cumin into it. The rice will fluff up as it rests.After 10 minutes, heat a tablespoon of ghee in a small pan. Add the cumin seeds and allow it to crackle. Once it crackles and you can smell the roasted aromas, turn off the heat.Pour the roasted cumin (jeera) into the cooked rice and using a slotted spoon, stir the rice gently and fluff it up.The Jeera Rice\u00a0 is now ready to be served along with\u00a0Dals & Kadhi's\u00a0\u00a0to make a great weeknight dinner.Serve\u00a0Jeera Rice\u00a0along with\u00a0Tadka Dal,\u00a0Paneer Butter Masala\u00a0and\u00a0Garlic Naan\u00a0for a weekend lunch with your family.",
    prep_time: "Total in 30 M",
    title: "Jeera Rice Recipe - Cumin And Ghee Flavored Rice",
  },
  3: {
    index: "1028.0",
    ingredients:
      " 1 cup Rice  2 teaspoons Cumin seeds (Jeera)  2 tablespoons Ghee Salt , to taste ",
    instructions:
      "To begin making the\u00a0Jeera Rice Recipe, we will first cook the rice in a saucepan/handi. First, rinse the rice well in water. Place the washed rice in the saucepan, add salt, 1 tablespoon ghee and two cups of water.Bring the rice to a brisk boil.Once the rice comes to a brisk boil, cover the pan, turn the heat to low and cook the rice until all the water is completely absorbed. Once all the water is absorbed, turn off the heat.Allow the rice to rest for 10 minutes before you can mix the roasted cumin into it. The rice will fluff up as it rests.After 10 minutes, heat a tablespoon of ghee in a small pan. Add the cumin seeds and allow it to crackle. Once it crackles and you can smell the roasted aromas, turn off the heat.Pour the roasted cumin (jeera) into the cooked rice and using a slotted spoon, stir the rice gently and fluff it up.The Jeera Rice\u00a0 is now ready to be served along with\u00a0Dals & Kadhi's\u00a0\u00a0to make a great weeknight dinner.Serve\u00a0Jeera Rice\u00a0along with\u00a0Tadka Dal,\u00a0Paneer Butter Masala\u00a0and\u00a0Garlic Naan\u00a0for a weekend lunch with your family.",
    prep_time: "Total in 30 M",
    title: "Jeera Rice Recipe - Cumin And Ghee Flavored Rice",
  },
  4: {
    index: "1028.0",
    ingredients:
      " 1 cup Rice  2 teaspoons Cumin seeds (Jeera)  2 tablespoons Ghee Salt , to taste ",
    instructions:
      "To begin making the\u00a0Jeera Rice Recipe, we will first cook the rice in a saucepan/handi. First, rinse the rice well in water. Place the washed rice in the saucepan, add salt, 1 tablespoon ghee and two cups of water.Bring the rice to a brisk boil.Once the rice comes to a brisk boil, cover the pan, turn the heat to low and cook the rice until all the water is completely absorbed. Once all the water is absorbed, turn off the heat.Allow the rice to rest for 10 minutes before you can mix the roasted cumin into it. The rice will fluff up as it rests.After 10 minutes, heat a tablespoon of ghee in a small pan. Add the cumin seeds and allow it to crackle. Once it crackles and you can smell the roasted aromas, turn off the heat.Pour the roasted cumin (jeera) into the cooked rice and using a slotted spoon, stir the rice gently and fluff it up.The Jeera Rice\u00a0 is now ready to be served along with\u00a0Dals & Kadhi's\u00a0\u00a0to make a great weeknight dinner.Serve\u00a0Jeera Rice\u00a0along with\u00a0Tadka Dal,\u00a0Paneer Butter Masala\u00a0and\u00a0Garlic Naan\u00a0for a weekend lunch with your family.",
    prep_time: "Total in 30 M",
    title: "Jeera Rice Recipe - Cumin And Ghee Flavored Rice",
  },
  5: {
    index: "1028.0",
    ingredients:
      " 1 cup Rice  2 teaspoons Cumin seeds (Jeera)  2 tablespoons Ghee Salt , to taste ",
    instructions:
      "To begin making the Jeera Rice Recipe, we will first cook the rice in a saucepan/handi. First, rinse the rice well in water. Place the washed rice in the saucepan, add salt, 1 tablespoon ghee and two cups of water.Bring the rice to a brisk boil.Once the rice comes to a brisk boil, cover the pan, turn the heat to low and cook the rice until all the water is completely absorbed. Once all the water is absorbed, turn off the heat.Allow the rice to rest for 10 minutes before you can mix the roasted cumin into it. The rice will fluff up as it rests.After 10 minutes, heat a tablespoon of ghee in a small pan. Add the cumin seeds and allow it to crackle. Once it crackles and you can smell the roasted aromas, turn off the heat.Pour the roasted cumin (jeera) into the cooked rice and using a slotted spoon, stir the rice gently and fluff it up.The Jeera Rice\u00a0 is now ready to be served along with\u00a0Dals & Kadhi's\u00a0\u00a0to make a great weeknight dinner.Serve\u00a0Jeera Rice\u00a0along with\u00a0Tadka Dal,\u00a0Paneer Butter Masala\u00a0and\u00a0Garlic Naan\u00a0for a weekend lunch with your family.",
    prep_time: "Total in 30 M",
    title: "mango chips",
  },
};

// key,index
// const object = {'a': 1, 'b': 2, 'c' : 3};
// for (const [key, value] of Object.entries(recipes)) {
//   console.log(value.title);
//   console.log(value.prep_time);
//   console.log(value.ingredients);
//   console.log(value.instructions);
//   console.log();
//   console.log();
// }
// console.log(recipes[5].index);
