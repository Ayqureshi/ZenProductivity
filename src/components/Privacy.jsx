import React from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';
import "./Privacy.css";

const CollapsibleDiv = ({ title, children }) => {
  const [showCollapsible, setShowCollapsible] = useState(false);

  return (
    <>
      <button onClick={() => setShowCollapsible((show) => !show)} className="collapse-button">
        <p className="button-text"> <span >{title}</span> <span style={{textAlign: "right"}}>v</span></p>
      </button>
      <div className="collapse-text">
        <p className="collapse-text"> {showCollapsible && children} </p>
      </div>
    </>
  );
};

CollapsibleDiv.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const MyApp = () => {
  const myDatas = [
    {
      id: 1,
      title: "Information Collection and Use",
      content: "For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you."
    },
    {
      id: 2,
      title: "Log Data",
      content: "We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol (IP) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics."
    },
    {
      id: 3,
      title: "Cookies",
      content: "Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive. Our website uses these cookies to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service."
    },
    {
      id: 4,
      title: "Service Providers",
      content: "We may employ third-party companies and individuals due to the following reasons: 1) To facilitate our Service; 2) To provide the Service on our behalf; 3) To perform Service-related services; or 4) To assist us in analyzing how our Service is used. We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."
    },
    {
      id: 5,
      title: "Security",
      content: "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security."
    },
    {
      id: 6,
      title: "Links to Other Sites",
      content: "Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
    },
    {
      id: 7,
      title: "Children's Privacy",
      content: "Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions."
    },
    {
      id: 8,
      title: "Changes to this Privacy Policy",
      content: "We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page. Our Privacy Policy was created with the help of the Privacy Policy Template."
    },
    {
      id: 9,
      title: "Contact Us",
      content: "If you have any questions or suggestions about our Privacy Policy, please do not hesitate to contact us."
    }
  ];

  return (
    <div>
      {myDatas.map((data) => {
        return (
          <div key={data.id}>
            <CollapsibleDiv title={data.title}>
              <div>{data.content}</div>
            </CollapsibleDiv>
          </div>
        );
      })}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h1 style={{paddingBottom: "5vh", paddingTop: "5vh"}}>Privacy Policy</h1>
      <h3 className="subHead-text"> If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us. Please review how ZenProductivity services work. </h3>
      <MyApp />
      <p style={{marginBottom: "10vh"}}></p>
    </div>
  );
}