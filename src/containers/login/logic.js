import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
    username: Yup.string().required("لطفا نام کاربری را وارد کنید"),
    password: Yup.string().required("لطفا کلمه عبور را وارد کنید"),
  });


  // export const handleSubmit = async (submit,upm,values,{setSubmitting})=>{
    
  //   setSubmitting(true)
  //   const data = `username=${values.username}&password=${values.password}&grant_type=password`
  //   try{
  //       await submit(data)
  //       setSubmitting(false)
  //       console.log(upm)
  //       if(upm.loginResponse.status === 200){
  //         alert("login")
  //         setSubmitting(false)
  //       }else{
  //         alert("error")
  //         setSubmitting(false)
  //       }
  //   }catch{
  //     alert("error")
  //       setSubmitting(false)
  //   }
  // }