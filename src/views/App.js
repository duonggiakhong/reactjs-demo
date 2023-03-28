import logo from './logo.svg';
import './App.scss';
import LisTodo from './TodoApp/ListTodo';
// import MyComponent from './Example/MyComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import MyComponent from './Example/MyComponent';
import Nav from './Nav/Nav';
import Home from './Nav/Home';
import ListUser from './Users/ListUser';
import DetailUers from './Users/DetailUser';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Chao CaryGiaCat
          </p>
          {/* <MyComponent /> */}
          {/* <LisTodo /> */}


          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/MyComponent">
              <MyComponent />
            </Route>
            <Route path="/LisTodo">
              <LisTodo />
            </Route>
            <Route path="/User" exact>
              <ListUser />
            </Route>
            <Route path="/User/:id">
              <DetailUers />
            </Route>
          </Switch>


        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />

      </div>
    </BrowserRouter>
  );
}

export default App;
