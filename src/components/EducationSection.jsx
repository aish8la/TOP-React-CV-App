import deleteIcon from "../assets/icons/trash-can-outline.svg";

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
        <fieldset className="form-list-section">
            <legend>
                Education
            </legend>
            <ul>
                {currentForm.map((entry, ind) => {
                    return (
                        <li key={entry.uid}
                            id={entry.uid}
                            className={ind + 1=== currentForm.length ? "last-item" : ""}
                            
                        >
                            <div className="entry-div" onClick={onClickEntry}>
                                <div className="entry-main-txt">
                                    {entry.level}
                                </div>
                                <div className="entry-sub-txt">
                                    {entry.institution}
                                </div>
                            </div>
                            <button type="button" onClick={deleteItem}><img width="20px" src={deleteIcon} alt="" /></button>
                        </li>
                    )
                })}
            </ul>
            <button className="create-new-btn" type="button" onClick={() => createEntry("Education")}>Create New</button>
        </fieldset>
    )
}