export const projects = {
    2: {
        title: "Afterparty",
        description: "A photographic exploration of abandoned spaces and the reclamation of nature.",
        cloudinaryTag: "project-afterparty"
    },
    4: {
        title: "Conflict Manager",
        description: "A study of brutalist architecture and urban textures.",
        cloudinaryTag: "project-conflict-manager"
    },
    6: {
        title: "JANAYAH",
        description: "Visualizing the empty spaces between moments.",
        cloudinaryTag: "project-janayah"
    },
    8: {
        title: "Sammy Vincent",
        description: "Visualizing the empty spaces between moments.",
        cloudinaryTag: "project-sammy-vincent"
    },
    10: {
        title: "Conflict Manager | 2026",
        description: "A study of brutalist architecture and urban textures.",
        cloudinaryTag: "project-conflict-manager-2026"
    },
    11: {
        title: "EEPS",
        description: "A study of brutalist architecture and urban textures.",
        cloudinaryTag: "project-eeps"
    },
    12: {
        title: "The Strand",
        description: "A study of coastal landscapes and natural formations.",
        cloudinaryTag: "project-the-strand"
    }
};

export const getProject = (id) => {
    return projects[id] || {
        title: "Unknown Project",
        description: "Project details not found.",
        cloudinaryTag: null
    };
};
