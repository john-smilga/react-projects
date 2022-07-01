import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  // so basically css design is ready in alert groupname and we set it dynamically to display according to the type! mindblown
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
