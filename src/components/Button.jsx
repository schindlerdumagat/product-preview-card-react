import "./button.css";

export default function Button({ children, onAddToCard }) {

    return (
        <button className="btn" onClick={onAddToCard}>
            {children}
        </button>
    )

}