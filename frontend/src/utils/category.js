import { useUserCategoriesStore } from "../store/userCategoriesStore"

export const getCategoryNameFromId = (id) => {
    //This throws an error, bc I was calling it inside a loop (array.map)
    //and apparently that causes an error in react bc it was rendering more hooks every time
    //bc it detects a "Change in the order of hooks"
    // const categories = useUserCategoriesStore(state => state.categories)


    //the fix for the situation above is down below:
    const { categories } = useUserCategoriesStore.getState()




    const foundCategory =  categories.find( category => category.id == id )
    // console.log( foundCategory )
    return foundCategory?.name || null
}