import Logo from '~/components/Logo';
function Register() {
    return (
        <div className="App">
            {/* Register Wrapper */}
            <div className="grid grid-cols-5 h-screen">
                <div className="col-span-2 bg-neutral-300">
                    {' '}
                    {<Logo height={80} width={80} className="w-full mt-4" />}
                </div>
                <div className="col-span-3 bg-white flex items-center justify-center">
                    <div className="w-3/5">
                        <h3 className="text-2xl my-2">Đăng ký</h3>
                        <h4 className="text-xl mb-6">Nhanh chóng và dễ dàng</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Form Group */}
                            <div className="mb-6">
                                <input className="input-fields" type="text" placeholder="Họ" />
                            </div>
                            <div className="mb-6">
                                <input className="input-fields" type="text" placeholder="Tên" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <input className="input-fields" type="text" placeholder="Số di động hoặc email" />
                        </div>
                        <div className="mb-6">
                            <input className="input-fields" type="password" placeholder="Mật khẩu" />
                        </div>
                        <div className="mb-6">
                            <button className="btn btn-primary w-full">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
