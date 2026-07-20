import { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
    const [selectedSection, setSelectedSection] = useState("");

    const toggleSection = (section) => {
        setSelectedSection((current) => (current === section ? "" : section));
    };

    return (
        <div>
            <h1>Welcome to Blogger App</h1>

            <div>
                <button onClick={() => toggleSection("book")}>Book</button>
                <button onClick={() => toggleSection("blog")}>Blog</button>
                <button onClick={() => toggleSection("course")}>Course</button>
            </div>

            <hr />

            <div>
                {selectedSection === "book" && <BookDetails />}
                {selectedSection === "blog" && <BlogDetails />}
                {selectedSection === "course" && <CourseDetails />}
            </div>
        </div>
    );
}

export default App;