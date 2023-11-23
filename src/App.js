
import './App.css';

function App() {
  return (
    <div className="app">
      <header  className ="overlay">
        <h1>Welcome to the React Styling Assignment</h1>
        <p>Explore and enhance your styling skills!</p>
      </header> 




      <section className="articles">
        {/* <article className="article">
          <h2>Article 1</h2>
          <p>This is the content of the first article. Add your own text here.</p>
        </article> */}
        <article>    
        <img src="https://picsum.photos/id/1011/800/450" alt="" />            
        <h2>Article 1</h2>
        <p>This is the content of the first article. Add your own text here.</p> 
        </article>
  


        <article>    
        <img src="https://picsum.photos/id/1011/800/450" alt="" />            
        <h2>Article 2</h2>
        <p>This is the content of the second article. Add your own text here.</p>
        </article>
  
        

        <article>    
        <img src="https://picsum.photos/id/1011/800/450" alt="" />            
          <h2>Article 3</h2>
          <p>This is the content of the third article. Add your own text here.</p>
        </article>
      </section>

      <aside className="sidebar">
        <section className="widget">
          <h2>Categories</h2>
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </section>

        <section className="widget">
          <h2>Tags</h2>
          <ul>
            <li>Tag 1</li>
            <li>Tag 2</li>
            <li>Tag 3</li>
          </ul>
        </section>
      </aside>

      <footer>
        <p>&copy; 2023 React Styling Assignment</p>
      </footer>
    </div>
  );
}

export default App;
