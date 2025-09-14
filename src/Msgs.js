import { Alert, Container } from "react-bootstrap";

function Warningmsg() {
    return (
        <>
            <Container>
                <Alert variant="warning">
                    <h1>This is Alert Warning</h1>
                </Alert>
            </Container>
        </>
    );
}

function Infomsg() {
    return (
        <>
            <Container>
                <Alert variant="info">
                    <h1>This is Alert Information</h1>
                </Alert>
            </Container>
        </>
    );
}

function Successmsg() {
    return (
        <>
            <Container>
                <Alert variant="success">
                    <h1>This is Alert Success</h1>
                </Alert>
            </Container>
        </>
    );
}

function Secondarymsg() {
    return (
        <>
            <Container>
                <Alert variant="secondary">
                    <h1>This is Alert Secondary</h1>
                </Alert>
            </Container>
            <Successmsg />
        </>
    );
}

export default Warningmsg;
export { Infomsg, Secondarymsg, Successmsg };