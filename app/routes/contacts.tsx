import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import globalStyle from "~/styles/global.css";

// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: globalStyle }
// ];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Karisma.Co" },
    { name: "Contact Us", content: "Contact us at Karisma.Co." },
  ];
};

export default function ContactUs() {
  return (
    <>
      <div className="contacts">
        <div className="locations">
          <label>Catch us at:</label>
          {/* Place holder for Google Map */}
          <div className="map"></div> 
          <label>Location/ Business Address:</label>
          <ul>
            <li>&#10044; Guiguinto, Bulacan</li>
            <li>&#10044; Frankie General Store, 2F SM Aura BGC</li>
            <li>&#10044; Lazada</li>
            <li>&#10044; Shopee</li>
          </ul>
        </div>
        <div className="input-forms">
          <div className="customer-identity">
            <div>
              <label htmlFor="customer-first-name">First Name:</label>
              <input type="text" name="customer-first-name" id="" />
            </div>
            <div>
              <label htmlFor="customer-last-name">Last Name:</label>
              <input type="text" name="customer-last-name" id="" />
            </div>
          </div>
          <div className="customer-contacts">
            <div>
              <label htmlFor="customer-email">Email:</label>
              <input type="email" name="customer-email" id="" />
            </div>
            <div>
              <label htmlFor="customer-phone">Phone Number:</label>
              <input type="tel" name="customer-phone" id="" />
            </div>
          </div>
          <div className="customer-concerns">
            <div>
              <label htmlFor="customer-subject">Subject:</label>
              <input type="text" name="customer-subject" id="" />
            </div>
            <div>
              <label htmlFor="customer-message">How can we help?</label>
              <textarea name="customer-message" id=""></textarea>
            </div>
            <div>
              <label htmlFor="customer-attachment" className="custom-file-upload">
                <i className="fa fa-cloud-upload"></i> Upload Attachment
              </label>
              <input type="file" name="customer-attachment" id="customer-attachment" />
            </div>
            <div>
              <input className="customer-submit" type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-liner footer" />
    </>
  );
}