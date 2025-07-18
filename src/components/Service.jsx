import React, { useState } from 'react'
import {
  ClipboardCheck,
  Award,
  Globe,
  Dumbbell,
  Users,
  Clock,
  Heart,
  Star,
  Quote,
  ArrowRight,
} from 'lucide-react'
import HealthCoach from '/assets/Images/HealthCoach.jpg'
import Consultency from '../components/form/Consultency.jsx'

const processSteps = [
  {
    step: 'Book Your Consultation',
    price: '₹500',
    description:
      'Understand your body needs, health goals, and daily routine with our expert consultation.',
  },
  {
    step: 'Nutritional Assessment & Analysis',
    description:
      'Identify muscle mass, bone density, water percentage, and body fat to understand nutrient deficiencies and excesses.',
  },
  {
    step: 'Personalized Plan',
    description:
      'Receive a customized diet plan tailored to your medical history and preferences.',
  },
  {
    step: 'Track Progress & Stay Motivated',
    description:
      'Weekly follow-ups and motivational support to keep you on track toward your goals.',
  },
]

const Service = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

  const openConsultationForm = () => {
    setIsConsultationOpen(true)
  }

  const closeConsultationForm = () => {
    setIsConsultationOpen(false)
  }

  return (
    <section className="w-full py-12 bg-gray-50 font-sans">
      <div className="container mx-auto px-4 space-y-4">
        <div className="max-w-screen bg-nutricare-bg-light pt-4 rounded-xl">
          {/* Section Header */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-nutricare-primary-dark"></div>
              <span className="mx-3 text-nutricare-primary-dark font-medium text-sm tracking-wider">
                OUR APPROACH
              </span>
              <div className="h-px w-8 bg-nutricare-primary-dark"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              Why Nutridietmitra
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-justify">
              Your lifestyle. Your health. Your goals. Our expertise. With 17+
              years of expertise, Nutridietmitra has transformed 5000+ healthy
              clients globally through supervised, founder-led personalized
              consultations and customized plans. Led by a qualified dietitian
              and wellness coach, Dt. Tanu Bhargava, we offer globally
              certified, worldwide online consultations with constant ongoing
              support and progress tracking. Our practical, kitchen-based diets
              require no supplements, ensuring sustainable health without
              starvation or crash diets.
            </p>
          </div>

          {/* How It Works (1/3 Width) */}
          <div className=" rounded-lg shadow-sm p-6 lg:col-span-1 px-4 sm:px-6 lg:px-8 text-justify">
            <h3 className="text-xl sm:text-3xl font-semibold text-nutricare-primary-dark mb-6 text-center">
              How It Works
            </h3>
            <div className="">
              <div className="space-y-6 p-6 bg-nutricare-bg-light w-fit mx-auto rounded">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-nutricare-green text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="ml-3 flex-1">
                      <h4 className="text-base font-semibold text-nutricare-text-dark">
                        {step.step}{' '}
                        {step.price && (
                          <span className="text-nutricare-green text-sm">
                            ({step.price})
                          </span>
                        )}
                      </h4>
                      <p className="text-nutricare-text-gray text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Left Image Column */}
          <div className="hidden md:block lg:w-1/2 relative">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <img
                src={HealthCoach}
                alt="Nutridietmitra Nutrition Expertise"
                className="w-full h-full object-cover"
              />

              {/* Floating accent squares */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-nutricare-green opacity-90 z-20"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-nutricare-green opacity-90 z-20"></div>

              {/* Testimonial card (right) */}
              <div className="absolute bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl max-w-xs z-20">
                <div className="flex items-center space-x-2 mb-2">
                  <Quote className="w-4 h-4 text-nutricare-green" />
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm">
                  "Nutridietmitra’s PCOS plan transformed my health with
                  sustainable, delicious diets. I’m full of energy now!"
                </p>
                <div className="mt-3 flex items-center">
                  <div className="ml-3">
                    <p className="text-xs font-bold text-gray-800">
                      Anjali Mehta
                    </p>
                    <p className="text-xs text-gray-500">
                      PCOS Managed in 4 Months
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial card (left) */}
              <div className="absolute top-6 -left-6 bg-white p-4 rounded-lg shadow-xl max-w-xs z-20">
                <div className="flex items-center space-x-2 mb-2">
                  <Quote className="w-4 h-4 text-nutricare-green" />
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic text-sm">
                  "The diabetes plan helped me control my sugar levels
                  naturally. Truly life-changing!"
                </p>
                <div className="mt-3 flex items-center">
                  <div className="ml-3">
                    <p className="text-xs font-bold text-gray-800">
                      Rahul Sharma
                    </p>
                    <p className="text-xs text-gray-500">
                      Diabetes Improved in 3 Months
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="w-full lg:w-1/2 text-justify">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              {/* Features */}
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="group">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-nutricare-green bg-opacity-10 group-hover:bg-nutricare-green group-hover:bg-opacity-100 transition-all duration-300">
                        <ClipboardCheck className="w-6 h-6 text-nutricare-green group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-nutricare-green transition-colors duration-300 ">
                        Tailored Nutrition Plans
                      </h3>
                      <p className="text-gray-600">
                        Customized, kitchen-based diets with no starvation or
                        supplements, designed for weight management, diabetes
                        (maintaining blood sugar levels), thyroid (balancing T4
                        and T3), PCOD/PCOS, and disease management (e.g.,
                        arthritis, hormonal imbalances).
                      </p>
                      <div className="mt-3 h-px w-16 bg-nutricare-green opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-nutricare-green bg-opacity-10 group-hover:bg-nutricare-green group-hover:bg-opacity-100 transition-all duration-300">
                        <Award className="w-6 h-6 text-nutricare-green group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-nutricare-green transition-colors duration-300">
                        Expert Guidance
                      </h3>
                      <p className="text-gray-600">
                        Led by Dt. Tanu Bhargava, a qualified dietitian and
                        wellness coach with 17+ years of expertise, offering
                        globally certified, science-backed guidance with
                        constant support and progress tracking.
                      </p>
                      <div className="mt-3 h-px w-16 bg-nutricare-green opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-nutricare-green bg-opacity-10 group-hover:bg-nutricare-green group-hover:bg-opacity-100 transition-all duration-300">
                        <Globe className="w-6 h-6 text-nutricare-green group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-nutricare-green transition-colors duration-300">
                        Global Support
                      </h3>
                      <p className="text-gray-600">
                        Worldwide online consultations for 5000+ clients,
                        providing personalized care, ongoing support, and 100%
                        satisfaction with solutions that adjust to modern
                        lifestyles.
                      </p>
                      <div className="mt-3 h-px w-16 bg-nutricare-green opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="group">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-nutricare-green bg-opacity-10 group-hover:bg-nutricare-green group-hover:bg-opacity-100 transition-all duration-300">
                        <img
                          src="/Icon/Specialized.ico"
                          className="w-6 h-6 filter-accent"
                          alt="Specialized Nutrition Icon"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-nutricare-green transition-colors duration-300">
                        Specialized Nutrition Programs
                      </h3>
                      <p className="text-gray-600">
                        Tailored plans for child nutrition, sports performance,
                        pregnancy, and healthy glowing skin, plus sustainable
                        nutrient plans for athletes, PCOD/PCOS, and wellness
                        coaching with no supplements.
                      </p>
                      <div className="mt-3 h-px w-16 bg-nutricare-green opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              {/* <div className="mt-6">
                <button
                  onClick={openConsultationForm}
                  className="bg-nutricare-green text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:bg-opacity-90 transition duration-300 flex items-center"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div> */}
            </div>

            {/* Our Impact Section */}
            <div className="mt-6 bg-white p-4 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Our Impact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-nutricare-green" />
                  <div>
                    <p className="font-medium text-gray-800">5000+ Clients</p>
                    <p className="text-xs text-gray-600">
                      Transformed lives globally
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-nutricare-green" />
                  <div>
                    <p className="font-medium text-gray-800">17+ Years</p>
                    <p className="text-xs text-gray-600">
                      Expertise in nutrition
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-nutricare-green" />
                  <div>
                    <p className="font-medium text-gray-800">
                      100% Satisfaction
                    </p>
                    <p className="text-xs text-gray-600">
                      Personalized care guaranteed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Consultency
        isOpen={isConsultationOpen}
        onClose={closeConsultationForm}
      />
    </section>
  )
}

export default Service
