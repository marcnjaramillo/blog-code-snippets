// app/assets/javascripts/recipe.js

var addNewIngredient = function() {
    var $new_ingredients = $("#new_ingredients");
    var ingredientInput = `<name="recipe[ingredients_attributes][][name]">`;
    ingredientInput += `< name="recipe[ingredients_attributes][][quantity]">`
    $new_ingredients.append(ingredientInput);
 }


// app/assets/javascripts/recipe.js

    $(document).on('click', ".show", function(event) {
    event.preventDefault()
    let id = $(this).attr('data-id')
    history.pushState(null, null, `/recipes/${id}`)
    fetch(`/recipes/${id}.json`)
    .then(response => response.json())
    .then(recipe => {
        //$('.search-box').html('')
        $('.container-page').html('')
        let newRecipe = new Recipe(recipe)
        let recipeHtml = newRecipe.formatShow()
        $('.container-page').append(recipeHtml)
    })
})


<Markdown>
{`#Markdown example
**Cool stuff!!**
*More markdown*`} 
</Markdown>

<Markdown>
{`#Markdown example
**Cool stuff!!**
<Highlight>
{`function () => (
//some code stuff here
)`}
</Highlight>
*More markdown*`} 
</Markdown>

<Markdown>
{`#Markdown example
**Cool stuff!!**`}
<Highlight>
{`function () => (
//some code stuff here
)`}
</Highlight>
{`*More markdown*`} 
</Markdown>