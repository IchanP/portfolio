import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center gap-16 col-span-2 py-24">
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

export default ContactSection;
