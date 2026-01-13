import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Automation Course | Learn ChatGPT, Midjourney & Prompt Engineering - Aaroh Computer Classes',
    description: 'Master AI tools like ChatGPT, Midjourney, DALL-E and workflow automation. Professional prompt engineering training with hands-on projects. Get certified in AI automation by Ram Sir and Abhishek Bhardwaj Sir.',
    keywords: [
        'AI automation course',
        'ChatGPT training',
        'prompt engineering course',
        'Midjourney course',
        'DALL-E training',
        'AI tools training',
        'workflow automation',
        'AI content creation',
        'Zapier automation',
        'AI productivity tools',
        'learn AI automation',
        'AI automation certification',
        'Ram Sir AI course',
        'Abhishek Bhardwaj AI training'
    ],
    authors: [
        { name: 'Ram Sir' },
        { name: 'Abhishek Bhardwaj' }
    ],
    creator: 'Aaroh Computer Classes',
    publisher: 'Aaroh Computer Classes',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://aarohclasses.com/courses/ai-automation',
        title: 'AI Automation Course | Learn ChatGPT, Midjourney & Prompt Engineering',
        description: 'Master AI tools like ChatGPT, Midjourney, DALL-E and workflow automation. Professional prompt engineering training with hands-on projects taught by Ram Sir and Abhishek Bhardwaj Sir.',
        siteName: 'Aaroh Computer Classes',
        images: [
            {
                url: '/img/courses/ai-automation-course.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Automation Course - ChatGPT, Midjourney, DALL-E Training'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Automation Course | Learn ChatGPT & Prompt Engineering',
        description: 'Master AI tools like ChatGPT, Midjourney, DALL-E and workflow automation. Get certified in AI automation.',
        images: ['/img/courses/ai-automation-course.jpg']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    alternates: {
        canonical: 'https://aarohclasses.com/courses/ai-automation'
    },
    category: 'Education'
};
