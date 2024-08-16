import PageHeader from "../Components/PageHeader";
import Section from "../Components/Section";
import Card from "../Components/Card";
import { CiLocationOn } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { contactData } from "../Data/Data";

function Contact() {
  return (
    <>
      <PageHeader heading={contactData.heading} />
      <Section
        title="Get in Touch"
        desc="Get in touch with the professionals at AutoService Group for quality services at competitive prices."
      >
        <Section
          title={contactData.companyInfoTitle}
          className="text-red-600 text-xl items-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-2 max-sm:gap-0 mt-3 max-w-4xl">
            <Card
              index="1"
              icon={<CiLocationOn />}
              title="ADDRESS"
              desc={contactData.contactDetails.address}
            />
            <Card
              index="1"
              icon={<FiMail />}
              title="P.O. Box"
              desc={contactData.contactDetails.poBox}
            />
            <Card
              index="1"
              icon={<IoIosPhonePortrait />}
              title="CALL US"
              desc={
                <>
                  Tel.:{" "}
                  <a
                    href={contactData.contactDetails.phone.telLink}
                    className="text-gray-500 underline"
                  >
                    {contactData.contactDetails.phone.tel}
                  </a>
                </>
              }
            />
            <Card
              index="1"
              icon={<MdAlternateEmail />}
              title="EMAIL US"
              desc={
                <>
                  Email:{" "}
                  <a
                    href={contactData.contactDetails.email.emailLink}
                    className="text-gray-500 underline"
                  >
                    {contactData.contactDetails.email.emailAddress}
                  </a>
                </>
              }
            />
          </div>
        </Section>
      </Section>
    </>
  );
}

export default Contact;
