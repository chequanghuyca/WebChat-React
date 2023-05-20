import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>BK - Chat</span>
        <span className='title'>Đăng nhập</span>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Mật khẩu' />
          <button>Đăng nhập</button>
          {err && <span>Đang có sự cố!</span>}
        </form>
        <p>Bạn chưa có tài khoản? <Link to='/register'>Tạo tài khoản</Link></p>
      </div>
    </div>
  );
};

export default Login;
