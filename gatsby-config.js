
let siteMetadata = {
    title: `Johan Gace.`,
    capitalizeTitleOnHome: true,
    logo: `/images/JG.svg`,
    icon: `/images/main-1.jpeg`,
    titleImage: `/images/wall.jpg`,
    introTag: `UX Engineer`,
    description: `I enjoy Designing and Building things.`,
    author: `Johan`,
    blogItemsPerPage: 100,
    portfolioItemsPerPage: 100,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About",
            url: "/about",
        },
        {
            name: "Blog",
            url: "/blog",
        },
        {
            name: "Portfolio",
            url: "/portfolio",
        },
        // {
        //     name: "CONTACT",
        //     url: "/contact"
        // }
    ],
    footerLinks: [
        // {
        //     name: "PRIVACY POLICY",
        //     url: "/privacy-policy"
        // },
        {
            name: "GitHub",
            url: "https://github.com/johangace",
        },
    ],
    social: [
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/JohanGace",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/instagace/",
        },
        {
            name: "GitHub",
            icon: "/images/github.png",
            url: "https://github.com/johangace",
        },
        // {
        //     name: "Youtube",
        //     icon: "/images/Youtube.svg",
        //     url:
        //         "https://www.youtube.com/channel/UCJ6-4OCJiUpzd56aF6-k6ag?view_as=subscriber"
        // },
        // {
        //     name: "Goodreads",
        //     icon: "/images/goodreads.svg",
        //     url: "https://www.goodreads.com/user/show/33277000-johan"
        // }
    ],
    contact: {
        api_url: "./test.json",
        description: ``,
        mail: "gace.johan3@gmail.com",
        // phone: "000-000-0000",
        // address: "1234 \nLocation \nLocation"
    },
};

module.exports = {
    flags: {
        PARALLEL_QUERY_RUNNING: true
      },
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        // {
        //     resolve: `gatsby-plugin-sharp`,
        //     options: {
        //       // Defaults used for gatsbyImageData and StaticImage
        //       defaults: {},
        //       // Set to false to allow builds to continue on image errors
        //       failOnError: false,
        //       // deprecated options and their defaults:
        //       base64Width: 20,
        //     //   forceBase64Format: ``, // valid formats: png,jpg,webp
        //       stripMetadata: true,
        //       defaultQuality: 50,
        //     },
        //   },
        
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`,
            },
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true,
            },
        },
    ],
};
