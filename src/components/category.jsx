import "./category.css";

const Category = ({name})=>{
return   (<div className="category">
    <div>
        <img className="category-pic" src="/images/category.png" alt="category pic" /></div>
        <div className="category-name">{name}</div>
    </div>)
}

export default Category;