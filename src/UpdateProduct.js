import Header  from './Header';
import {withRouter} from 'react-router-dom';
import { useEffect, useState } from 'react';

function UpdateProduct(props)
{
    const[data, setData] = useState([]);

    console.warn("props", props.match.params.id);

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {
        let result = await fetch("http://backend/api/product/"+props.match.params.id);
        result = await result.json();
        setData(result);
    }) 

    return (
        <div>
            <Header /> 
            <h1>Update Product</h1>

            <input type="text" defaultValue={data.name} /> <br/> <br/>
            <input type="text" defaultValue={data.description} /> <br/> <br/>
            <input type="text" defaultValue={data.price} /> <br/> <br/>
            <input type="file" defaultValue={data.file_path} /> <br/> <br/>
            <img style={{width:100}} src={"http://backend/"+data.file_path} alt={data.name}/> <br/> <br />

            <button> Update Product </button>
        </div>
    )
}

export default withRouter(UpdateProduct);
 