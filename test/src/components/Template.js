import React from 'react'

export default class extends React.Component{
    render(){
        const info = this.props.data
        return(
            <div>
                <div><strong>image: </strong>{info.image}</div>
                <div><strong>Title: </strong>{info.title}</div>
            </div>
        )
    }
}