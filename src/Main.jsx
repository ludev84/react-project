export default function main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const listIngredients = ingredients.map(ing => <li key={ing}>{ing}</li>)

    function submitHandle(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        listIngredients.push(<li key={newIngredient}>{newIngredient}</li>)
        console.log(listIngredients)
    }

    return (
        <main>
            <form onSubmit={submitHandle} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {listIngredients}
            </ul>
        </main>
    )
}