// [wiki] a container that uses a state and mouse clicks

import { MouseEvent, useState } from "react";


// [demo] we used props to pass variable data to a reusable component
interface Props {
    items: string[];
    heading: string;
}

// a list component that will use variable data and state changing
// the props are elaborated for backward-compitability
function ListGroup({ items, heading }: Props) {


    // [demo] we use the state hook to let react watch the selected index propery
    // across the used components
    let [selectedIndex, setSelectedIndex] = useState(-1);   // a -1 initially


    // [demo] here is where TypeScript helps: the event argument is annotated
    // [wip] how to properly pass arguments to handleClick
    const handleClick = ((event: MouseEvent) => console.log(event));

    // [demo] empty list case: we can use functions instead of a constant/class to have parameters
    //const emptyMessage = (items.length === 0) ? <p>The list is empty</p> : null;
    const getEmptyMessage = () => {
        // [bp] using && to follow a condition
        return (items.length === 0) && <p>The list is empty</p>;
    }

    return (
        <>
            <h1>{heading}</h1>
            {getEmptyMessage()}
            <ul className="list-group">
                {/* [demo] include a JS directive within a JSX block to map through the items list.
                usually we give eack row/list item a unique key, here we just used the name */}
                {items.map((city, index) => (
                    <li
                        key={city}
                        // [demo] component state effect
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        onClick={() => setSelectedIndex(index)} // [demo] each component can be clicked
                    >{city}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;