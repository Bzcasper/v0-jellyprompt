import type { PromptTemplate } from "./template-structure"

export const socialMediaTemplates: PromptTemplate[] = [
  {
    id: "sm-001",
    title: "Instagram Caption Generator",
    description: "Create engaging Instagram captions that drive engagement and include relevant hashtags",
    template:
      "Create {{caption_count}} engaging Instagram captions for a post about {{topic}}. The brand voice is {{brand_voice}} and the target audience is {{target_audience}}. Each caption should be {{caption_length}} and include a call-to-action. Also include {{hashtag_count}} relevant hashtags.",
    category: {
      id: "social-media",
      name: "Social Media",
      slug: "social-media",
    },
    parameters: [
      {
        name: "topic",
        type: "text",
        description: "What the post is about",
        required: true,
      },
      {
        name: "brand_voice",
        type: "select",
        description: "The tone and style of your brand",
        required: true,
        options: ["professional", "casual", "humorous", "inspirational", "educational"],
      },
      {
        name: "target_audience",
        type: "text",
        description: "Who you're trying to reach",
        required: true,
      },
      {
        name: "caption_length",
        type: "select",
        description: "How long the caption should be",
        required: true,
        options: ["short (1-2 sentences)", "medium (3-4 sentences)", "long (5+ sentences)"],
      },
      {
        name: "caption_count",
        type: "select",
        description: "Number of captions to generate",
        required: true,
        options: ["3", "5", "7", "10"],
      },
      {
        name: "hashtag_count",
        type: "select",
        description: "Number of hashtags to include",
        required: true,
        options: ["5", "10", "15", "20"],
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
      "✨ Elevate your self-care routine with our new organic face masks! Your skin deserves the same love you give to everything else. Try our avocado & honey blend today and feel the difference. #SelfCareSunday #OrganicSkincare #GlowingComplexion #NaturalBeauty #CleanBeauty",
    usage_count: 1245,
  },
  {
    id: "sm-002",
    title: "Twitter/X Thread Creator",
    description: "Create informative and engaging Twitter/X threads that provide value and drive engagement",
    template:
      "Create a {{thread_length}}-part Twitter/X thread about {{topic}} that provides valuable insights for {{target_audience}}. The thread should have an engaging hook, provide {{content_type}} content, and end with a clear call-to-action. Each tweet should be optimized for engagement and under 280 characters.",
    category: {
      id: "social-media",
      name: "Social Media",
      slug: "social-media",
    },
    parameters: [
      {
        name: "topic",
        type: "text",
        description: "The main subject of the thread",
        required: true,
      },
      {
        name: "thread_length",
        type: "select",
        description: "Number of tweets in the thread",
        required: true,
        options: ["5", "7", "10", "15"],
      },
      {
        name: "target_audience",
        type: "text",
        description: "Who you're trying to reach",
        required: true,
      },
      {
        name: "content_type",
        type: "select",
        description: "Type of content to include",
        required: true,
        options: ["educational", "step-by-step guide", "tips and tricks", "industry insights", "case study"],
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
      "1/ 🧵 THREAD: 7 Underrated SEO Tactics That Still Work in 2023\n\nAfter analyzing 100+ websites, I've found these tactics consistently deliver results, even with recent algorithm changes.\n\nLet me break them down for you...",
    usage_count: 876,
  },
  {
    id: "sm-003",
    title: "LinkedIn Post Generator",
    description: "Create professional LinkedIn posts that establish thought leadership and drive engagement",
    template:
      "Create a professional LinkedIn post about {{topic}} that positions the author as a thought leader in {{industry}}. The post should be {{post_length}}, include {{content_elements}}, and end with a question to encourage engagement. The tone should be {{tone}} and the target audience is {{target_audience}}.",
    category: {
      id: "social-media",
      name: "Social Media",
      slug: "social-media",
    },
    parameters: [
      {
        name: "topic",
        type: "text",
        description: "The main subject of the post",
        required: true,
      },
      {
        name: "industry",
        type: "text",
        description: "Your industry or professional field",
        required: true,
      },
      {
        name: "post_length",
        type: "select",
        description: "How long the post should be",
        required: true,
        options: ["short (1-2 paragraphs)", "medium (3-4 paragraphs)", "long (5+ paragraphs)"],
      },
      {
        name: "content_elements",
        type: "select",
        description: "Elements to include in the post",
        required: true,
        options: [
          "personal story",
          "industry statistics",
          "actionable tips",
          "contrarian viewpoint",
          "recent trend analysis",
        ],
      },
      {
        name: "tone",
        type: "select",
        description: "The tone of the post",
        required: true,
        options: ["professional", "conversational", "inspirational", "analytical", "provocative"],
      },
      {
        name: "target_audience",
        type: "text",
        description: "Who you're trying to reach",
        required: true,
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
      "I've been reflecting on the future of remote work, and here's what many leaders are missing:\n\nRemote work isn't just a perk—it's a complete reimagining of how teams collaborate.\n\nAfter leading distributed teams for 5+ years, I've found that successful remote cultures prioritize outcomes over hours logged.\n\nThe data supports this: companies with results-based performance metrics report 34% higher employee satisfaction and 22% lower turnover.\n\nThe question isn't whether remote work can be effective—it's whether leaders are brave enough to abandon industrial-era management practices.\n\nWhat's the biggest remote work challenge your team is facing right now?",
    usage_count: 1532,
  },
  {
    id: "sm-004",
    title: "TikTok Script Generator",
    description: "Create engaging TikTok scripts that hook viewers and deliver value in a short format",
    template:
      "Create a script for a {{duration}} TikTok video about {{topic}} targeting {{target_audience}}. The video should use a {{hook_type}} hook in the first 3 seconds, deliver {{content_type}} content, and end with a clear call-to-action. The tone should be {{tone}} and include relevant trending elements if appropriate.",
    category: {
      id: "social-media",
      name: "Social Media",
      slug: "social-media",
    },
    parameters: [
      {
        name: "topic",
        type: "text",
        description: "The main subject of the video",
        required: true,
      },
      {
        name: "duration",
        type: "select",
        description: "Length of the video",
        required: true,
        options: ["15 seconds", "30 seconds", "60 seconds", "3 minutes"],
      },
      {
        name: "target_audience",
        type: "text",
        description: "Who you're trying to reach",
        required: true,
      },
      {
        name: "hook_type",
        type: "select",
        description: "Type of hook to use",
        required: true,
        options: ["question", "shocking statistic", "controversial statement", "relatable moment", "before/after"],
      },
      {
        name: "content_type",
        type: "select",
        description: "Type of content to deliver",
        required: true,
        options: ["tutorial", "tips and tricks", "storytelling", "review", "day in the life"],
      },
      {
        name: "tone",
        type: "select",
        description: "The tone of the video",
        required: true,
        options: ["energetic", "casual", "educational", "humorous", "inspirational"],
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
      "[Hook] Did you know that 78% of people are using this skincare ingredient WRONG? *shocked face*\n\n[Main] Let's talk about hyaluronic acid. Most people apply it to dry skin, but here's the secret: it needs moisture to work.\n\nStep 1: Dampen your face first\nStep 2: Apply hyaluronic acid while skin is still damp\nStep 3: Seal with moisturizer immediately\n\n[CTA] Try this method tonight and comment below if you notice a difference! Follow for more skincare secrets they don't tell you about.",
    usage_count: 943,
  },
]
