export function WorkExperienceSection({ cvData, onWorkClick, createEntry }) {

    const currentForm = cvData?.workExperience;

    function onClickEntry(e) {
        const id = e.target.closest("li").id;
        onWorkClick("Work",id)
    }

    return (
        <fieldset>
            <legend>
                Work Experience
            </legend>
            <ul>
                {currentForm.map(entry => {
                    return (
                        <li key={entry.uid}
                            id={entry.uid}
                            onClick={onClickEntry}
                        >
                            <div>
                                {entry.position}
                            </div>
                            <div>
                                {entry.company}
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button type="button" onClick={() => createEntry("Work")}>Create New</button>
        </fieldset>
    )
}