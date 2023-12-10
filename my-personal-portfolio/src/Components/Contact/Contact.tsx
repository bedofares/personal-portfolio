import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  interface FieldMappings {
    [key: string]: string;
  }

  const fieldMappings: FieldMappings = {
    user_name: "name",
    user_email: "email",
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const mappedName = fieldMappings[name] || name;

    setFormData((prevData) => ({ ...prevData, [mappedName]: value }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Check for required fields
    Object.keys(formData).forEach((key) => {
      const stringKey = key as keyof FormData; // explicitly cast key to keyof FormData
      if (!formData[stringKey]) {
        newErrors[stringKey] = `${stringKey} is required`;
      }
    });

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      if (!newErrors.email) {
        newErrors.email = "Invalid email format";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearFormData = () => {
    setFormData({ name: "", email: "", message: "" });
  };
  const sendEmail = () => {
    if (form.current) {
      const serviceId = process.env.REACT_APP_SERVICE_ID;
      const templateId = process.env.REACT_APP_TEMPLATE_ID;
      const publicId = process.env.REACT_APP_PUBLIC_ID;
      if (serviceId && templateId && publicId) {
        emailjs
          .sendForm(serviceId, templateId, form.current, publicId)
          .then(
            (result) => {
              setToastMessage("Message sent successfully!");
              clearFormData();
            },
            (error) => {
              setToastMessage("Error sending message. Please try again.");
            }
          )
          .finally(() => {
            setTimeout(() => {
              setToastMessage(null);
            }, 3000);
          });
      } else {
        console.error("One or more environment variables are undefined.");
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can now send the email or perform other actions
      // Example: Use an API, or redirect to a success page
      await sendEmail();
    }
  };
  return (
    <>
      <div
        id="contact"
        className="container pb-20 lg:pb-36 mt-24 mx-auto px-4 gap-12 item-center"
      >
        <div>
          <div id="connect">
            <div
              data-aos="fade-up"
              className="bg-blue-300/30 dark:bg-sky-500 rounded-3xl py-24 lg:pt-24 lg:pb-12 px-12"
            >
              <div className="text-center">
                <h3 className="font-bold uppercase tracking-widest text-grey-600 mb-4">
                  Contact Me
                </h3>
                <h2 className="title text-4xl">Got a Project? Lets Talk!</h2>
              </div>
              <div className="mt-12">
                <form
                  ref={form}
                  className="flex flex-col gap-8 sm:px-20 lg:px-48"
                  onSubmit={handleSubmit}
                >
                  <input
                    name="user_name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`p-3 rounded-2xl bg-transparent text-blue-950 placeholder-blue-950 border border-blue-950 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    placeholder="name"
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name}</span>
                  )}

                  <input
                    name="user_email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`p-3 rounded-2xl bg-transparent text-blue-950 placeholder-blue-950 border border-blue-950 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="email"
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email}</span>
                  )}

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    className={`p-3 rounded-2xl bg-transparent text-blue-950 placeholder-blue-950 border border-blue-950 resize-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="message"
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500">{errors.message}</span>
                  )}
                  <div className="flex text-white">
                    <button
                      type="submit"
                      className="button w-44 bg-blue-950 hover:shadow-lg hover:shadow-blue-950/50"
                      onSubmit={handleSubmit}
                    >
                      Send message
                    </button>
                  </div>
                </form>
                {toastMessage && (
                  <div className="toast-message">
                    <p>{toastMessage}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
