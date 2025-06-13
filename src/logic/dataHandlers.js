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
    startDate: "2021-05-01",
    endDate: "2022-06-01",
    grade: "3.8 GPA",
    description: "Focused on software development, data structures, and system design. Completed a capstone project on full-stack web development."
  },
  {
    uid: "edu-002",
    institution: "Example Technical Institute",
    level: "Diploma in Web Development",
    location: "Boston, MA",
    startDate: "2016-01-01",
    endDate: "2017-12-01",
    grade: "Distinction",
    description: "Gained hands-on experience with HTML, CSS, JavaScript, and backend technologies through practical projects."
  }
];

export const cvData = {
  basicInfo: {
    fullName: "Aish Waheed",
    email: "aish@example.com",
    phone: "+960 123-4567",
  },

  education: [
    {
      uid: "edu-1",
      level: "Advanced Diploma in IT",
      institution: "Maldives National University",
      location: "Malé, Maldives",
      startDate: "2023-01-01",
      endDate: "2025-06-01",
      description: "Focused on software development, networking, and systems analysis."
    },
    {
      uid: "edu-2",
      level: "Certificate III in Information Technology",
      institution: "Technical and Vocational Education Centre",
      location: "Malé, Maldives",
      startDate: "2021-06-01",
      endDate: "2022-12-01",
      description: "Completed foundational courses in web development and programming."
    }
  ],

  workExperience: [
    {
      uid: "exp-1",
      position: "Recovery Assistant",
      company: "Bank of Maldives",
      location: "Malé, Maldives",
      startDate: "2020-01-01",
      endDate: new Date(),
      description: "Support debt recovery processes and customer follow-up; improved Excel workflows for data tracking."
    },
    {
      uid: "exp-2",
      position: "Intern, IT Support",
      company: "Ministry of Technology",
      location: "Malé, Maldives",
      startDate: "2019-06-01",
      endDate: "2019-12-01",
      description: "Assisted with hardware maintenance and helped set up basic networking systems."
    }
  ]
};
