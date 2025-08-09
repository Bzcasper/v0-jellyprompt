-- Sample data for LLM Prompt Hub

-- Make sure categories exist (these were already created in the schema, but let's ensure they exist)
INSERT INTO prompt_categories (name, slug, description, icon)
VALUES 
  ('General', 'general', 'General purpose prompts for everyday tasks', 'Globe'),
  ('Creative Writing', 'creative-writing', 'Prompts for creative writing and storytelling', 'PenTool'),
  ('Business', 'business', 'Prompts for business and professional use', 'Briefcase'),
  ('Programming', 'programming', 'Prompts for coding and software development', 'Code'),
  ('Academic', 'academic', 'Prompts for academic and research purposes', 'GraduationCap'),
  ('Marketing', 'marketing', 'Prompts for marketing and advertising content', 'TrendingUp'),
  ('Legal', 'legal', 'Prompts for legal document creation and analysis', 'Scale')
ON CONFLICT (slug) DO NOTHING;

-- Sample prompts for General category
DO $$
DECLARE
  general_id UUID;
  creative_id UUID;
  business_id UUID;
  programming_id UUID;
  academic_id UUID;
  marketing_id UUID;
  legal_id UUID;
  sample_user_id UUID;
BEGIN
  -- Get category IDs
  SELECT id INTO general_id FROM prompt_categories WHERE slug = 'general';
  SELECT id INTO creative_id FROM prompt_categories WHERE slug = 'creative-writing';
  SELECT id INTO business_id FROM prompt_categories WHERE slug = 'business';
  SELECT id INTO programming_id FROM prompt_categories WHERE slug = 'programming';
  SELECT id INTO academic_id FROM prompt_categories WHERE slug = 'academic';
  SELECT id INTO marketing_id FROM prompt_categories WHERE slug = 'marketing';
  SELECT id INTO legal_id FROM prompt_categories WHERE slug = 'legal';
  
  -- Get a sample user ID (first user in the system)
  SELECT id INTO sample_user_id FROM auth.users LIMIT 1;
  
  -- If no user exists, use a placeholder UUID
  IF sample_user_id IS NULL THEN
    sample_user_id := '00000000-0000-0000-0000-000000000000'::UUID;
  END IF;

  -- General category prompts
  INSERT INTO prompts (title, description, template, category_id, parameters, is_featured, user_id)
  VALUES
    (
      'Explain a Concept Simply',
      'Explain any complex concept in simple terms that anyone can understand',
      'Explain the concept of {{concept}} in simple terms that a {{audience}} would understand. Use analogies and examples where appropriate.',
      general_id,
      '[
        {"name": "concept", "type": "text", "description": "The concept you want explained", "required": true},
        {"name": "audience", "type": "select", "description": "Target audience", "required": true, "options": ["5-year-old", "teenager", "non-expert adult", "senior citizen"]}
      ]',
      TRUE,
      sample_user_id
    ),
    (
      'Pros and Cons List',
      'Generate a balanced list of pros and cons for any decision or topic',
      'Create a comprehensive list of pros and cons for {{topic}}. Consider aspects like {{aspects}}.',
      general_id,
      '[
        {"name": "topic", "type": "text", "description": "The topic or decision to analyze", "required": true},
        {"name": "aspects", "type": "text", "description": "Specific aspects to consider (e.g., cost, time, health)", "required": false}
      ]',
      TRUE,
      sample_user_id
    ),
    (
      'Daily Planner',
      'Create a structured daily plan to maximize productivity',
      'Create a detailed daily schedule for {{day_type}} that helps me achieve my goal of {{main_goal}}. I usually wake up at {{wake_time}} and go to bed around {{sleep_time}}. Include time blocks, breaks, and specific activities.',
      general_id,
      '[
        {"name": "day_type", "type": "select", "description": "Type of day", "required": true, "options": ["work day", "weekend", "study day", "self-care day"]},
        {"name": "main_goal", "type": "text", "description": "Main goal for the day", "required": true},
        {"name": "wake_time", "type": "text", "description": "Wake up time", "required": true},
        {"name": "sleep_time", "type": "text", "description": "Bedtime", "required": true}
      ]',
      FALSE,
      sample_user_id
    );

  -- Creative Writing category prompts
  INSERT INTO prompts (title, description, template, category_id, parameters, is_featured, user_id)
  VALUES
    (
      'Short Story Generator',
      'Generate a creative short story based on your inputs',
      'Write a {{word_count}}-word {{genre}} short story that takes place in {{setting}}. The main character is {{character}} who wants {{goal}} but faces {{obstacle}}.',
      creative_id,
      '[
        {"name": "genre", "type": "select", "description": "Story genre", "required": true, "options": ["science fiction", "fantasy", "romance", "mystery", "horror", "comedy"]},
        {"name": "setting", "type": "text", "description": "Where the story takes place", "required": true},
        {"name": "character", "type": "text", "description": "Brief description of main character", "required": true},
        {"name": "goal", "type": "text", "description": "What the character wants", "required": true},
        {"name": "obstacle", "type": "text", "description": "Challenge the character faces", "required": true},
        {"name": "word_count", "type": "select", "description": "Approximate word count", "required": false, "options": ["500", "1000", "1500", "2000"]}
      ]',
      TRUE,
      sample_user_id
    ),
    (
      'Poetry Creator',
      'Generate a poem in various styles based on your theme',
      'Write a {{style}} poem about {{theme}}. The poem should evoke a feeling of {{emotion}} and be approximately {{length}} lines long.',
      creative_id,
      '[
        {"name": "style", "type": "select", "description": "Poetry style", "required": true, "options": ["sonnet", "haiku", "free verse", "limerick", "narrative"]},
        {"name": "theme", "type": "text", "description": "Main theme or subject", "required": true},
        {"name": "emotion", "type": "text", "description": "Primary emotion to evoke", "required": true},
        {"name": "length", "type": "select", "description": "Approximate length in lines", "required": false, "options": ["5", "10", "14", "20"]}
      ]',
      FALSE,
      sample_user_id
    ),
    (
      'Character Development',
      'Create a detailed character profile for your story',
      'Create a detailed character profile for a {{role}} in a {{genre}} story. Include physical description, personality traits, background, motivations, flaws, and how they might evolve throughout the story.',
      creative_id,
      '[
        {"name": "role", "type": "select", "description": "Character role", "required": true, "options": ["protagonist", "antagonist", "mentor", "sidekick", "love interest"]},
        {"name": "genre", "type": "select", "description": "Story genre", "required": true, "options": ["science fiction", "fantasy", "romance", "mystery", "historical fiction"]}
      ]',
      FALSE,
      sample_user_id
    );

  -- Business category prompts
  INSERT INTO prompts (title, description, template, category_id, parameters, is_featured, user_id)
  VALUES
    (
      'Business Email Writer',
      'Craft professional business emails for various situations',
      'Write a professional email for {{situation}} to {{recipient}}. The key points to include are: {{key_points}}. The tone should be {{tone}}.',
      business_id,
      '[
        {"name": "situation", "type": "select", "description": "Email purpose", "required": true, "options": ["job application", "meeting request", "proposal", "follow-up", "apology", "introduction"]},
        {"name": "recipient", "type": "text", "description": "Who the email is for", "required": true},
        {"name": "key_points", "type": "text", "description": "Main points to include", "required": true},
        {"name": "tone", "type": "select", "description": "Email tone", "required": true, "options": ["formal", "friendly professional", "persuasive", "apologetic", "grateful"]}
      ]',
      TRUE,
      sample_user_id
    ),
    (
      'SWOT Analysis',
      'Generate a SWOT analysis for your business or project',
      'Create a detailed SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis for {{subject}}, which is in the {{industry}} industry. Focus particularly on {{focus_area}} if specified.',
      business_id,
      '[
        {"name": "subject", "type": "text", "description": "Company, product, or project name", "required": true},
        {"name": "industry", "type": "text", "description": "Industry or market", "required": true},
        {"name": "focus_area", "type": "text", "description": "Specific area to focus on (optional)", "required": false}
      ]',
      FALSE,
      sample_user_id
    ),
    (
      'Meeting Agenda Creator',
      'Create a structured agenda for effective meetings',
      'Create a detailed meeting agenda for a {{duration}}-minute {{meeting_type}} meeting with {{participants}}. The main objectives are {{objectives}}.',
      business_id,
      '[
        {"name": "meeting_type", "type": "select", "description": "Type of meeting", "required": true, "options": ["team update", "project kickoff", "client presentation", "brainstorming session", "performance review"]},
        {"name": "duration", "type": "select", "description": "Meeting length in minutes", "required": true, "options": ["15", "30", "45", "60", "90"]},
        {"name": "participants", "type": "text", "description": "Who will attend", "required": true},
        {"name": "objectives", "type": "text", "description": "Main goals of the meeting", "required": true}
      ]',
      FALSE,
      sample_user_id
    );

  -- Programming category prompts
  INSERT INTO prompts (title, description, template, category_id, parameters, is_featured, user_id)
  VALUES
    (
      'Code Explainer',
      'Get a clear explanation of any code snippet',
      'Explain the following {{language}} code in detail:\n\n```{{language}}\n{{code}}\n```\n\nBreak down how it works, what each part does, and suggest any improvements.',
      programming_id,
      '[
        {"name": "language", "type": "select", "description": "Programming language", "required": true, "options": ["javascript", "python", "java", "c#", "ruby", "go", "rust", "php", "typescript"]},
        {"name": "code", "type": "textarea", "description": "Code to explain", "required": true}
      ]',
      TRUE,
      sample_user_id
    ),
    (
      'Function Generator',
      'Generate code for a specific function in your chosen language',
      'Write a {{language}} function that {{function_purpose}}. Include comments, error handling, and examples of how to use it.',
      programming_id,
      '[
        {"name": "language", "type": "select", "description": "Programming language", "required": true, "options": ["javascript", "python", "java", "c#", "ruby", "go", "rust", "php", "typescript"]},
        {"name": "function_purpose", "type": "text", "description": "What the function should do", "required": true}
      ]',
      FALSE,
      sample_user_id
    ),
    (
      'API Documentation',
      'Generate comprehensive API documentation',
      'Create detailed documentation for a {{api_type}} API endpoint that {{endpoint_purpose}}. Include request parameters, response format, authentication requirements, and example requests/responses.',
      programming_id,
      '[
        {"name": "api_type", "type": "select", "description": "API type", "required": true, "options": ["REST", "GraphQL", "SOAP", "gRPC"]},
        {"name": "endpoint_purpose", "type": "text", "description": "What the endpoint does", "required": true}
      ]',
      FALSE,
      sample_user_id
    );

  -- Academic category prompts
  INSERT INTO prompts (title, description, template, category_id, parameters, is_featured, user_id)
  VALUES
    (
      'Essay Outline Creator',
      'Generate a structured outline for academic essays',
      'Create a detailed outline for a {{length}}-page {{essay_type}} essay on the topic: "{{topic}}". Include thesis statement, main arguments, and supporting points.',
      academic_id,
      '[
        {"name": "essay_type", "type": "select", "description": "Type of essay", "required": true, "options": ["argumentative", "expository", "analytical", "compare and contrast", "narrative", "descriptive"]},
        {"name": "topic", "type": "text", "description": "Essay topic", "required": true},
        {"name": "length", "type": "select", "description": "Approximate page count", "required": true, "options": ["3-5", "5-7", "8-10", "10+"]}
      ]',
      TRUE,
      sample_user_id
    ),
    (
      'Research Question Generator',
      'Generate focused research questions for academic projects',
      'Generate {{count}} potential research questions related to {{subject}} with a focus on {{aspect}}. For each question, explain why it''s significant and what methodology might be appropriate to investigate it.',
      academic_id,
      '[
        {"name": "subject", "type": "text", "description": "Academic subject area", "required": true},
        {"name": "aspect", "type": "text", "description": "Specific aspect or focus", "required": true},
        {"name": "count", "type": "select", "description": "Number of questions to generate", "required": true, "options": ["3", "5", "7", "10"]}
      ]',
      FALSE,
      sample_user_id
    ),
    (
      'Literature Review Helper',
      'Organize and structure academic literature reviews',
      'Create a framework for a literature review on {{topic}} in the field of {{field}}. Suggest how to organize the review (chronologically, thematically, methodologically, etc.), key areas to cover, and how to identify gaps in the literature.',
      academic_id,
      '[
        {"name": "topic", "type": "text", "description": "Review topic", "required": true},
        {"name": "field", "type": "text", "description": "Academic field", "required": true}
      ]',
      FALSE,
      sample_user_id
    );

  -- Marketing category prompts
  INSERT INTO prompts (title, description, template, category_id, parameters, is_featured, user_id)
  VALUES
    (
      'Social Media Post Generator',
      'Create engaging social media content for various platforms',
      'Create {{count}} engaging social media posts for {{platform}} promoting {{product_service}}. The target audience is {{audience}} and the tone should be {{tone}}. Include relevant hashtags.',
      marketing_id,
      '[
        {"name": "platform", "type": "select", "description": "Social media platform", "required": true, "options": ["Instagram", "Twitter", "LinkedIn", "Facebook", "TikTok"]},
        {"name": "product_service", "type": "text", "description": "What you''re promoting", "required": true},
        {"name": "audience", "type": "text", "description": "Target audience", "required": true},
        {"name": "tone", "type": "select", "description": "Content tone", "required": true, "options": ["professional", "casual", "humorous", "inspirational", "educational"]},
        {"name": "count", "type": "select", "description": "Number of posts", "required": true, "options": ["3", "5", "7", "10"]}
      ]',
      TRUE,
      sample_user_id
    ),
    (
      'Product Description Writer',
      'Create compelling product descriptions for e-commerce',
      'Write a compelling {{length}} product description for {{product_name}}, which is a {{product_type}}. The key features to highlight are {{features}}. The target audience is {{audience}}.',
      marketing_id,
      '[
        {"name": "product_name", "type": "text", "description": "Name of the product", "required": true},
        {"name": "product_type", "type": "text", "description": "Type of product", "required": true},
        {"name": "features", "type": "text", "description": "Key features to highlight", "required": true},
        {"name": "audience", "type": "text", "description": "Target audience", "required": true},
        {"name": "length", "type": "select", "description": "Description length", "required": true, "options": ["short (50-100 words)", "medium (100-200 words)", "long (200-300 words)"]}
      ]',
      FALSE,
      sample_user_id
    ),
    (
      'Email Newsletter Template',
      'Create structured email newsletter content',
      'Create a {{tone}} email newsletter for {{business_type}} focused on {{topic}}. Include a compelling subject line, introduction, main content sections, and call-to-action.',
      marketing_id,
      '[
        {"name": "business_type", "type": "text", "description": "Type of business", "required": true},
        {"name": "topic", "type": "text", "description": "Newsletter topic", "required": true},
        {"name": "tone", "type": "select", "description": "Newsletter tone", "required": true, "options": ["professional", "conversational", "exciting", "informative"]}
      ]',
      FALSE,
      sample_user_id
    );

  -- Legal category prompts
  INSERT INTO prompts (title, description, template, category_id, parameters, is_featured, user_id)
  VALUES
    (
      'Legal Document Summarizer',
      'Summarize complex legal documents in plain language',
      'Summarize the following {{document_type}} in plain, easy-to-understand language. Focus on the key points, obligations, and potential issues:\n\n{{document_text}}',
      legal_id,
      '[
        {"name": "document_type", "type": "select", "description": "Type of legal document", "required": true, "options": ["contract", "terms of service", "privacy policy", "lease agreement", "employment contract"]},
        {"name": "document_text", "type": "textarea", "description": "Text to summarize", "required": true}
      ]',
      TRUE,
      sample_user_id
    ),
    (
      'Legal Clause Generator',
      'Generate specific legal clauses for contracts and agreements',
      'Draft a {{clause_type}} clause for a {{document_type}} that addresses {{issue}}. The clause should be written in {{style}} style.',
      legal_id,
      '[
        {"name": "clause_type", "type": "select", "description": "Type of clause", "required": true, "options": ["confidentiality", "limitation of liability", "termination", "intellectual property", "dispute resolution"]},
        {"name": "document_type", "type": "text", "description": "Type of document", "required": true},
        {"name": "issue", "type": "text", "description": "Specific issue to address", "required": true},
        {"name": "style", "type": "select", "description": "Writing style", "required": true, "options": ["traditional legal", "plain language", "balanced"]}
      ]',
      FALSE,
      sample_user_id
    ),
    (
      'Legal Research Question',
      'Get answers to specific legal research questions',
      'Research and provide an answer to the following legal question: {{question}}. Consider jurisdiction {{jurisdiction}} and cite relevant statutes, cases, or regulations.',
      legal_id,
      '[
        {"name": "question", "type": "textarea", "description": "Legal question", "required": true},
        {"name": "jurisdiction", "type": "text", "description": "Legal jurisdiction", "required": true}
      ]',
      FALSE,
      sample_user_id
    );
END $$;
