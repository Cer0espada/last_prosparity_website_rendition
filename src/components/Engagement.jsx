import React, { useState, useEffect } from 'react';
import request from "superagent";
import MobileEventCards from './Mobile/Engagement/MobileEventCards';
import MailingList from './MailingList';
import MobileCards from './Mobile/Engagement/MobileCards';
import MainHeader from './Mobile/MainHeader';
import EEILogo from '../img/logo/EEI-logo.PNG';
import { analytics } from '../firebaseApp';
//photos
import mainLogo from '../img/logo/logo-1-dark.png';
import water from '../img/partners/scaled/JustWater-logo.png';
import financialgym from '../img/partners/financialgym-logo.png';
import dartmouth from '../img/events/dartmouth.png'

import scholarshipOwl from '../img/events/scholarshipOwl.png';
import lynn from '../img/events/LynnFamilyFoundation.jpg'


const Engagement = () => {

  const [events, setEvents] = useState([]);

  const GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/4pve4edkmfer9r6qg6h5f2p49s%40group.calendar.google.com/events?key=${process.env.REACT_APP_GCAL_KEY}`;


  const getEvents = (callback) => {
    request.get(GOOGLE_CALENDAR_URL).end((err, resp) => {
      if (!err) {
        let events = Object.entries(resp.body.items).map(([k, v]) => ({
          start_time: v.start,
          end_time: v.end,
          title: v.summary,
          id: v.id,
          link: v.location,
        }));
        setEvents(events);
      }
    });
  };

  useEffect(() => {

    const engagementPage = async () => {
      analytics.logEvent('engagementpage_visited');
    }

    engagementPage();
  })



  return (
    <>
      {/* <div className="main-mobile-header work" id="prosperettes">
          <img
            src={mainLogo}
            alt="prosperette logo"
            className="main-mobile-header__mainlogo"
          />
          <div className="main-mobile-header__textcontainer">
            <h1 className="main-mobile-header__textcontainer--maintitle">
              Our Work
            </h1>

            <p className="main-mobile-header__textcontainer--caption">
              Learn about our initiatives, campaigns, partnerships and upcoming
              events.
            </p>
          </div>
        </div> */}

      <MainHeader
        title="Community Engagement"
        text="Learn about our initiatives, campaigns, partnerships and upcoming events."
      />

      <div className="upcoming-events-container">
        <h2 className="upcoming-events-container--heading">Events</h2>

        <div className="mobile-events-container">
          {
            //is there a way to get or attach an image to the calendar events?
          }
          {/* {events.map((event, i) => {
              const date = new Date(
                Date.parse(Object.values(event.start_time))
              );
              const options = {
                day: "numeric",
                month: "long",
                hour: "numeric",
                minute: "numeric",
                timeZoneName: "short",
              };

              return (
                <MobileEventCards
                  key={i}
                  name={event.title}
                  text={event.description}
                  link={event.link}
                  date={date.toLocaleString("en-US", options)}
                />
              );
            })} */}
          <MobileEventCards
            name="Beyond Debt Free: Defeating Disparity for America's Black Women"
            date="December 14th 2020 4:30PM PST"
            imgSrc="https://static.wixstatic.com/media/c4dae7_23cec095980e4f899ac07c0c5c814061~mv2_d_3212_1313_s_2.png/v1/fill/w_2110,h_866,al_c,q_90,usm_0.66_1.00_0.01/Hero-Image_Final_Update.webp"
            link="https://www.lynnfamilyfoundation.org/"
          />
          <MobileEventCards
            name="Scholarship Owl Webinar (Candid Conversations)"
            date="November 24th 2020 4:00PM PST"
            imgSrc={scholarshipOwl}
            link="https://www.youtube.com/watch?v=aYbXZWIbrqs&feature=youtu.be"
          />
          <MobileEventCards
            name="The Wave Tour, Women's Empowerment Conference"
            date="November 12th 2020 2:00PM PST"
            imgSrc="https://changingtidesmovement.com/wp-content/uploads/2020/07/WT_1920x600_v3_r1_063020.png"
            link="https://changingtidesmovement.com/the-wave/"
          />
          <MobileEventCards
            name="Dartmouth College: Magnuson Center for Entrepreneurship ELLC Speaker Series "
            date="September 8th 2020 4:00PM PST"
            imgSrc={dartmouth}
            link="https://news.dartmouth.edu/events/event?event=61374#.X8MaIc1KhPY"
          />
          <MobileEventCards
            name="General Assembly - Creatives for Black Lives"
            date="July 8th 2020 4:00PM PST"
            imgSrc={
              "https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/14222/thumb_Content_Equality_Strike_Fist_Air_Exclaim_Hand_Color_Megaphone_Bullhorn.png"
            }
            link="https://generalassemb.ly/education/creatives-for-black-lives/online"
          />
        </div>
      </div>

      <div className="initiatives">
        <div className="initiatives__content-container">
          <h2 className="initiatives__heading"> Initiatives</h2>
          <div className="initiatives-cards-container">
            <MobileCards
              addedClass="initiatives-cards"
              imgSrc={EEILogo}
              heading="The Economic Empowerment Initiative"
              title="Taking America's Black women beyond debt-free."
              link="/work/initiatives/economic-empowerment-initiative"
            />
          </div>
        </div>
      </div>

      <div className="campaigns-mobile">
        <div className="campaigns-mobile__content-container">
          <h2 className="campaigns-mobile__heading"> Campaigns</h2>
          <div className="campaigns-mobile__cards-container">
            <MobileCards
              addedClass="campaigns-cards"
              heading="#defeatingdisparity"
              addedId="disparity"
              external="yes"
              title="The Pink Square Movement"
              link="https://www.instagram.com/explore/tags/defeatingdisparity/?hl=en"
            />
            <MobileCards
              addedClass="campaigns-cards"
              heading="#JUSTVote Campaign"
              external="no"
              title="Just Water"
              imgSrc={water}
              link="https://www.instagram.com/explore/tags/defeatingdisparity/?hl=en"
            />
          </div>
        </div>
      </div>

      <div className="partnerships-mobile">
        <div className="partnerships-mobile__content-container">
          <h2 className="partnerships-mobile__heading">
            {" "}
            Community Collaboration
          </h2>
          <div className="partnerships-mobile__card-container">
            <MobileCards
              addedClass="partnerships-cards"
              heading="Money Mondays"
              title="Instagram Live Interview, Financial Gym"
              imgSrc={financialgym}
              external="yes"
              link="https://financialgym.com/?keyword=&utm_term=&utm_source=adwords&utm_campaign=Website+Traffic+June+2019&utm_medium=ppc&hsa_mt=b&hsa_grp=80965756312&hsa_net=adwords&hsa_ver=3&hsa_ad=403916147475&hsa_src=g&hsa_cam=2038651606&hsa_kw=&hsa_acc=7883903772&hsa_tgt=aud-832005553565:dsa-835369306452&gclid=Cj0KCQiAnb79BRDgARIsAOVbhRpDY8F735BJvYtzn097Mm_ThBJoaZu_cnIL1YXGHvDExNi2Xnr_rPwaAtS4EALw_wcB"
            />
            {/* <MobileCards
                addedClass="partnerships-cards"
                heading="#JUSTVote Campaign"
                title="Partnered with JUST water"
                imgSrc={water}
                external="yes"
                link="https://www.instagram.com/explore/tags/justvote/?hl=en"
              /> */}
          </div>
        </div>
      </div>

      <div className="interested">
        <div className="interested__content-container">
          <h2 className="interested__heading">
            Interested in collaborating with us?{" "}
          </h2>

          <p className="interested__text">
            We’d love to have your support and show ours for your organization
            as well.{" "}
          </p>

          <p className="interested__contact">
            To partner with us, please contact{" "}
            <span>
              <a href="mailto:info@theprosparityproject.org">
                {" "}
                info@theprosparityproject.org
              </a>
            </span>
            .
          </p>
        </div>
      </div>
      <div className="mobile-mailinglist-work-container">
        <MailingList addedClass={"work"} />
      </div>
    </>
  );
}

export default Engagement;