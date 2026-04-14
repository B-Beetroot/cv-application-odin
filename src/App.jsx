import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EditableFieldList from "./components/EditableFieldList";

function App() {
  const [personalInfo, setPersonalInfo] = useState([
    { value: "Your Name", placeholder: "Your Name" },
    { value: "E-Mail", placeholder: "E-Mail" },
    { value: "Phone Number", placeholder: "Phone Number" },
  ]);

  const [education, setEducation] = useState([
    { value: "Education History", placeholder: "Education History" },
  ]);

  const [experience, setExperience] = useState([
    { value: "Job Title", placeholder: "Job Title" },
  ]);

  return (
    <div className="app-wrapper">
      <Header />

      <div className="container">
        <EditableFieldList
          title="Personal Information"
          items={personalInfo}
          setItems={setPersonalInfo}
          defaultPlaceholder="Extra Info"
        />

        <EditableFieldList
          title="Education"
          items={education}
          setItems={setEducation}
          defaultPlaceholder="Education History"
        />

        <EditableFieldList
          title="Professional Experience"
          items={experience}
          setItems={setExperience}
          defaultPlaceholder="Job Title"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
