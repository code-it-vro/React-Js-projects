import React, { useEffect, useState } from "react";

const Recipe = () => {
  const app_id = "273539e5";
  const app_key = "0cd50c0c19932da9b654f8c1e43243d6";

  const [query, setQuery] = useState("pizza");
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`
      );
      const data = await response.json();
      setRecipes(data);
      console.log(data);
    } catch (error) {
      <h1>oops some error occur</h1>
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-11/12 max-h-fit bg-neutral-300 relative mx-auto my-auto top-36 rounded-3xl pb-6 mb-4">
      <div className="flex justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchData();
          }}
        >
          <input
            type="text"
            placeholder="Enter your dish"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-60 outline-none rounded-lg h-8 mt-2 mr-3 pl-2"
          />
          <button
            type="submit"
            className="font-bold rounded-lg bg-red-400 mt-2 pl-3 pr-3"
          >
            Find Recipe
          </button>
        </form>
      </div>
      <div className="flex mt-6 justify-between m-4  ">
        <div >
          {recipes && recipes.hits && recipes.hits.length > 0 && (
            <h1 className="text-3xl font-bold mb-2 ml-16 pb-4 pt-2">
              Recipe For {recipes.hits[8].recipe.label}
            </h1>
          )}
          <ul className="inline-block flex-col list-disc ml-20 font-bold tracking-wider">
            {recipes &&
              recipes.hits &&
              recipes.hits[8].recipe.ingredientLines.map(
                (ingredient, index) => <li key={index}>{ingredient}</li>
              )}
          </ul>
        </div>
        <div
          className=" w-96 bg-cover bg-center bg-no-repeat rounded-lg mr-8"
          style={{
            backgroundImage: `url(${
              recipes && recipes.hits && recipes.hits.length > 0
                ? recipes.hits[8].recipe.image
                : ""
            })`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Recipe;
