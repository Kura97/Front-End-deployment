import React from 'react';
import Alert from 'react-bootstrap/Alert';
import {useState} from 'react'

function AlertPasswordMatch() {
  const [show, setShow] = useState(true);

    if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>خطأ في البيانات</Alert.Heading>
        <p>كلمة المرور غير متطابقة</p>
      </Alert>
    );
  }
}
  export default AlertPasswordMatch

