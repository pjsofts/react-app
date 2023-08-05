import './App.css';
import Category from './components/category';

const categories = ["مراقبت پوست", "مراقبت مو", "مراقبت بدن", "آرایشی"];

function App() {

  return (
    <div>
      <div className="header">
          <div className="logo-container">
          <img className="logo-pic" src="/images/logo.svg" alt="logo pic" />
          </div>
          <div className="cart-row">
            <ul className="category-parent">
            {categories.map(category=>{
              return <a className="category-link" href="/#" ><li>{category}</li></a>
            })}
            </ul>
            <img className="cart-pic" src="/images/cart.svg" alt="cart pic" />
          </div>
      </div>
      <div className="title">
        دسته بندی ها
      </div>
      <div className="categories">
            {categories.map(category=>{
              return <Category name={category}/>
            })}
      </div>
    </div>
  );
}

export default App;
