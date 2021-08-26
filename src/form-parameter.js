


function FormParameter(props){
    return(

        <div>
            <label style={{fontSize:'2.5vmin'}}>{props.label}</label><br/>
            <input type={props.type} placeholder={props.placeholder} style={{width:"100%",boxSizing:'border-box',border:'2px ridge #A9A9A9',boxShadow: '1px 1px #A9A9A9',height:'2%',padding:'10px',borderRadius:'5px',margin:'2% 2% 2% 0%',maxWidth:'600px'}}/>
        </div>
        // borderStyle:"dotted", borderColor:'#000'
    )
}

export default FormParameter