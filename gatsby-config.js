let siteMetadata = {
    title: `Johan Gace.`,
    capitalizeTitleOnHome: true,
    logo: `/images/JG.svg`,
    icon: `/images/JG.svg`,
    titleImage: `/images/wall.jpg`,
    introTag: `Web Developer`,
    description: `I Love to Design and Make things.`,
    author: `Johan`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: false,
    switchTheme: false,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio"
        }
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
            url: "https://github.com/johangace"
        }
    ],
    social: [
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/JohanGace"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/instagace/"
        },
        {
            name: "GitHub",
            icon: "/images/github.svg",
            url: "https://github.com/johangace"
        },
        // {
        //     name: "Youtube",
        //     icon: "/images/Youtube.svg",
        //     url:
        //         "https://www.youtube.com/channel/UCJ6-4OCJiUpzd56aF6-k6ag?view_as=subscriber"
        // },
        {
            name: "Goodreads",
            icon: "/images/goodreads.svg",
            url: "https://www.goodreads.com/user/show/33277000-johan"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "hi@johangace.com"
        // phone: "000-000-0000",
        // address: "1234 \nLocation \nLocation"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
