export type ButtonPropsType = {
    name: string;
    callBack: () => void
    disabled?: boolean;
    }
    
    
    
    
    function Button (props: ButtonPropsType) {
    
        let onClickButtonHandler = () => {
            props.callBack()
        }
    
    
        return (
            <button className="button"
                    onClick={onClickButtonHandler} 
                    disabled={props.disabled}>
                    {/* disabled={props.isIncButtonDisabled} */}
                    {props.name}
                    
                </button>
    
    
        )
    
        
    }
    
    
    export default Button;