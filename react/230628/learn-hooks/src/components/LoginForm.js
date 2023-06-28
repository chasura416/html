import React from "react";
import useForm from "hooks/useForm";

const LoginForm = () => {
 const {values, hadleChange, resetForm} = useForm({
   username: "",
   password: "",
 });

 const handleSubmit = (event) => {
  event.preventDefault();
  console.log("로그인 데이터", values);
  resetForm();
 };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>사용자명 : </label>    
        <input
          type = "text"
          name = "username"
          value={values.name}
          onChange={hadleChange}
        />
      </div>
      <div>
        <label>비밀번호 : </label>    
        <input
          type = "password"
          name = "password"
          value={values.password}
          onChange={hadleChange}
        />
      </div>
      <button type="submit">로그인</button>
    </form>
 );
}

export default LoginForm;