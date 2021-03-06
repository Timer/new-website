import Layout from 'components/Layout';
import Hero from 'components/Hero';
import Highlight from 'components/Highlight';
import Quote from 'components/Quote';
import EnterpriseStrip, { Point } from 'components/EnterpriseStrip';
import LogosBar from 'components/LogosBar';
import Wrapper from 'components/Wrapper';
import TalkWithUs from 'components/TalkWithUs';

import Hashicorp from 'public/images/logos/hashicorp.svg';
import DeutscheTelekom from 'public/images/logos/deutsche-telekom.svg';
import Verizon from 'public/images/logos/verizon.svg';
import Nike from 'public/images/logos/nike.svg';
import Linkedin from 'public/images/logos/linkedin.svg';

import s from './style.css';

function Enterprise() {
  return (
    <Layout>
      <Hero
        over="DatoCMS for Enterprise"
        title={
          <>
            Enterprise grade <Highlight>content&nbsp;infrastructure</Highlight>
          </>
        }
        subtitle={
          <>
            Get dedicated onboarding service, premium technical support, private
            cloud and custom SLAs to gain the assurance your enterprise needs.
          </>
        }
      />

      <LogosBar
        title={
          <>
            We power experiences for <strong>over half a billion users</strong>{' '}
            with our Content Delivery API
          </>
        }
        clients={[DeutscheTelekom, Hashicorp, Verizon, Nike, Linkedin]}
      />

      <EnterpriseStrip
        title="Extend your team with support that works with you"
        description="Our dedicated solution engineers will consult you on the best way to integrate DatoCMS into your digital products and workflows."
      >
        <Point
          title="Shared Slack channel"
          description="Involve the whole team with a dedicated Slack channel."
        />
        <Point
          title="Onboarding Services"
          description="Add a DatoCMS integration expert to your project to help you jumpstart your architecture and get running faster."
        />
        <Point
          title="Custom SLA"
          description="We can tailor a solution to your specific use case, with dedicated priority, 24/7 support, and real-time scaling"
        />
      </EnterpriseStrip>

      <Quote
        quote={
          <>
            With DatoCMS we made the impossibile: we launched a successful
            omnichannel campaign in <Highlight>less than a month</Highlight>.
          </>
        }
        author="Tizio Caio, Chief Marketing Officer @BigshotFirm"
      />

      <EnterpriseStrip
        title="Full accountability and governance control"
        description="Enable your business to automate workflows, manage user permissions, stay compliant with data security regulations, and scale your organization."
      >
        <Point
          title="Granular roles and permissions"
          description="Assign the appropriate roles and permissions to your team members, precisely determining what actions they can perform."
        />
        <Point
          title="Audit logs"
          description="Capture every login and action in the system. Detailed, filterable, exportable, and accessible via API."
        />
        <Point
          title="Live sync backups"
          description="Store all the data, versioned, in your company Amazon AWS account."
        />
      </EnterpriseStrip>

      <Quote
        quote={
          <>
            We are <Highlight>beyond excited</Highlight> about the close
            relationship we have built between Dato and HashiCorp. It’s amazing.
            More than once, we have asked, ‘Hey, can we have this thing?’ and
            the next day we get back a response, ‘Oh yeah, here it is.’
            Unbelievable.
          </>
        }
        author="Jeff Escalante, Web Engineer Manager @ HashiCorp"
      />

      <EnterpriseStrip
        title="Robust data security, privacy and compliance"
        description="Security is something we take very seriously. DatoCMS customers rely on us to provide security features and tools that ensure their data is safe and remains secure."
      >
        <Point
          title="Two Factor Authentication"
          description="Secure logging in to your account with two layers of auth."
        />
        <Point
          title="Single Sign-On"
          description="Manage access to GraphCMS through your preferred identity provider."
        />
        <Point
          title="ISO 27001 and GDPR Compliance"
          description="We have a GDPR DPA and our data centers are ISO 27001, SOC 1 and SOC 2 compliant."
        />
      </EnterpriseStrip>

      <div className={s.talkWithUs}>
        <Wrapper>
          <a id="form" className={s.anchor} />
          <div className={s.talkWithUsInner}>
            <div className={s.talkWithUsIntro}>
              <div className={s.talkWithUsTitle}>Talk with us</div>
              <div className={s.talkWithUsDescription}>
                Our experts are available to answer any of your questions. We’re
                available in a number of ways, any time that you need us.
              </div>
            </div>
            <TalkWithUs />
          </div>
        </Wrapper>
      </div>
    </Layout>
  );
}

export default Enterprise;
