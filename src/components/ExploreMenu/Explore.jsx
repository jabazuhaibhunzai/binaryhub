import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const Explore = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Category</h1>
      <p className="explore-menu-text">
      
        Discover a wide range of categories tailored to meet your needs. Whether
        you're looking for the latest trends, timeless classics, or niche
        specialties, we have something for everyone. Dive in and explore curated
        collections designed to inspire and delight. Start your journey today
        and find exactly what you're looking for!
      </p>
      <div className="Explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={(event) =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Explore;
