const Rating = (props) => {
    return (
        <div className="Rating">
            {'★'.repeat(Math.round(props.children))}{'☆'.repeat(5 - Math.round(props.children))}
        </div>
    );
}
 
export default Rating;