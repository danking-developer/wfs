export const players = {
    name: "playersSection",
    title: "Players Section",
    type: "document",
    fields: [
      {
        name: "playerName",
        title: "Player Name",
        type: "string",
      },
      {
        name: "playerDescription",
        title: "Player Description",
        type: "string",
      },
      // Add a new field for the image
      {
        name: "playerImage",
        title: "Player Image",
        type: "image",
        options: {
          hotspot: true, // Enable hotspot for image cropping
        },
      },
    ],
    preview: {
      select: {
        playerDescription: "playerDescription",
      },
      prepare(selection) {
        const { playerDescription } = selection;
  
        return {
          title: "Players Section", // You can customize the title shown in the preview
          subtitle: playerDescription || "No description", // Show the description as subtitle or "No description" if empty
        };
      },
    },
  };
  