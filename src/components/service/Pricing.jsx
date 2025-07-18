import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PricingCard from '../service/PricingCard'
import SubscriptionForm from '../form/OrderForm'
import { AuthContext } from '../../admin/context/AuthContext'
import api from '../../admin/services/api'

const globalStyles = `
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}

body.modal-open {
  overflow: hidden;
}

/* Pricing Card Styles */
.pricing-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
}

.pricing-card h3 {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
}

.pricing-card .price-section {
  text-align: center;
  margin-bottom: 1rem;
}

.pricing-card .price-section .price {
  font-size: 1.875rem;
  font-weight: bold;
  color: #1a3c34;
}

.pricing-card .price-section .period {
  font-size: 0.875rem;
  color: #6b7280;
}

.pricing-card ul {
  margin-bottom: 1.5rem;
  flex: 1;
}

.pricing-card ul li {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
}

.pricing-card ul li span:first-child {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
}

.pricing-card button {
  text-align: center;
  width: 100%;
}
`

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('regular')
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { user, token } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isCustomModalOpen) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => document.body.classList.remove('modal-open')
  }, [isCustomModalOpen])

  useEffect(() => {
    console.log('Current user state in PricingSection:', user)
  }, [user])

  const features = {
    regular: [
      'Personalized Diet Plans',
      'Weekly Progress Tracking',
      'Chat/Call Support',
      'Kitchen-Based Recipes',
      'Lifestyle Tips',
    ],
    monthly: [
      '24 Fresh Meals',
      'Customized Nutrition',
      'Organic Ingredients',
      'Dietitian-Designed',
      'Free Delivery in Jaipur',
    ],
    singleMeal: [
      'Nutrient-Dense',
      'Fresh Ingredients',
      'Customized for Health',
      'Calorie-Controlled',
      'Same-Day Delivery',
    ],
    weeklyMeal: [
      '7 Customized Meals',
      'Variety of Salads',
      'Nutritionist-Approved',
      'Free Delivery in Jaipur',
      'Flexible Scheduling',
    ],
  }

  const highlightedFeatures = {
    '1 Month': ['Personalized Diet Plans', 'Weekly Progress Tracking'],
    '2 Months': [
      'Personalized Diet Plans',
      'Weekly Progress Tracking',
      'Chat/Call Support',
    ],
    '3 Months': [
      'Personalized Diet Plans',
      'Weekly Progress Tracking',
      'Chat/Call Support',
      'Kitchen-Based Recipes',
    ],
    '6 Months': [
      'Personalized Diet Plans',
      'Weekly Progress Tracking',
      'Chat/Call Support',
      'Kitchen-Based Recipes',
      'Lifestyle Tips',
    ],
    'Monthly Meal Plan': [
      '24 Fresh Meals',
      'Customized Nutrition',
      'Organic Ingredients',
    ],
    'Single Meal': ['Nutrient-Dense', 'Fresh Ingredients'],
    'Weekly Meal Plan': [
      '7 Customized Meals',
      'Free Delivery in Jaipur',
      'Nutritionist-Approved',
    ],
  }

  const menuItems = [
    { name: 'Veggie Delight', price: '₹250' },
    { name: 'High Protein Salad', price: '₹299' },
    { name: 'Anti-Ageing Salad', price: '₹325' },
    { name: 'Classic Egg Salad', price: '₹300' },
    { name: 'Pasta Salad', price: '₹250' },
    { name: 'Rainbow Fruit Salad', price: '₹250' },
    { name: 'Paneer Tikka Salad', price: '₹350' },
    { name: 'Protein Smoothie', price: '₹300' },
    { name: 'Salad + Smoothie Combo', price: '₹599' },
    { name: 'Detox Drinks', price: '₹150' },
    { name: 'Burrito Bowl', price: 'Price TBD' },
  ]

  const openCustomModal = () => setIsCustomModalOpen(true)
  const closeCustomModal = () => {
    setIsCustomModalOpen(false)
    setError(null)
  }

  const mapPlanType = (planTitle) => {
    const planMap = {
      '1 Month': 'one_month',
      '2 Months': 'two_months',
      '3 Months': 'three_months',
      '6 Months': 'six_months',
      'Single Meal': 'single_meal',
      'Weekly Meal Plan': 'weekly_meal_plan',
      'Monthly Meal Plan': 'monthly_meal_plan',
      'Custom Nutrition Plan': 'custom',
    }
    const mappedPlan = planMap[planTitle] || 'custom'
    console.log(`Mapping planTitle: ${planTitle} to plan_type: ${mappedPlan}`)
    return mappedPlan
  }

  const handlePayment = async (formData) => {
    console.log('Token:', token)
    console.log('User:', user)
    console.log('FormData:', formData)

    if (!token) {
      setError('Please log in to proceed with payment.')
      navigate('/login')
      return
    }

    setLoading(true)
    setError(null)

    const amount =
      parseFloat(formData.price.replace('₹', '').replace(',', '')) || 1
    if (amount <= 0) {
      setError('Amount must be greater than 0')
      setLoading(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const customerEmail = formData.customer_email || user?.email
    if (!emailRegex.test(customerEmail)) {
      setError('Please provide a valid email address')
      setLoading(false)
      return
    }

    const customerPhone = formData.customer_phone.startsWith('+91')
      ? formData.customer_phone.slice(3)
      : formData.customer_phone

    const orderId = `ORDER_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`

    const payload = {
      amount,
      currency: 'INR',
      link_purpose: formData.link_purpose || 'subscription',
      customer_name: formData.customer_name || 'Anonymous',
      customer_email: customerEmail,
      customer_phone: customerPhone,
      plan_type: mapPlanType(formData.planTitle),
      start_date: formData.start_date,
      end_date: formData.end_date,
      address: formData.address,
      order_id: orderId,
      return_url: `${window.location.origin}/payment-callback?order_id=${orderId}`,
    }

    try {
      const response = await api.post('/payments/create-payment-link', payload)
      console.log('Payment link creation response:', response.data)

      const paymentLink = response.data.data?.link_url

      if (paymentLink) {
        const paymentWindow = window.open(paymentLink, '_blank')
        if (!paymentWindow) {
          setError(
            'Failed to open payment page. Please allow pop-ups and try again.'
          )
          setLoading(false)
          return
        }
        setError(
          'Please complete the payment in the new tab. You will be redirected back after payment, or return here to check your order status.'
        )
      } else {
        throw new Error('Payment link not found in response')
      }
    } catch (err) {
      console.error('Payment error:', err)
      setError(
        err.response?.data?.message ||
          err.message ||
          'An error occurred during payment initiation'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 bg-nutricare-bg-light relative overflow-hidden">
      <style>{globalStyles}</style>

      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-nutricare-primary-light opacity-5 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-nutricare-green opacity-5 animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-nutricare-primary-dark opacity-5 animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-nutricare-primary-light bg-opacity-10 text-nutricare-primary-dark font-medium mb-4">
            Nutridietmitra Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-nutricare-text-dark">
            Tailored Nutrition for Your Health
          </h2>
          <p className="text-lg text-nutricare-text-gray mb-8">
            Explore subscription and food delivery plans crafted by Dt. Tanu
            Bhargava for your health goals, using kitchen-based, no-supplement
            nutrition.
          </p>

          <div className="inline-flex bg-white p-1 rounded-full shadow-sm">
            <button
              className={`py-2 px-4 sm:px-6 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'regular'
                  ? 'bg-nutricare-green text-white shadow-md'
                  : 'text-nutricare-text-gray hover:text-nutricare-primary-dark'
              }`}
              onClick={() => setActiveTab('regular')}
            >
              Subscription Plans
            </button>
            <button
              className={`py-2 px-4 sm:px-6 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'monthly'
                  ? 'bg-nutricare-green text-white shadow-md'
                  : 'text-nutricare-text-gray hover:text-nutricare-primary-dark'
              }`}
              onClick={() => setActiveTab('monthly')}
            >
              Food Delivery
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        {activeTab === 'regular' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <PricingCard
              className="pricing-card"
              title="1 Month"
              price="₹4,000"
              period="month"
              features={features.regular}
              highlightedFeatures={highlightedFeatures['1 Month']}
              onSubscribe={handlePayment}
              user={user}
            />
            <PricingCard
              className="pricing-card"
              title="2 Months"
              price="₹7,000"
              period="2 months"
              features={features.regular}
              highlightedFeatures={highlightedFeatures['2 Months']}
              onSubscribe={handlePayment}
              user={user}
            />
            <PricingCard
              className="pricing-card"
              title="3 Months"
              price="₹9,000"
              period="3 months"
              isFeatured={true}
              features={features.regular}
              highlightedFeatures={highlightedFeatures['3 Months']}
              onSubscribe={handlePayment}
              user={user}
            />
            <PricingCard
              className="pricing-card"
              title="6 Months"
              price="₹18,000"
              period="6 months"
              features={features.regular}
              highlightedFeatures={highlightedFeatures['6 Months']}
              onSubscribe={handlePayment}
              user={user}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <PricingCard
              className="pricing-card"
              title="Single Meal"
              price="₹200"
              period="meal"
              features={features.singleMeal}
              highlightedFeatures={highlightedFeatures['Single Meal']}
              onSubscribe={handlePayment}
              user={user}
            />
            <PricingCard
              className="pricing-card"
              title="Weekly Meal Plan"
              price="₹1,400"
              period="week"
              isFeatured={true}
              features={features.weeklyMeal}
              highlightedFeatures={highlightedFeatures['Weekly Meal Plan']}
              onSubscribe={handlePayment}
              user={user}
            />
            <PricingCard
              className="pricing-card"
              title="Monthly Meal Plan"
              price="₹4,800"
              period="month"
              features={features.monthly}
              highlightedFeatures={highlightedFeatures['Monthly Meal Plan']}
              onSubscribe={handlePayment}
              user={user}
            />
          </div>
        )}

        {/* Two-Column Layout for How It Works and Our Meal Offerings - Full Width */}
        <div className="mt-12">
          <div className="px-4 max-w-7xl mx-auto">
            {/* Our Meal Offerings (2/3 Width) */}
            <div className="bg-white rounded-lg shadow-sm p-6  px-4 sm:px-6 lg:px-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-nutricare-primary-dark mb-6 text-center">
                Our Meal Offerings
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-nutricare-text-dark font-medium text-sm sm:text-base">
                      {item.name}
                    </span>
                    <span className="text-nutricare-green font-medium text-sm sm:text-base">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Availability Information */}
        <div className="mt-12 text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-nutricare-primary-dark mb-3">
            Available in Jaipur Only
          </h3>
          <div className="text-nutricare-text-gray space-y-2 text-sm">
            <p>
              <span className="font-medium">Minimum Order:</span> ₹500
            </p>
            <p>
              <span className="font-medium">Delivery:</span> Charges extra on
              all plans
            </p>
            <p>
              <span className="font-medium">Ordering:</span> Place orders 1 day
              prior for timely delivery
            </p>
            <p>
              <span className="font-medium text-nutricare-green">
                Gym Members:
              </span>{' '}
              10% discount
            </p>
          </div>
        </div>

        <SubscriptionForm
          isOpen={isCustomModalOpen}
          onClose={closeCustomModal}
          planTitle="Custom Nutrition Plan"
          planPrice="Custom"
          planType="subscription"
          planPeriod="custom"
          onSubmit={handlePayment}
          loading={loading}
          error={error}
          user={user}
        />

        <div className="mt-12 text-center px-4 sm:px-6 lg:px-8">
          <p className="text-nutricare-text-gray text-sm sm:text-base">
            <span className="font-medium text-nutricare-primary-dark">
              Trusted by 5000+ Clients
            </span>{' '}
            - Join Nutridietmitra for science-backed, compassionate nutrition
            care.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
