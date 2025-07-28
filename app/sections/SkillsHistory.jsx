import SkillSection, { SkillList } from '@/components/data/SkillSection';
import { Grid, Link } from '@mui/material';
import NextLink from 'next/link';
import HistorySection, {
  HistoryList,
  HistoryEntry,
} from '@/components/data/HistorySection';

export default function SkillsHistory() {
  const skills = [
    new SkillList('Languages', [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'PHP',
      'SQL',
    ]),
    new SkillList('Frameworks & Libraries', [
      'React',
      'React Native',
      'Next.js',
      'Angular',
      'Material UI',
      'Tailwind CSS',
      'Bootstrap',
      'D3.js',
      'Storybook',
      'Matter.js',
      'Node.js',
      'Express.js',
    ]),
    new SkillList('Tools & Platforms', [
      'Git',
      'GitHub',
      'GitHub Actions',
      'Docker',
      'PM2',
      'NGINX',
      'Apache',
      'Proxmox VE',
      'Firebase',
      'CI/CD Pipelines',
      'Linux',
      'Windows',
    ]),
    new SkillList('Development Skills', [
      'API Integration',
      'SEO Optimization',
      'Mobile-First Design',
      'WCAG and ARIA',
      'Clean Code',
      'Fast Learner',
    ]),
    new SkillList('Design & Creative Tools', [
      'AI Tool Proficiency',
      'Figma',
      'Adobe Photoshop',
      'Adobe Illustrator',
    ]),
  ];

  const history = [
    new HistoryList('Relevant Employment Experience', [
      new HistoryEntry(
        'Full Stack Web Developer & Designer',
        'Little Big Sound Entertainment',
        '2025 - Present',
        [
          'Built a responsive and accessible site with Next.js, React, and Material UI',
          'Configured GitHub Actions CI/CD for Proxmox VE & NGINX deployments',
          'Improved SEO and performance via mobile-first design',
          'Delivered features aligned with business needs',
          'Utilized Jest and React Testing Library for unit testing',
          <>
            View the website at:{' '}
            <Link
              component={NextLink}
              target="_blank"
              href="https://www.littlebigsoundentertainment.ca"
            >
              www.littlebigsoundentertainment.ca
            </Link>
          </>,
        ],
      ),
      new HistoryEntry('Co-op Student', 'The Atrium', '2019', [
        'Automated workflows with external APIs',
        'Built a PHP backend & HTML/CSS frontend for secure building access',
      ]),
    ]),
    new HistoryList('Other Employment Experience', [
      new HistoryEntry('Shipper & Receiver', 'Anchem Sales', '2022 - Present', [
        'Ensured paperwork was completed correctly and was accurate to order',
        'Maintained a friendly environment with co-workers and customers',
        'Acted as primary maintainer of warehouse during working hours',
      ]),
      new HistoryEntry('Warehouse Worker', 'Amazon Canada', '2021 - 2022'),
      new HistoryEntry('Loader & Unloader', 'Cintas', '2021'),
      new HistoryEntry(
        'Crew Member',
        "ONroute (KFC, Tim Horton's)",
        '2018 - 2021',
      ),
    ]),
    new HistoryList('Education', [
      new HistoryEntry(
        'Web Development & Internet Applications - OCD',
        'Fanshawe College',
        '2023 - 2025',
      ),
      new HistoryEntry(
        'Secondary School Education - OSSD',
        "St. Joseph's Catholic High School",
        '2016-2020',
      ),
    ]),
  ];

  return (
    <Grid
      container
      sx={{
        backgroundColor: 'background.main',
        padding: { xs: 0.5, sm: 1 },
      }}
      spacing={{ xs: '4px', md: 2 }}
    >
      <Grid
        size={{ xs: 12, md: 5 }}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        {skills.map((list, index) => (
          <SkillSection list={list} key={index} />
        ))}
      </Grid>
      <Grid
        size={{ xs: 12, md: 7 }}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        {history.map((list, index) => (
          <HistorySection list={list} key={index} />
        ))}
      </Grid>
    </Grid>
  );
}
