import logo from './logo.svg';
import './Style/card.scss'
import './Style/global.scss'
import './App.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ScrollToTop from './Helper/ScrollToTop';
import Pages from './Pages';

function App() {
  return (
	<BrowserRouter>
		<div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
			<Navbar/>
				<Pages/>
          	<ScrollToTop />
		</div>
		<Footer/>
	</BrowserRouter>
  );
}

export default App;
