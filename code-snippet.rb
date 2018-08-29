# app/controllers/recipes_controller.rb

  def recipe_params
    params.require(:recipe).permit(
      :name,
      :prep_time,
      :cook_time,
      :user_id,
      :search,
      directions_attributes: [:id, :text],
      recipe_ingredients_attributes: [
        :id,
        :quantity,
        ingredient_attributes: [:id, :name]
      ]
    )
  end

# app/models/recipe.rb

scope :search, lambda {|search| where(["name LIKE ?", "%#{search}%"])}

# app/models/recipe.rb

def search(search)
    where(["name LIKE ?", "%#{search}%"])
end