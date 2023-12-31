import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
    const [showFrom, setShowFrom] = useState(false);
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>Filter / Sort</p>
            </Row>

            <Row>
                <CabinTable />
                <Button onClick={() => setShowFrom((show) => !show)}>Add new Cabin</Button>
                {showFrom && <CreateCabinForm />}
            </Row>
        </>
    );
}

export default Cabins;
