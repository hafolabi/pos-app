import "./privacy.css";

export default function Privacy() {
  return (
    <div className="Privacy">
      <div className="privacyContainer">
        <div className="privacyItems">
          <div className="privacyItemIconBg">
            <i className="privacyItemIcon fa-solid fa-user-shield"></i>
          </div>
          <span className="privacyTitle">Security</span>
          <span className="privacyDesc">
            All the data we use is encrypted and protected.
            <br /> <br />
            We have strict policies in place that ensure our methods are
            properly communicated and customer data is always secure.
          </span>
        </div>

        <div className="privacyItems">
          <div className="privacyItemIcon privacyItemIconBg">
            <i className="fa-solid fa-user"></i>
          </div>
          <span className="privacyTitle">Data Privacy</span>
          <span className="privacyDesc">
            We never sell customer data or share customer contacts with third
            parties.
          </span>
        </div>

        <div className="privacyItems">
          <div className="privacyItemIconBg">
            <i className="privacyItemIcon fa-solid fa-square-poll-horizontal"></i>
          </div>
          <span className="privacyTitle">Prompt Service</span>
          <span className="privacyDesc">
            We deliver a swift service with a 24/7 customer care service, always
            available to attend to every transactions and approvals
          </span>
        </div>
      </div>
    </div>
  );
}
