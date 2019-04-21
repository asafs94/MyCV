import React from 'react'

export default function EditableContent(props) {
  
    const name= props.name;
    
  
    if(props.editable)
    return <input name={name} value={props.value} onChange={evt => props.changeHandler(evt.target.name, evt.target.value)}/>;
    else return props.content;
}
