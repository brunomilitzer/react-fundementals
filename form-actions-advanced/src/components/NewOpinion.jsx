import {use, useActionState} from 'react';
import {OpinionsContext} from "../store/opinions-context.jsx";
import Submit from "./Submit.jsx";

export function NewOpinion() {
    const {addOpinion} = use(OpinionsContext);

    async function shareOpinionAction(prevFormState, formData) {
        const name = formData.get('userName');
        const title = formData.get('title');
        const body = formData.get('body');

        let errors = [];

        if (!name.trim()) {
            errors.push('Please provide your name');
        }

        if (title.trim().length < 5) {
            errors.push('Title must be at least 5 characters long');
        }

        if (body.trim().length < 10 || body.trim().length > 300) {
            errors.push('Opinions must be between 10 and 300 characters long');
        }

        if (errors.length > 0) {
            return {
                errors, enteredValues: {
                    name, title, body
                }
            };
        }

        await addOpinion({title, body, userName: name});

        return {errors: null};
    }

    const [formState, formAction] = useActionState(shareOpinionAction, {errors: null});

    return (
        <div id="new-opinion">
            <h2>Share your opinion!</h2>
            <form action={formAction}>
                <div className="control-row">
                    <p className="control">
                        <label htmlFor="userName">Your Name</label>
                        <input type="text" id="userName" name="userName"/>
                    </p>

                    <p className="control">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title"/>
                    </p>
                </div>
                <p className="control">
                    <label htmlFor="body">Your Opinion</label>
                    <textarea id="body" name="body" rows={5}></textarea>
                </p>

                {
                    formState.errors && <ul className="errors">
                        {formState.errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                }

                <Submit />
            </form>
        </div>
    );
}
