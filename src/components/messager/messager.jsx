import { Field, Form, Formik } from 'formik';
import React, { useRef, useState } from 'react'
import style from "./messager.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import {  sendMessage } from '../../redux/slice/chatSlice';

 const Messager = () => {
  const dispatch= useDispatch();
 
  const [inputlog, setInputlog] = useState(false)
  const {status}=useSelector((state)=>state.chat)
  console.log(status);
  return (
    <div > 
      <Formik initialValues={{number:"", message:""}} onSubmit={(values)=>dispatch(sendMessage(values)) }> 
      {({errors, touched})=>(
        <Form  className={style.form} >
          <h3  className={style.header} > Чат  </h3>
          <label className={style.label}  htmlFor="number">  Номер абонента (формат 7хххххххххх)</label> 
          <Field  onMouseEnter={()=>setInputlog(true)}  onMouseLeave={() => setInputlog(false)} className={style.field} id="number" name="number" placeholder="Номер абонента"    />
        <h4>Чат</h4>
         <div>
         </div>
          <Field className={style.field} id="message" name="message" placeholder="Ваше сообщение "  />
          <button className={style.btn} type="submit">Отправить </button>
          {status?<p>Отправленно</p>:<p>Не отправленно не верный номер </p>}
        </Form>
    )}
    </Formik>
    </div>
  )
}


export default Messager;