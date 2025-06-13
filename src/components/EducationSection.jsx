export function EducationSection({ cvData, onEducationEntryClick }) {

    const currentForm = cvData?.education;

    function onClickEntry(e) {
        const id = e.target.closest("li").id;
        onEducationEntryClick("Education",id)
    }

    return (
        <fieldset>
            <legend>
                Education
            </legend>
            <ul>
                {currentForm.map(entry => {
                    return (
                        <li key={entry.uid}
                            id={entry.uid}
                            onClick={onClickEntry}
                        >
                            <div>
                                {entry.level}
                            </div>
                            <div>
                                {entry.institution}
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button>Create New</button>
        </fieldset>
    )
}