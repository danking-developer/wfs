export const services = {
    name: 'servicesSection',
    title: 'Services Section',
    type: 'document',
    fields: [
        {
          name: "servicesTitle",
          title: "Services Title",
          type: "string",
        },
        {
          name: "servicesBody",
          title: "Services Body",
          type: "array", // Use block type instead of text
          of: [{ type: "block" }],
        },
      ],
      preview: {
        select: {
          servicesBody: "servicesBody",
        },
        prepare(selection) {
          const { servicesBody } = selection;
    
          // Extract the first paragraph for preview
          const firstParagraph = servicesBody.find(
            (block) => block._type === "block" && block.style === "normal"
          );
          const trimmedContent = firstParagraph
            ? firstParagraph.children[0].text
            : "No content";
    
          return {
            title: "Services Section", // You can customize the title shown in the preview
            subtitle: trimmedContent, // Show the first paragraph as subtitle
          };
        },
      },
  };
  