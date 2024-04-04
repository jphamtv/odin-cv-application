import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

export default function CV() {
  return (
    <div className="cv">
      <h1>CV Builder</h1>
      <PersonalInfo />
      <Experience />
      <Education />
    </div>
  );
}