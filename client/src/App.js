// import products from "./product";
// import ProductCard from "./components/ProductCard";

// const App = () => {
//   return (
//     <section className="container">
//       <div className="row">
//         {products.map((product) => {
//           return (
//             <ProductCard
//               key={product.id}
//               productName={product.name}
//               productPrice={product.price}
//               productDesc={product.description}
//               productImage={product.image}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default App;

import Layout from "./layout/Layout";
const App =()=> {
  return  <Layout/>
};
export default App;