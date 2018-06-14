import React from 'react';
/*class Header extends Component{
    render()
    {
        return( <h1> HEADER </h1>);
    }
}*/
import 'bootstrap/dist/css/bootstrap.min.css';
function Header(props){
    return (
    <div className = "text-center"> 
        <h1> -- {props.text}--</h1>
    </div>
    )
}
export default Header;
