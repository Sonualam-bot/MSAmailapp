import { useContext } from "react";
import { MailContext } from "..";
import { NavLink } from "react-router-dom";
import { Header } from "../component/Header";

export const SpamPage = () => {
    const { spamData } = useContext(MailContext);

    return (
        <>

            <div className="main">
                <div className="nav" >
                    <Header />
                </div>

                <div className="spam_the_main"  >
                    <h2 className="title">Spam Mail</h2>
                    <ul className="spamList" >
                        {spamData.map((data) => {
                            const { mId, subject, content } = data;
                            return (
                                <li key={mId} className="emailList" >

                                    <div className="list_div" >
                                        <h2> Subject : {subject}</h2>
                                        {/* <img src="starOn" alt="scrrenshot star" /> */}

                                        <p
                                            // style={{ marginLeft: "45px" }}
                                            dangerouslySetInnerHTML={{ __html: content }}
                                        ></p>
                                        <NavLink className="viewDetails" to={`/individual/${mId}`} >View Details</NavLink>
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