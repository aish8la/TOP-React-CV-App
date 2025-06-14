export function EducationSection({ cvData, onEducationEntryClick, createEntry, deleteEntry }) {

    const currentForm = cvData?.education;

    function onClickEntry(e) {
        const id = e.target.closest("li").id;
        onEducationEntryClick("Education",id)
    }

    function deleteItem(e) {
        const id = e.target.closest("li").id;
        deleteEntry("education", id);
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
                        >
                            <div onClick={onClickEntry}>
                                <div>
                                    {entry.level}
                                </div>
                                <div>
                                    {entry.institution}
                                </div>
                            </div>
                            <button type="button" onClick={deleteItem}>Delete</button>
                        </li>
                    )
                })}
            </ul>
            <button type="button" onClick={() => createEntry("Education")}>Create New</button>
        </fieldset>
    )
}