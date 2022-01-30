import React from "react";
import "./VidContent.css";

const VidContent = () => {
  return (
    <div>
      <div class="hm-gradient">
        <div class="full-bg-img">
          <div class="container flex-center">
            <div class="row pt-5 mt-3 bimg">
              <div class="col-lg-6 wow fadeIn mb-5 text-center text-lg-left">
                <div className="white-text main_div">
                  <h1
                    class="h1-responsive font-weight-bold wow fadeInLeft"
                    data-wow-delay="0.3s"
                    className="video_div_title"
                  >
                    Video
                  </h1>

                  <div className="video_des_div">
                    <div>
                      <strong
                        class="wow fadeInLeft"
                        data-wow-delay="0.3s"
                        className="p_tag_div"
                      >
                        Selling the value of your design system{" "}
                      </strong>
                    </div>

                    <div>
                      <p className="p_tag_description_div">
                        Quickly repurpose customer directed vortals after
                        cross-media schemas. Authoritatively deliver pandemic
                        infrastructures directed after optimal convergence.
                        Quickly repurpose customer directed vortals after
                        cross-media schemas. Authoritatively deliver pandemic
                        infrastructures directed after optimal convergence.
                        Quickly repurpose customer directed vortals after
                        cross-media schemas. Authoritatively deliver pandemic
                        infrastructures directed after optimal convergence.
                      </p>
                    </div>
                    <a data-wow-delay="0.3s" color="#fff">
                      BY Growing Trees
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 wow fadeIn">
                <div className="embed-responsive embed-responsive-16by9 wow fadeInRight">
                  <iframe
                    width="820"
                    height="765"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    alt=""
                  ></iframe>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VidContent;
