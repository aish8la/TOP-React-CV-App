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
        <fieldset className="form-list-section">
            <legend>
                Work Experience
            </legend>
            <ul>
                {currentForm.map((entry, ind) => {
                    return (
                        <li key={entry.uid}
                            id={entry.uid}
                            className={ind + 1=== currentForm.length ? "last-item" : ""}
                            
                        >
                            <div className="entry-div" onClick={onClickEntry}>
                                <div>
                                    {entry.position}
                                </div>
                                <div>
                                    {entry.company}
                                </div>
                            </div>
                            <button type="button" onClick={deleteItem}><img width="20px" src="src/assets/icons/trash-can-outline.svg" alt="" /></button>
                        </li>
                    )
                })}
            </ul>
            <button className="create-new-btn"  type="button" onClick={() => createEntry("Work")}>Create New</button>
        </fieldset>
    )
}