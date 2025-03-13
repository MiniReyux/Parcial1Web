import { useEffectm, useState } from "react";


function Menu () {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
            fetch("https://api.mockaroo.com/api/5c360020?count=1000&key=1891cb80")
                .then(response => response.json())
                .then(data => setSessions(data))
                .catch(error => console.error("Error fetching data:", error));
        }, []);

    return(
        <div>
            <h1>MENU</h1>
        </div>
    );
}

export default Menu;