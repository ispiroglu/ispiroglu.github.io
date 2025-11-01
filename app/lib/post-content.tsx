// Post content components
// In production, you'd generate these from MDX files at build time

export const postContent: Record<string, () => JSX.Element> = {
  "hello-world": () => (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Hello World</h1>
      
      <p>
        Welcome to my new blog! This is the first post on my personal website built with{" "}
        <strong>React Router 7</strong> and deployed on <strong>Cloudflare Workers</strong>.
      </p>

      <h2>What to Expect</h2>
      
      <p>I'll be writing about:</p>
      
      <ul>
        <li>Software engineering and web development</li>
        <li>My experiences working with different technologies</li>
        <li>Tips and tricks I've learned along the way</li>
        <li>Personal projects and experiments</li>
      </ul>

      <h2>Technical Stack</h2>
      
      <p>This website is built with:</p>
      
      <ul>
        <li><strong>React Router 7</strong>: Modern full-stack React framework</li>
        <li><strong>Cloudflare Workers</strong>: Edge computing for blazing-fast performance</li>
        <li><strong>MDX</strong>: Markdown with React components</li>
        <li><strong>Tailwind CSS v4</strong>: Utility-first CSS framework</li>
        <li><strong>shadcn/ui</strong>: Beautiful, accessible components</li>
      </ul>

      <h3>Example Code</h3>
      
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
        <code>{`export function HelloWorld() {
  return (
    <div className="p-4">
      <h1>Hello, World!</h1>
      <p>Welcome to my blog!</p>
    </div>
  );
}`}</code>
      </pre>

      <h2>Features</h2>
      
      <p>Some cool features of this site:</p>
      
      <ol>
        <li><strong>Fast</strong>: Deployed on Cloudflare's global edge network</li>
        <li><strong>Modern</strong>: Built with the latest React and web technologies</li>
        <li><strong>Accessible</strong>: Designed with accessibility in mind</li>
        <li><strong>Beautiful</strong>: Clean, minimal design with dark mode support</li>
      </ol>

      <p>Thanks for visiting, and I hope you enjoy the content!</p>
    </div>
  ),

  "react-router-cloudflare": () => (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Building with React Router 7 on Cloudflare Workers</h1>
      
      <p>
        React Router 7 brings a fresh approach to building full-stack React applications, and when 
        combined with Cloudflare Workers, you get an incredibly powerful and performant stack.
      </p>

      <h2>Why This Stack?</h2>

      <h3>React Router 7</h3>
      
      <p>React Router 7 (formerly Remix) offers:</p>
      
      <ul>
        <li><strong>File-based routing</strong>: Intuitive route organization</li>
        <li><strong>Loaders & Actions</strong>: Server-side data loading and mutations</li>
        <li><strong>Nested layouts</strong>: Persistent UI across route changes</li>
        <li><strong>Progressive enhancement</strong>: Works without JavaScript</li>
      </ul>

      <h3>Cloudflare Workers</h3>
      
      <p>Workers provide:</p>
      
      <ul>
        <li><strong>Edge computing</strong>: Run code close to users globally</li>
        <li><strong>Zero cold starts</strong>: Instant response times</li>
        <li><strong>KV storage</strong>: Fast key-value storage at the edge</li>
        <li><strong>Cost-effective</strong>: Free tier is very generous</li>
      </ul>

      <h2>Getting Started</h2>
      
      <p>You can scaffold a new project with the Cloudflare CLI (C3):</p>
      
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
        <code>bun create cloudflare@latest my-app --framework=react-router</code>
      </pre>

      <p>This creates a project with:</p>
      
      <ul>
        <li><code>app/</code>: Your React Router application code</li>
        <li><code>workers/</code>: Worker entry point</li>
        <li><code>wrangler.jsonc</code>: Cloudflare configuration</li>
        <li><code>vite.config.ts</code>: Build configuration</li>
      </ul>

      <h2>Accessing Cloudflare Bindings</h2>
      
      <p>One of the best features is direct access to Cloudflare resources in your loaders:</p>
      
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
        <code>{`export async function loader({ context }: Route.LoaderArgs) {
  // Access KV storage
  const kv = context.cloudflare.env.MY_KV;
  const value = await kv.get("key");
  
  return { value };
}`}</code>
      </pre>

      <h2>Deployment</h2>
      
      <p>Deploying is as simple as:</p>
      
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
        <code>bun run deploy</code>
      </pre>

      <p>Your app is instantly available on Cloudflare's global network!</p>

      <h2>Conclusion</h2>
      
      <p>
        React Router 7 + Cloudflare Workers is a fantastic combination for building modern web applications. 
        The DX is excellent, performance is top-notch, and the deployment story is simple.
      </p>
      
      <p>Give it a try for your next project!</p>
    </div>
  ),
};

