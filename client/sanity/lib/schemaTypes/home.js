export const home = {
    name: 'homeSection',
    title: 'Home Section',
    type: 'document',
    fields: [
        {
          name: "homeTitle",
          title: "Home Title",
          type: "string",
        },
        {
          name: "homeBody",
          title: "Home Body",
          rows: 8,
          type: "array", // Use block type instead of text
          of: [{ type: "block" }],
        },
      ],
      preview: {
        select: {
          homeBody: "homeBody",
        },
        prepare(selection) {
          const { homeBody } = selection;
    
          // Extract the first paragraph for preview
          const firstParagraph = homeBody.find(
            (block) => block._type === "block" && block.style === "normal"
          );
          const trimmedContent = firstParagraph
            ? firstParagraph.children[0].text
            : "No content";
    
          return {
            title: "Home Section", // You can customize the title shown in the preview
            subtitle: trimmedContent, // Show the first paragraph as subtitle
          };
        },
      },
  };
  