import React from 'react';
import { checkPropTypes } from 'prop-types';

const Input = ({ type, name, label, value, error, onChange}) => {
    return(
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
            value={value}
            onChange={onChange}
            name={name}
           // ref={this.username} 
            id={name} 
            type={type} 
            className="form-control"/>
            {error && <div className="alert alert-danger">{error}</div>} 
    </div>
    );
};

// const Input = ({name, label, error, ...rest}) => {  // example using rest - avoid passing all params 
//     return(
//         <div className="form-group">
//         <label htmlFor={name}>{label}</label>
//         <input 
//             {...rest}
//             name={name} 
//             id={name} 
//             className="form-control"/>
//             {error && <div className="alert alert-danger">{error}</div>} 
//     </div>
//     );
// };


export default Input;

