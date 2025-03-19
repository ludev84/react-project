export default function IngredientsList({ingredients, onClickHandle}) {
    const ingredientsListItems = ingredients.map(ing => <li key={ing}>{ing}</li>)

    return (
        <section>
            <h2>Ingredients in hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {ingredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={onClickHandle}>Get a recipe</button>
            </div>}
        </section>
    )
}