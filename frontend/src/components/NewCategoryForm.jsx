import { useField } from "../hooks/useField"
import { useUserCategoriesStore } from "../store/userCategoriesStore"

const NewCategoryForm = () => {
    const categoryName = useField(`categoryName`, `text`, `Category Name`)
    const createUserCategory = useUserCategoriesStore(state => state.createUserCategory)

    const handleCategoryCreation = async (e) => {
        e.preventDefault()
        await createUserCategory( categoryName.value )

    }


    return (
        <div>
            <h3>Create Category</h3>
            <form onSubmit={handleCategoryCreation}>
                <input {...categoryName} />
                <button> Create  </button>
            </form>
        </div>
    )
}

export default NewCategoryForm