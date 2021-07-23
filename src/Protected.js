import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";


function Protected(props) {
    let Cmp=props.Cmp;
    
    const history = useHistory();
    
    useEffect(() => {
        if (!localStorage.getItem("user-info")) {
          history.push("/register");
        }
      
       // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


return (
    <div>
       <Cmp />
    </div>
  );
}

export default Protected;