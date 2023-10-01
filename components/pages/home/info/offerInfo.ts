type Offer = {
    title: string,
    description: string,
    image: string,
}

export const Offers: Offer[] = [
    {
        title: 'Web Development',
        description: `We create dynamic and visually stunning websites tailored to your unique brand and objectives. Our websites are not only aesthetically pleasing but also highly functional and user-friendly.`,
        image: './icons/web-dev.svg',

    },
    {
        title: 'App Development',
        description: `Our mobile app development team specializes in crafting intuitive and feature-rich applications for iOS and Android platforms. We turn your app ideas into engaging digital experiences.`,
        image: './icons/mobile-dev.svg',
        
    },
    {
        title: 'IT Consulting',
        description: `We provide expert guidance and strategic insights to help you make informed technology decisions. Our consultants work closely with you to align IT solutions with your business goals.`,
        image: './icons/it-consult.svg',
        
    },
    {
        title: 'E-Commerce Solution',
        description: `We design and develop robust e-commerce platforms that drive sales and enhance customer engagement. Our solutions are scalable and secure, ensuring your online success.`,
        image: './icons/ecom-solution.svg',
        
    },
    {
        title: 'Custom Software Development',
        description: `We build tailor-made software solutions that streamline your business processes, boost productivity, and adapt to your evolving needs.`,
        image: './icons/custom-software.svg',
        
    },
]