import React from "react"

export default function AppTest() {
    const [myFavoriteThings, setMyFavoriteThings] = React.useState([])

    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]

    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

    function addFavoriteThing() {
        setMyFavoriteThings(
            prevFavThing => [
                ...prevFavThing,
                allFavoriteThings[prevFavThing.length]      // Sleek
            ]
        )
    }


    return (
        <main className="container">
            <button onClick={addFavoriteThing}>Add item</button>
            <section aria-live="polite">
                {thingsElements}
            </section>
        </main>
    )
}