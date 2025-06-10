export function EducationSection({ data }) {
    return (
        <fieldset>
            <legend>
                Education
            </legend>
            <ul>
                {data.map(entry => {
                    return (
                        <li key={entry.uid}>
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