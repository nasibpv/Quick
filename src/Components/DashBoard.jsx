import { Col, Divider, Row } from 'antd';
import { Link } from "react-router-dom";

function DashBoard(){
    const style = {
        padding: '1px 0',
      };
    return(
        <div className="grid  xs: 8, sm: 16, md: 24, lg: 32 ">
            <div style={{minHeight:'70vh'}}>
                <Divider orientation="left">DashBoard</Divider>
                <Row className="gap-5">
                    <Col className="gutter-row " >
                        <Link to={'/products'} style={style}>
                                <img 
                                width={70}
                                height={70}
                                className="rounded-full"
                                src="https://i.postimg.cc/W4DJqNXV/pngtree-vector-receipt-icon-png-image-927096.jpg"/>
                        </Link>
                    </Col>
                    <Col className="gutter-row" >
                    <Link to={'/products'} style={style}>
                                <img 
                                width={70}
                                height={70}
                                className="rounded-full"
                                src="https://i.postimg.cc/W4DJqNXV/pngtree-vector-receipt-icon-png-image-927096.jpg"/>
                        </Link>
                    </Col>
                    <Col className="gutter-row" >
                    <Link to={'/products'} style={style}>
                                <img 
                                width={70}
                                height={70}
                                className="rounded-full"
                                src="https://i.postimg.cc/W4DJqNXV/pngtree-vector-receipt-icon-png-image-927096.jpg"/>
                        </Link>
                    </Col>
                    <Col className="gutter-row" >
                    <Link to={'/products'} style={style}>
                                <img 
                                width={70}
                                height={70}
                                className="rounded-full"
                                src="https://i.postimg.cc/W4DJqNXV/pngtree-vector-receipt-icon-png-image-927096.jpg"/>
                        </Link>
                    </Col>
                </Row>
            </div>     
        </div>

    )
}
export default DashBoard