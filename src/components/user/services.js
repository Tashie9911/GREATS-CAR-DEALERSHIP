import React, { Component } from 'react';
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';

export default class Services extends Component{
  render(){
    return(
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://imgs.search.brave.com/a96EmEeL2cfgx6EECIcmoentyGYK919CajZNVUAYDiM/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/RWNqX0NSY2w1d0h0/WkU2R3FZZVd3SGFF/OCZwaWQ9QXBp" alt="New Car" />
                <CardBody>
                  <CardTitle>Choose New Vehicle</CardTitle>
                  <Button className='btn-success'>More</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://imgs.search.brave.com/zFPrd9lWi3J7BKbZ0KcaGnymZHbd1P-7IxZhSvo11yg/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Ux/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5IQW41YUNY/aFdQdlZaeURVRlVw/QmxBSGFEdCZwaWQ9/QXBp" alt="Finance" />
                <CardBody>
                  <CardTitle>Financing</CardTitle>
                  <Button className='btn-success'>More</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://imgs.search.brave.com/zcTXWPp0y969YmcwL9dxccu6Xb-_iQKjB0TKCFWEkvo/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/dXkwNnVrWEl5S2NC/Qkl6RDRFS1pRSGFE/dCZwaWQ9QXBp" alt="Test Drive" />
                <CardBody>
                  <CardTitle>Test Drive</CardTitle>
                  <Button className='btn-success'>More</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://imgs.search.brave.com/1A0g_qnV7CBb6CsBIvx9O2dptSWurN_hWO8xTaqUWpc/rs:fit:1117:225:1/g:ce/aHR0cHM6Ly90c2Uz/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5Jc2h1RTh5/eVZHOFRUWS1kUkxz/a3VBSGFESiZwaWQ9/QXBp" alt="Service" />
                <CardBody>
                  <CardTitle>Schedule Service</CardTitle>
                  <Button className='btn-success'>More</Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
