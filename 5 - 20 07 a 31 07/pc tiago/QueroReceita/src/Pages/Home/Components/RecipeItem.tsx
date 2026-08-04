import s from "../home.module.css";
import type { RecipeList } from "../../../Types/recipe";

interface RecipeItemProps {
  recipe: RecipeList;
  favorited: boolean;

  onFavorite: (recipe: RecipeList) => void;
  onEdit?: (recipe: RecipeList) => void;
  onDelete?: (recipe: RecipeList) => void;
  onDetails?: (idMeal: string) => void;
}

export default function RecipeItem({
  recipe,
  favorited,
  onFavorite,
  onEdit,
  onDelete,
  onDetails,
}: RecipeItemProps) {
  function getThumbExample() {
    return "https://placehold.co/300x300";
  }

  return (
    <div
      className={
        favorited
          ? `${s.recipeItem} ${s.favorited}`
          : s.recipeItem
      }
    >
      <div className={s.containerRecipeImage}>
        <img
          className={s.recipeImg}
          src={recipe.strMealThumb ?? getThumbExample()}
          alt={recipe.strMeal ?? "Receita"}
        />
      </div>

      <div className={s.containerRecipeData}>
        <p className={s.recipeName}>
          {recipe.strMeal ?? "Receita"}
        </p>

        {recipe.strCategory && (
          <p>
            <strong>Cat:</strong>{" "}
            {recipe.strCategory}
          </p>
        )}

        <p>
          <strong>País:</strong>{" "}
          {recipe.strArea ?? "Sem País"}
        </p>

        <p className={s.recipeTags}>
          <strong>Tags:</strong>{" "}
          <span>{recipe.strTags ?? "Sem Tags"}</span>
        </p>
      </div>

      <div className={s.actionsRecipe}>
        <button onClick={() => onFavorite(recipe)}>
          <i
            className={
              favorited
                ? `bi bi-star-fill ${s.favorited}`
                : "bi bi-star"
            }
          ></i>
        </button>

        <button onClick={() => onEdit?.(recipe)}>
          <i className="bi bi-pencil-square"></i>
        </button>

        <button onClick={() => onDelete?.(recipe)}>
          <i className="bi bi-trash-fill"></i>
        </button>
      </div>

      <button
        className={s.seeDetails}
       
      >
        <i   onClick={() => onDetails?.(recipe.idMeal!)} className="bi bi-info-square-fill"></i>
      </button>
    </div>
  );
}
