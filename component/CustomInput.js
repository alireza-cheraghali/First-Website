import PropTypes from 'prop-types'
import {TextField} from "@material-ui/core";
const CustomInput=(props)=>(
    <div>
        <TextField {...props.input}
                   label={props.label}
                   variant={props.variant || 'outlined'}
                   placeholder={props.placeholder}
                   className={props.className}
                   style={{marginBottom:10}}
                   type={props.type}
                   size={props.size}
                   disabled={props.disabled || false}
                   helperText={props.helperText}
                   error={props.error===true}
                   required={props.required}
                   value={props.Value}
                   autoFocus={props.autoFocus || false}
                   autoComplete={props.autoComplete || 'off'}/>
    </div>
)
CustomInput.propTypes={
    input:PropTypes.object,
    label:PropTypes.string,
    variant:PropTypes.string,
    placeholder:PropTypes.string,
    className:PropTypes.string,
    size:PropTypes.string,
    disabled:PropTypes.bool,
    value:PropTypes.string,
    autoFocus:PropTypes.bool,
    autoComplete:PropTypes.bool
}
export default CustomInput;