import { mails } from "../api/mails";

export const initialState = { theEmails: mails, trash: [], unread: true, isStarred: true, spam: [], tamperedData: mails };

export const emailReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "DELETED_MAIL":
            console.log("DELETED_EMAIL", payload);
            console.log("payload trash", typeof payload.trash)
            return { ...state, trash: [...state.trash, ...payload.trash] }
        case "UPDATE_EMAIL":
            console.log("UPDATE_EMAIL", payload);
            console.log("payload email", payload.theEmails)
            return { ...state, theEmails: payload.theEmails }
        case "UNREAD_EMAIL":
            console.log("UNREAD_EMAIL", payload);
            return { ...state, theEmails: payload.unread }

        case "STARRED_EMAIL":
            return { ...state, theEmails: payload.isStarred }
        case "SPAM_EMAIL":
            console.log("SPAM_MAIL", payload)
            return { ...state, spam: [...state.spam, ...payload.spam] }
        case "SHOW_ALL_EMAIL":
            console.log("SHOW_ALL_EMAIL", typeof payload)
            return { ...state, theEmails: initialState.theEmails }
        case "MARK_AS_READ":
            console.log("MARK_AS_READ", payload)
            return { ...state, theEmails: payload.read }
        // case "MARK_AS_READ":
        //     console.log("MARK_AS_READ", payload)
        //     return { ...state, theEmails: [...state.theEmails, ...payload.read] }
        case "STAR_UNSTAR":
            console.log("STAR_UNSTAR", payload)
            return { ...state, theEmails: payload.starUnstar }

        default:
            throw new Error(`Unknown action type: ${action.type} `);
    }
}
