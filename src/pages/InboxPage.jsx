import { useContext } from "react"
import { MailContext } from ".."
import { NavLink } from "react-router-dom";
import { Header } from "../component/Header";




import { FaRegStar } from "react-icons/fa"
import { RiSpam2Line } from "react-icons/ri"
import { RiDeleteBin5Line } from "react-icons/ri"
import { MdOutlineMarkAsUnread } from 'react-icons/md'
import { MdMarkunread } from 'react-icons/md'


// import '../App.css';

export const InboxPage = () => {
    const { emailsData, deleteMail, getUnreadEmails, getStarredEmails, getSpamMail, getUnreadEmailsLength, getAllReadMails, StarUnstar } = useContext(MailContext);
    return (
        <>
            <div className="main">
                <div className="nav" >
                    <Header />
                </div>

                <div className="aside" >
                    <h1 className="title" >MSA's mail Box</h1>
                    <fieldset className="fieldset" >
                        <legend><b> Filter</b></legend>
                        <input type="checkbox"
                            onClick={getUnreadEmails}
                        /> show Unread Emails
                        <input type="checkbox" onClick={getStarredEmails} /> show Starred Emails
                    </fieldset>
                    <h2 style={{ margin: "10px" }} > Unread : {getUnreadEmailsLength()} </h2>

                    <ul className="ul_div" >
                        {emailsData?.map((data) => {
                            const { mId, unread, isStarred, subject, content } = data;
                            return (
                                <li key={mId} className="emailList" >

                                    <div className="output_div" >
                                        <div className="list_div" >
                                            <h2> Subject : {subject}</h2>
                                            {/* <img src="starOn" alt="scrrenshot star" /> */}

                                            <p
                                                // style={{ marginLeft: "45px" }}
                                                dangerouslySetInnerHTML={{ __html: content }}
                                            ></p>

                                            <NavLink className="viewDetails" to={`/individual/${mId}`} >View Details</NavLink>
                                        </div>


                                        <div className="btns_div" >
                                            <button className=" star-btn" onClick={() => StarUnstar(data)} > {isStarred ? <FaRegStar style={{ backgroundColor: "#FFEA00", fontWeight: "bold" }} /> : <FaRegStar />} </button>
                                            {/* 
                                            <div className="threeBtns" > */}
                                            <button className="btns delete" onClick={() => deleteMail(data)} ><RiDeleteBin5Line /></button>
                                            <button className="btns readUnread " onClick={() => getAllReadMails(data)}  >
                                                {unread ? <MdMarkunread /> : <MdOutlineMarkAsUnread />}

                                            </button>
                                            <button className="btns spam " onClick={() => getSpamMail(data)}> <RiSpam2Line /> </button>
                                            {/* </div> */}

                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </>
    )
}