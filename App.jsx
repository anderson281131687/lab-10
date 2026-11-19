import React from "react";

function TeacherCard(props) {
  return (
    <div className="teacher-card">
      <div className="teacher-avatar">{props.initials}</div>
      <div className="teacher-info">
        <h2>{props.name}</h2>
        <p className="designation">{props.designation}</p>
        <p className="department">Department of Computer Science</p>
        <p className="interest">{props.interest}</p>
      </div>
    </div>
  );
}

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  const teachers = [
    {
      name: "Dr. Mubashar Mushtaq",
      designation: "Associate Professor / Chairperson",
      initials: "MM",
      interest: "Research interests: Multimedia Networks and Content Delivery Networks."
    },
    {
      name: "Dr. Nazim Ashraf",
      designation: "Associate Professor",
      initials: "NA",
      interest: "Research interests: Machine Learning and Computer Vision."
    },
    {
      name: "Dr. Sidra Minhas",
      designation: "Associate Professor",
      initials: "SM",
      interest: "Research interests: IoT, Robotics, Image Processing and Intelligent Systems."
    },
    {
      name: "Dr. Nosheen Sabahat",
      designation: "Associate Professor",
      initials: "NS",
      interest: "Research interests: Software Project Management and Machine Learning."
    },
    {
      name: "Dr. Ayesha Khan",
      designation: "Assistant Professor",
      initials: "AK",
      interest: "Research interests: Data Mining and Computational Intelligence."
    },
    {
      name: "Dr. Saba Khalil Toor",
      designation: "Assistant Professor",
      initials: "ST",
      interest: "Experience in software development, academia and educational technology."
    },
    {
      name: "Dr. Sarwan A. Abbasi",
      designation: "Assistant Professor",
      initials: "SA",
      interest: "Computer Science teaching, research and information technology."
    },
    {
      name: "Dr. Saad Bin Saleem",
      designation: "Assistant Professor",
      initials: "SS",
      interest: "Research interests: Information Security and AI-based cybersecurity."
    },
    {
      name: "Umber Nisar",
      designation: "Assistant Professor",
      initials: "UN",
      interest: "Research interests: Artificial Intelligence, Data Science and Machine Learning."
    },
    {
      name: "Asma Basharat",
      designation: "Senior Lecturer",
      initials: "AB",
      interest: "Computer Science teaching, research and faculty development."
    }
  ];

  return (
    <div className="page">
      <header className="hero">
        <p className="university">FORMAN CHRISTIAN COLLEGE (A CHARTERED UNIVERSITY)</p>
        <h1>Computer Science Faculty</h1>
        <p className="subtitle">Meet the teachers of the Department of Computer Science</p>
      </header>

      <main>
        <section className="greeting">
          <h2>Good {timeOfDay}!</h2>
          <p>Welcome to the FCCU Computer Science Faculty Directory.</p>
        </section>

        <section className="faculty-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR FACULTY</p>
              <h2>Meet Our Teachers</h2>
            </div>
            <span className="teacher-count">10 Faculty Members</span>
          </div>

          <div className="teacher-grid">
            {teachers.map((teacher, index) => (
              <TeacherCard
                key={index}
                name={teacher.name}
                designation={teacher.designation}
                initials={teacher.initials}
                interest={teacher.interest}
              />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>Department of Computer Science | Forman Christian College University</p>
        <p>Faculty information: <a href="https://www.fccollege.edu.pk/department-of-computer-science/" target="_blank" rel="noreferrer">Official FCCU website</a></p>
      </footer>
    </div>
  );
}

export default App;
