const Greetings = (props) => {
    const findLanguage = (item) => {
        if(item === 'de'){
            return 'Hallo ';
        }
        if(item === 'fr'){
            return 'Bonjour ';
        }
        if(item === 'en'){
            return 'Hi ';
        }
        if(item === 'es'){
            return 'Hola ';
        }
    }
    return ( 
        <div className="box">
            { findLanguage(props.lang) }{props.children}
        </div>
    );
}
 
export default Greetings;