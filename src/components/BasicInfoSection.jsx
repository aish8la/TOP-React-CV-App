import '../styles/BasicInfoSection.css'

export function BasicInfoSection({ changeHandler, fieldData, saveFields }) {
    return (
        <fieldset className='form-basic-section'>
            <legend>
                Basic Information
            </legend>
            <label htmlFor="fullName">
                <span>Full Name</span>
                <input type="text" id="fullName" name="fullName" value={fieldData?.fullName || ""} onChange={changeHandler} />
            </label>
            <label htmlFor="email">
                <span>Email</span>
                <input type="email" id="email" name="email" value={fieldData?.email || ""} onChange={changeHandler} />
            </label>
            <label htmlFor="phone">
                <span>Phone</span>
                <input type="tel" id="phone" name="phone" value={fieldData?.phone || ""} onChange={changeHandler} />
            </label>
            <div className='button-ctn'>
                <button type="button" onClick={() => saveFields("basicInfo")}>Save</button>
            </div>
        </fieldset>
    )
}