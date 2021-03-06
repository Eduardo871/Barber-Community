import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { putBarber } from '../../../redux/action/barbers';
import { getBarberById } from '../../../redux/action/barbers';

const BarberEdit = () => {
    const dispatch = useDispatch()
    const barberSelected = useSelector(state => state.barbers.barberDetail)

    const newBarber = {
        name: "",
        lastname: "",
        bio: "",
        resume: "",
        email: "",
        password: "",
        confirmedPassword: "",
        alias: "",
        location: "",
        mobile: "",
        img: "",
        type: "",
    }
	
    const [barber, setBarber] = useState(newBarber) 
    const [loading, setLoading] = useState(true)
    var { id } = useParams()

    function fetchData() {
        dispatch(getBarberById(id))
    }

    useEffect(() => {
        if(loading) {
            fetchData()
            barberSelected && setLoading(false)
        } else {
            setBarber(barberSelected)
        }
    
    }, [barberSelected])

	const handleInputChange = (e) => {
		setBarber({
			...barber,
			[e.target.name]: e.target.value,
		});
	};



    const handleSubmit = () => {
        const barberSend = {
            // name: barber.name,
            // lastname: barber.lastname,
            // bio: barber.bio,
            // resume: barber.resume,
            // email: barber.email,
            // password: barber.confirmedPassword,
            // alias: barber.alias,
            // location: barber.location,
            // mobile: barber.mobile,
            // //img: "aaaa",
            // type: barber.type,
            barberModify: {
                status: true,
                rating: 0,
                name: barber.name,
                lastname: barber.lastname,
                bio: barber.bio,
                resume: barber.resume,
                email: barber.email,
                password: barber.confirmedPassword,
                alias: barber.alias,
                location: barber.location,
                mobile: barber.mobile,
                //img: "",
                type: barber.type,
            }
        };
        dispatch(putBarber(id, barberSend))
    };

    return (
        <body class=" bg-gray-200">
            {/* <!-- Container --> */}
            <div class="container mx-auto">
                <div class="flex justify-center py-10 px-6 ">
                    {/* <!-- Row --> */}
                    <div class="w-full justify-center xl:w-3/4 lg:w-11/12 flex">
                        {/* <!-- Col --> */}
                        {/* <div

                            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            style={{ backgroundImage: "url('https://www.bu.edu/files/2019/04/resize-19-1292-BARBER2-076.jpg')" }}
                        ></div> */}
						{/* <!-- Col --> */}
						<div class="w-full  lg:w-7/12 bg-white p-5 rounded-lg">
							<h3 class="pt-4 text-2xl text-center">Edit Barber</h3>
							<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
								<div class="mb-4 md:flex md:justify-between">
									<div class="mb-4 md:mr-2 md:mb-0">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="firstName"
										>
											First Name
										</label>
										<input
											class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="firstName"
											type="text"
											placeholder="First Name"
											name="name"
											value={barber.name}
											onChange={handleInputChange}
										/>
									</div>
									<div class="md:ml-2">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="lastName"
										>
											Last Name
										</label>
										<input
											class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="lastName"
											type="text"
											placeholder="Last Name"
											name="lastname"
											value={barber.lastname}
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div class="mb-4 md:flex md:justify-between">
									<div class="mb-4 md:mr-2 md:mb-0">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="firstName"
										>
											Username
										</label>
										<input
											class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="userName"
											type="text"
											placeholder="Username"
											name="alias"
											value={barber.alias}
											onChange={handleInputChange}
										/>
									</div>
									<div class="md:ml-2">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="lastName"
										>
											Location
										</label>
										<input
											class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="location"
											type="text"
											placeholder="location"
											name="location"
											value={barber.location}
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div class="mb-4 md:flex md:justify-between">
									<div class="mb-4 md:mr-2 md:mb-0">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="firstName"
										>
											Phone
										</label>
										<input
											class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="phone"
											type="number"
											placeholder="phone"
											name="mobile"
											value={barber.mobile}
											onChange={handleInputChange}
										/>
									</div>
									<div class="md:ml-2">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="lastName"
										>
											Biography
										</label>
										<input
											class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="biography"
											type="text"
											placeholder="Short Biography"
											name="bio"
											value={barber.bio}
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div class="mb-4">
									<label
										class="block mb-2 text-sm font-bold text-gray-700"
										for="email"
									>
										Resume
									</label>
									<textarea
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="resume"
										type="text"
										placeholder="About You"
										name="resume"
										value={barber.resume}
										onChange={handleInputChange}
									/>
								</div>
								<div class="mb-4 md:flex md:justify-between">
									<div class="mb-4 md:mr-2 md:mb-0">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="firstName"
										>
											Type
										</label>
										<select
											name="type"
											value={barber.type}
											onChange={handleInputChange}
										>
											<option value="Urban">Urban</option>
											<option value="Academy">Academy</option>
											<option value="Hair technician">Tecnico Capilar</option>
											<option value="Seminary">Seminarios</option>
										</select>
										{/* <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            type="text"
                                            placeholder="First Name"
                                            name="type"
                                            value={barber.type}
                                            onChange={handleInputChange}
                                        /> */}
									</div>
									<div class="md:ml-2">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="email"
										>
											Profile Image
										</label>
										<input
											class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="image"
											type="file"
											name="image"
											value={barber.img}
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div class="mb-4">
									<label
										class="block mb-2 text-sm font-bold text-gray-700"
										for="email"
									>
										Email
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="email"
										type="email"
										placeholder="Email"
										name="email"
										value={barber.email}
										onChange={handleInputChange}
									/>
								</div>
								<div class="mb-4 md:flex md:justify-between">
									<div class="mb-4 md:mr-2 md:mb-0">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="password"
										>
											Password
										</label>
										<input
											class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="password"
											type="password"
											placeholder="******************"
											name="password"
											value={barber.password}
											onChange={handleInputChange}
										/>
										<p class="text-xs italic text-red-500">
											Please choose a password.
										</p>
									</div>
									<div class="md:ml-2">
										<label
											class="block mb-2 text-sm font-bold text-gray-700"
											for="c_password"
										>
											Confirm Password
										</label>
										<input
											class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="c_password"
											type="password"
											placeholder="******************"
											name="confirmedPassword"
											value={barber.confirmedPassword}
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<div class=" text-center">
									<button
										onClick={() => handleSubmit()}
										class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
										type="button"
									>
										Edit Barber
									</button>
								</div>
								{/* <hr class="mb-6 border-t" /> */}
								{/* <div class="text-center">
                                    <a
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="#"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                                <div class="text-center">
                                    <a
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./index.html"
                                    >
                                        Already have an account? Login!
                                    </a>
                                </div> */}
							</form>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
};

export default BarberEdit;
