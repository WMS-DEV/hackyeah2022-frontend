import "./styles.css"
const today = new Date();

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <p>Created by WMS_DEV © {today.getFullYear()}</p>
            </div>
        </>
    )
}