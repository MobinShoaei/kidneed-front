import React from 'react';
import { Col, Input, Row, Select, Space } from 'antd';
import styles from "./Messages.module.css";
import { ClockCircleOutlined,CompassOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Search } = Input;

export const Messages: React.FC = (props) => {
    return (
        <div className={`${styles.wrapper} `} >
            <div className={`${styles.filterWrapper} `}>
                <div className={`${styles.search}`}>
                    <Search placeholder="جستجو پیام ها" className="" />
                </div>
                <div className={`${styles.filters}`}>
                    <Space>
                        <Select defaultValue="بر اساس تاریخ" style={{ width: 120 }} >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                        <Select defaultValue="تمام پیام ها" style={{ width: 120 }} >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                    </Space>
                </div>
            </div>
            <Row style={{marginTop: 35}} gutter={[15,15]}>
                <Col xs={24} className={`${styles.messageBox}`}>
                    <div className={`${styles.messageDes} `} style={{display:"flex"}}>
                        <div className={`${styles.thumb}`} style={{backgroundImage: `url("https://picsum.photos/id/237/300/200")` }} >
                            <img src="/InformationVector.svg" width="30px" style={{cursor: "pointer"}} onClick={()=> console.log("asdas")}/>
                        </div>
                        <div className={`${styles.descriptionAndMeta} `}>
                            <p className={`${styles.description}`}>
                            خوب است بعد از دیدن این قسمت از فیلم کودک قهرمان در مورد این مطلب صحبت کنید که "کودک شما هم می تواند همچون قورباغه سبز" می تواند قهرمانی در خور توجه دیگران شود و باید که تمام تلاش خود را به کار گیرد تا موفق به این امر بشود
                            </p>
                            <div className={`${styles.meta}`}>
                                <ClockCircleOutlined />
                                <p>3 بهمن - 12:25</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.typeBox}`} style={{background:"rgba(139, 218, 146, 1)"}}>
                        <div className={`${styles.type}`}>
                            <CompassOutlined />
                            <p style={{fontSize:16}}>
                            پاس گل
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} className={`${styles.messageBox}`}>
                    <div className={`${styles.messageDes} `} style={{display:"flex"}}>
                        <div className={`${styles.thumb}`} style={{backgroundImage: `url("https://picsum.photos/id/237/300/200")` }} >
                            <img src="/InformationVector.svg" width="30px" style={{cursor: "pointer"}} onClick={()=> console.log("asdas")}/>
                        </div>
                        <div className={`${styles.descriptionAndMeta} `}>
                            <p className={`${styles.description}`}>
                            خوب است بعد از دیدن این قسمت از فیلم کودک قهرمان در مورد این مطلب صحبت کنید که "کودک شما هم می تواند همچون قورباغه سبز" می تواند قهرمانی در خور توجه دیگران شود و باید که تمام تلاش خود را به کار گیرد تا موفق به این امر بشود
                            </p>
                            <div className={`${styles.meta}`}>
                                <ClockCircleOutlined />
                                <p>3 بهمن - 12:25</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.typeBox}`} style={{background:"rgba(239, 93, 168, 1)"}}>
                        <div className={`${styles.type}`}>
                            <CompassOutlined />
                            <p style={{fontSize:16}}>
                            پاس گل
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} className={`${styles.messageBox}`}>
                    <div className={`${styles.messageDes} `} style={{display:"flex"}}>
                        {/* <div className={`${styles.thumb}`} style={{backgroundImage: `url("https://picsum.photos/id/237/300/200")` }} >

                        </div> */}
                        <div className={`${styles.descriptionAndMeta} `} >
                            <p className={`${styles.description}`}>
                            تکمیل برنامه روز سه شنبه به صورت کامل
                            </p>
                            <div className={`${styles.meta}`}>
                                <ClockCircleOutlined />
                                <p>3 بهمن - 12:25</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.typeBox}`} style={{background:"rgba(87, 171, 244, 1)"}}>
                        <div className={`${styles.type}`}>
                            <CompassOutlined />
                            <p style={{fontSize:16}}>
                            پاس گل
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}