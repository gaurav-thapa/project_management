import { forwardRef } from "react";
const Input = forwardRef(({ label, textarea, ...props }, ref) => {
    return (
        <div className="mb-3">
            {label?<label className="form-label text-uppercase">{label}</label>:''}
            {textarea ?
                <textarea ref={ref} className="form-control" {...props} /> :
                <input ref={ref} className="form-control" {...props} />}
        </div>
    );
});
export default Input;