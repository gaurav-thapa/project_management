const Button = ({text,...props}) => {
    return <>
        <button className="btn btn-primary" {...props}>{text}</button>
</>
};
export default Button;