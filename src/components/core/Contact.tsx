import { useEffect, useState } from "react";

const Contact = (): JSX.Element => {
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    const container = document.getElementById("gridBox");
    setContainerWidth(Number(container?.clientWidth));
  }, []);

  return (
    <>
      {/* Contact form section */}
      <div className="main-container" id='contact-section'>
        <div className='ps_box'>
          <form className="form_box">
            <div className="contact_text text-center">
              <h2>Contact our friendly team</h2>
              <p>Let us know how we can help</p>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-6">
                <input className="input_1" type="text" name="first_name" placeholder="First Name" />
              </div>
              <div className="col-md-6 col-xl-6">
                <input className="input_1" type="text" name="last_name" placeholder="Last Name" />
              </div>
              <div className="col-md-6 col-xl-6">
                <input className="input_1" type="text" name="text" placeholder="Phone number" />
              </div>
              <div className="col-md-6 col-xl-6">
                <input className="input_1" type="email" name="email" placeholder="Email ID" />
              </div>
              <div className="col-md-12 col-xl-12">
                <textarea className="input_1 textarea_1" placeholder="Message"></textarea>
              </div>
              <div className="col-md-12 col-xl-12 text-center">
                <button className="submit1" type="button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="box-container" id="gridBox">
          {
            Array?.from({ length: containerWidth < 1514 ? 340 : 220 }, (_, index) => (
              <div className="box" style={{ height: (containerWidth * 0.05) }} key={index}></div>
            ))
          }
        </div>
      </div>

      {/* Get in touch section */}
      <div className="get_box">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-4">
              <div className="get_text">
                <h3>Get in touch with Upwealth magazine</h3>
                <p>If you have any questions regarding subscriptions, or how to feature or advertise in our magazine, don't
                  hesitate to get in touch</p>
              </div>
            </div>
            <div className="col-xl-8 col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="call_box">
                    <div className="text-center mx-auto w-100">
                      <div className="font_box">
                        <img className="font_img_1" src="/assets/img/c1.png" alt='' />
                        <img className="font_img_2" src="/assets/img/c2.png" alt='' />
                      </div>
                      <div className="chat_text">
                        <h5 className="ch1">Chat with us</h5>
                        <h5 className="call_1 ch1">
                          <a href="tel:+1(931)-266-6101">+1(931)-266-6101</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="call_box">
                    <div className="text-center mx-auto w-100">
                      <div className="font_box">
                        <img className="font_img_1" src="/assets/img/p1.png" alt='' />
                        <img className="font_img_2" src="/assets/img/p2.png" alt='' />
                      </div>
                      <div className="chat_text">
                        <h5 className="ch1">Call us</h5>
                        <h5 className="call_1 ch1">
                          <a href="tel:+1(931)-266-6424">+1(931)-266-6424</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="call_box">
                    <div className="text-center mx-auto w-100">
                      <div className="font_box">
                        <img className="font_img_1" src="/assets/img/m1.png" alt='' />
                        <img className="font_img_2" src="/assets/img/m2.png" alt='' />
                      </div>
                      <div className="chat_text">
                        <h5 className="ch1">Send an email</h5>
                        <h5 className="call_1 ch1 font1">
                          <a href="mailto:info@upwealthmagazine.com">info@upwealthmagazine.com</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;