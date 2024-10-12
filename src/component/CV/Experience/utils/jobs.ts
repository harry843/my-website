import type { Jobs } from '../../../../types/cv';

export const jobs: Jobs = [
	{
		title: 'Senior Data Engineer',
		employer: 'Answer Digital',
		employer_url: 'https://answerdigital.com/',
		image: 'AD_logo.svg',
		imageColorClass: 'bg-yellow-300',
		bullets: [
			'Designed and implemented robust processing to parse and transform nested JSON into relational tables for  SNOMED clinical mapping of all patient electronic health records in London',
			'Developed and maintained complex data pipelines in Azure Synapse, streamlining data for ingestion and  transformation across multiple sources with enhanced logging for error resolution',
			'Built comprehensive data mapping between target and source data models, ensuring alignment to business  rules whilst maintaining data integrity to deliver business continuity for end users', 
			'Trained junior data engineers in the Data Academy, leading to 100% pass rate on end-of-scheme  assessments and secured onward billable projects' 
		],
		timeframe: { start: '2024-06', end: '2024-09' },
		contractType: ['Contract', 'Full-time'],
		locations: ['Leeds, UK', 'Remote']
	},
	{
		title: 'Lead Business Intelligence Developer',
		employer: 'NHS Digital',
		employer_url: 'https://digital.nhs.uk/dashboards',
		image: 'nhs.svg',
		imageColorClass: 'bg-nhs_blue',
		bullets: [
		'Led the technical migration of the NHS Tableau Estate saving £400K per year for the NHS • Responsible for end-to-end technical delivery of 25 Tableau products serving 350K users across the NHS',
		'Subject Matter Expert in Tableau and NHS Data Viz Community Leader – hosted monthly community of  practice events and championed inter-org collaboration leading to 200% community growth in 18 months',
		'Manager of 5 developers and 2 data engineers; responsible for their technical development, quality of work,  and prioritising workload in line with organisational priorities',
		'Reduced live service incidents by 50% implementing technical standards and quality assurance processes',
		'Co-developed bespoke pipeline system in Python to transform and load files between AWS S3 locations',
		'Developed monitoring scripts to alert team to datasource failures in production using Tableau API, and auto trigger refreshes to ensure latest data is always available for end-users – preventing 3 live service incidents',
		'Led client engagement for new commissions, including selling, scoping, sizing, identifying risks to delivery  and recommending mitigating actions'
		],
		timeframe: { start: '2022-03', end: '2024-05' },
		contractType: ['Contract', 'Full-time'],
		locations: ['Leeds, UK', 'Remote']
	},
	{
		title: 'Business Intelligence Developer',
		employer: 'NHS Digital',
		employer_url: 'https://digital.nhs.uk/dashboards',
		image: 'nhs.svg',
		imageColorClass: 'bg-nhs_blue',
		bullets: [
			'Lead developer of GP Appointments dashboards in Tableau (1000 NHS Users per week).',
			'Deployed dashboards from testing into production following organisation change protocol and developer best practice, using Tableau APIs, managing version control via a GIT repo.',
			'Responsible for creating and maintaining >10 data pipelines in SQL, Python and R',
			'Led external stakeholder engagement to determine technical requirements for sprints.',
			'Line manager to graduate developer: responsible for their technical development, quality of work, prioritising their workload according to organisational priorities.',
			'Built relationships across the organisation to ensure timely and quality service delivery.'
		],
		timeframe: { start: '2021-08', end: '2022-03' },
		contractType: ['Contract', 'Full-time'],
		locations: ['Leeds, UK', 'Remote']
	},

	{
		title: 'Data Science Graduate Trainee',
		employer: 'NHS Digital',
		employer_url: 'https://digital.nhs.uk/dashboards',
		image: 'nhs.svg',
		imageColorClass: 'bg-nhs_blue',
		bullets: [
			'Automated pipelines to transport big data volumes to AWS S3 via Python using boto3 API. Coordinated with internal teams to define responsibilities and manage dependencies.',
			'Led re-design of data processing for multiple statistical publications to deadline from SAS to Python, in line with organisational priorities to move towards open-source technology.',
			'Implemented row-level security across multiple Tableau Dashboards to control user access and first of type parameter-based sheet swapping to enhance user experience.'
		],
		timeframe: { start: '2020-09', end: '2021-08' },
		contractType: ['Contract', 'Full-time'],
		locations: ['Leeds, UK', 'Remote']
	},
	{
		title: 'Business Analysis Graduate Trainee',
		employer: 'NHS Digital',
		employer_url: 'https://digital.nhs.uk/',
		image: 'nhs.svg',
		imageColorClass: 'bg-nhs_blue',
		bullets: [
			'Developed Outcome Data Infographics at national and local levels using Google Charts API, giving NHS 111 Providers operational insights on secondary care outcomes following a 111 call.',
			'Product Owner for the NHS Apps Library assessment process: engaged NHS experts across multiple professions to deliver the online assessment for onboarding health apps onto the NHS Apps Library.'
		],
		timeframe: { start: '2018-09', end: '2020-09' },
		contractType: ['Full-time'],
		locations: ['London, UK', 'Remote']
	},
	{
		title: 'Digital Intern',
		employer: 'Best Beginnings',
		employer_url: 'https://www.bestbeginnings.org.uk/',
		image: 'best_beginnings.jpg',
		imageColorClass: 'bg-white-100',
		bullets: [
			'Led website redesign implementation to improve user interface in order to increase donor acquisition and online traffic.',
			'Analysed data in Excel from app usage to create weekly reporting for executive team.'
		],
		timeframe: { start: '2018-03', end: '2018-07' },
		contractType: ['Full-time'],
		locations: ['London, UK', 'Remote']
	}
];
