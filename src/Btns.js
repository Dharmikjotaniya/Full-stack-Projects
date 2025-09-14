import { Button, Container } from 'react-bootstrap';

function Loginbtn() {
    return (
        <>
            <Container className='mt-5'>
                <Button variant='primary'>Login Button</Button>
            </Container>
        </>
    );
}

function Logoutbtn() {
    return (
        <>
            <Container className='mt-5'>
                <Button variant='danger'>Logout Button</Button>
            </Container>
        </>
    );
}

function Addtocartbtn() {
    return (
        <>
            <Container className='mt-5'>
                <Button variant='success'>Addtocart Button</Button>
            </Container>
        </>
    );
}

function Join() {
    return (
        <>
            <Container className='mt-5'>
                <Button variant='warning'>Join Button</Button>
            </Container>
        </>
    );
}

export default Loginbtn;
export { Logoutbtn, Addtocartbtn, Join };