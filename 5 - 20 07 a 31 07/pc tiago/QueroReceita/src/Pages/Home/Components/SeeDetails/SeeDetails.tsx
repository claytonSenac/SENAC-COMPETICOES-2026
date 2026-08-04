import { useEffect, useState } from 'react';
import s from './seeDetails.module.css';
import type { detailedRecipe } from '../../../../Types/recipe';
import { getDetailedRecipe } from '../../recipeService';

interface detailsProps{
    idMeal:string,
    closeModal: ()=> void;
}

export default function SeeDetails(props:detailsProps){
    const [recipe,setRecipe] = useState<detailedRecipe>()

    useEffect(() => {
        const getData = async ()=>{
            const data = await getDetailedRecipe(props.idMeal);
            if(data.sucesso){
                setRecipe(data.data);
            }else{
                props.closeModal();
            }
        }   
        getData();
    },[])

    return (
        <>
            <div className={s.containerModalDetails}>
                <div className={s.modal}>
                    <div className={s.topBar}>
                        <h2>{recipe?.strMeal}</h2>
                        <i className="bi bi-x-circle-fill"
                        onClick={() => {
                            
                        props.closeModal();
                        }}
                    ></i>
                    </div>
                    <div className={s.header}>
                        <img src={recipe?.strMealThumb} className={s.imgMeal} />
                        <div className={s.details}>
                            <p><strong>Nacionalidade:</strong>{recipe?.strArea}</p>
                            <p><strong>Categoria:</strong>{recipe?.strCategory}</p>
                            <p><strong>Origem:</strong>{recipe?.strCountry}</p>
                            <a  className={s.linkYt} href={recipe?.strYoutube} target='_blank'>Link</a>
                        </div>
                    </div>
                    <h2>Ingredientes</h2>
                    <ul className={s.ingredients}>
                        <li>{recipe?.strIngredient1}</li>
                        <li>{recipe?.strIngredient2}</li>
                        <li>{recipe?.strIngredient3}</li>
                        <li>{recipe?.strIngredient4}</li>
                        <li>{recipe?.strIngredient5}</li>
                        <li>{recipe?.strIngredient6}</li>
                        <li>{recipe?.strIngredient7}</li>
                        <li>{recipe?.strIngredient8}</li>
                        <li>{recipe?.strIngredient9}</li>
                        <li>{recipe?.strIngredient10}</li>
                        <li>{recipe?.strIngredient11}</li>
                        <li>{recipe?.strIngredient12}</li>
                    </ul>
                    <h2>Modo de Preparo:</h2>
                    <div className={s.modoPreparo}>
                        <p>{recipe?.strInstructions}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
