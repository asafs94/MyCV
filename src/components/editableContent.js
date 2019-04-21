import React from 'react'

export default class EditableContent extends Component{
  
    const update = (data)=>{
        props.content = data
    }


if(props.editable) return <input onChange={update} value={props.content} />;
else return props.content;
  
}
