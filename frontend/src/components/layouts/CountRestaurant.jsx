import React from 'react'
import { getRestaurants} from "../../actions/restaurantAction";
import {useDispatch,useSelector } from "react-redux";
import { useEffect } from 'react';

export default function CountRestaurant() {
  const dispatch = useDispatch();
  const { loading ,error ,count,showVegOnly,pureVegRestaurantsCount } = 
   useSelector((state)=>state.restaurants);

  useEffect(()=> {
    dispatch(getRestaurants());
  }, [dispatch]);
  return (
    <div>
    {loading ? (
      <p> Loading Restaurant count...  </p>
    ):error ?(
      <p>Error :{error}</p>
    ) : (
      <p className="NumOfRestro">
        {showVegOnly ? pureVegRestaurantsCount :count }{" "}
        <span className="Restro">
          {showVegOnly
            ? pureVegRestaurantsCount===1
              ? "Restaurant"
              :"Restaurants"
            :count===1 
            ? "Restaurant"
            :"Restaurants"}
        </span>
      </p>
      )}
      <hr />
    </div>
  )
}

















































{/*



import React, { useEffect } from "react";
import { getRestaurants } from "../../actions/restaurantAction";
import { useDispatch, useSelector } from "react-redux";

export default function CountRestaurant() {
    const dispatch = useDispatch();
    const { loading, error, count } = useSelector((state) => state.restaurants);

    useEffect(() => {
        dispatch(getRestaurants());
    }, [dispatch]);
    return ( 
    <div>
        {loading? (
            <p>Loading Restaurant count...</p>
        ) : error ? (
            <p>Error: {error}</p>) :(

            <p className="NumOfRestro">
            {count}            
            <span className="Restro">
                Restaurants
            </span>
        </p>
        )}      
        <hr />
    </div>
    );
}



*/}

































{/*

import React from 'react'


export default function CountRestaurant() {
  return (
    <div>
        <p className="NumOfRestro">
            
            8 <br/><span className="Restro">
                Restaurants
            </span>
        </p>
        <hr />
    </div>
  )
}
*/}