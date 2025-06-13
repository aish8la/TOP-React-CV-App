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
      endDate: "2022-01-02",
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

export function updateData(propName, newValue) {
  cvData[propName] = newValue
}
