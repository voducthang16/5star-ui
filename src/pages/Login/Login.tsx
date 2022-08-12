import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '~/components/Logo';
import { AuthService } from '~/services';
import { getDeviceNameType } from '~/utils/deviceName';

const initDataForm = {
    username: '',
    password: '',
};

const Login = () => {
    const Navigate = useNavigate();

    const [formValue, setFormValue] = useState(initDataForm);

    const onInputChange = (e: Event | any) => {
        let { value, name } = e.target;
        let FormValueNew = { ...formValue, [name]: value };
        setFormValue(FormValueNew);
    };

    const submitForm = (e: Event | any) => {
        e.preventDefault();
        let dataPost = {
            username: formValue.username,
            password: formValue.password,
            deviceName: getDeviceNameType(),
        };

        AuthService.signIn(dataPost).then((res) => {
            console.log(res);
            if (res.data.status === 200) {
                localStorage.setItem('access_token', 'abc');
                localStorage.setItem('id', `${res.data.msg.id}`);
                localStorage.setItem('name', `${res.data.msg.name}`);
                Navigate('/');
            } else {
                alert('Sai tên tài khoản hoặc mật khẩu');
            }
        });
    };

    return (
        <div>
            <div className="App">
                {/* Register Wrapper */}
                <div className="2xl:m-auto grid grid-cols-6 h-screen">
                    <div className="col-span-3 bg-primary relative">
                        <div className="ripples absolute top-0 left-0 w-full h-full overflow-hidden">
                            <div className="riplles-circle-0 w-[170px] h-[170px] left-0 top-[383px] right-0 m-auto animation-ripples delay-300 bg-[#273c75]"></div>
                            <div className="riplles-circle-0 w-[340px] h-[340px] left-0 top-[298px] right-0 m-auto animation-ripples delay-500"></div>
                            <div className="riplles-circle-0 w-[510px] h-[510px] left-0 top-[213px] right-0 m-auto animation-ripples delay-[900]"></div>
                            <div className="riplles-circle-0 w-[680px] h-[680px] left-0 top-[128px] right-0 m-auto animation-ripples delay-[1200]"></div>
                            <div className="riplles-circle-0 w-[850px] h-[850px] left-0 top-[43px] right-0 m-auto animation-ripples delay-[1500]"></div>
                        </div>
                    </div>
                    <div className="col-span-3 bg-white flex items-center justify-center">
                        <div className="w-3/5">
                            <Logo height={80} width={80} className="w-full mt-4 z-[3] relative" />
                            <h3 className="text-4xl font-semibold my-4 text-center">Đăng nhập</h3>
                            <h4 className="text-xl mb-6 text-gray-500">Chào mừng bạn đến với mạng xã hội 5Stars</h4>
                            <form onSubmit={submitForm}>
                                <div className="form-group rounded-lg mb-6">
                                    <input
                                        className="input input-form"
                                        type="text"
                                        name="username"
                                        onChange={onInputChange}
                                        placeholder="Số di động hoặc email"
                                    />
                                </div>
                                <div className="form-group rounded-lg mb-6">
                                    <input
                                        className="input input-form"
                                        type="password"
                                        name="password"
                                        onChange={onInputChange}
                                        placeholder="Mật khẩu"
                                    />
                                </div>
                                <Link to="/register">Đăng ký</Link>
                                <div className="form-group rounded-lg mb-6">
                                    <button type="submit" className="btn btn-primary w-full">
                                        Đăng nhập
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
