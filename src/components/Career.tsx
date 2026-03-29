import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Manager, Data Science & Analytics</h4>
                <h5>Moon Rabbit</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architect audience segments and build calculated insights using advanced
              SQL to power data-driven marketing campaigns reaching millions of
              customers. Design and analyze A/B and multivariate tests (lift studies,
              holdout groups) to optimize segmentation logic. Develop automated
              real-time KPI dashboards in Looker Studio and Tableau tracking
              full-funnel conversion metrics, lead velocity, and attribution.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chief Data Scientist</h4>
                <h5>Digital Growth Factor</h5>
              </div>
              <h3>2018–23</h3>
            </div>
            <p>
              Directed performance analytics and audience segmentation strategy for
              50+ client accounts, building SQL pipelines and integrating CRM,
              Salesforce, and 1st/3rd party data sources. Built automated reporting
              solutions and self-service dashboards using Tableau, SQL, and Google
              Analytics. Developed Python-based automation scripts for data
              extraction, API integrations, and audience signal processing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Data Science Consultant</h4>
                <h5>Taktical Digital · ISOOSI · Marigold · KonvertLab</h5>
              </div>
              <h3>2015–17</h3>
            </div>
            <p>
              Led advanced analytics for multi-location B2B and B2C media campaigns.
              Built SQL pipelines and integrated Salesforce CRM, 1st and 3rd party
              data to support audience segmentation and optimization. Managed
              campaign tracking implementation across GTM, GA4, Meta Pixel, and
              Salesforce Marketing Cloud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
