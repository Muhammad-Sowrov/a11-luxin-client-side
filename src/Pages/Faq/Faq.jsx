const Faq = () => {
  return (
    <div className="container mx-auto px-5 lg:h-[80vh]">
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            1. What is the check-in and check-out time for the hotel room?
          </div>
          <div className="collapse-content">
            <p>Check-in time is typically at 3:00 PM, and check-out is at 12:00 PM.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          2. Can I request an early check-in or late check-out? Is there an additional fee for this service?
          </div>
          <div className="collapse-content">
            <p>Early check-in and late check-out requests can often be accommodated but are subject to availability and may come with additional fees. It's best to contact the hotel in advance to arrange this.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          3. Do the hotel rooms have Wi-Fi, and is it complimentary?
          </div>
          <div className="collapse-content">
            <p>Most hotels offer complimentary Wi-Fi in their rooms. You can find the Wi-Fi network and password in the room or by asking at the front desk.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          Is room service available, and what are the hours of operation?
          </div>
          <div className="collapse-content">
            <p>Room service is often available, and hours of operation are usually provided in your room. You can order food and beverages to your room for an added convenience.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
           4. What is the cancellation policy for a hotel room reservation, and are there any penalties for late cancellations or no-shows?
          </div>
          <div className="collapse-content">
            <p>Cancellation policies can vary by hotel and rate type. It's important to review the specific terms of your reservation to understand the cancellation policy and any associated penalties for late cancellations or no-shows.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
