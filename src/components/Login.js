import React, { useState, useRef } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import AuthService from '../services/auth.service';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState('johndoe');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage('');
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          props.history.push('/user');
          window.location.reload();
        },
        (error) => {
          const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="login-section">
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-10 col-xl card flex-row mx-auto px-0">
            <div className="img-left d-none d-md-flex"></div>
            <div className="card-body">
              <h1 className="text-title text-center mt-4">Login</h1>
              <p className="text-center mt-4">Log in with your data that you entered during your registration</p>
              <Form action="" className="form-box px-3" onSubmit={handleLogin} ref={form}>
                <div className="form-input">
                  <Input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    tabindex="10"
                    required
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required]}
                    // test
                  />
                </div>
                <div className="form-input">
                  <Input
                    type="password"
                    name="vpassword"
                    placeholder="*****"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required]}
                    // test
                  />
                </div>

                <div className=" d-grid gap-2 mb-3">
                  <button type="submit" className="btn btn-block text-uppercase" disabled={loading}>
                    {loading && <span className="spinner-border spinner-border-sm"></span>}
                    Login
                  </button>
                </div>

                <hr className="my-4" />

                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
                <CheckButton style={{ display: 'none' }} ref={checkBtn} />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
