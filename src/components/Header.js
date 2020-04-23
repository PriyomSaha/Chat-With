import React, { useState } from 'react';
import { Collapse ,NavbarToggler,Row, Col}
    from 'reactstrap';
    import "bootstrap/dist/css/bootstrap.css";
const Example = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (

        <Row >
            <Col xs="6">
                <h1>Chat With...</h1>
            </Col>

            <Col xs="6">
            <Collapse>
                <NavbarToggler  className="mr-2"/>
             </Collapse>
            </Col>
        </Row>

    );
}

export default Example;