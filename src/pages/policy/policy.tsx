import { FC } from "react";
import { NavBar } from "../../components";
import Footer from "../../components/common/footer/footer";
import Story from "../../components/common/story/story";
import TopButton from "../../components/common/top-button/top-button";
import { PolicyProps } from "./policy.t";

const Policy: FC<PolicyProps> = () => {
  return (
    <>
      <NavBar userExist={false} bg="#fafafa" isLanding={true} />
      <Story
        title="Xavfsizlik siyosati"
        texts1={
          <>
            <p>
              <b>
                In today's business world, companies depend heavily on data and
                information derived from it. Indeed, information is essential
                for all company employees, from the top executives to the
                operations level.
              </b>
            </p>
            <p>
              <b>
                Protecting data, especially private, personal information, is
                crucial in a complex world where so much depends upon it. The
                most important step for business owners to protect their
                customers' data is to create a concise and transparent Privacy
                Policy.
              </b>
            </p>
            <p>
              A Privacy Policy is a legal document, which informs your website's
              visitors about the data collected on them and how your company
              will use it.
            </p>
            <p>
              A good Privacy Policy should outline what data is being collected
              and explain why you're collecting it, who has access to it, and
              the time frame during which you plan to store it.
            </p>
            <p>
              It should also include any third parties with whom your company
              shares personal or private information, as well as any steps taken
              to ensure the security of such information.
            </p>
            <p>
              This article will cover the components of a good Privacy Policy
              and will help you better understand how to create one that builds
              trust and confidence in your customers and protects you against
              various liability issues. You'll also find examples of how other
              businesses have used Privacy Policies to comply with the law and
              inform customers about their privacy practices.
            </p>
            <p>
              We've also put together a sample Privacy Policy Template that you
              can use to help write your own.
            </p>
          </>
        }
        warning={
          <>
            <b>Download our Privacy Policy template by clicking here.</b> It's
            free.
          </>
        }
        subtitle="A Privacy Policy is Required by Law"
        texts2={
          <>
            <p>
              Privacy Policies are important because they're required by law to
              be posted on your website. You may be required to include specific
              clauses in your Privacy Policy, depending on the applicable laws
              within your area or where you are conducting business.
            </p>
            <p>
              In fact, privacy laws are in place in many countries around the
              globe, including the following:
            </p>
            <ul>
              <li>
                Canada's Personal Information Protection and Electronic
                Documents Act (PIPEDA)
              </li>
              <li>The California Online Privacy Protection Act (CalOPPA)</li>
              <li>The California Consumer Privacy Act (CCPA) </li>
              <li>Europe's General Data Protection Regulation (GDPR) </li>
              <li>Australia's Privacy Act The UK's Data Protection Act</li>
              <li>The UK's Data Protection Act</li>
            </ul>
          </>
        }
      />
      <TopButton />
      <Footer />
    </>
  );
};

export default Policy;
