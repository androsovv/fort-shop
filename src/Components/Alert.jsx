import React, {useEffect} from 'react';

const Alert = ({name, closeAlert}) => {

     useEffect(() => {
         const timerId = setTimeout(closeAlert, 3000);
         return () => {
             clearTimeout(timerId);
         }
     }, [name]);

    return (
        <div id='toast-container'>
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    );
};

export default Alert;
