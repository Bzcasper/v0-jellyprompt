import type { PromptTemplate } from "./template-structure"

export const blogContentTemplates: PromptTemplate[] = [
  {
    id: "blog-001",
    title: "SEO-Optimized Blog Post",
    description: "Create a comprehensive, SEO-friendly blog post with proper structure and formatting",
    template:
      "Write a comprehensive, SEO-optimized blog post about {{topic}} targeting the keyword '{{target_keyword}}'. The post should be {{word_count}} words long and written in a {{tone}} tone for {{target_audience}}. Include an engaging introduction, {{section_count}} main sections with subheadings, and a conclusion with a call-to-action. Use {{formatting_elements}} throughout the post to improve readability. Include meta description and title tag suggestions.",
    category: {
      id: "blog-content",
      name: "Blog Content",
      slug: "blog-content",
    },
    parameters: [
      {
        name: "topic",
        type: "text",
        description: "The main subject of the blog post",
        required: true,
      },
      {
        name: "target_keyword",
        type: "text",
        description: "Primary keyword to target",
        required: true,
      },
      {
        name: "word_count",
        type: "select",
        description: "Approximate length of the post",
        required: true,
        options: ["800-1000", "1000-1500", "1500-2000", "2000-2500"],
      },
      {
        name: "tone",
        type: "select",
        description: "The tone of the post",
        required: true,
        options: ["professional", "conversational", "educational", "humorous", "inspirational"],
      },
      {
        name: "target_audience",
        type: "text",
        description: "Who you're writing for",
        required: true,
      },
      {
        name: "section_count",
        type: "select",
        description: "Number of main sections",
        required: true,
        options: ["3", "4", "5", "6", "7"],
      },
      {
        name: "formatting_elements",
        type: "select",
        description: "Elements to include for better readability",
        required: true,
        options: [
          "bullet points and numbered lists",
          "examples and case studies",
          "statistics and data",
          "quotes and expert opinions",
          "images and visual suggestions",
        ],
      },
    ],
    is_featured: true,
    created_by: {
      id: "system",
      name: "JellyPrompt",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    example_output:
      "# How to Create a Successful Content Marketing Strategy in 2023\n\n## Meta Description\nLearn how to develop an effective content marketing strategy in 2023 with our comprehensive guide covering audience research, content planning, distribution channels, and performance measurement.\n\n## Title Tag\nContent Marketing Strategy Guide: 7 Steps to Success in 2023 | YourBrand\n\n## Introduction\n\nIn today's digital landscape, content marketing isn't just an option—it's essential for businesses looking to build brand awareness, establish authority, and drive conversions. With 91% of B2B marketers and 86% of B2C marketers considering content marketing a core strategy, the question isn't whether to invest in content marketing, but how to do it effectively.\n\nThis comprehensive guide will walk you through creating a content marketing strategy that delivers real results in 2023 and beyond...",
    usage_count: 2145,
  },
  {
    id: "blog-002",
    title: "How-To Guide",
    description: "Create a detailed, step-by-step how-to guide that solves a specific problem",
    template:
      "Write a detailed, step-by-step how-to guide about '{{topic}}' that helps readers solve the problem of {{problem}}. The guide should be {{word_count}} words long, written in a {{tone}} tone, and targeted at {{target_audience}}. Include an introduction explaining why this is important, {{step_count}} clear steps with detailed explanations, troubleshooting tips for common issues, and a conclusion summarizing the benefits. Use {{formatting_elements}} to make the guide easy to follow.",
    category: {
      id: "blog-content",
      name: "Blog Content",
      slug: "blog-content",
    },
    parameters: [
      {
        name: "topic",
        type: "text",
        description: "The specific how-to topic",
        required: true,
      },
      {
        name: "problem",
        type: "text",
        description: "The problem this guide solves",
        required: true,
      },
      {
        name: "word_count",
        type: "select",
        description: "Approximate length of the guide",
        required: true,
        options: ["800-1000", "1000-1500", "1500-2000", "2000-2500"],
      },
      {
        name: "tone",
        type: "select",
        description: "The tone of the guide",
        required: true,
        options: ["professional", "conversational", "educational", "encouraging", "authoritative"],
      },
      {
        name: "target_audience",
        type: "text",
        description: "Who you're writing for",
        required: true,
      },
      {
        name: "step_count",
        type: "select",
        description: "Number of steps in the guide",
        required: true,
        options: ["5", "7", "10", "12", "15"],
      },
      {
        name: "formatting_elements",
        type: "select",
        description: "Elements to include for better readability",
        required: true,
        options: [
          "screenshots and visuals",
          "examples for each step",
          "pro tips and warnings",
          "checklists",
          "FAQs section",
        ],
      },
    ],
    is_featured: true,
    created_by: {
      id: "system",
      name: "JellyPrompt",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    example_output:
      "# How to Set Up Google Analytics 4 for Your Website: A Complete Guide\n\n## Introduction\n\nWith Universal Analytics being phased out in July 2023, transitioning to Google Analytics 4 (GA4) isn't just recommended—it's essential for any business that values data-driven decision making. This guide will walk you through the complete setup process, ensuring you don't lose valuable tracking capabilities when the switch happens.\n\n## Why This Matters\n\nGoogle Analytics 4 represents a fundamental shift in how data is collected and analyzed. Unlike its predecessor, GA4 uses an event-based data model that works across platforms, provides more privacy-focused measurement, and uses AI to surface valuable insights without complex queries...",
    usage_count: 1876,
  },
  {
    id: "blog-003",
    title: "Listicle Generator",
    description: "Create an engaging listicle with valuable information on any topic",
    template:
      "Create a comprehensive listicle titled '{{number}} {{list_type}} {{topic}}' for {{target_audience}}. The article should be {{word_count}} words long and written in a {{tone}} tone. Each list item should have a descriptive subheading, {{item_length}} explanation, and include {{supporting_elements}}. Start with an engaging introduction explaining why this list matters, and end with a conclusion that summarizes the key takeaways.",
    category: {
      id: "blog-content",
      name: "Blog Content",
      slug: "blog-content",
    },
    parameters: [
      {
        name: "number",
        type: "select",
        description: "Number of items in the list",
        required: true,
        options: ["5", "7", "10", "12", "15", "20"],
      },
      {
        name: "list_type",
        type: "select",
        description: "Type of list",
        required: true,
        options: ["Best", "Essential", "Effective", "Proven", "Surprising", "Little-Known", "Must-Have"],
      },
      {
        name: "topic",
        type: "text",
        description: "The main subject of the listicle",
        required: true,
      },
      {
        name: "target_audience",
        type: "text",
        description: "Who you're writing for",
        required: true,
      },
      {
        name: "word_count",
        type: "select",
        description: "Approximate length of the article",
        required: true,
        options: ["1000-1500", "1500-2000", "2000-2500", "2500-3000"],
      },
      {
        name: "tone",
        type: "select",
        description: "The tone of the article",
        required: true,
        options: ["professional", "conversational", "educational", "humorous", "inspirational"],
      },
      {
        name: "item_length",
        type: "select",
        description: "How detailed each list item should be",
        required: true,
        options: ["brief (1-2 paragraphs)", "detailed (3-4 paragraphs)", "comprehensive (5+ paragraphs)"],
      },
      {
        name: "supporting_elements",
        type: "select",
        description: "Elements to include with each item",
        required: true,
        options: ["real-world examples", "statistics and data", "expert quotes", "action steps", "pros and cons"],
      },
    ],
    is_featured: false,
    created_by: {
      id: "system",
      name: "JellyPrompt",
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    example_output:
      "# 10 Essential Email Marketing Strategies for E-commerce Brands\n\n## Introduction\n\nIn the competitive world of e-commerce, your email marketing strategy can make the difference between abandoned carts and loyal customers. With an average ROI of $42 for every $1 spent, email remains one of the most effective marketing channels for online retailers. But generic newsletters and one-size-fits-all promotions won't cut it anymore.\n\nThis article explores 10 essential email marketing strategies specifically designed for e-commerce brands looking to increase conversions, build customer loyalty, and drive sustainable growth...",
    usage_count: 1543,
  },
]
