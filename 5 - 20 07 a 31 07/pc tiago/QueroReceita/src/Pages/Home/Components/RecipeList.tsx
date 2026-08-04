import s from "../home.module.css";
import RecipeItem from "./RecipeItem";

import type { RecipeList as Recipe, RecipeList } from "../../../Types/recipe";
import { useEffect, useState } from "react";

interface RecipeListProps {
  recipes: Recipe[];

  isFavorited: (idMeal: string) => boolean;

  onFavorite: (recipe: Recipe) => void;
  onEdit?: (recipe:Recipe) => void;
  onDelete?: (recipe: Recipe) => void;
  onDetails?: (idMeal: string) => void;
}

export default function RecipeListComponent({
  recipes,
  isFavorited,
  onFavorite,
  onEdit,
  onDelete,
  onDetails,
}: RecipeListProps) {
  const [page,setPage] = useState(1);
  const itensPage = 9;
  const [recipesList,setRecipes] = useState<RecipeList[]>([]);

    useEffect(() => {
      setRecipes(recipes);
    },[recipes])

    useEffect(() => {
      const paged = getPageItems();
      setRecipes(paged);
    },[page])

    const getPageItems =()=> {
      const start = (page - 1) * itensPage;
      const end = start + itensPage;
      return recipes.slice(start, end);
    };


  function previusPage(){
    if(page == 1){
      return 
    }
    setPage((prev => prev-1))
  }

  function nextPage(){
    let maxPages = Math.round(recipes.length / itensPage);
    if(page >= maxPages){
      return
    }
    setPage((prev => prev+1))
  }

  return (
    <>
      <div className={s.boxPages}>
        <i className="bi bi-arrow-left-circle-fill" onClick={previusPage}></i>
          <p> Página: {page} de { Math.round(recipes.length / itensPage)} Páginas</p>
        <i className="bi bi-arrow-right-circle-fill" onClick={nextPage}></i>
      </div>
      <section className={s.listRecipes}>
        {recipesList.map((recipe) => (
          <RecipeItem
            key={recipe.idMeal}
            recipe={recipe}
            favorited={isFavorited(recipe.idMeal ?? "")}
            onFavorite={onFavorite}
            onEdit={onEdit}
            onDelete={onDelete}
            onDetails={onDetails}
          />
        ))}
      </section>
    </>
  );
}
