const TextForm = (props) => {
    return(
        <div className={`form ${(props.effect && ((props.valid && "invalid") || "valid"))}`}>
            <div className="img">
                <img src={props.icon} alt=""/>
            </div>
            <div className="input-wrapper">
                <input type={(props.password && "password") || "text"} placeholder=" " name="" id=""/>
                <div className="label">
                    {props.label}
                </div>
            </div>
            <div className="validation">
                {
                    props.effect && ((
                    props.valid && 
                    <img src="https://icons-for-free.com/iconfiles/png/512/correct+mark+success+tick+valid+yes+icon-1320167819078544687.png" alt="" srcset=""/>)
                    ||
                    <img src="data:image/png;base64,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" alt="" srcset=""/>
                    )
                }
            </div>
        </div>
    )
}

export default TextForm;