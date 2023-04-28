// [wiki] a button container with children props passed down by as a string and regular props as well
// [bp] the button onClick must be implemented outside of Button for reusability

interface buttonProps {
    children: string;
    color?: 'primary' | 'danger' | 'secondary'; // [demo] symbolize an optional prop, union describe possible values (typescript)
    onClick: () => void;    // [demo] function pointer type annotation (typescript)
}

// [demo] passing a prop with a default value
const Button = ({ children, onClick, color = 'primary' }: buttonProps) => {
    return (
        <div>
            {/* [demo] composing a class name */}
            <button className={"mb-3 btn btn-" + color} onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button