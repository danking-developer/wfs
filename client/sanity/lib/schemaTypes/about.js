export const about = {
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    {
      name: "aboutTitle",
      title: "About Title",
      type: "string",
    },
    {
      name: "aboutBody",
      title: "About Body",
      type: "array", // Use block type instead of text
      of: [{ type: "block" }],
    },
    // Add a new field for the image
    {
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true, // Enable hotspot for image cropping
      },
    },
  ],
  preview: {
    select: {
      aboutBody: "aboutBody",
    },
    prepare(selection) {
      const { aboutBody } = selection;

      // Extract the first paragraph for preview
      const firstParagraph = aboutBody.find(
        (block) => block._type === "block" && block.style === "normal"
      );
      const trimmedContent = firstParagraph
        ? firstParagraph.children[0].text
        : "No content";

      return {
        title: "About Section", // You can customize the title shown in the preview
        subtitle: trimmedContent, // Show the first paragraph as subtitle
      };
    },
  },
};
