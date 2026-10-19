import { useUserCategoriesStore } from "../store/userCategoriesStore"

export const getCategoryNameFromId = (id) => {
    const categories = useUserCategoriesStore(state => state.categories)
    const foundCategory =  categories.find( category => category.id == id )
    // console.log( foundCategory )
    return foundCategory?.name || null
}