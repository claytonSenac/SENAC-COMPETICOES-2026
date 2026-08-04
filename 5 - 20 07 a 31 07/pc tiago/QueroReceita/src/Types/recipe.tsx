export interface RecipeList {
    idMeal?: string,
    strMeal?:string,
    strCategory?: string,
    strArea?:string,
    strMealThumb?:string
    strTags?: string
}

export interface detailedRecipe{
    idMeal?: string,
    strMeal?:string,
    strCategory?: string,
    strArea?:string,
    strMealThumb?:string
    strTags?: string,
    strInstructions?:string,
    strIngredient1?:string
    strIngredient2?:string
    strIngredient3?:string
    strIngredient4?:string
    strIngredient5?:string
    strIngredient6?:string
    strIngredient7?:string
    strIngredient8?:string
    strIngredient9?:string
    strIngredient10?:string
    strIngredient11?:string
    strIngredient12?:string,
    strYoutube?:string,
    strCountry?:string
}

export interface ingredient{
    idIngredient: string,
    strIngredient: string, 
    strThumb:string
}