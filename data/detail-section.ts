const DETAIL_TITLE = "More detailed";
const DETAIL_HEADING = "Explore My Side";
const DETAIL_DESC = "Beyond the work, here's a glimpse into my world. The tools I trust, the hobbies I enjoy, and the sounds that fuel my creativity.";

interface SpotifyData {
    title: string;
    description: string;
    albumCover: string;
    albumTitle: string;
}

interface ToolItem {
    name: string;
    icon: string;
}

interface BucketItem {
    title: string;
    description: string;
    completed: boolean;
}

const SPOTIFY_DATA: SpotifyData = {
    title: "Recent Favorites",
    description: "Currently vibing to a mix of Pop and Hindi tracks alongside podcasts that spark fresh ideas and creativity. That's my companion during deep creative flow.",
    albumCover: "/landing-page/playing spotify.png",
    albumTitle: "Current Playlist"
};

const TOOLS: ToolItem[] = [
    {
        name: "VSCode",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
    {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
        name: "Jira",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
    },
    {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    }
];

const TOOLS_HEADING = "Get to know what's my daily tools and tech stack";

const BUCKET_LIST: BucketItem[] = [
    {
        title: "Bucketlist",
        description: "Dreams at a time fueled by melodies and meaningful conversations. Still exploring, still growing, and always tuned into the rhythm of progress.",
        completed: false
    }
];

export {
    DETAIL_TITLE,
    DETAIL_HEADING,
    DETAIL_DESC,
    SPOTIFY_DATA,
    TOOLS,
    TOOLS_HEADING,
    BUCKET_LIST,
    type SpotifyData,
    type ToolItem,
    type BucketItem
};
