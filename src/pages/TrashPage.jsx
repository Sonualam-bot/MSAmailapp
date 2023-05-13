import { useContext } from "react";
import { MailContext } from "..";
import { NavLink } from "react-router-dom";
import { Header } from "../component/Header";

export const TrashPage = () => {
    const { trashData } = useContext(MailContext);
    return (

        <>
            <div className="main">
                <div className="nav" >
                    <Header />
                </div>

                <div className="trash_the_main" >
                    <h2 className="title" >Trash Mail</h2>
                    {trashData.length > 0 ? trashData.map((data) => {
                        const { mId, subject, content } = data;
                        return (
                            <li key={mId} className="trash_list" >

                                <div className="list_div" >
                                    <h2> Subject : {subject}</h2>
                                    <p
                                        // style={{ marginLeft: "45px" }}
                                        dangerouslySetInnerHTML={{ __html: content }}
                                    ></p>
                                    <NavLink className="viewDetails" to={`/individual/${mId}`} >View Details</NavLink>
                                </div>


                            </li>
                        )
                    }) : <h1 style={{ textAlign: "center" }} > Trash Box Empty </h1>}
                </div>
            </div>
        </>
    )
}