import React, { Component } from 'react';

export default class FooterTop extends Component {
  render(){
    return(
      <div className="footer-top light-text">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h5>CONTACT</h5>
              GSD Cars <br/>
              THREE ANCHOR HOUSE, <br/>
              JAON MOYO st <br/>
              Phone: (263) 0782814531
            </div>
            <div className="col-4">
              <h5>WORK HOURS</h5>
              Sun 10:00 am - 7:00 pm <br/>
              Mon 8:00 am - 9:00 pm <br/>
              Tue 8:00 am - 9:00 pm <br/>
              Wed 8:00 am - 9:00 pm <br/>
              Thu 8:00 am - 9:00 pm <br/>
              Fri 8:00 am - 9:00 pm <br/>
              Sat 8:00 am - 8:00 pm <br/>

            </div>
            <div className="col-4">
              <h5>ABOUT</h5>
              <p>Affordable at your finger tip,price i what you pay,value is what you get .</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
