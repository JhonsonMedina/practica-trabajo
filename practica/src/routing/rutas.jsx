import React from "react";
import{Routes , Route, BrowserRouter, Navigate} from "react-router-dom";

import { TodoList } from "../componentes/pages/todolist/TodoList.jsx";
import { Header } from "../componentes/layout/header.jsx";
import { Nav } from "../componentes/layout/nav.jsx";
import { Lateral } from "../componentes/layout/lateral.jsx";
import { Footer } from "../componentes/layout/footer.jsx";
import { TodoForm } from "../componentes/pages/todoform/TodoForm.jsx";
import { TodoFilters } from "../componentes/pages/todofilters/TodoFilters.jsx";
import {TodoItem} from "../componentes/pages/todoitem/TodoItem.jsx"

export const Rutas = () =>  {

    return(
<>

<BrowserRouter>

<Header />
<Nav />

<section id = "content" className="content">

    <Routes>

      <Route  path="/"  element= {<TodoList />}/>  
      <Route  path="/todolist"  element= {<TodoList />}/> 
      <Route  path="/todoItem"  element= {<TodoItem />}/> 
      <Route  path="/todoform"  element= {<TodoForm />}/> 
      <Route  path="/todofilters"  element= {<TodoFilters />}/> 
   </Routes>

</section>


<Lateral />


<Footer />

</BrowserRouter>


</>

    )
}