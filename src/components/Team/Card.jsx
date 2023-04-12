import React from 'react';

const Card = ({ imgSrc, name, position, quote, text }) => {

    return (
        <div className="card-container">
            <div className="card__subcontainer">
                <div className="card__front">
                    <div className="card__front--cover">

                    </div>
                    <div className="card__user">
                        <img src={imgSrc} alt="" className="card__user--img" />
                    </div>
                    <div className="card__content">
                        <div className="card__content--main-card">
                            <h3 className="card__content--main-card__name">{name}</h3>
                            <p className="card__content--main-card__profession">{position}</p>
                            <p className="card__content--main-card__quote">&quot;{quote}&quot;</p>
                        </div>
                    </div>
                </div>
                <div className="card__back">
                    <div className="card__back--content-container">
                        <h2 className="card__back--content-container__heading">Bio</h2>
                        <p className="card__back--content-container__text">{text}</p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Card;
{/* 
//                .col-md-4.col-sm-6.extra-padding#card-right-padding
                    // .card-container
                    //     .card
                    //         .front
                    //             .cover
                    //                 img(style=`background-image:url(img/cover/${team.img.cover}); background-color:${team.img.color};`)
                    //             .user
                    //                 img.img-circle(src=`img/headshot/${team.img.headshot}`)
                    //             .content
                    //                 .main-card
                    //                     h3.name #{team.front.name}
                    //                     p.profession #{team.front.title}
                    //                     p.text-center#front
                    //                         | &quot;#{team.front.quote}&quot;
                    //             .footer
                    //                 i.fa.fa-mail-forward
                    //                 |  flip to see more */}


                    // .back
                    //             .content
                    //                 .main-card
                    //                     h4.text-center Bio
                    //                     p.text-center#justified #{team.back.summary}
                    //             .footer
                    //                 .social-links.text-center
                    //                     if team.socialmedia.instagram
                    //                         a(href=`${team.socialmedia.instagram}`)
                    //                             i.fab.fa-instagram(aria-hidden=true)
                    //                     if team.socialmedia.linkedin
                    //                         a.google(href=`${team.socialmedia.linkedin}`)
                    //                             i.fab.fa-linkedin(aria-hidden=true)
                    //                     if team.socialmedia.twitter
                    //                         a(href=`${team.socialmedia.twitter}`)
                    //                             i.fab.fa-twitter(aria-hidden=true)