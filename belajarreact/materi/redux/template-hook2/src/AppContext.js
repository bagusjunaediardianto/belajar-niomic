import React from 'react'

const AppContext = (props)=>{
    const wrapper = React.createRef();
    return(
        <div ref={wrapper}>
            {props.children}
        </div>
    )
}

export default AppContext