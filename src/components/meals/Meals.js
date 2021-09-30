import './Meals.css';
import React, { useEffect, useState } from 'react';
import Meal from '../meal/Meal';
import Cart from '../cart/Cart';
import { addToDb, getStoredDb } from '../../storage/localstorage';


const Meals = () => {
    const [meals,setMeals]=useState([]);
    const [order,setOrder]=useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
        
    },[]);

    useEffect(()=>{
       

        if (meals.length) {
            const saveDb=getStoredDb();
            const storedOrder=[];

            for (const key in saveDb) {
                // console.log(key);
                const orderMeal=meals.find(ml=>ml.idMeal===key);
                const quantity=saveDb[key];
                orderMeal.quantity=quantity;
                storedOrder.push(orderMeal);
            
            }
            setOrder(storedOrder);
            // console.log(storedOrder);
            
        }
        


    },[meals]);

    const mealhandeler=(props)=>{
      //  console.log(props);
        const newOrder= [...order,props];
        setOrder(newOrder);
        // console.log(props.idMeal);
        addToDb(props.idMeal);

      

    }



    return (
        <div className="meal-container">
            <div className="meals">
                {meals.map(meal=><Meal key={meal.idMeal} meal={meal} mealhandeler={mealhandeler}></Meal>)}
            
                
            </div>
            
            <div className="meals-cart">
                <h2>Meal Cart</h2>
                <hr />
                {<Cart order={order}></Cart>}

            </div>

            
        </div>
    );
};

export default Meals;