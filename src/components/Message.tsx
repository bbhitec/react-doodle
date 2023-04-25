

// [demo] react functional component - PascalCasing
function Message () {
    const name = "John";    // [demo] variable or any expression can be used within the JSX below

    return (
        // jsx syntax
        <h1>Hello {name}</h1>
    );
}

// make this component visible to others
export default Message;