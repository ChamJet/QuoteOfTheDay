import logo from './logo.svg';
import './App.css';
// have to specify what to import
import Header from './Header.js';
import Quote from './Quote.js';
import Footer from './Footer.js';

const appInfo = {
  title:"Quote of the Day",
  author:"Jet Cham",
  
}

function App() {
  return (
    <div className="App">
      {/* proper semantics of calling a component from another js 'Header' being name of function and appInfo.title being the argument */}
      <Header title= {appInfo.title} />
      <Quote/>
      <Footer author= {appInfo.author} />
    </div>
  );
}

export default App;
