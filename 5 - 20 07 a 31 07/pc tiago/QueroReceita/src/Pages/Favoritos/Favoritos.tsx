import s from './favoritos.module.css';
import RecipeListComponent from '../Home/Components/RecipeList';
import { useEffect, useState } from 'react';
import type { RecipeList } from '../../Types/recipe';
import { favoritarReceita, getFavList, removeRecipeFromFavorites } from '../Home/recipeService';
import ConfirmModal from '../Home/Components/ConfirmModal/ConfirmModal';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import SeeDetails from '../Home/Components/SeeDetails/SeeDetails';

export default function Favoritos(){
    const [showModal, setShowModal] = useState(false);
    const [recipeToDelete,setRecipeToDelete] = useState<RecipeList | null>(null);
    const [recipes,setRecipes] = useState<RecipeList[]>([]);
    const nav = useNavigate();
    const [recipeToDetails,setRecipeToDetails] = useState<string | null>(null);
    const [showModalDetails, setshowModalDetails] = useState(true);

    useEffect(() => {
        const lista = getFavList()
        setRecipes([...lista]);
    },[]);

    function getFavorited(idMeal:string):boolean{
        let exists = recipes.some(r => r.idMeal == idMeal);
        if(exists){
            return true
        }else{
            return false
        }
    }

    
    function handleFavoritar(recipe:RecipeList){
        const favs = favoritarReceita(recipe);
        setRecipes(favs);
    }

    function handleDeleteRecipe(){
        if(recipeToDelete != null){
            const lista = removeRecipeFromFavorites(recipeToDelete || "");
            setRecipes(lista);
            setRecipeToDelete(null);
            setShowModal(false);
            toast.success("Removido com sucesso!")
        }
    }



    return (
        <> 
            <div className={s.modalFavoritos}>
                <div className={s.container}>
                    <div className={s.headerFavs}>
                        <h2>Favoritos</h2>
                        <i className="bi bi-x-circle-fill"
                            onClick={() => {
                                
                               nav('/',{replace:true})
                            }}
                        ></i>
                    </div>
                     <RecipeListComponent 
                        recipes={recipes}
                        isFavorited={getFavorited}
                        onFavorite={handleFavoritar}
                        onDelete={(recipe) => {
                            setRecipeToDelete(recipe);
                            setShowModal(true);
                        }}
                        onEdit={(recipe) => {
                            console.log("Editar", recipe);
                        }}  
                        onDetails={(idMeal:string) => {
                            setRecipeToDetails(idMeal)
                            setshowModalDetails(true)
                        }}
                     />
                </div>
            </div>

            { showModal && recipeToDelete && (
            <ConfirmModal 
                onCancel={()=>{
                    setShowModal(false)
                }}
                onConfirm={handleDeleteRecipe}
                data={recipeToDelete}
            />
        )}

        { showModalDetails && recipeToDetails && (
            <SeeDetails 
                idMeal={recipeToDetails}
                closeModal={() => {
                    setRecipeToDetails(null);
                    setshowModalDetails(false);
                }}
            />
        )}
        </>
    )
}