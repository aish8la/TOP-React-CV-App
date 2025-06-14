export function WorkExperienceSection({ cvData, onWorkClick, createEntry, deleteEntry }) {

    const currentForm = cvData?.workExperience;

    function onClickEntry(e) {
        const id = e.target.closest("li").id;
        onWorkClick("Work",id)
    }

    function deleteItem(e) {
        const id = e.target.closest("li").id;
        deleteEntry("workExperience", id);
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
                        >
                            <div onClick={onClickEntry}>
                                <div>
                                    {entry.position}
                                </div>
                                <div>
                                    {entry.company}
                                </div>
                            </div>
                            <button type="button" onClick={deleteItem}>Delete</button>
                        </li>
                    )
                })}
            </ul>
            <button type="button" onClick={() => createEntry("Work")}>Create New</button>
        </fieldset>
    )
}