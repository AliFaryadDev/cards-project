const productItems = [
  {id:1, img: "./Components/Cards/Product_Images/headphones.png",alttext:"Wireless Headphones",title:"Wireless Headphones",price:"49.99$",btntext:"Add to Cart",className:"Card1"},
    {id:2, img: "./Components/Cards/Product_Images/smartWatch.png",alttext:"Smart Watch",title:"Smart Watch",price:"89.99$",btntext:"Add to Cart",className:"Card2"},
  {id:3, img: "./Components/Cards/Product_Images/gamingMouse.png",alttext:"Gaming Mouse",title:"Gaming Mouse",price:"29.99$",btntext:"Add to Cart",className:"Card3"},

  
]





function App(){
  const [count, update] = React.useState(0)
  const handleAddToCart = ()=>{
    update(count+1);
  }
  return(
    <>
  
    <NAV count = {count}/> 
      
      
    <div className="product-list">
      {productItems.map((product)=>(
      <Card
       key={product.id}
       img={product.img}
       alttext={product.alttext}
        title = {product.title}
        price = {product.price}
        btntext ={product.btntext}
        className ={ `card ${product. className}`}
        onAdd={handleAddToCart}
     />
      ))}
    </div>
    </>
    
  )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(<App/>)

