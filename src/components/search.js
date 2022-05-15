import React from 'react';

const Search = ({props}) => {

    const handleChange = (e) => {
        if(e.key==="Enter" && e.target.value!=""){
            props.search()
        }
    }

    return(
        <div style={{marginBottom:'20px'}} className="col-9 col-md-6 mx-auto">
            <input 
                id="custom"
                className="form-control form-control-lg" 
                type="text" 
                placeholder="Cat pictures UwU" 
                value={props.term}
                onChange={e => props.setTerm(e.target.value)}
                onKeyPress={handleChange}
                />
        </div>
    )
}

export default Search