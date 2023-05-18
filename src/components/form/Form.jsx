import { Field, Form, Formik } from "formik"
import style from "./form.module.scss"
function Formm() {
  return (
    <div className={style.form}>
        <Formik initialValues={{id:"", apiToken:"", number:"", message:""} } onSubmit={()=>{console.log("----------------------")}}> 
       
        {({errors, touched})=>(
            <Form>
              <label htmlFor="id">  Ваш Id </label>
              <Field id="id" name="id" placeholder="Ваш id " className={style.field} />
              <br />
              <label htmlFor="apiToken)">  Ваш api Token</label>
              <Field id="apiToken)" name="apiToken)" placeholder="Ваш id " className={style.field} />
              <button type="submit">Отправить</button>
            </Form>
        )}
        </Formik>
    </div>
  )
}

export default Formm
