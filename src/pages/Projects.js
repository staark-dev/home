import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import HolderLogo from '../assets/holder.svg';

export const Projects = () => (
    <section className="resume-section" id="experience">
        <div className="resume-section-content">
            <h2 className="mb-5">My Lasted Projects</h2>
            <Row className="justify-content-lg-left">
                <Col lg={6} md={6} className="mb-2">
                    <Card className="bg-dark text-white">
                        <Card.Img src={HolderLogo} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>PHP - Login / Register System</Card.Title>
                            <Card.Text>
                                PHP - Login / Register System<br />
                                <a href="https://github.com/Staark94/Login_Register" className="mt-2 btn btn-sm btn-info">Github Source</a>
                            </Card.Text>
                            <Card.Text>Last updated 4 days ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>

                <Col lg={6} md={6} className="mb-2">
                    <Card className="bg-dark text-white">
                        <Card.Img src={HolderLogo} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>eCommerce 'Laravel' Shop</Card.Title>
                            <Card.Text>
                                eCommerce Shop with DashBoard, Roles & Permissions.<br />
                                <a href="https://github.com/Staark94/shop-piesetv" className="mt-2 btn btn-sm btn-info">Github Source</a>
                            </Card.Text>
                            <Card.Text>Last updated 14 months ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col lg={6} md={6} className="mb-2">
                    <Card className="bg-dark text-white">
                        <Card.Img src={HolderLogo} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Active Records - PHP Model</Card.Title>
                            <Card.Text>
                                PDO Snippet Active Records for Models.<br />
                                <a href="https://github.com/Staark94/ActiveRecords" className="mt-2 btn btn-sm btn-info">Github Source</a>
                            </Card.Text>
                            <Card.Text>Last updated 2 days ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col lg={6} md={6} className="mb-2">
                    <Card className="bg-dark text-white">
                        <Card.Img src={HolderLogo} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>PHP Simple Blog</Card.Title>
                            <Card.Text>
                                PHP Simple Blog without framework<br />
                                <a href="https://github.com/Staark94/php-blog" className="mt-2 btn btn-sm btn-info">Github Source</a>
                            </Card.Text>
                            <Card.Text>Last updated 18 days ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </div>
    </section>
);