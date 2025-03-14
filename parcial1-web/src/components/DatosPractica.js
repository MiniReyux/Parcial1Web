import "./DatosPractica.css";
import "./Dashboard.css";
import { useState, useEffect } from "react";

const styles = {
    footer: {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "20%",
        background: "#007bff",
        color: "white",
        textAlign: "center",
        padding: "15px 0",
        fontSize: "16px",
    }
};

function DatosPractica() {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/")
            .then(response => response.json())
            .then(data => setSessions(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

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
                {/* Cycling Section */}
                <div className="column">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="sub-column">
                            <img src="cycling.jpg" alt="Cycling Session" />
                        </div>
                    ))}
                </div>

                {/* Running Section */}
                <div className="column">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="sub-column">
                            <img src="running.jpg" alt="Running Session" />
                        </div>
                    ))}
                </div>

                {/* Swimming Section */}
                <div className="column">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="sub-column">
                            <img src="swimming.jpg" alt="Swimming Session" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>Camilo Escobar 🏃‍♂️ 1:05 🏊‍♂️ 1:05 🚴‍♂️ 1:05</p>
            </footer>
        </div>
    );
}

export default DatosPractica;