import { personalInfo } from "@/data";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.title,
    "description": personalInfo.summary,
    "url": "https://karansinghsodhi.vercel.app",
    "email": personalInfo.email,
    "telephone": personalInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": personalInfo.location
    },
    "sameAs": [
      "https://github.com/karan766",
      "https://www.linkedin.com/in/karan-singh-sodhi-a53021228/"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript", 
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "AWS",
      "Docker",
      "Full Stack Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Dr. A.P.J. Abdul Kalam Technical University"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}