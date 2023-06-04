import { Field, Form, Formik } from "formik"
import style from "./form.module.scss"
import { fetchUserById } from "../../redux/slice/authSlice"
import { useDispatch, useSelector } from "react-redux"

function Formm() {

  const { id, apiTocken } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
 

  return (
    <div className={style.form}>
        <Formik initialValues={{id:"", apiToken:""}} onSubmit={(values)=>dispatch(fetchUserById(values))}> 
       
        {({errors, touched})=>(
            <Form className={style.form}> 
              <h3 className={style.header}> Введите данные greenApi</h3>
              <label className={style.label} htmlFor="id">  Ваш Id </label>
              <Field  id="id" name="id" placeholder="Ваш id"    className={style.field} />
              <label  className={style.label}  htmlFor="apiToken">  Ваш api Token</label>
              <Field id="apiToken" name="apiToken" placeholder="Ваш api Token " className={style.field} />
              <button className={style.sumbitBtn} type="submit">Войти </button>
            </Form>
        )}
        </Formik>
    </div>
  )
}

export default Formm
