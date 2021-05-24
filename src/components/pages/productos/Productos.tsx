import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Loading from '../../loading/Loading';

export default function Productos(props: { users: { result: any; loading: any; error: any; }; }) {
    const {
        users:{result, loading, error}
    } = props;
    return (
        <Container>
         <Row>
             {loading || !result 
             ? 
             <Loading/>
             : result.map((user: any,index: any)=>(
                           <div>
                                <p>{user.name} <br /></p>
                            </div>
                            ))}
         </Row>
        </Container>
    );
}
