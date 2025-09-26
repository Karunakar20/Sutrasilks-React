import React from "react";
import "./Category.css";
import { ArrowRight } from "lucide-react";

const Category = ({ image, title }) => {
  return (
    <div className="category-card">
      <img src={image} alt={title} className="category-image" />
      <div className="category-footer">
        <span className="category-title">{title}</span>
        <ArrowRight className="arrow-icon" size={18} />
      </div>
    </div>
  );
};

export default Category;
