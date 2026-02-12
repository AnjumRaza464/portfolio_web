import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Hafiz",
  lastName: "Anjum",
  name: `Hafiz Anjum`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "hafizanjumraza1993@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Stay updated with insights on software engineering, web development, and emerging technologies</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hafizanjum",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming ideas into robust software solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">ERP Systems</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    I'm Hafiz, a <Text as="span" size="xl" weight="strong">Software Engineer</Text> with expertise in web development, ERP systems, and <br /> emerging technologies. I bring technical solutions to complex business challenges.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hafiz Anjum is a Hyderabad-based Software Engineer with expertise in web development, ERP systems, and emerging technologies. With a B.E. in Software Engineering from Mehran University and multiple industry certifications (CCNA, Network Administration), he brings both technical depth and practical experience. His professional journey spans from web development to ERP support, helping organizations optimize their digital infrastructure and business processes.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Black and Brown Bakers",
        timeframe: "October 2020 - Present",
        role: "Senior Software Support (ERP - Technosys)",
        achievements: [
          <>
            Provided technical support and troubleshooting for ERP system users, ensuring 99% system uptime.
          </>,
          <>
            Resolved complex system issues and optimized ERP workflows, reducing response time by 40%.
          </>,
          <>
            Conducted user training sessions to improve system efficiency and user adoption rates.
          </>,
          <>
            Collaborated with developers to implement system enhancements and custom functionalities.
          </>,
        ],
        images: [
          {
            src: "/images/avatar.jpg",
            alt: "Hafiz Anjum - Senior Software Support",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "ISH LOGIC SOFTWARE HOUSE",
        timeframe: "2018",
        role: "Web Developer",
        achievements: [
          <>
            Developed responsive web applications using HTML, CSS, and JavaScript technologies.
          </>,
          <>
            Collaborated on multiple projects and maintained software solutions for clients.
          </>,
          <>
            Implemented frontend features and integrated with backend systems using APIs.
          </>,
        ],
        images: [
          {
            src: "/images/avatar.jpg",
            alt: "Hafiz Anjum - Web Developer",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Distribution and Soul Business",
        timeframe: "2017 - 2018",
        role: "Manager",
        achievements: [
          <>
            Managed business operations, logistics, and distribution activities.
          </>,
          <>
            Coordinated with teams to optimize operational efficiency and customer satisfaction.
          </>,
        ],
        images: [
          {
            src: "/images/avatar.jpg",
            alt: "Hafiz Anjum - Manager",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Mehran University of Engineering & Technology Jamshoro (MUET)",
        description: <>B.E (Software Engineering) - 2016 - GPA: 1st Division</>,
      },
      {
        name: "Board of Intermediate and Secondary Education (BISE) Hyderabad",
        description: <>Intermediate - 2011 - Grade: A</>,
      },
      {
        name: "Board of Intermediate and Secondary Education (BISE) Hyderabad",
        description: <>Matriculation - 2009 - Grade: A1</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Technologies",
        description: (
          <>Proficient in HTML, CSS, Tailwind CSS, and modern JavaScript frameworks for building responsive web applications.</>
        ),
        tags: [
          {
            name: "HTML",
            icon: "html5",
          },
          {
            name: "CSS",
            icon: "css",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwind",
          },
        ],
        images: [
          {
            src: "/images/avatar.jpg",
            alt: "Frontend Technologies",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend & ERP Systems",
        description: (
          <>Experienced with Python, SQL, and ERP software (Technosys). Strong expertise in database design and system optimization.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "SQL",
            icon: "database",
          },
          {
            name: "ERP Software",
            icon: "database",
          },
        ],
        images: [
          {
            src: "/images/avatar.jpg",
            alt: "Backend & ERP Systems",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Emerging Technologies",
        description: (
          <>Trained in Generative AI and staying current with latest technological advancements. CCNA certified in networking infrastructure.</>
        ),
        tags: [
          {
            name: "AI/ML",
            icon: "sparkles",
          },
          {
            name: "Networking",
            icon: "network",
          },
          {
            name: "CCNA",
            icon: "network",
          },
        ],
        images: [
          {
            src: "/images/avatar.jpg",
            alt: "Emerging Technologies",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
