import ContactHeader from "./ContactHeader";
import ContactForm from "./Form/ContactForm";
import SocialsFetcher from "./SocialsFetcher";
import { SocialsLayout } from "./SocialsLayout";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 page-section">
      <ContactHeader />
      <SocialsLayout>
        <SocialsFetcher />
      </SocialsLayout>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
