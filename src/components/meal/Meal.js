import React from 'react';
import './Meal.css';

const Meal = props => {
    const {strMeal,strCategory,strMealThumb,strInstructions}=props.meal;

   // console.log(props.meal);
    return (
        <div className="meal-card">
            <img src={strMealThumb} alt="" height="200" width="250" />
            <h3>{strMeal}</h3>
            <h5>{strCategory}</h5>
            <p>{strInstructions.slice(0,200)}</p>

            <button onClick={()=>props.mealhandeler(props.meal)} style={{backgroundColor:'yellow',padding:'10px 15px',borderRadius:'10px',color:''}}>Order Now</button>
            
        </div>
    );
};

export default Meal;