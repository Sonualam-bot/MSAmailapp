import { initialState, emailReducer } from "../reducer/emailReducer";
// import { emailReducer } from "../reducer/emailReducer";


import { createContext, useReducer } from "react";
export const MailContext = createContext();





export const MailProvider = ({ children }) => {

    const [state, dispatch] = useReducer(emailReducer, initialState);

    const deleteMail = (email) => {
        const getUpdatedEmail = state.theEmails.filter((t) => t.mId !== email.mId)
        console.log("updatedEmails", state.theEmails.filter((t) => t.mId !== email.mId))


        const getDeletedMail = state.theEmails.filter((t) => t.mId === email.mId)
        console.log("deletedEmail", state.theEmails.filter((t) => t.mId === email.mId))


        dispatch({
            type: "DELETED_MAIL",
            payload: {
                trash: getDeletedMail
            }
        })
        dispatch({
            type: "UPDATE_EMAIL",
            payload: {
                theEmails: getUpdatedEmail
            }
        })

    }

    // id !== email.id

    const getUnreadEmails = (e) => {
        console.log("this is unread one", state.theEmails.filter((mail) => mail.unread === true))

        console.log(e.target.checked)
        const getUnreadEmails = state.theEmails.filter((mail) => mail.unread === true)
        // console.log(getUnreadEmails.length)



        const getAllEmails = state.theEmails.map((item) => item)
        console.log("mapped email", initialState.theEmails)

        if (e.target.checked) {
            dispatch({
                type: "UNREAD_EMAIL",
                payload: {
                    unread: getUnreadEmails

                }
            })
        } else {
            dispatch({
                type: "SHOW_ALL_EMAIL",
                payload: {
                    theEmails: getAllEmails
                }
            })
        }




    }

    const getUnreadEmailsLength = () => {
        const getUnreadEmailsLength = state.theEmails.filter((mail) => mail.unread === true)
        console.log("from here", getUnreadEmailsLength.length)
        return getUnreadEmailsLength.length

    }
    console.log(getUnreadEmailsLength())


    const getStarredEmails = (e) => {
        const getStarredEmailsNow = state.theEmails.filter((mails) => mails.isStarred === true);

        const getAllEmails = state.theEmails.map((item) => item)

        if (e.target.checked) {
            dispatch({
                type: "STARRED_EMAIL",
                payload: {
                    isStarred: getStarredEmailsNow
                }
            })
        } else {
            dispatch({
                type: "SHOW_ALL_EMAIL",
                payload: {
                    theEmails: getAllEmails
                }
            })
        }
    }


    const getSpamMail = (email) => {
        const spamMail = state.theEmails.filter((mail) => mail.mId === email.mId)
        console.log("spamm mail", state.theEmails.filter((mail) => mail.mId === email.mId))

        const getUpdatedEmail = state.theEmails.filter((t) => t.mId !== email.mId)
        console.log("updatedEmails", state.theEmails.filter((t) => t.mId !== email.mId))

        dispatch({
            type: "SPAM_EMAIL",
            payload: {
                spam: spamMail
            }
        })

        dispatch({
            type: "UPDATE_EMAIL",
            payload: {
                theEmails: getUpdatedEmail
            }
        })
    }


    const getAllReadMails = (item) => {
        const getReadMails = state.theEmails.map((value) => value.mId === item.mId ? { ...value, unread: !value.unread } : value)
        //    const getReadMails =  state.theEmails.map((value) => value.unread !== false ? { ...value, unread: false } : { ...value, unread: true })

        console.log("Read mail data here", state.theEmails.map((value) => value.unread !== false ? { ...value, unread: false } : { ...value, unread: true }))

        dispatch({
            type: "MARK_AS_READ",
            payload: {
                read: getReadMails
            }
        })
    }

    const StarUnstar = (item) => {
        const tgStarUnstar = state.theEmails.map((mail) => mail.mId === item.mId ? { ...mail, isStarred: !mail.isStarred } : mail)
        dispatch({
            type: "STAR_UNSTAR",
            payload: {
                starUnstar: tgStarUnstar
            }
        })
    }



    const value = {
        deleteMail,
        trashData: state.trash,
        emailsData: state.theEmails,
        getUnreadEmails,
        getStarredEmails,
        getSpamMail,
        spamData: state.spam,
        getUnreadEmailsLength,
        getAllReadMails,
        StarUnstar,
        tamperedData: state.tamperedData

    }


    return (
        <MailContext.Provider value={value}  >
            {children}
        </MailContext.Provider>
    )
}