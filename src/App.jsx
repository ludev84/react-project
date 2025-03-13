export default function App() {
    function signUp(formData) {
        const data = Object.fromEntries(formData)
        const dietaryRestrictions = formData.getAll("dietaryRestrictions")
        const allData = {
            ...data,
            dietaryRestrictions
        }

        console.log(allData)
    }

    return (
        <section>
            <h1>Signup form</h1>
            <form action={signUp}>

                <label htmlFor="email">Email:</label>
                <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

                <label htmlFor="password">Password:</label>
                <input id="password" defaultValue="password123" type="password" name="password" />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" defaultValue="This is a description"></textarea>

                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value="unemployed" />
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="part-time" defaultChecked={true} />
                        Part-time
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="full-time" />
                        Full-time
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Dietary restrictions:</legend>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="vegan" />
                        Vegan
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="kosher" defaultChecked={true} />
                        Kosher
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="gluten-free" defaultChecked={true} />
                        gluten-free
                    </label>
                </fieldset>

                <label htmlFor="favColor"></label>
                <select id="favColor" name="favColor" defaultValue="" required>
                    <option value="" disabled>-- Choose a color --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>

                <button>Submit</button>

            </form>
        </section>
    )
}