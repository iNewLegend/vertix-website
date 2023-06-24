import ReactMarkdown from "react-markdown";

import 'react-photo-view/dist/react-photo-view.css';

const markdown = `#### Latest Updates
- **21/06/2023**: Since 20/06/2023 we updated **Vertix** to **Version \`0.0.4\`**, we added **Transfer Ownership** button for dynamic channels, and **block/unblock** menus. Check out the [Changelog](/changelog). If you are already an existing **Bot User**, the **Transfer Ownership** button will be disabled by default.
 
    [How to enable it?](/posts/enable-transfer-ownership)
    
- **19/06/2023**: The negative reviews on [top.gg](https://top.gg/bot/1111283172378955867) are made by our jealous competitor.

- **16/06/2023**: Version \`0.0.3\` has been released! We are excited to introduce a new interface for **Verified Roles**. Check out the [Changelog](/changelog) for more details and explore the accompanying images [here](/features-images).

- **12/06/2023 17:00 UTC**: 🎉 We are thrilled to announce that Vertix has achieved official **verification** by Discord! We extend our heartfelt gratitude to [Discord](https://discord.com/) for their exceptional service. See the [Changelog](/changelog) for more information.

- **12/06/2023**: Version \`0.0.2\` is now available! This release includes a minor fix for the 👥 **(\`Access\`)** button and introduces a new \`/help\` command. Read the [Changelog](/changelog) for further details.

- **09/06/2023**: We have released version \`0.0.1\` of Vertix, which introduces support for the Russian 🇷🇺 language. Visit the [Changelog](/changelog) for additional information.

- **06/06/2023**: We are actively working on an upcoming update for Vertix to support multiple languages. Our first language addition will be Russian, as our main developer is fluent in Russian. Once the update is complete, we plan to translate Vertix into other commonly used languages.

   We invite you to be a part of this journey and assist us in translating Vertix into your language. Join our [Discord Server](https://discord.com/invite/dEwKeQefUU) if you are interested. Your contributions will be greatly appreciated, and your name will be credited in the \`/credits\` command and on our official website. Stay tuned for more exciting updates!
`;

export default function Home() {
    return (
        <>
            <div className="container box-1 updates">
                <ReactMarkdown children={ markdown }/>
            </div>

            <div className="container box-1">
                <h3 className="mb-3">Who is <b>Vertix</b>?</h3>

                <p className="fs-5">is an exceptional Discord bot designed to revolutionize your server experience.</p>
                <p className="fs-5">Sets a new standard in Discord bots.</p>
                <p className="fs-5">With a focus on providing best user satisfaction, as well as offering convenient
                    temporary voice channels
                    and comprehensive owner management tools.</p>
                <p className="fs-5">Operated on a dedicated server, <b>Vertix</b> guarantees an impressive uptime of 99%,
                    ensuring reliable
                    performance and uninterrupted access for your server members.</p>
                <br/>

                <h3 className="mb-3">Why should you choose <b>Vertix</b>?</h3>

                <p className="fs-5">Developed by a team of experienced developers, we have crafted this bot with utmost
                    dedication to ensure
                    an exceptional user experience.</p>
                <p className="fs-5">We value your input and actively review each suggestion and customization request
                    you provide.</p>
                <p className="fs-5">To ensure inclusivity, every suggestion goes through a voting process within our
                    community.</p>
                <p className="fs-5">The most popular features and customizations, as determined by the community vote,
                    will be promptly
                    released in the next <b>Vertix</b> version.</p>
                <br/>
                <p className="fs-5">Although <b>Vertix</b> is currently in its initial release, we have an extensive backlog of
                    exciting features in
                    the pipeline, including:</p>
                <ul>
                    <li>Fully customizable text elements to personalize your server's appearance.</li>
                    <li>A user-friendly dashboard for easy configuration and management.</li>
                    <li>Support for multiple languages to cater to diverse communities.</li>
                    <li>Server logs to keep track of important activities and events.</li>
                    <li>And many more exciting features on the horizon!</li>
                </ul>
                <br/>
                <p className="fs-5">To get started with <b>Vertix</b>, use <code>/setup</code> command and follow our simple <a href="/posts/how-to-setup">step-by-step</a> guide.</p>
                <br/>
                <p className="fs-5">Thank you for considering <b>Vertix</b>, and we look forward to enhancing your Discord
                    server experience</p>
                <p className="fs-5">Best regards,</p>
                <p className="fs-5"><b>Vertix</b> team.</p>
            </div>
        </>
    )
}