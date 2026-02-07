// Phoenix, Arizona Localized Content for Landing Page
import Link from 'next/link';

// 1. Localized Headline Section
// Replace the existing headline section with this content

const phoenixHeadlineSection = {
  heading: "Phoenix Senior Wellness Check-In Calls",
  subheading: "Helping Arizona healthcare providers stay connected with patients with affordable $20/month wellness calls. Perfect for the Valley's heat and sprawling neighborhoods."
};

// 2. Phoenix-Specific Messaging Section
// Add this new section after the "Stay Connected, Stay Informed" section

const PhoenixSpecificSection = () => {
  return (
    <section className="bg-[#f8f9ff] py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl lg:text-5xl font-bold text-[#1a2642] mb-8 text-center`}>
          Supporting Phoenix Seniors Through Every Season
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-[#1a2642] mb-4">
              Beat the Valley Heat
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Phoenix summers can be dangerous for seniors, with temperatures regularly exceeding 110°F. Daily check-ins ensure your loved ones are staying cool, hydrated, and safe during extreme heat waves.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#1a2642] font-bold">•</span>
                <span>Monitor for signs of heat-related illness</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1a2642] font-bold">•</span>
                <span>Remind seniors to use air conditioning and stay hydrated</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1a2642] font-bold">•</span>
                <span>Alert care teams if patients report heat concerns</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-[#1a2642] mb-4">
              Bridging Phoenix's Sprawling Distances
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              The Phoenix metro area spans over 14,000 square miles, making it challenging to check in on seniors regularly. Lola provides consistent daily contact no matter where you are in the Valley.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#1a2642] font-bold">•</span>
                <span>Stay connected across Phoenix's vast neighborhoods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1a2642] font-bold">•</span>
                <span>Reduce travel time across the metro area</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1a2642] font-bold">•</span>
                <span>Maintain connection during heavy traffic hours</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-[#1a2642] mb-4">
              Supporting Seasonal Residents
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Phoenix welcomes thousands of "snowbirds" each winter. Whether your loved ones are seasonal or year-round residents, Lola provides consistent care and connection.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#1a2642] font-bold">•</span>
                <span>Maintain check-ins across your patient population</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1a2642] font-bold">•</span>
                <span>Ensure consistent care during seasonal transitions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1a2642] font-bold">•</span>
                <span>Help seniors adjust to changing routines</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-[#1a2642] mb-4">
              Trusted by Phoenix Healthcare Providers
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Join Phoenix-area healthcare providers who rely on Positive Check to keep their senior loved ones safe, connected, and thriving in the Valley of the Sun.
            </p>
            <div className="mt-6">
              <Link 
                href="/contact"
                className="btn btn-primary"
              >
                Sign up now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Phoenix Testimonial
// Add this testimonial to the testimonial section or replace an existing one

const phoenixTestimonial = {
  quote: "Living in North Phoenix while my mom is in Chandler made daily check-ins difficult with my work schedule. Lola's calls give me peace of mind knowing she's safe during our hot summers, and I get updates even when I can't make the drive across town.",
  author: "M.R., Phoenix, Arizona"
};

// 4. Phoenix-Specific FAQ
// Add this to the existing FAQs

const phoenixFAQ = {
  question: "How does Positive Check help during Phoenix's extreme heat?",
  answer: "During Phoenix's hot summers, Lola can check if seniors are staying cool and hydrated, remind them to use air conditioning, and alert care teams if there are concerns about heat-related issues. This is especially important when temperatures exceed 110°F and heat-related illnesses become a serious risk for seniors."
};

// Implementation instructions:
// 1. Replace the headline section in landing-page.tsx with phoenixHeadlineSection
// 2. Add the PhoenixSpecificSection component after the "Stay Connected, Stay Informed" section
// 3. Add or replace a testimonial with phoenixTestimonial
// 4. Add the phoenixFAQ to the existing FAQs array
