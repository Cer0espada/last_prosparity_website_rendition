import React from 'react';

const Article  = () => {

    return(
        <article className="article__container">

            <div className="who-we-are__heading--container">
                <h2 className="who-we-are__heading--title">Who We Are</h2>
            </div>

            <div className="who-we-are__text--container">
                <p className="who-we-are__text--paragraph">The Prosp(a)rity Project is a not for profit organization operating with 501(c)(3) status headquartered in Palo Alto, CA with a presence throughout the U.S. Our organization is fiscally sponsored by Players Philanthropy Fund, a 501(c)(3) nonprofit based in Towson, MD.</p>
            </div>
            
            <div className="us-now__heading--container">
                <h2 className="us-now__heading--title">How We Came to Be</h2>
            </div>

            <div className="us-now">
                <p className="us-now__text">Long before we established ourselves as an official organization, the makings for The Prosp(a)rity Project began forming in 2015, 2017 and 2018 when our founding members, Bri, Victoria, Cori, Matt and Ashley, all got their respective starts in the workforce post-college and, in the case of our female founders, were faced firsthand with the difficulties of being Black women navigating the real world.</p>
                <p className="us-now__text">Despite each taking completely separate professional paths, we all encountered our share of setbacks attributed primarily to being saddled by a collective $350,000+ in student loans upon graduation. </p>
                <p className="us-now__text">These challenges entailed:</p>
                <div className="us-now__text list-column-container__main">
                    <p className="us-now__text list-column-container item">Experiencing heightened difficulty in paying off student debt through being overlooked for and rejected from higher paying work opportunities</p>
                    <p className="us-now__text list-column-container item">Being forced to abandon entrepreneurial pursuits for blue and pink collar work simply to stay current on student loan payments and living expenses</p>
                    <p className="us-now__text list-column-container item">Enduring near constant livelihood disruption prompted by having to reside with relatives and/or roommates because of inability to establish financial independence</p>
                </div>
                <p className="us-now__text last">Through weathering these storms, our founding five was able to come together in June of 2020, prompted by the national resurgence of the #BlackLivesMatter movement, along with demands of justice for Breonna Taylor, Ahmaud Arbery and George Floyd, and combined their experiences and expertise to form The Prosp(a)rity Project.</p>
            
            </div>

        </article>
    )

}

export default Article;
