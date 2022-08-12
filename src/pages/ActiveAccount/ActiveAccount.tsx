import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '~/components/Logo';
import { AuthService } from '~/services';

const ActiveAccount = () => {
    const Navigate = useNavigate();

    const [valueCode, setValueCode] = useState('');

    const submitForm = (e: Event | any) => {
        let _id = localStorage.getItem('_idRegister');
        let dataPost = {
            _id: _id,
            code: valueCode,
        };
        console.log(dataPost);
        // Request send data Active
        AuthService.activeAccount(dataPost).then((res) => {
            if (res.data.msg === 'Ok') {
                localStorage.removeItem('_idRegister');
                Navigate('/login');
            } else if (res.data.msg === 'Sai Code') {
                alert('Mã code không đúng !');
            } else {
                Navigate('/login');
            }
        });
    };

    return (
        <div>
            <div className="App">
                {/* Register Wrapper */}
                <div className="2xl:m-auto grid h-screen bg-gray-200">
                    <div className="card flex items-center justify-center m-auto orm-active-account px-5 py-5 rounded-xl shadow-md col-span-4">
                        <div className="w-120">
                            <Logo height={80} width={80} className="w-full my-4" />
                            <h3 className="text-2xl my-4">Kích hoạt tài khoản</h3>
                            <form>
                                <div className="form-group rounded-lg mb-6">
                                    <input
                                        className="input input-form"
                                        type="text"
                                        placeholder="Nhập code của bạn..."
                                        onChange={(e) => setValueCode(e.target.value)}
                                    />
                                </div>
                                <div className="text-desc text-sm text-gray-500">
                                    Mã code của bạn đã được gửi vào email: <b>test5stars@gmail.com</b>
                                </div>
                                <div className="form-group rounded-lg mb-6 flex mt-3">
                                    <button
                                        type="button"
                                        className="btn btn-secondary w-full mr-3 text-black"
                                        onClick={() => Navigate('/login')}
                                    >
                                        Hủy bỏ
                                    </button>
                                    <button type="button" className="btn btn-primary w-full" onClick={submitForm}>
                                        Tiếp tục
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

export default ActiveAccount;
