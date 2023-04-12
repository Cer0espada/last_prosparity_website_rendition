import React from 'react'; 

const Join = () => {

    return(
        <div className="join">
            <div className="join-mainheading">
                <h2 className="join-mainheading__title">Join the Prosp(a)riteam!</h2>
            </div>

            <p className="join__main-text">The Prosp(a)rity Project is a rapidly expanding organization with a need for additional talent to help us more adequately serve our community. We are looking for people who: </p>
            
            <div className="values">
                <div className="values__container first">
                    <i class="fas fa-balance-scale icon"></i>
                    <p className="values__text">Strongly value Black women’s advancement</p>
                </div>
                <div className="values__container second">
                    <i class="fas fa-globe icon"></i>
                    <p className="values__text">Thrive in flexible, fully remote work settings</p>
                </div>
                <div className="values__container third">
                    <i class="fas fa-heart icon"></i>
                    <p className="values__text">Are in search of a meaningful, productive use of quarantine</p>
                </div>
            </div>

            <p className="join__main-text">We’re in need of support with: </p>

            <div className="positions">
                <div className="positions__container">
                    <i class="fas fa-chess-queen icon"></i>
                    <p className="positions__text">Nonprofit strategy</p>
                </div>
                <div className="positions__container">
                    <i class="fas fa-handshake icon"></i>
                    <p className="positions__text">Donor relations management</p>
                </div>
                <div className="positions__container">
                    <i class="fas fa-envelope icon"></i>
                    <p className="positions__text">Email marketing</p>
                </div>
                <div className="positions__container">
                    <i class="fas fa-laptop icon"></i>
                    <p className="positions__text">Web development / software engineering</p>
                </div>
            
            </div>

            <p className="join__main-text">But we are open to bringing on new teammates in all capacities! To be considered, please email your resume to info@theprosparityproject.org.</p>

            <div className="join-mainheading">
                <h2 className="join-mainheading__title">Partnerships & Sponsorships</h2>
            </div>

            <div className="partnerships">
                <p className="partnerships__text">Interested in collaborating with us? We’d love to have your support and show ours for your organization as well.</p>
                <p className="partnerships__text">For inquiries, please contact info@theprosparityproject.org.</p>
            </div>

        </div>
    )
}

export default Join;