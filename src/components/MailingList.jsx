import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//firebase
import { functions, analytics } from '../firebaseApp';

const MobileMailingList = ({ addedClass }) => {

    const [note, setNote] = useState('');
    const [submit, setSubmit] = useState(false);
    const [msgLoading, setMsgLoading] = useState(false);
    const [error, setError] = useState(false)

    const handleChange = (event) => {
        setNote(event.target.value)
        // console.log('handleChange', note)
    }

    const handleSubmit = (event) => {
        setSubmit(true);
        setMsgLoading(true);
        event.preventDefault()
        // console.log('handleSubmit', note)
    }

    const mailChimpRequest = async (data) => {
        setMsgLoading(true)
        setSubmit(true)
        // console.log(msgLoading, submit)
        var subscribe = functions.httpsCallable('subscribe_email');
        subscribe({ email: data }).then((result) => {
            setMsgLoading(false)
            // console.log("success: ", result.data)
            analytics.logEvent("emailButtonPressed", {
                success: "true",
                fail: "false",
                mobile: "true"
            })
            return ("success")

        }).catch((err) => {
            // console.log("error: ", err)
            setMsgLoading(false)
            setError(err)
            analytics.logEvent("emailButtonPressed", {
                success: "false",
                fail: "true",
                mobile: "true"
            })
            return err
        })
    }
    useEffect(() => {

        if (submit) mailChimpRequest(note);

    }, [submit])

    let location = useLocation();

    const getPath = () => {
        return location.pathname.split("/").slice(-1)[0]
    }

    return (
        <div className={`mailinglist-mobile ${addedClass}`}>
            <h2 className="mailinglist-mobile__heading">Join the Prosp<span>(a)</span>ritribe</h2>
            <p className="mailinglist-mobile__text">Be the first to hear about new events, campaigns, volunteer opportunities, and more by joining our mailing list.</p>


            {
                //default state
                !submit &&

                <form action="" className="mailinglist-mobile__form" onSubmit={(event) => handleSubmit(event)}>
                    <input onChange={handleChange} className="mailinglist-mobile__input" type="text" placeholder="your email" />
                    <button className="mailinglist-mobile__button" onClick={async () => analytics.logEvent("MailingListButton__clicked",
                        {
                            path: `${getPath()}`
                        })}>Join</button>
                </form>

            }

            {
                //Success State
                (submit && !error && !msgLoading) ? <h3 className="mailinglist-mobile__form--heading active"> Well be in touch!</h3> :
                    //Loading State
                    (submit && msgLoading) ? <h3 className="mailinglst__form--heading active">Loading...</h3> :
                        ""
            }

            {
                //Error State
                (error) && <h3 className="mailinglist__form--heading error">It Looks like something went wrong</h3>
            }

        </div>
    )
}

export default MobileMailingList; 