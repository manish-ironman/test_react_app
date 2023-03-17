import logo from './logo.svg';
import './App.css';
import TableRender from './TableRender';



function App() {

  let obj = [
    { name: "Manish", class: "X" },
    { name: "Ram", class: "XII" },
    { name: "Amit", class: "IX" },
    { name: "Mohan", class: "XI" },
  ];


  return (
    <div className="App">
       <center><h1>Students Details</h1></center>
       <TableRender
         data={obj}
       >

        
        </TableRender>
    </div>
  );
}

export default App;
