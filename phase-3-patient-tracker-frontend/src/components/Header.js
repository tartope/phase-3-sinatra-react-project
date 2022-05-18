import React from "react"
import "./Header.css"

function Header({ handleSearch }) {

    function handleChange(event) {
        event.preventDefault();
        const searchText = event.target.value;
        handleSearch(searchText);

    }

    return(
        <header>
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img id="headerimg" src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/258/2020/04/29145807/healthcare-symbol.jpg" alt="emrimg"/>
                    </div>
                    <div className="flip-box-back">
                    <img id="headerimg" src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/258/2020/04/29145807/healthcare-symbol.jpg" alt="emrimg"/>
                    </div>
                </div> <h1 id="header-patient-tracker">Patient Tracker</h1>
            </div> 
            
            <input onChange={handleChange} id="search" type="text" placeholder="Search..."></input>
        </header>
    );

    {/* // return(
    //     <header>
    //         <div>
    //         <img id="headerimg" src="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/258/2020/04/29145807/healthcare-symbol.jpg" alt="emrimg"/>
    //             <h1>Patient Tracker</h1>
    //         </div>
    //         <input onChange={handleChange} id="search" type="text" placeholder="Search..."></input>
    //     </header>
    // ); */}
}

export default Header;