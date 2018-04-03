import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Main from './Components/Main'
import './styles/stylesheet.css'
//------------------------------------------------------------------------------

/*const element = React.createElement('ol',null, 
    tasks.map((task, index) => React.createElement('li', {key: index}, task))
);*/

//------------------------------------------------------------------------------

//doing it the JSX way
/*const element = 
<div>
    <h1>Task List </h1>
    <ol> 
        {tasks.map((task, index) => <li key={index}> {task} </li>)}
    </ol>
</div>
*/
//------------------------------------------------------------------------------

// ReactDom.render(element,document.getElementById('root'));
ReactDom.render(<Main/>,document.getElementById('root'));

//------------------------------------------------------------------------------