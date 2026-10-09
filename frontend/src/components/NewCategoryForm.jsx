import { useField } from "../hooks/useField"

const NewCategoryForm = () => {
    const categoryName = useField(`categoryName`, `text`, `Category Name`)

    const handleCategoryCreation = async (e) => {
        e.preventDefault()
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