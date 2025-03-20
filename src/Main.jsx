import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(["Chicken", "Pasta", "Tomato", "Cheese"])
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 &&
                <IngredientsList
                    onClickHandle={getRecipe}
                    ingredients={ingredients}
                />}
            {recipe ? <ClaudeRecipe recipe={recipe}/> : undefined}
        </main>
    )
}