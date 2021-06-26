import Header from './components/Header'
import Card from './components/Card'
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        
        <div className="d-flex">
          {[1,2,3,4].map(item => 
          <Card 
          title="Мужские Кроссовки Nike Blazer Mid" 
          price={12999} 
          imageUrl="/img/sneakers/sneakers.jpg"
          onClick={() => console.log(item)} />)}

        </div>
        
      </div>
    </div>
  );
}

export default App;
