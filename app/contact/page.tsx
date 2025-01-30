const ContactForm = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-6 px-[10px] sm:px-0">
      <div className="max-w-3xl w-full postsBg p-8 rounded-lg shadow-md">

        {/*--==== CONTACT TITLE ====--*/}
        <h1 className="text-3xl font-bold text-[#8f6922] mb-6 text-center">Contact Us</h1>

        {/*--==== FORM ====--*/}
        <form className="space-y-6">

            {/*--==== NAME ====--*/}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8f6922] placeholder-gray-500"
                placeholder="Your Name"/>
            </div>

            {/*--==== EMAIL ====--*/}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8f6922] placeholder-gray-500"
                placeholder="Your Email"
                />
            </div>

            {/*--==== MESSAGE ====--*/}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                id="message"
                rows={5}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8f6922] placeholder-gray-500"
                placeholder="Your Message"></textarea>
            </div>

            {/*--==== BUTTON ====--*/}
            <button
            type="submit"
            className="w-full py-3 bg-[#8f6922] text-white rounded-lg hover:bg-[#704e16] transition">
            Send Message
            </button>
            
        </form>

      </div>
    </div>
  );
};

export default ContactForm;
