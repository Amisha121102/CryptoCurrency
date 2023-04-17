import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles(theme=>({
  App:{
      backgroundColor: 'black',
      color:'white',
      minHeight:"100vh",
  },
}));

const App = () => {    
    const classes = useStyles();

  return (
     <BrowserRouter>
        <div className={classes.App}>
          <Header/>
          <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/coins/:id' element={<Coinpage/>} />
          </Routes>
        </div>
     </BrowserRouter>
  );
}

export default App;
