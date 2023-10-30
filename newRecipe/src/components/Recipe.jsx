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
      <h1>oops some error occur</h1>;
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="text-2xl p-1 rounded-l-full bg-slate-300 absolute outline-none right-10 left-6 top-64 md:right-10 md:top-20 md:left-auto md:p-4 md:pb-5 font-bold">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchData();
          }}
        >
          <input
            placeholder="Enter name of dish "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-l-full ml-3 pl-3 pt-1  mt-1 outline-none md:mr-3 md:rounded-full"
          />
          <button
            type="submit"
            className="text-xl font-bold float-right pl-3 pr-3 mt-1 bg-white rounded-l-full md:rounded-r-full md:rounded-l-node md:p-1 md:pl-3 md:pr-3"
          >
            Get Recipe
          </button>
        </form>
      </div>

      <div className="flex flex-col md:flex-row md:justify-evenly ml-5 mr-5  ">
        <div className="bg-slate-300 p-4 rounded-3xl">
          {recipes && recipes.hits && recipes.hits.length > 0 && (
            <h1 className="text-3xl font-bold mb-2 ml-16 pb-4 pt-2">
              Recipe For {recipes.hits[8].recipe.label}
            </h1>
          )}
          <div
            className="w-48 h-48 md:w-96 md:h-80 bg-cover bg-center bg-no-repeat inline-block rounded-2xl "
            style={{
              backgroundImage: `url(${
                recipes && recipes.hits && recipes.hits.length > 0
                  ? recipes.hits[8].recipe.image
                  : ""
              })`,
            }}
          ></div>
          <ul className="font-bold tracking-wide list-disc ml-3">
            {recipes &&
              recipes.hits &&
              recipes.hits[8].recipe.ingredientLines.map(
                (ingredient, index) => <li key={index}>{ingredient}</li>
              )}
          </ul>
        </div>

        {/* second */}

        <div className="bg-slate-300 p-4 ml-2  rounded-3xl flex flex-col just-center">
          {recipes && recipes.hits && recipes.hits.length > 0 && (
            <h1 className="text-3xl font-bold mb-2 ml-16 pb-4 pt-2">
              Recipe For {recipes.hits[12].recipe.label}
            </h1>
          )}
          <div
            className="w-48 h-48 md:w-96 md:h-80 bg-cover bg-center bg-no-repeat inline-block rounded-2xl  "
            style={{
              backgroundImage: `url(${
                recipes && recipes.hits && recipes.hits.length > 0
                  ? recipes.hits[12].recipe.image
                  : ""
              })`,
            }}
          ></div>
          <ul className="font-bold tracking-wide list-disc ml-3">
            {recipes &&
              recipes.hits &&
              recipes.hits[12].recipe.ingredientLines.map(
                (ingredient, index) => <li key={index}>{ingredient}</li>
              )}
          </ul>
        </div>

        {/* third  */}

        <div className="bg-slate-300 p-4 ml-2 rounded-3xl ">
          {recipes && recipes.hits && recipes.hits.length > 0 && (
            <h1 className="text-3xl font-bold mb-2 ml-16 pb-4 pt-2">
              Recipe For {recipes.hits[17].recipe.label}
            </h1>
          )}
          <div
            className="w-48 h-48 md:w-96 md:h-80 bg-cover bg-center bg-no-repeat inline-block rounded-2xl "
            style={{
              backgroundImage: `url(${
                recipes && recipes.hits && recipes.hits.length > 0
                  ? recipes.hits[17].recipe.image
                  : ""
              })`,
            }}
          ></div>
          <ul className="font-bold tracking-wide list-disc ml-3 flex flex-col flex-wrap">
            {recipes &&
              recipes.hits &&
              recipes.hits[17].recipe.ingredientLines.map(
                (ingredient, index) => <li key={index}>{ingredient}</li>
              )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Recipe;


