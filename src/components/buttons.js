export default function Button({bgColor, color, onClick, children}) {
    return(
        <>
            <button
              onClick={onClick}
              style={{ backgroundColor: {bgColor}, color: {color} }}
            >
              {children}
            </button>
        </>
    )
}