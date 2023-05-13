import { useContext } from "react";
import { useParams } from "react-router";
import { MailContext } from "..";
import { Header } from "../component/Header";



export const IndividualPage = () => {
    const { mailID } = useParams();
    const { tamperedData } = useContext(MailContext);


    const getEmailDetails = tamperedData?.find((mails) => mails.mId === mailID)


    return (
        <>
            <div className="main">
                <div className="nav" >
                    <Header />
                </div>

                <div className="individual_the_main">
                    <div>
                        <h1 className="title"> This is individual page</h1>
                    </div>
                    <div className="individual_list" >

                        <h2> {getEmailDetails?.subject} </h2>
                        <p

                            dangerouslySetInnerHTML={{ __html: getEmailDetails?.content1 }}
                        ></p>

                    </div>
                </div>
            </div>
        </>
    )
}