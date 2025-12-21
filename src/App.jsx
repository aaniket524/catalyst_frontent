import logo from './logo.svg';
import './App.css';
import Header from './Container/Components/Header';
import Hero from './Container/Components/Hero';
import DesignSolution from './Container/Components/DesignSolution';
import StandOutSection from './Container/Components/StandOutSection';
import ProjectRange from './Container/Components/ProjectRange';
import WorkProcess from './Container/Components/WorkProcess';
import HomeTestimonials from './Container/Components/HomeTestimonials';
import HomeMarquee from './Container/Components/HomeMarquee';
import HomeTeam from './Container/Components/HomeTeam';
import Footer from './Container/Components/Footer';
import Copyright from './Container/Components/Copyright';
import Container from './Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Container/Pages/HomePage';
import SingleService from './Container/Pages/SingleServicePage';
import ScrollToTop from './Container/Components/ScrollButton';
import Loader from './Container/Components/ScrollButton/Loader';

function App() {
  return (
    <div className="App">
      <Container/>
   <ScrollToTop/>
    </div>
  );
}

export default App;