// lib/fetch.js
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false, // set to false if you want to get the most recent data
});

export async function fetchPageContent() {
  const query = `{
        "aboutSection": *[_type == "aboutSection"]{ aboutTitle, aboutBody, aboutImage },
        "homeSection": *[_type == "homeSection"]{ homeTitle, homeBody },
        "servicesSection": *[_type == "servicesSection"]{ servicesTitle, servicesBody },
        "socialsSection": *[_type == "socialsSection"]{ instagramURL, linkedInURL },
      }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}
