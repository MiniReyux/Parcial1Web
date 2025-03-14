import { useState, useEffect } from "react";
import "./Dashboard.css";

function DatosPractica() {
    const [sessions, setSessions] = useState([]);
    const [expandedCard, setExpandedCard] = useState(null); // Track which card is expanded

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/sessions.json?key=YOUR_API_KEY")
            .then(response => response.json())
            .then(data => setSessions(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const toggleExpand = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <div className="dashboard-container">
            {/* Titles */}
            <div className="titles">
                <h2>Cycling</h2>
                <h2>Running</h2>
                <h2>Swimming</h2>
            </div>

            {/* Grid Section */}
            <div className="grid-container">
                {["Cycling", "Running", "Swimming"].map((type) => (
                    <div key={type} className="column">
                        {sessions.filter(s => s.type === type).map((session, index) => (
                            <div 
                                key={index} 
                                className={`card ${expandedCard === index ? "expanded" : ""}`}
                                onClick={() => toggleExpand(index)}
                            >
                                <h4>{session.title}</h4>
                                <p>{session.description}</p>
                                <p>{session.time}</p>

                                {/* Extra details that show when expanded */}
                                {expandedCard === index && (
                                    <div className="extra-details">
                                        <p>Instructor: {session.instructor}</p>
                                        <p>Location: {session.location}</p>
                                        <p>Participants: {session.participants}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DatosPractica;
