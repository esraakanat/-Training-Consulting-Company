"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
interface FormValues {
  country: string;
  clientType: string;
  name: string;
  email: string;
  telephone: string;
  coachingType: string;
  preferredDate: string;
  message: string;
  companyName: string;
  responsibleName: string;
  industry: string;
  subIndustry: string;
  otherIndustry: string;
  city: string;
  otherCity: string;
  website: string;
  phone: string;
  question1: string;
  question2: string;
  question3: string;
}

const industries = [
  {
    name: "Government and Public Sector",
    value: "government_public_sector",
    subcategories: [
      "Government Agencies",
      "Municipalities",
      "Public Service Organizations",
      "Regulatory Bodies",
    ],
  },
  {
    name: "Education",
    value: "education",
    subcategories: [
      "Schools (Primary, Secondary, Higher Education)",
      "Universities and Colleges",
      "Educational Institutions and Training Centers",
    ],
  },
  {
    name: "Healthcare and Medicine",
    value: "healthcare_medicine",
    subcategories: [
      "Hospitals",
      "Medical Clinics",
      "Health and Wellness Centers",
      "Pharmaceutical Companies",
    ],
  },
  {
    name: "Information Technology (IT)",
    value: "information_technology",
    subcategories: [
      "Software Development Firms",
      "IT Consulting Companies",
      "Tech Startups",
      "Data Analytics Firms",
    ],
  },
  {
    name: "Sales Teams",
    value: "sales_teams",
    subcategories: [
      "Corporate Sales Departments",
      "Retail Sales Teams",
      "B2B Sales Organizations",
    ],
  },
  {
    name: "Customer Experience and Servicing",
    value: "customer_experience_servicing",
    subcategories: [
      "Customer Service Departments",
      "Call Centers",
      "Customer Experience Management Firms",
    ],
  },
  {
    name: "Finance and Banking",
    value: "finance_banking",
    subcategories: [
      "Banks and Financial Institutions",
      "Insurance Companies",
      "Investment Firms",
      "Accounting and Audit Firms",
    ],
  },
  {
    name: "Aviation and Air Transport Management",
    value: "aviation_air_transport",
    subcategories: [
      "Airlines",
      "Airport Management Firms",
      "Aviation Training Centers",
      "Aircraft Maintenance Companies",
    ],
  },
  {
    name: "Food and Beverage",
    value: "food_beverage",
    subcategories: [
      "Restaurants and Cafes",
      "Food Manufacturing Companies",
      "Catering Services",
      "Food Retailers and Distributors",
    ],
  },
  {
    name: "Tourism and Hospitality",
    value: "tourism_hospitality",
    subcategories: [
      "Hotels and Resorts",
      "Travel Agencies",
      "Tour Operators",
      "Event Planning Companies",
    ],
  },
  {
    name: "Retail and Consumer Goods",
    value: "retail_consumer_goods",
    subcategories: [
      "Retail Chains and Stores",
      "E-commerce Businesses",
      "Consumer Goods Manufacturers",
      "Fashion and Apparel Companies",
    ],
  },
  {
    name: "Real Estate",
    value: "real_estate",
    subcategories: [
      "Real Estate Agencies",
      "Property Management Firms",
      "Construction Companies",
      "Real Estate Developers",
    ],
  },
  {
    name: "Manufacturing and Industrial",
    value: "manufacturing_industrial",
    subcategories: [
      "Manufacturing Plants",
      "Industrial Equipment Companies",
      "Automotive Manufacturers",
      "Electronics and Electrical Goods Companies",
    ],
  },
  {
    name: "Legal and Professional Services",
    value: "legal_professional_services",
    subcategories: [
      "Law Firms",
      "Consulting Firms",
      "Accounting Firms",
      "Marketing and Advertising Agencies",
    ],
  },
  {
    name: "Nonprofit and Charitable Organizations",
    value: "nonprofit_charitable",
    subcategories: [
      "Charities",
      "Non-Governmental Organizations (NGOs)",
      "Social Enterprises",
      "Foundations",
    ],
  },
  {
    name: "Energy and Utilities",
    value: "energy_utilities",
    subcategories: [
      "Oil and Gas Companies",
      "Renewable Energy Firms",
      "Utility Providers",
      "Energy Consulting Firms",
    ],
  },
  {
    name: "Media and Entertainment",
    value: "media_entertainment",
    subcategories: [
      "Media Production Companies",
      "Broadcasting Companies",
      "Publishing Houses",
      "Entertainment Venues",
    ],
  },
  {
    name: "Transportation and Logistics",
    value: "transportation_logistics",
    subcategories: [
      "Logistics and Freight Companies",
      "Transportation Services",
      "Shipping and Delivery Companies",
      "Warehousing and Distribution Firms",
    ],
  },
  {
    name: "Agriculture and Agribusiness",
    value: "agriculture_agribusiness",
    subcategories: [
      "Farming Operations",
      "Agribusiness Companies",
      "Food Processing Firms",
    ],
  },
  {
    name: "Sports and Recreation",
    value: "sports_recreation",
    subcategories: [
      "Sports Teams and Clubs",
      "Fitness Centers",
      "Recreational Facilities",
      "Sports Management Firms",
    ],
  },
  {
    name: "Telecommunications",
    value: "telecommunications",
    subcategories: [
      "Telecom Service Providers",
      "Mobile Network Operators",
      "Internet Service Providers",
      "Telecommunication Equipment Manufacturers",
    ],
  },
  {
    name: "Institutions of Research",
    value: "institutions_research",
    subcategories: [
      "Research Institutes",
      "Academic Research Centers",
      "Corporate R&D Departments",
    ],
  },
  {
    name: "Other",
    value: "other",
  },
];

const questions = [
  "Briefly describe your company's core activities and services:",
  "What are the main challenges your company is currently facing?",
  "Are there specific goals you wish to achieve through our services?",
];

const cities = [
  { value: "riyadh", name: "Riyadh" },
  { value: "jeddah", name: "Jeddah" },
  { value: "dammam", name: "Dammam" },
  { value: "khobar", name: "Khobar" },
  { value: "mecca", name: "Mecca" },
  { value: "medina", name: "Medina" },
  { value: "dhahran", name: "Dhahran" },
  { value: "taif", name: "Taif" },
  { value: "buraidah", name: "Buraidah" },
  { value: "hufuf", name: "Hufuf" },
  { value: "abha", name: "Abha" },
  { value: "najran", name: "Najran" },
  { value: "jubail", name: "Jubail" },
  { value: "khamis_mushait", name: "Khamis Mushait" },
  { value: "al_qatif", name: "Al Qatif" },
  { value: "al_hasa", name: "Al Hasa" },
  { value: "al_baha", name: "Al Baha" },
  { value: "yamb", name: "Yamb" },
  { value: "jizan", name: "Jizan" },
  { value: "rafha", name: "Rafha" },
  { value: "hail", name: "Hail" },
  { value: "other", name: "Other" },
  { value: "gcc", name: "GCC Countries" },
];

const gccCountries = ["UAE", "Qatar", "Oman", "Bahrain", "Kuwait"];

const coachingTypes = [
  "Relationship coaching",
  "Life coaching",
  "Business coaching",
  "Career coaching",
  "Child coaching",
];

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("business");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FormValues) => {
    // setIsSubmitting(true);
    // console.log(data);
    const formData = {
      name: data.name,
      email: data.email,
      telephone: data.telephone,
      coachingType: data.coachingType,
      preferredDate: data.preferredDate,
      message: data.message,
      companyName: data.companyName,
      responsibleName: data.responsibleName,
      industry: data.industry,
      city: data.city,
      country: selectedCity === "gcc" ? data.country : undefined, // Only include country if GCC is selected
      otherCity: selectedCity === "other" ? data.otherCity : undefined, // Only include other city if Other City is selected
      website: data.website,
      phone: data.phone,
      question1: data.question1,
      question2: data.question2,
      question3: data.question3,
    };

    // Construct the message content based on the active tab
    const individual = `CLIENT BOOKING\nClient Type: ${activeTab}\nName: ${data.name}\nEmail: ${data.email}\nTelephone: ${data.telephone}\nCoaching Type: ${data.coachingType}\nPreferred Date: ${data.preferredDate}\nMessage: ${data.message}`;

    const business = `CLIENT BOOKING\nClient Type: ${activeTab}\nCompany Name: ${
      formData.companyName
    }\nResponsible Name: ${formData.responsibleName}\nIndustry: ${
      formData.industry
    }\nCity: ${formData.city}\n${
      formData.country
        ? `Country: ${formData.country}\n`
        : formData.otherCity
        ? `Other: ${formData.otherCity}\n`
        : ""
    }Website: ${formData.website}\nPhone: ${formData.phone}\nQuestions:\n1- ${
      formData.question1
    }\n2- ${formData.question2}\n3- ${formData.question3}`;

    const messageContent = activeTab === "individual" ? individual : business;

    console.log(messageContent);

    const templateParams = {
      to_name: "Saeed Team",
      message: messageContent,
    };

    emailjs
      .send(
        "sa3ed",
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_JS
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            t(
              "Form submitted successfully 🎉\n Saeed team will contact you soon!"
            )
          );
          reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          toast.error(t("Failed to submit the form, please try again later"));
          setIsSubmitting(false);
        }
      );
  };

  const handleIndustryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedIndustry(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const t = useTranslations("Booking");

  return (
    <div className="overflow-scroll border flex flex-col justify-center items-center border-gray-100 space-y-4 max-w-screen-xl bg-white p-6 m-3 lg:p-10 shadow-2xl rounded-lg border-t-8 border-r-8 border-t-[#1f8598] border-r-[#ed8972]">
      {/* <h1 className="mb-6 text-xl font-semibold lg:text-2xl self-center">
        {t("Booking Form")}
      </h1> */}
      <div className="shadow  h-10 mt-4 flex relative items-center w-72 self-center font-medium rounded-md overflow-hidden">
        <button
          className={`w-1/2 flex justify-center py-2  ${
            activeTab === "individual"
              ? "bg-[#1f8598] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("individual")}
        >
          {t("Individual")}
        </button>
        <button
          className={`w-1/2 flex justify-center py-2  ${
            activeTab === "business" ? "bg-[#1f8598] text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("business")}
        >
          {t("Business")}
        </button>
      </div>
      {/* @ts-ignore */}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl m-auto">
        {activeTab === "individual" ? (
          <>
            <input
              type="hidden"
              value="individual"
              // {...register("clientType")}
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label>{t("Name:")}</label>
                <input
                  type="text"
                  placeholder={t("Name")}
                  {...register("name", {
                    required: t("This field is required"),
                  })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">
                    {errors.name.message?.toString()}
                  </p>
                )}
              </div>
              <div>
                <label>{t("Email:")}</label>
                <input
                  type="email"
                  placeholder={t("Email")}
                  {...register("email", {
                    required: t("This field is required"),
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: t("Entered value does not match email format"),
                    },
                  })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.email.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="pt-4">
              <label>{t("Telephone:")}</label>
              <input
                type="tel"
                placeholder={t("Telephone")}
                {...register("telephone", {
                  required: t("This field is required"),
                })}
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
              {errors.telephone && (
                <p className="text-red-500 text-sm">
                  {errors.telephone.message?.toString()}
                </p>
              )}
            </div>
            <div className="grid gap-4 md:grid-cols-2 pt-4">
              <div>
                <label>{t("Coaching Type:")}</label>
                <select
                  {...register("coachingType", {
                    required: t("This field is required"),
                  })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 cursor-pointer"
                >
                  <option value="" disabled selected>
                    {t("Select Coaching Type")}
                  </option>
                  {coachingTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {t(type)}
                    </option>
                  ))}
                </select>
                {errors.coachingType && (
                  <p className="text-red-500 text-sm">
                    {errors.coachingType.message?.toString()}
                  </p>
                )}
              </div>
              <div>
                <label>{t("Preferred Date:")}</label>
                <input
                  type="date"
                  {...register("preferredDate", {
                    required: t("This field is required"),
                  })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 cursor-pointer"
                />
                {errors.preferredDate && (
                  <p className="text-red-500 text-sm">
                    {errors.preferredDate.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="py-4">
              <label>{t("Message:")}</label>
              <textarea
                rows={4}
                {...register("message", {
                  required: t("This field is required"),
                })}
                className="mt-2 w-full rounded-md bg-gray-100 p-1"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">
                  {errors.message.message?.toString()}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <input type="hidden" value="business" {...register("clientType")} />
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label>{t("Company Name:")}</label>
                <input
                  type="text"
                  placeholder={t("Company Name")}
                  {...register("companyName", {
                    required: t("This field is required"),
                  })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">
                    {errors.companyName.message?.toString()}
                  </p>
                )}
              </div>
              <div>
                <label>{t("Name:")}</label>
                <input
                  type="text"
                  placeholder={t("Name")}
                  {...register("responsibleName", {
                    required: t("This field is required"),
                  })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                {errors.responsibleName && (
                  <p className="text-red-500 text-sm">
                    {errors.responsibleName.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="pt-4">
              <div className="flex flex-col mb-4">
                <label className="mb-2">{t("Industry:")}</label>
                <select
                  {...register("industry", {
                    required: activeTab === "business",
                  })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 cursor-pointer"
                  onChange={handleIndustryChange}
                >
                  <option value="" disabled selected>
                    {t("Select Industry")}
                  </option>
                  {industries.map((industry, index) => (
                    <option key={index} value={industry.name}>
                      {t(industry.name)}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <span className="text-red-500 text-sm">
                    {t("This field is required")}
                  </span>
                )}
              </div>

              {selectedIndustry && (
                <div className="flex flex-col mb-4">
                  {industries.find((ind) => ind.value === selectedIndustry)
                    ?.subcategories && (
                    <div className="space-y-2 pl-2">
                      {industries
                        .find((industry) => industry.value === selectedIndustry)
                        ?.subcategories?.map((subIndustry, index) => (
                          <p key={index} className="text-gray-500 text-sm">
                            {`- ${t(subIndustry)}`}
                          </p>
                        ))}
                    </div>
                  )}
                </div>
              )}

              {selectedIndustry === "other" && (
                <div className="flex flex-col mb-4">
                  <label className="font-semibold mb-2">
                    {t("Other Industry")}
                  </label>
                  <input
                    {...register("otherIndustry", {
                      required: selectedIndustry === "other",
                    })}
                    className="px-4 py-2 border rounded-lg"
                    placeholder={t("Please specify your industry")}
                  />
                  {errors.otherIndustry && (
                    <span className="text-red-500 text-sm">
                      {t("This field is required")}
                    </span>
                  )}
                </div>
              )}
            </div>
            <div className="pt-4">
              <label>{t("City:")}</label>
              <select
                {...register("city", { required: t("This field is required") })}
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 cursor-pointer"
                onChange={handleCityChange}
              >
                <option value="" disabled selected>
                  {t("Select City")}
                </option>
                {cities.map((city) => (
                  <option key={city.value} value={city.value}>
                    {t(city.name)}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className="text-red-500 text-sm">
                  {errors.city.message?.toString()}
                </p>
              )}
            </div>
            {selectedCity === "gcc" && (
              // select from gcc countries
              <div className="pt-4">
                <label>{t("Country:")}</label>
                <select
                  {...register("country", { required: "Country is required" })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 cursor-pointer"
                >
                  <option value="" disabled selected>
                    {t("Select Country")}
                  </option>
                  {gccCountries.map((country, index) => (
                    <option key={index} value={country}>
                      {t(country)}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-sm">
                    {errors.country.message?.toString()}
                  </p>
                )}
              </div>
            )}
            {selectedCity === "other" && (
              <div className="pt-4">
                <label>{t("other:")}</label>
                <input
                  type="text"
                  placeholder={t("Other City")}
                  {...register("otherCity", { required: "City is required" })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                {errors.country && (
                  <p className="text-red-500 text-sm">
                    {errors.country.message?.toString()}
                  </p>
                )}
              </div>
            )}
            <div className="pt-4">
              <label>{t("Website:")}</label>
              <input
                type="text"
                placeholder="https://example.com"
                {...register("website", { required: t("Website is required") })}
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
              {errors.website && (
                <p className="text-red-500 text-sm">
                  {errors.website.message?.toString()}
                </p>
              )}
            </div>
            <div className="pt-4">
              <label>{t("Email Address:")}</label>
              <input
                type="email"
                placeholder="Info@example.com"
                {...register("email", {
                  required: t("Email is required"),
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format",
                  },
                })}
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
            <div className="grid gap-4 lg:grid-cols-2 pt-4">
              <div>
                <label>{t("Phone:")} </label>
                <input
                  type="text"
                  placeholder="+543 5445 0543"
                  {...register("phone", { required: t("Phone is required") })}
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">
                    {errors.phone.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="my-16">
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
            <div className="flex flex-col gap-8">
              {questions.map((question, index) => (
                <div key={index}>
                  <label className="">{`${index + 1}- ${t(question)}`}</label>
                  <textarea
                    rows={4}
                    {...register(`question${index + 1}`, {
                      required: `Answer to question ${index + 1} is required`,
                    })}
                    className="mt-2 w-full rounded-md bg-gray-100 p-2 "
                  ></textarea>
                  {errors[`question${index + 1}`] && (
                    <p className="text-red-500 text-sm">
                      {t(errors[`question${index + 1}`]?.message?.toString())}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
        <div>
          <button
            type="submit"
            className={`mt-5 w-full rounded-md bg-[#1f8598] p-2 text-center font-semibold text-white cursor-pointer  disabled:opacity-65 disabled:cursor-not-allowed `}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <svg
                aria-hidden="true"
                className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : activeTab === "individual" ? (
              t("Submit")
            ) : (
              t("Get Started")
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
