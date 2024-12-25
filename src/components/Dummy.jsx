

import { useState } from 'react';
import { MenuIcon } from './common/Icon';

// import MainButton from '../common/MainButton';


const Dummy = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    education: '',
    course: '',
    address: '',
});

const [errors, setErrors] = useState({});

const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
    setErrors({ ...errors, [id]: '' }); // Clear the error message when the user starts typing
};

const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    let formErrors = {};

    if (!formValues.firstName) formErrors.firstName = 'First name is required';
    if (!formValues.lastName) formErrors.lastName = 'Last name is required';
    if (!formValues.email) formErrors.email = 'Email address is required';
    if (!formValues.phoneNumber) formErrors.phoneNumber = 'Mobile number is required';
    if (!formValues.education) formErrors.education = 'Last education is required';
    if (!formValues.course) formErrors.course = 'Course is required';
    if (!formValues.address) formErrors.address = 'Address is required';

    // Validate phone number using regex
    const phoneNumberRegex = /^[0-9]{10}$/;
    if (formValues.phoneNumber && !phoneNumberRegex.test(formValues.phoneNumber)) {
        formErrors.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
    }

    // Log form values to console
    console.log('Form Values:', formValues);

    // Clear form values
    setFormValues({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        education: '',
        course: '',
        address: '',
    });
    setErrors({});
};

  return (
    <>
      
        <h2 className="xl:text-custom-xl bg-dark-black lg:text-5xl md:text-4xl sm:text-3xl text-custom-md font-semibold text-white text-center pt-6 !leading-[110%]">
          REGISTER NOW
        </h2>
        <form className="w-full pt-8 bg-dark-black" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row w-full gap-5">
            {/* ==================FIRST NAME====================== */}
            <div className="flex w-full rounded-md flex-col relative">
              <div className="flex rounded-md overflow-hidden">
                <label
                  htmlFor="firstName"
                  className="p-3 bg-light-green cursor-pointer"
                >
                 
                </label>
                <input
                  className="w-full focus:outline-none outline-none font-medium text-sm md:text-base px-2 placeholder:text-light-blue"
                  type="text"
                  id="firstName"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  placeholder="FIRST NAME"
                />
              </div>
              {errors.firstName && (
                <p className="text-white text-[10px] md:text-[11px] tracking-[0.4px] absolute -bottom-4">
                  {errors.firstName}
                </p>
              )}
            </div>
            {/* ==================LAST NAME====================== */}
            <div className="flex w-full rounded-md flex-col relative">
              <div className="flex rounded-md overflow-hidden">
                <label
                  htmlFor="lastName"
                  className="p-3 bg-light-green cursor-pointer"
                >
              
                </label>
                <input
                  className="w-full focus:outline-none outline-none font-medium text-sm md:text-base px-2 placeholder:text-light-blue"
                  type="text"
                  id="lastName"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  placeholder="LAST NAME"
                />
              </div>
              {errors.lastName && (
                <p className="text-white text-[10px] md:text-[11px] tracking-[0.4px] absolute -bottom-4">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full gap-5 mt-5 md:mt-5">
            {/* ==================EMAIL ADDRESS====================== */}
            <div className="flex w-full rounded-md flex-col relative">
              <div className="flex rounded-md overflow-hidden">
                <label
                  htmlFor="email"
                  className="p-3 bg-light-green cursor-pointer"
                >
             
                </label>
                <input
                  className="w-full focus:outline-none outline-none font-medium text-sm md:text-base px-2 placeholder:text-light-blue"
                  type="email"
                  id="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL ADDRESS"
                />
              </div>
              {errors.email && (
                <p className="text-white text-[10px] md:text-[11px] tracking-[0.4px] absolute -bottom-4">
                  {errors.email}
                </p>
              )}
            </div>
            {/* ==================MOBILE NUMBER====================== */}
            <div className="flex w-full rounded-md flex-col relative">
              <div className="flex rounded-md overflow-hidden">
                <label
                  htmlFor="phoneNumber"
                  className="p-3 bg-light-green cursor-pointer"
                >
            
                </label>
                <input
                  className="w-full focus:outline-none outline-none font-medium text-sm md:text-base px-2 placeholder:text-light-blue"
                  type="text"
                  id="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="MOBILE NUMBER"
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-white text-[10px] md:text-[11px] tracking-[0.4px] absolute -bottom-4">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full gap-5 mt-5 md:mt-5">
            {/* ==================LAST EDUCATION====================== */}
            <div className="flex w-full rounded-md flex-col relative">
              <div className="flex rounded-md overflow-hidden">
                <label
                  htmlFor="education"
                  className="p-3 bg-light-green cursor-pointer"
                >
          
                </label>
                <input
                  className="w-full focus:outline-none outline-none font-medium text-sm md:text-base px-2 placeholder:text-light-blue"
                  type="text"
                  id="education"
                  value={formValues.education}
                  onChange={handleInputChange}
                  placeholder="LAST EDUCATION"
                />
              </div>
              {errors.education && (
                <p className="text-white text-[10px] md:text-[11px] tracking-[0.4px] absolute -bottom-4">
                  {errors.education}
                </p>
              )}
            </div>
            {/* ==================COURSE====================== */}
            <div className="flex w-full rounded-md flex-col relative">
              <div className="flex rounded-md overflow-hidden">
                <label
                  htmlFor="course"
                  className="p-3 bg-light-green cursor-pointer"
                >
           
                </label>
                <input
                  className="w-full focus:outline-none outline-none font-medium text-sm md:text-base px-2 placeholder:text-light-blue"
                  type="text"
                  id="course"
                  value={formValues.course}
                  onChange={handleInputChange}
                  placeholder="COURSE"
                />
              </div>
              {errors.course && (
                <p className="text-white text-[10px] md:text-[11px] tracking-[0.4px] absolute -bottom-4">
                  {errors.course}
                </p>
              )}
            </div>
          </div>
          {/* ==================ADDRESS====================== */}
          <div className="flex w-full rounded-md relative flex-col mt-5 md:mt-5">
            <div className="flex overflow-hidden rounded-md">
              <label
                htmlFor="address"
                className="p-3 bg-light-green cursor-pointer"
              >
             
              </label>
              <input
                className="w-full focus:outline-none outline-none font-medium text-sm md:text-base px-2 placeholder:text-light-blue"
                type="text"
                id="address"
                value={formValues.address}
                onChange={handleInputChange}
                placeholder="ADDRESS"
              />
            </div>
            {errors.address && (
              <p className="text-white text-[10px] md:text-[11px] tracking-[0.4px] absolute -bottom-4">
                {errors.address}
              </p>
            )}
          </div>
          <div className="mt-5 md:mt-5 flex justify-center">
            <MenuIcon className="text-light-blue" text="SUBMIT" />
          </div>
        </form>
    </>
  );
};

export default Dummy;