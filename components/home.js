import React from 'react';
import ReactDOMServer from 'react-dom/server';
import render from '../lib/render';
class home extends React.Component{
	render() {
    return (

<div> <form action="/report">
  Enter City Name:
  <input type="text" name="city" required>
  </input> 
  <input type="submit" value="Submit">
  </input>
</form>
 </div>
    	);

}
}

export default function (props) {
  return render(home , props);
}