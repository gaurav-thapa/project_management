import { useRef } from "react";
import Input from "./UI/Input";
import Modal from "./Modal/Modal";

const CreateProject = ({ onAdd, onCancel }) => {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const modal = useRef();

    const onFormSubmitHandler = (event) => {
        event.preventDefault();
        const enteredTitle = title.current.value.trim();
        const enteredDescription = description.current.value.trim();
        const enteredDueDate = dueDate.current.value.trim();

        if (enteredTitle === '' || enteredDescription === '' || enteredDueDate === '') {
            modal.current.open();
            return;
        }

        const project = {
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        };
        // console.log(project);
        onAdd(project);
    };
    const onFormResetHandler = (event) => {
        event.preventDefault();
        onCancel();
    };


    return <>
        <Modal ref={modal} buttonCaption={'Okay'}>
            <h2>Invalid Input</h2>
            <p>Oops... Looks like  you forgot to enter a value.</p>
            <p>Please make sure you provide a valid value for each input field.</p>
        </Modal>
        <form onSubmit={onFormSubmitHandler} onReset={onFormResetHandler} className="card container col-12 col-md-6 py-5 my-auto">
            <div className="container-fluid text-end">
                <button type="reset" className="btn btn-outline-danger m-2">Cancel</button>
                <button type="submit" className="btn btn-primary m-2">Save</button>
            </div>
            <Input ref={title} label='title' type='text' />
            <Input ref={description} textarea label='description' style={{ resize: 'none' }} />
            <Input ref={dueDate} label='due date' type='date' />
        </form >
    </>

};
export default CreateProject;