import type { RecipeList } from "../../Types/recipe";
import type { editRecipe } from "./Components/editModal/EditModal";

const url = "https://www.themealdb.com/api/json/v1/1";

let listaFavoritos:RecipeList[] = [];
let recipesList:RecipeList[] = [];

export function getFavList(): RecipeList[] {    
  const localData = localStorage.getItem('favList');
  listaFavoritos = localData ? JSON.parse(localData) : [];
  return listaFavoritos;
}

export async function getRecipeBySearch(text:string){

    const res = await fetch(`${url}/search.php?s=${text}`);

    let data = await res.json();
    
    if(data.meals.length > 0){
        recipesList = [...data.meals]
        return {
            sucesso: true,
            data: recipesList
        }
    }else{
        return {
            sucesso:false,
            data:null
        }
    }
}

export  function favoritarReceita(recipe: RecipeList) {
    const exists = listaFavoritos.find(r => r.idMeal == recipe.idMeal);

    if (exists) {
        listaFavoritos = listaFavoritos.filter(id => id !== recipe);
    } else {
        listaFavoritos = [...listaFavoritos, recipe];
    }

    localStorage.setItem("favList", JSON.stringify(listaFavoritos));
    return listaFavoritos;
}

export function removeRecipe(recipe:RecipeList){
    const lista = recipesList.filter(r => r.idMeal != recipe.idMeal);
    listaFavoritos = listaFavoritos.filter(id => id !== recipe);
    localStorage.setItem("favList", JSON.stringify(listaFavoritos));

    recipesList = [...lista];
    return recipesList;
}

export function removeRecipeFromFavorites(recipe:RecipeList){
    const lista = listaFavoritos.filter(r => r.idMeal != recipe.idMeal);
    console.log(listaFavoritos,recipe.idMeal,lista)
    
    localStorage.setItem("favList", JSON.stringify(lista));
    return lista;
}

export async  function getDetailedRecipe(idMeal:string){
    const res = await fetch(`${url}/lookup.php?i=${idMeal}`);

    let data = await res.json();

    let recipe = data.meals[0];

    let exists = recipesList.find(r => r.idMeal == recipe.idMeal);

    if(exists){
        recipe.strMeal = exists.strMeal;
        recipe.strCategory = exists.strCategory;
    }
    
    if(data.meals.length > 0){
        return {
            sucesso: true,
            data: recipe
        }
    }else{
        return {
            sucesso:false,
            data:null
        }
    }
}

export function editRecipe(recipe:editRecipe){
    let recipeEdited = recipesList.find(r => r.idMeal == recipe.idMeal);

    if(recipeEdited){
        recipeEdited!.strMeal = recipe.nome;
        recipeEdited!.strCategory = recipe.categoria;
    }

    recipesList = recipesList.map(r =>
    r.idMeal === recipe.idMeal
      ? { ...r, ... recipeEdited}
      : r
    );

    listaFavoritos = listaFavoritos.map(r =>
    r.idMeal === recipe.idMeal
      ? { ...r, ... recipeEdited}
      : r
    );

    localStorage.setItem("favList", JSON.stringify(listaFavoritos));

    return recipesList;
}

export async function getCategories(){
    const res = await fetch(`${url}/list.php?c=list`);

    let data = await res.json();
    
    if(data.meals.length > 0){
        data.meals.map((d:any)=>{
            d.selected = false
        })


        return {
            sucesso: true,
            data: data.meals
        }
    }else{
        return {
            sucesso:false,
            data:null
        }
    }
}

export async function buscarByListOfCategories(categories:string[]){
    let recipeList:RecipeList[] = [];

    const urls = categories.map(c =>(
        {
         url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${c}`,
         category: c
        }
    ))

    const promises = urls.map((url) =>{
        const response = fetch(url.url).then(async (response) =>{
            return {
                base:url,
                res: await response.json()
            }
        });

        return response;
    });

    await Promise.all(promises).then((jsons) => {
        jsons.forEach((json)=>{
            json.res.meals.map((r:RecipeList)=>{
                r.strCategory = json.base.category
            })
            recipeList = [...recipeList,...json.res.meals]
        })
	})
	.catch((error) => console.error('An error occurred:', error));

    recipesList = [...recipeList];
    return recipesList;
}


export function removeRecipesByCategory(strCategory:string){
    const recipes = recipesList.filter(r => r.strCategory != strCategory)
    recipesList = [...recipes];
    return recipesList;
}

export async function getRandomRecipes(){   
    await getRecipeBySearch("");
    return recipesList;
}