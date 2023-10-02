import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { sendContactForm } from "@/pages/api/api";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface TouchedFields {
  name: boolean;
  email: boolean;
  message: boolean;
}

interface FormState {
  values: {
    name: string;
    email: string;
    message: string;
  };
  isLoading: boolean;
}

const initValues: FormValues = {
  name: '',
  email: '',
  message: '',
};

const initState: FormState = {
  values: initValues,
  isLoading: false,
};


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const nameRegex = /^[A-Za-z\s]{3,50}$/;

export const ContactUs = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState<TouchedFields>({
    name: false,
    email: false,
    message: false,
  });

  const { values, isLoading } = state;

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));


  const handleBlur = (field: string) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [field]: true,
    }));
  };

  const handleSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true
    }));
    try {
      console.log('Sending contact form...');
      await sendContactForm(values);
      console.log('Sending contact form...');
      setState({
        values: initValues,
        isLoading: false,
      });
      setTouched({
        name: false,
        email: false,
        message: false,
      });
      console.log('Form reset');
    } catch (err: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  }

  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <div className="container px-5 lg:pt-24 md:pt-24 sm:pt-[11.2rem] py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4652.450456393632!2d104.06747082822092!3d11.317972154039714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3108e85207384c83%3A0x1c0dc50984a079a3!2svKirirom%20Pine%20Resort!5e0!3m2!1sen!2skh!4v1696059447893!5m2!1sen!2skh"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Preah Soramarith-Kosamak National Park (Kirirom), Phnom Srouch
                District, Kampong Speu Province, Kingdom Of Cambodia., 46,
                Traeng Trayueng
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-green-500 leading-relaxed">
                chanritheavuth@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+855 98 294 164</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Get in touch with us through this form.
          </p>
          <FormControl
            isRequired
            isInvalid={touched.name && !values.name || touched.name && !nameRegex.test(values.name)}
            mb={4}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={values.name}
              errorBorderColor="red.500"
              focusBorderColor="green.500"
              onChange={handleChange}
              onBlur={() => handleBlur("name")}
            />
            <FormErrorMessage>{(touched.name && !values.name) ? "Required": (values.name.length < 3) ? "Name must be at least 3 letters long" :(!nameRegex.test(values.name)) ? "Please enter a proper name" : ""}</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.email && !values.email || touched.email && !emailRegex.test(values.email)}
            mb={4}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={values.email}
              errorBorderColor="red.500"
              focusBorderColor="green.500"
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
            />
            <FormErrorMessage>{(touched.email && !values.email) ? "Required": (!emailRegex.test(values.email)) ? "Please enter a proper email" : ""}</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
            mb={4}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={values.message}
              errorBorderColor="red.500"
              focusBorderColor="green.500"
              onChange={handleChange}
              onBlur={() => handleBlur("message")}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <Button
            fontSize="lg"
            fontWeight="1px"
            colorScheme="green.300"
            bgColor="green.400"
            isLoading={isLoading}
            isDisabled={!values.name.trim() || !values.email.trim() || !values.message.trim()}
            onClick={handleSubmit}
            className="text-white border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Submit
          </Button>

          <p className="text-xs text-gray-500 mt-3">
            We will mail you a response within our business hours between 9:00
            AM - 5:00 PM (GMT+7)
          </p>
        </div>
      </div>
    </section>
  );
};
