export function addEducation(dataObj) {
  const object = {
    uid: crypto.randomUUID(),
    institution: dataObj.institution,
    level: dataObj.level,
    location: dataObj.location,
    startDate: dataObj.startDate,
    endDate: dataObj.endDate,
    grade: dataObj.grade,
    description: dataObj.description
  }

  education.push(object);
}


export const education = [
  {
    uid: "edu-001",
    institution: "University of Example",
    level: "Bachelor of Science in Computer Science",
    location: "New York, NY",
    startDate: "2018-09",
    endDate: "2022-06",
    grade: "3.8 GPA",
    description: "Focused on software development, data structures, and system design. Completed a capstone project on full-stack web development."
  },
  {
    uid: "edu-001",
    institution: "Example Technical Institute",
    level: "Diploma in Web Development",
    location: "Boston, MA",
    startDate: "2016-01",
    endDate: "2017-12",
    grade: "Distinction",
    description: "Gained hands-on experience with HTML, CSS, JavaScript, and backend technologies through practical projects."
  }
];
