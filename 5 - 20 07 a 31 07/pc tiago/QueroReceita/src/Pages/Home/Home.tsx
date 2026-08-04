import { useEffect, useState } from 'react';
import s from './home.module.css';
import { buscarByListOfCategories, editRecipe, favoritarReceita, getCategories, getFavList, getRandomRecipes, getRecipeBySearch, removeRecipe, removeRecipesByCategory } from './recipeService';
import {toast} from 'react-toastify';
import type { RecipeList } from '../../Types/recipe';
import ConfirmModal from './Components/ConfirmModal/ConfirmModal';
import RecipeListComponent from "./Components/RecipeList";
import SeeDetails from './Components/SeeDetails/SeeDetails';
import EditModal from './Components/editModal/EditModal';
import { useMultiselect } from './Hooks/multiSelect';


export default function Home(){

    const [search,setSearch] = useState("");

    const [favList,setFavList] = useState<RecipeList[]>([]);

    const [recipes,setRecipes] = useState<RecipeList[] | null>([]);
    const [isLoading,setIsLoading] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [recipeToDelete,setRecipeToDelete] = useState<RecipeList | null>(null);
    
    const [recipeToDetails,setRecipeToDetails] = useState<string | null>(null);
    const [showModalDetails, setshowModalDetails] = useState(false);

    const [showModalEdit, setshowModalEdit] = useState(true);
    const [recipeToEdit,setRecipeToEdit] = useState<RecipeList | null>(null);

    const [advancedFilter,setAdvancedFilter] = useState(false);
    const [ categorias,setCategorias] = useState<{strCategory:string,selected:boolean}[]>([]);

    const { selected, isSelected, onChange,removeSelected,resetSelected } = useMultiselect([]);


    useEffect(() => {
      const lista = getFavList()
      setFavList([...lista])
    },[]);

    useEffect(() => {
      const loadCategories = async ()=>{
        const categories = await  getCategories();
        setCategorias([...categories.data]);
        await handleSubmit();
    }
    loadCategories()
    },[])

    function handleInputChange(e:any){
        setSearch(e.target.value);
    }

    async function handleSubmit(){
        setIsLoading(true)
        toast.info("Buscando receitas!");
        try {
            const data = await getRecipeBySearch(search);
            
            if(data.sucesso){
                toast.success("Sucesso");
                setRecipes(data.data)
            }else{
                toast.error("Erro");
            }
        } catch (error) {
            toast.error("Erro");
            console.log(error)
        } finally{
            setIsLoading(false);
        }
    }

    function handleFavoritar(recipe:RecipeList){
        const favs = favoritarReceita(recipe);
        setFavList(favs);
    }

    function handleDeleteRecipe(){
        if(recipeToDelete != null){
            const lista = removeRecipe(recipeToDelete || "");
            setRecipes(lista);
            setRecipeToDelete(null);
            setShowModal(false);
            toast.success("Removido com sucesso!")
        }
    }

    function getFavorited(idMeal:string):boolean{
        let exists = favList.some(r => r.idMeal == idMeal);
        if(exists){
            return true
        }else{
            return false
        }
    }
    
    function handleKeyDown(e:any){
        if(e.key == "Enter"){
            handleSubmit()
        }
    }

    function salvarEdicoes(e:any){
        setshowModalEdit(false);
        setRecipeToDetails(null);
        const data = editRecipe(e);
        setRecipes(data);
    }

    async function handleFilterAdvanced(){

        if(selected.length == 0){
            return;
        }

        setSearch("");
        setIsLoading(true)
        const data = await buscarByListOfCategories(selected);
        if(data){
            setRecipes(data);
        }
        setAdvancedFilter(false);
        //resetSelected();
        setIsLoading(false)
    }

    async function removerFiltroAvancado(c:string){
         const recipes = removeRecipesByCategory(c)
        setRecipes(recipes);
        removeSelected(c);
    }

    return  (
        <>
            <div className={s.homePage}>
                <h1>Buscar por Receitas</h1>

                <div className={s.containSearchBox}>
                    <section className={s.boxSearch}>
                        <input
                            type="text"
                            className={s.searchInput}
                            value={search}
                            onChange={handleInputChange}
                            maxLength={80}
                            onKeyDown={handleKeyDown}
                        />
                        <div className={s.advancedInput}>
                            <i className="bi bi-funnel" onClick={() => {
                            setAdvancedFilter((prev) => !prev)
                            }}></i>
                        </div>
                    </section>
                    {selected.length > 0 && (
                        <>
                            <section className={s.selectedAdvancedFilters}>
                                {selected.map((c)=>(
                                    <li key={c} className={s.filterSelected}  onClick={async() => {
                                             removerFiltroAvancado(c)
                                        }} >
                                        <p>{c}</p>
                                        <i className="bi bi-x-circle"></i>
                                        
                                    </li>
                                ))}
                                <li className={s.filterSelected} id={s.clearFilters} 
                                onClick={async() => {
                                    resetSelected();
                                    const data = await getRandomRecipes();
                                    setRecipes([...data]);
                                }}
                                >Limpar Filtros</li>
                            </section>
                        
                        </>
                    )}
                </div>

                {isLoading && (
                    <><h2>Carregando...</h2></>
                ) }

                {!isLoading && recipes && recipes.length == 0 && (
                    <>
                        <h2>Sem Receitas</h2>
                    </>
                )}

                { !isLoading  && recipes && recipes.length > 0 && (
                    <>
                        <RecipeListComponent
                              recipes={recipes}
                              isFavorited={getFavorited}
                              onFavorite={handleFavoritar}
                              onDelete={(recipe) => {
                                setRecipeToDelete(recipe);
                                setShowModal(true);
                              }}
                              onEdit={(recipe) => {
                                setRecipeToEdit(recipe)
                                setshowModalEdit(true);
                              }}
                              onDetails={(idMeal:string) => {
                               setRecipeToDetails(idMeal)
                               setshowModalDetails(true)
                              }}
                            />

                    </>
                )}
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

            { showModalEdit && recipeToEdit && (
                <EditModal 
                    data={recipeToEdit}
                    closeModal={() => {
                      setRecipeToDetails(null);
                      setshowModalEdit(false);
                    }}
                    onSave={(e:any) => {
                      salvarEdicoes(e)
                    }}
                />
            )}

            { advancedFilter && categorias.length > 0 && (
                <div className={s.advancedFilterModal}>
                    <div className={s.containerAdvancedFilter}>
                        <h2>Filtro categorias:</h2>
                        <div className={s.containerCategories}>
                        {categorias.map((value) => (
                            <p key={value.strCategory} className={isSelected(value.strCategory) ? `${s.optionOfCategories} ${s.optionSelected}` : `${s.optionOfCategories}`}>
                                <input
                                id={value.strCategory}
                                type="checkbox"

                                value={value.strCategory}
                                checked={isSelected(value.strCategory)}
                                onChange={onChange}
                                />
                                <label htmlFor={value.strCategory}>{value.strCategory}</label>
                            </p>
                            ))}

                        </div>
                        <div className={s.modalAdvancedActions}>

                        <i className="bi bi-x-circle-fill" onClick={()=>{
                                setAdvancedFilter(false)
                            }}></i>
                                <i className={selected.length == 0 ? "bi bi-funnel  disabled" : "bi bi-funnel" } onClick={handleFilterAdvanced}></i>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


