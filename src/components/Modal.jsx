import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

//firebase
import { analytics } from '../firebaseApp';

const Modal = (props) => {
  const history = useHistory();

  const individualDonationButtonClick = async () => analytics.logEvent('donationspage_individualbuttonclicked');

  const corporationDonationButtonClick = async () => analytics.logEvent('donationpage_corporationbuttonclicked');

  useEffect(() => {
    const donationsPage = async () => {
      analytics.logEvent('donationspage_visited')
    }

    donationsPage();
  })

  return (
    <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="donations">

          <h2 className="donations__heading">Donate to make a lasting change!</h2>

          <div className="donations__clarify-statement--textContainer">
            <p className="donations__clarify-statement--text">Thank you so much for your interest in funding The Prosp(a)rity Project! Depending on whether you wish to donate personally or on behalf of your organization, please select the most appropriate choice below:</p>
          </div>

          <div className="donations__buttonContainer">


            <a onClick={() => corporationDonationButtonClick()} href="https://give.cornerstone.cc/prosparityproject+corporate" className="donations__button donations__button--1">Donate as a Corporation</a>
            <a onClick={() => individualDonationButtonClick()} href="https://give.cornerstone.cc/prosparityproject" className="donations__button donations__button--2">Donate as an Individual</a>
          </div>
          <p className="donations__clarify-statement--disclaimer">If you or your organization wish to make a contribution greater than $35,000, please contact bbf@theprosparityproject.org.</p>
          <p className="donations__text">The Prosp(a)rity Project is a nonprofit corporation operating through a fiscal sponsorship with Players Philanthropy Fund, a Maryland charitable trust recognized by IRS as a tax-exempt public charity under Section 501(c)(3) of the Internal Revenue Code (Federal Tax ID: 27-6601178). Contributions to The Prosp(a)rity Project are tax-deductible to the fullest extent of the law.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;


// const mailChimpRequest = async (data) => {
//   const regionName = 'us10';
//   const apiKey = process.env.REACT_APP_MAILCHIMP_API_KEY;
//   const listId = process.env.REACT_APP_LIST_ID;
//   const url = `https://${regionName}.api.mailchimp.com/3.0/lists/${listId}/members/`;

//   axios
//     .post(
//       url, {
//       // Tell Mailchimp to subscribe this email
//       status: 'subscribed',
//       // Note that Mailchimp takes an email_address field, not just email
//       email_address: data.email
//     }, {
//       headers: {
//         Authorization: `apikey ${apiKey}`,
//       },
//     }
//     )
//     .catch((err) => {

//       console.log(err)
//     })
// }
