import { BrandCard } from "@/components/ui/brand-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TechnicalDocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Technical Documentation</h1>
        <p className="text-gray-600 mb-8">
          Comprehensive technical documentation for implementing and extending JellyPrompt.
        </p>

        <Tabs defaultValue="database">
          <TabsList className="mb-8">
            <TabsTrigger value="database">Database Structure</TabsTrigger>
            <TabsTrigger value="parameters">Parameter Processing</TabsTrigger>
            <TabsTrigger value="ai">AI Integration</TabsTrigger>
            <TabsTrigger value="formatting">Content Formatting</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
          </TabsList>

          <TabsContent value="database">
            <BrandCard>
              <div className="p-6 prose prose-blue max-w-none">
                <h2>Template Database Structure</h2>
                <p>
                  JellyPrompt uses a relational database structure to store templates, categories, user data, and
                  generated content. The core tables are:
                </p>

                <h3>Categories Table</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
                </pre>

                <h3>Prompts Table</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`CREATE TABLE prompts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  template TEXT NOT NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  parameters JSONB DEFAULT '{}',
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
                </pre>

                <h3>User Favorites Table</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`CREATE TABLE user_favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  prompt_id UUID REFERENCES prompts(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, prompt_id)
);`}
                </pre>

                <h3>Generated Content Table</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`CREATE TABLE generated_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  prompt_id UUID REFERENCES prompts(id) ON DELETE SET NULL,
  parameters_used JSONB DEFAULT '{}',
  generated_content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
                </pre>

                <h3>User Settings Table</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`CREATE TABLE user_settings (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  default_format TEXT DEFAULT 'markdown',
  theme TEXT DEFAULT 'system',
  default_temperature FLOAT DEFAULT 0.7,
  default_max_tokens INTEGER DEFAULT 1000,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
                </pre>

                <h3>Relationships</h3>
                <p>The database schema establishes these key relationships:</p>
                <ul>
                  <li>Each prompt belongs to a category</li>
                  <li>Each prompt is created by a user</li>
                  <li>Users can favorite multiple prompts</li>
                  <li>Generated content is linked to both the user and the prompt used</li>
                  <li>Each user has one settings record</li>
                </ul>

                <h3>Indexes</h3>
                <p>To optimize query performance, indexes are created on:</p>
                <ul>
                  <li>Category slugs for URL-based lookups</li>
                  <li>Prompt category_id for filtering prompts by category</li>
                  <li>Prompt user_id for finding a user&apos;s prompts</li>
                  <li>Prompt is_featured for displaying featured prompts</li>
                  <li>User favorites user_id and prompt_id for quick lookups</li>
                  <li>Generated content user_id for user history</li>
                </ul>
              </div>
            </BrandCard>
          </TabsContent>

          <TabsContent value="parameters">
            <BrandCard>
              <div className="p-6 prose prose-blue max-w-none">
                <h2>Parameter Processing System</h2>
                <p>
                  JellyPrompt uses a flexible parameter system to customize prompt templates. Parameters are stored as
                  JSONB in the database and processed at runtime.
                </p>

                <h3>Parameter Types</h3>
                <p>The system supports these parameter types:</p>
                <ul>
                  <li>
                    <strong>text</strong>: Single-line text input
                  </li>
                  <li>
                    <strong>textarea</strong>: Multi-line text input
                  </li>
                  <li>
                    <strong>select</strong>: Dropdown selection from predefined options
                  </li>
                  <li>
                    <strong>number</strong>: Numeric input
                  </li>
                  <li>
                    <strong>boolean</strong>: True/false toggle
                  </li>
                </ul>

                <h3>Parameter Schema</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`{
  "name": "parameter_name",
  "type": "text|textarea|select|number|boolean",
  "description": "Description of the parameter",
  "required": true|false,
  "options": ["option1", "option2"], // Only for select type
  "default": "default value" // Optional default value
}`}
                </pre>

                <h3>Template Syntax</h3>
                <p>
                  Parameters are referenced in templates using double curly braces: <code>{`{{ parameter_name }}`}</code>
                </p>
                <p>Example template:</p>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`Write a {{tone}} email to {{recipient}} regarding {{subject}}. The email should be approximately {{length}} words long.`}
                </pre>

                <h3>Parameter Processing Flow</h3>
                <ol>
                  <li>User selects a prompt template</li>
                  <li>System dynamically generates a form based on the template&apos;s parameters</li>
                  <li>User fills in parameter values</li>
                  <li>On submission, the system replaces all parameter placeholders with user values</li>
                  <li>The processed template is sent to the AI model</li>
                  <li>Generated content and used parameters are stored for future reference</li>
                </ol>

                <h3>Validation</h3>
                <p>The parameter system includes validation to ensure:</p>
                <ul>
                  <li>Required parameters are provided</li>
                  <li>Parameter types match expected formats</li>
                  <li>Select parameters use only allowed options</li>
                  <li>Number parameters are within acceptable ranges</li>
                </ul>

                <h3>Advanced Features</h3>
                <p>The parameter system also supports:</p>
                <ul>
                  <li>Conditional parameters that appear based on other parameter values</li>
                  <li>Parameter groups for organizing complex templates</li>
                  <li>Rich text parameters with formatting options</li>
                  <li>File upload parameters for including images or documents</li>
                </ul>
              </div>
            </BrandCard>
          </TabsContent>

          <TabsContent value="ai">
            <BrandCard>
              <div className="p-6 prose prose-blue max-w-none">
                <h2>AI Integration Layer</h2>
                <p>
                  JellyPrompt integrates with various AI models through a standardized API layer. This abstraction
                  allows for easy switching between different AI providers.
                </p>

                <h3>Supported AI Models</h3>
                <ul>
                  <li>OpenAI GPT-4o</li>
                  <li>OpenAI GPT-3.5 Turbo</li>
                  <li>Anthropic Claude</li>
                  <li>Google Gemini</li>
                  <li>Custom models via API</li>
                </ul>

                <h3>Integration Architecture</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`// AI Provider Interface
interface AIProvider {
  generateContent(prompt: string, options: GenerationOptions): Promise<GenerationResult>;
  getModelInfo(): ModelInfo;
  supportedFeatures(): SupportedFeatures;
}

// Implementation for OpenAI
class OpenAIProvider implements AIProvider {
  constructor(private apiKey: string, private model: string) {}
  
  async generateContent(prompt: string, options: GenerationOptions): Promise<GenerationResult> {
    // Implementation using OpenAI API
  }
  
  getModelInfo(): ModelInfo {
    // Return model information
  }
  
  supportedFeatures(): SupportedFeatures {
    // Return supported features
  }
}`}
                </pre>

                <h3>Generation Options</h3>
                <p>The AI integration layer supports these generation options:</p>
                <ul>
                  <li>
                    <strong>temperature</strong>: Controls randomness (0.0-1.0)
                  </li>
                  <li>
                    <strong>maxTokens</strong>: Maximum length of generated content
                  </li>
                  <li>
                    <strong>topP</strong>: Controls diversity via nucleus sampling
                  </li>
                  <li>
                    <strong>frequencyPenalty</strong>: Reduces repetition of tokens
                  </li>
                  <li>
                    <strong>presencePenalty</strong>: Encourages new topics
                  </li>
                  <li>
                    <strong>stop</strong>: Sequences where generation should stop
                  </li>
                </ul>

                <h3>Prompt Engineering</h3>
                <p>The AI integration layer includes prompt engineering techniques:</p>
                <ul>
                  <li>System messages to set context and tone</li>
                  <li>Few-shot examples for better results</li>
                  <li>Chain-of-thought prompting for complex reasoning</li>
                  <li>Output format specification</li>
                </ul>

                <h3>Error Handling</h3>
                <p>The integration layer handles these common errors:</p>
                <ul>
                  <li>API rate limiting with exponential backoff</li>
                  <li>Token limit exceeded with automatic truncation</li>
                  <li>Content policy violations with user-friendly messages</li>
                  <li>Network failures with retry logic</li>
                </ul>

                <h3>Streaming Support</h3>
                <p>For a better user experience, the AI integration layer supports streaming responses:</p>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`async function streamGeneratedContent(prompt: string, options: GenerationOptions): Promise<ReadableStream> {
  // Implementation for streaming responses
}`}
                </pre>

                <h3>Usage Tracking</h3>
                <p>The integration layer tracks usage metrics:</p>
                <ul>
                  <li>Tokens used per request</li>
                  <li>Cost per request</li>
                  <li>Response times</li>
                  <li>Error rates</li>
                </ul>
              </div>
            </BrandCard>
          </TabsContent>

          <TabsContent value="formatting">
            <BrandCard>
              <div className="p-6 prose prose-blue max-w-none">
                <h2>Content Formatting Engine</h2>
                <p>
                  JellyPrompt includes a powerful content formatting engine that processes AI-generated content into
                  various formats.
                </p>

                <h3>Supported Output Formats</h3>
                <ul>
                  <li>
                    <strong>Markdown</strong>: Rich text with headings, lists, links, etc.
                  </li>
                  <li>
                    <strong>Plain Text</strong>: Unformatted text
                  </li>
                  <li>
                    <strong>HTML</strong>: Web-ready formatted content
                  </li>
                  <li>
                    <strong>JSON</strong>: Structured data format
                  </li>
                  <li>
                    <strong>CSV</strong>: Tabular data format
                  </li>
                </ul>

                <h3>Formatting Process</h3>
                <ol>
                  <li>AI generates content (typically in markdown)</li>
                  <li>Content is parsed and validated</li>
                  <li>Content is transformed to the requested output format</li>
                  <li>Additional formatting rules are applied (e.g., syntax highlighting)</li>
                  <li>Content is returned to the user</li>
                </ol>

                <h3>Markdown Processing</h3>
                <p>The formatting engine uses a custom markdown processor that supports:</p>
                <ul>
                  <li>Headings (H1-H6)</li>
                  <li>Lists (ordered and unordered)</li>
                  <li>Links and images</li>
                  <li>Code blocks with syntax highlighting</li>
                  <li>Tables</li>
                  <li>Blockquotes</li>
                  <li>Horizontal rules</li>
                  <li>Bold, italic, and strikethrough text</li>
                </ul>

                <h3>HTML Conversion</h3>
                <p>When converting to HTML, the engine:</p>
                <ul>
                  <li>Sanitizes content to prevent XSS attacks</li>
                  <li>Adds appropriate CSS classes for styling</li>
                  <li>Ensures accessibility compliance</li>
                  <li>Optimizes for responsive display</li>
                </ul>

                <h3>Code Highlighting</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`function highlightCode(code: string, language: string): string {
  // Implementation for syntax highlighting
}`}
                </pre>

                <h3>Export Options</h3>
                <p>The formatting engine supports exporting content as:</p>
                <ul>
                  <li>Downloadable files (.md, .txt, .html, .json, .csv)</li>
                  <li>Clipboard content</li>
                  <li>Email attachments</li>
                  <li>Direct integration with third-party services</li>
                </ul>

                <h3>Custom Templates</h3>
                <p>Users can define custom output templates:</p>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`{
  "name": "Blog Post Template",
  "format": "html",
  "template": "<article class='blog-post'>{{content}}</article>",
  "css": ".blog-post { font-family: 'Georgia', serif; line-height: 1.6; }"
}`}
                </pre>
              </div>
            </BrandCard>
          </TabsContent>

          <TabsContent value="deployment">
            <BrandCard>
              <div className="p-6 prose prose-blue max-w-none">
                <h2>Deployment Architecture</h2>
                <p>JellyPrompt is designed for flexible deployment across various environments.</p>

                <h3>Architecture Overview</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Next.js App    │────▶│  API Layer      │────▶│  Database       │
│  (Frontend)     │     │  (Backend)      │     │  (Supabase)     │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Authentication │     │  AI Providers   │     │  Storage        │
│  (Supabase Auth)│     │  (OpenAI, etc.) │     │  (Supabase)     │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘`}
                </pre>

                <h3>Deployment Options</h3>
                <ul>
                  <li>
                    <strong>Vercel</strong>: Recommended for Next.js deployment
                  </li>
                  <li>
                    <strong>Netlify</strong>: Alternative frontend hosting
                  </li>
                  <li>
                    <strong>AWS</strong>: For custom infrastructure
                  </li>
                  <li>
                    <strong>Docker</strong>: For containerized deployment
                  </li>
                  <li>
                    <strong>Self-hosted</strong>: For complete control
                  </li>
                </ul>

                <h3>Environment Variables</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`# Required
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
OPENAI_API_KEY=your_openai_api_key

# Optional
NEXT_PUBLIC_SITE_URL=your_site_url
MAX_TOKENS=4000                 # Server-side only
DEFAULT_MODEL=gpt-4o            # Server-side only
ENABLE_ANALYTICS=true           # Server-side only`}
                </pre>

                <h3>Scaling Strategies</h3>
                <p>JellyPrompt is designed to scale horizontally:</p>
                <ul>
                  <li>Stateless API design for easy replication</li>
                  <li>Edge caching for frequently accessed prompts</li>
                  <li>Database connection pooling</li>
                  <li>Rate limiting to prevent abuse</li>
                  <li>Background job processing for long-running tasks</li>
                </ul>

                <h3>Security Considerations</h3>
                <p>Security best practices implemented:</p>
                <ul>
                  <li>Row-level security in Supabase</li>
                  <li>API key rotation</li>
                  <li>Content sanitization</li>
                  <li>CORS configuration</li>
                  <li>Rate limiting</li>
                  <li>Input validation</li>
                  <li>Audit logging</li>
                </ul>

                <h3>Monitoring</h3>
                <p>Recommended monitoring setup:</p>
                <ul>
                  <li>Application performance monitoring</li>
                  <li>Error tracking</li>
                  <li>Usage metrics</li>
                  <li>Cost monitoring</li>
                  <li>Uptime checks</li>
                </ul>

                <h3>Backup Strategy</h3>
                <p>Data protection measures:</p>
                <ul>
                  <li>Daily database backups</li>
                  <li>Point-in-time recovery</li>
                  <li>Geo-replication for disaster recovery</li>
                  <li>Export/import functionality for user data</li>
                </ul>
              </div>
            </BrandCard>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
