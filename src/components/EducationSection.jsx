export function EducationSection({ cvData, onEducationEntryClick, createEntry }) {

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
            <button type="button" onClick={() => createEntry("Education")}>Create New</button>
        </fieldset>
    )
}