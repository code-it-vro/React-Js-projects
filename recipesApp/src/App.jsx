import React from 'react'
import Header from './components/Header'
import Recipe from './components/Recipe'

const App = () => {
  return (
    <div>
      <Header />
      <Recipe/>
    </div>
  )
}

export default App
















// import { data } from "autoprefixer";
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const app_key = "0cd50c0c19932da9b654f8c1e43243d6";
//   const app_id = "273539e5";
//     const [recipeImage, setRecipeImage] = useState("");
//     const [query,setQuery] = useState("pizz")

//   const fetchData = async (pizza) => {
//     try {
//       const data = await fetch(
//         `https://api.edamam.com/api/recipes/v2?type=public&q=${pizza}&app_id=${app_id}&app_key=${app_key}`
//       );
//       const response = await data.json();
//       console.log(response);

//       const image = response.hits[3].recipe.image;
//       setRecipeImage(image); // Set the image URL in the state

//       return response;
//     } catch (e) {
//       console.log("error occurred");
//       return e;
//     }
//   };

//   // useEffect(()=>{
//   //   fetchData()
//   // },[])

//   return (
//     <div className="bg-slate-700 min-h-screen text-center">
//       <input
//         className="rounded-xl px-2 py-1 my-5"
//         type="text"
//         placeholder="enter your dish here"
//       />
//       <button className="rounded-xl p-1 mx-4 bg-slate-50">search</button>
//       <label className="px-4 text-white" htmlFor="dishInput">
//         Your dish
//       </label>
//       <div class="flex justify-center items-center my-8">
//         <div class="bg-white  w-40 h-40 rounded shadow-md">
//           <img src={recipeImage} alt="Recipe" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
