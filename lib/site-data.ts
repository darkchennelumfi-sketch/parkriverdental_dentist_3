export type Hour = {
  day: string;
  dayOfWeek: number;
  open?: string;
  close?: string;
  closed?: boolean;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: "shield" | "layers" | "sparkles" | "smile";
  span: "wide" | "narrow";
};

export type PatientLink = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
  icon: "calendar" | "user" | "wallet" | "account";
};

export const siteData = {
  name: "Park River Dental",
  tagline: "Gentle Family & Cosmetic Dentistry",
  description:
    "Park River Dental provides gentle family and cosmetic dentistry in Park River, North Dakota. Call (701) 284-6131 or send a message — a member of our team will respond momentarily.",
  phone: {
    display: "(701) 284-6131",
    href: "tel:+17012846131",
  },
  email: "ParkRiverDentalPC@polarcomm.com",
  address: {
    line1: "202 Park St. E",
    line2: "along Hwy. 17",
    city: "Park River",
    state: "ND",
    zip: "58270",
  },
  mailing: {
    line1: "PO Box 662",
    city: "Park River",
    state: "ND",
    zip: "58270-4022",
  },
  doctors: [
    { name: "Dr. Nicholas Beneda", initials: "NB", tone: "brand" },
    { name: "Dr. Brian Larson", initials: "BL", tone: "moss" },
    { name: "Dr. Gretchen Brummond", initials: "GB", tone: "copper" },
  ],
  hours: [
    { day: "Monday", dayOfWeek: 1, open: "8:00 AM", close: "5:00 PM" },
    { day: "Tuesday", dayOfWeek: 2, open: "8:00 AM", close: "5:00 PM" },
    { day: "Wednesday", dayOfWeek: 3, open: "8:00 AM", close: "5:00 PM" },
    { day: "Thursday", dayOfWeek: 4, open: "8:00 AM", close: "5:00 PM" },
    { day: "Friday", dayOfWeek: 5, closed: true },
  ] satisfies Hour[],
  services: [
    {
      slug: "preventive-family-dentistry",
      title: "Preventive Family Dentistry",
      description:
        "Routine checkups, cleanings, and thoughtful guidance for every stage of family life.",
      icon: "shield",
      span: "wide",
    },
    {
      slug: "dental-implants-tooth-replacement",
      title: "Dental Implants & Tooth Replacement",
      description:
        "Considered options to restore missing teeth, comfortable function, and confidence.",
      icon: "layers",
      span: "narrow",
    },
    {
      slug: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      description:
        "Refined treatment plans designed around the look and feel of your smile.",
      icon: "sparkles",
      span: "narrow",
    },
    {
      slug: "invisalign",
      title: "Invisalign",
      description:
        "A clear-aligner path toward a straighter smile, planned with your goals in mind.",
      icon: "smile",
      span: "wide",
    },
  ] satisfies Service[],
  patientLinks: [
    {
      title: "Request an appointment",
      description: "Call or send a message — we will confirm the details with you.",
      href: "#appointment",
      icon: "calendar",
    },
    {
      title: "New patients",
      description: "Have questions before your first visit? Start with a conversation.",
      href: "#contact",
      icon: "user",
    },
    {
      title: "Financing & dental insurance",
      description: "Call our office to talk through financing and insurance questions.",
      href: "tel:+17012846131",
      icon: "wallet",
    },
    {
      title: "My Account",
      description: "Access your existing patient account through xldent.",
      href: "https://my.xldent.com/11134b3939cab4a8",
      external: true,
      icon: "account",
    },
  ] satisfies PatientLink[],
  faqs: [
    {
      question: "Where is Park River Dental located?",
      answer:
        "You will find us at 202 Park St. E (along Hwy. 17), Park River, ND 58270.",
    },
    {
      question: "What are your office hours?",
      answer:
        "Our office is open Monday through Thursday from 8:00 AM to 5:00 PM. We are closed on Friday.",
    },
    {
      question: "How do I request an appointment?",
      answer:
        "Call our office at (701) 284-6131 or use the appointment form on this page. A member of our team will respond momentarily.",
    },
    {
      question: "What should I do in a dental emergency?",
      answer:
        "If you have a dental emergency and need immediate attention, please call our office at (701) 284-6131. We will help you get care as soon as possible.",
    },
    {
      question: "Where should I send mail?",
      answer:
        "Our mailing address is PO Box 662, Park River, ND 58270-4022.",
    },
    {
      question: "What dental services are available?",
      answer:
        "Our services include Preventive Family Dentistry, Dental Implants & Tooth Replacement, Cosmetic Dentistry, and Invisalign. Call us if you are unsure where to begin.",
    },
  ],
  navigation: [
    { label: "Home", href: "#top" },
    { label: "Our Doctors", href: "#doctors" },
    { label: "Services", href: "#services" },
    { label: "Patient Info", href: "#patient-center" },
    { label: "Contact", href: "#contact" },
  ],
  social: {
    facebook: "https://www.facebook.com/parkriverdental/",
    google:
      "https://www.google.com/search?q=Park+River+Dental&oq=Park+River+Dental&aqs=chrome..69i57j69i60l3j69i59.3903j0j4&sourceid=chrome&ie=UTF-8#lrd=0x52c4741717d1e741:0x3ae95a26872655bb,1,,,",
    myAccount: "https://my.xldent.com/11134b3939cab4a8",
    privacyPolicy: "https://parkriverdental.com/privacy-policy/",
  },
  map: {
    query: "202 Park St. E, Park River, ND 58270",
    url: "https://www.google.com/maps/search/?api=1&query=202+Park+St.+E%2C+Park+River%2C+ND+58270",
  },
  copyright: "All rights reserved. © Copyright 2026. Website design by Webaloo.",
  webaloo: "http://www.webaloo.com",
} as const;

export const fullAddress = `${siteData.address.line1}, ${siteData.address.city}, ${siteData.address.state} ${siteData.address.zip}`;
