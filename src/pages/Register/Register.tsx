import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '~/components/Logo';
import { AuthService } from '~/services';

const initForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

function Register() {
    const Navigate = useNavigate();

    const [formValue, setFormValue] = useState(initForm);

    const onInputChange = (e: Event | any) => {
        let { value, name } = e.target;
        let FormValueNew = { ...formValue, [name]: value };
        setFormValue(FormValueNew);
    };

    const SubmitForm = (e: Event | any) => {
        e.preventDefault();
        let dataPost = {
            email: formValue.email,
            username: formValue.email,
            password: formValue.password,
            name: `${formValue.firstName} ${formValue.lastName}`,
        };
        signUpReq(dataPost);
    };

    const signUpReq = (data: any) => {
        AuthService.signUp(data).then((res) => {
            console.log(res);
            if (res.status === 200) {
                localStorage.setItem('_idRegister', res.data.msg.id);
                Navigate('/active');
            } else {
                alert('Đăng ký thất bại !');
            }
        });
    };

    return (
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
                        <Logo height={80} width={80} className="w-full mt-4" />

                        <h3 className="text-4xl font-semibold my-4 text-center">Đăng ký</h3>
                        <h4 className="text-xl mb-6 text-gray-500">
                            Hãy đăng ký ngay tài khoản để tham gia cùng chúng tôi !
                        </h4>
                        <form onSubmit={SubmitForm}>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Form Group */}
                                <div className="form-group rounded-lg mb-6">
                                    <input
                                        className="input input-form"
                                        name="firstName"
                                        type="text"
                                        onChange={onInputChange}
                                        placeholder="Họ"
                                    />
                                </div>
                                <div className="form-group rounded-lg mb-6">
                                    <input
                                        className="input input-form"
                                        name="lastName"
                                        type="text"
                                        placeholder="Tên"
                                        onChange={onInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group rounded-lg mb-6">
                                <input
                                    className="input input-form"
                                    type="text"
                                    name="email"
                                    placeholder="Số di động hoặc email"
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="form-group rounded-lg mb-6">
                                <input
                                    className="input input-form"
                                    type="password"
                                    name="password"
                                    placeholder="Mật khẩu"
                                    onChange={onInputChange}
                                />
                            </div>
                            <Link to="/login">Đăng nhập</Link>
                            <div className="form-group rounded-lg mb-6">
                                <button className="btn btn-primary w-full" onClick={SubmitForm}>
                                    Đăng ký
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
