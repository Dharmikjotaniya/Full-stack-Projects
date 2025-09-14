import { Container, Table } from "react-bootstrap";

function Borderedtbl() {
    return (
        <>
            <Container>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Mobile No</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Abc</td>
                            <td>Male</td>
                            <td>9987654321</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Xyz</td>
                            <td>Female</td>
                            <td>9234567890</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Djp</td>
                            <td>Male</td>
                            <td>9345098761</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Qwe</td>
                            <td>Female</td>
                            <td>9678901234</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

function Hovertbl() {
    return (
        <>
            <Container>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Mobile No</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Abc</td>
                            <td>Male</td>
                            <td>9987654321</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Xyz</td>
                            <td>Female</td>
                            <td>9234567890</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Djp</td>
                            <td>Male</td>
                            <td>9345098761</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Qwe</td>
                            <td>Female</td>
                            <td>9678901234</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

function Responsivetbl() {
    return (
        <>
            <Container>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Mobile No</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Abc</td>
                            <td>Male</td>
                            <td>9987654321</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Xyz</td>
                            <td>Female</td>
                            <td>9234567890</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Djp</td>
                            <td>Male</td>
                            <td>9345098761</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Qwe</td>
                            <td>Female</td>
                            <td>9678901234</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default Borderedtbl;
export { Hovertbl, Responsivetbl };