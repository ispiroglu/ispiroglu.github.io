// Post content components
// In production, you'd generate these from MDX files at build time

import type { JSX } from "react";

export const postContent: Record<string, () => JSX.Element> = {
	"hello-world": () => (
		<div className="max-w-none">
			<h1>Hello World</h1>

			<p>
				Welcome to my new blog! This is the first post on my personal website
				built with <strong>React Router 7</strong> and deployed on{" "}
				<strong>Cloudflare Workers</strong>.
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
				<li>
					<strong>React Router 7</strong>: Modern full-stack React framework
				</li>
				<li>
					<strong>Cloudflare Workers</strong>: Edge computing for blazing-fast
					performance
				</li>
				<li>
					<strong>MDX</strong>: Markdown with React components
				</li>
				<li>
					<strong>Tailwind CSS v4</strong>: Utility-first CSS framework
				</li>
				<li>
					<strong>shadcn/ui</strong>: Beautiful, accessible components
				</li>
			</ul>

			<h3>Example Code</h3>

			<pre className="bg-muted p-4  overflow-x-auto">
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
				<li>
					<strong>Fast</strong>: Deployed on Cloudflare's global edge network
				</li>
				<li>
					<strong>Modern</strong>: Built with the latest React and web
					technologies
				</li>
				<li>
					<strong>Accessible</strong>: Designed with accessibility in mind
				</li>
				<li>
					<strong>Beautiful</strong>: Clean, minimal design with dark mode
					support
				</li>
			</ol>

			<p>Thanks for visiting, and I hope you enjoy the content!</p>
		</div>
	),

	"react-router-cloudflare": () => (
		<div className="max-w-none">
			<h1>Building with React Router 7 on Cloudflare Workers</h1>

			<p>
				React Router 7 brings a fresh approach to building full-stack React
				applications, and when combined with Cloudflare Workers, you get an
				incredibly powerful and performant stack.
			</p>

			<h2>Why This Stack?</h2>

			<h3>React Router 7</h3>

			<p>React Router 7 (formerly Remix) offers:</p>

			<ul>
				<li>
					<strong>File-based routing</strong>: Intuitive route organization
				</li>
				<li>
					<strong>Loaders & Actions</strong>: Server-side data loading and
					mutations
				</li>
				<li>
					<strong>Nested layouts</strong>: Persistent UI across route changes
				</li>
				<li>
					<strong>Progressive enhancement</strong>: Works without JavaScript
				</li>
			</ul>

			<h3>Cloudflare Workers</h3>

			<p>Workers provide:</p>

			<ul>
				<li>
					<strong>Edge computing</strong>: Run code close to users globally
				</li>
				<li>
					<strong>Zero cold starts</strong>: Instant response times
				</li>
				<li>
					<strong>KV storage</strong>: Fast key-value storage at the edge
				</li>
				<li>
					<strong>Cost-effective</strong>: Free tier is very generous
				</li>
			</ul>

			<h2>Getting Started</h2>

			<p>You can scaffold a new project with the Cloudflare CLI (C3):</p>

			<pre className="bg-muted p-4  overflow-x-auto">
				<code>
					bun create cloudflare@latest my-app --framework=react-router
				</code>
			</pre>

			<p>This creates a project with:</p>

			<ul>
				<li>
					<code>app/</code>: Your React Router application code
				</li>
				<li>
					<code>workers/</code>: Worker entry point
				</li>
				<li>
					<code>wrangler.jsonc</code>: Cloudflare configuration
				</li>
				<li>
					<code>vite.config.ts</code>: Build configuration
				</li>
			</ul>

			<h2>Accessing Cloudflare Bindings</h2>

			<p>
				One of the best features is direct access to Cloudflare resources in
				your loaders:
			</p>

			<pre className="bg-muted p-4  overflow-x-auto">
				<code>{`export async function loader({ context }: Route.LoaderArgs) {
  // Access KV storage
  const kv = context.cloudflare.env.MY_KV;
  const value = await kv.get("key");
  
  return { value };
}`}</code>
			</pre>

			<h2>Deployment</h2>

			<p>Deploying is as simple as:</p>

			<pre className="bg-muted p-4  overflow-x-auto">
				<code>bun run deploy</code>
			</pre>

			<p>Your app is instantly available on Cloudflare's global network!</p>

			<h2>Conclusion</h2>

			<p>
				React Router 7 + Cloudflare Workers is a fantastic combination for
				building modern web applications. The DX is excellent, performance is
				top-notch, and the deployment story is simple.
			</p>

			<p>Give it a try for your next project!</p>
		</div>
	),

	"forgotten-routing": () => (
		<div className="max-w-none">
			<p>
				When we buy something from local stores, we can see it, touch it, smell
				it, taste it, and experience it. Ask questions to the salesperson.
			</p>
			<p>
				But when we buy something from e-commerce websites, we only see a
				picture of it. We can't touch it, smell it, taste it, or experience it.
				But luckily, we can ask questions, read the previously asked questions
				and answers to the product.
			</p>
			<p>
				That question box is doing the job of the salesperson. From the
				shopper's side, it still looks like a conversation. A list. A few
				topics. We ask. We read what other people already asked.
			</p>
			<p>
				It is not one salesperson and one customer. It is one product, and
				everyone who is about to buy it, at the same time. Most days that crowd
				is thin, and we forget it is a crowd.
			</p>
			<p>
				Then November arrives. Black Friday. The conversation on the screen
				stays small. The crowd behind it does not. Every year we tighten the
				page. Every year we still walk into the sale with our hearts in our
				mouths.
			</p>
			<p>
				In this article, we'll walk what sat behind that question box, and why
				the sale still scared us after years of tightening. Join me as we
				examine the query the crowd actually hits.
			</p>
			<p>
				So we kept tightening. Before every November we took another pass at the
				questions page. Last year we went deeper than usual. We taught the store
				to keep one product's questions together. We added a circuit: if the
				cluster started to drown, drop the topic counts and let the list live. It
				helped. It was not enough.
			</p>
			<p>
				This year's first load test was not a drill. Night jobs on. Cache on,
				covering about forty percent of the traffic. We pushed. The wall was
				still there.
			</p>
			<p>
				Then we sat down with the query the crowd actually hits. We thought we
				had already pointed it home.
			</p>
			<p>
				Look at the screen again. A list of questions. Next to it, topic chips
				with numbers. Usage. Storage. Breastfeeding. All of it. Two jobs. One
				page.
			</p>
			<p>
				The list query is simple in spirit. Give us this product's questions.
				Last year we taught that path the product id as a routing key. The store
				could walk to the right shelf.
			</p>
			<p>
				The numbers on the chips are a different query. Count the questions per
				topic, still for this one product. We filtered by product. We did not
				point. So the store asked every shelf, and every shelf counted, and then
				we added the counts up. That was the heavy one. That was the one we had
				not watched.
			</p>
			<blockquote>
				<p>
					A routing key tells the store which shelf holds this product. Without
					it, every shelf pays for one product's questions.
				</p>
			</blockquote>
			<p>
				That's{" "}
				<strong>
					<em>The Forgotten Routing Key</em>
				</strong>
				. The cheap instruction was already in the house. We had not put it on
				the query that hurt.
			</p>
			<h2>Scattered</h2>
			<p>
				We run Elasticsearch 8.13.4. There is no coordinating-node pool. Three
				nodes are master-only. Twelve nodes are data. Search does not land on a
				master. 				The search client points at the data endpoints. The data node that
				accepts the HTTP request plays the coordinating role for that one
				search. Then it fans the work to the shards that might hold a hit.
			</p>
			<p>
				The questions index has twelve primary shards. One replica. About 136
				million questions, spread evenly, about eleven million on each primary.
				Without a routing key, "might" means all twelve. A filter on product id
				still wakes every shard. Each shard scans its own slice. The receiving
				data node merges what comes back.
			</p>
			<p>
				<img
					src="/assets/forgotten-routing/00-scattered.svg"
					alt="Architecture diagram: a data node fans one product filter to all twelve shards"
				/>
			</p>
			<p>
				One product. Twelve shards. Every data node that holds a slice still
				pays.
			</p>
			<h2>Last year's stick</h2>
			<p>
				Last year we changed where a question sits. The indexer no longer lets
				Elasticsearch hash the document id. It sends <code>_routing</code> set
				to the product id. Same product, same shard. If the product id on a row
				changes, the old document is deleted with the old routing and written
				with the new one.
			</p>
			<p>
				The list query does the same on read. When the request has a product id,
				the search sends that value as routing. The data node that accepted the
				HTTP request does not fan to twelve shards. It talks to the one shard
				that holds that product. The product-id filter is still in the query.
				The routing is what skips the other eleven.
			</p>
			<pre className="bg-muted p-4  overflow-x-auto">
				<code>{`PUT /questions/_doc/{id}?routing={productId}

GET /questions/_search?routing={productId}`}</code>
			</pre>
			<p>
				<img
					src="/assets/forgotten-routing/01-last-years-stick.svg"
					alt="Architecture diagram: index and list queries route by product id to one shard"
				/>
			</p>
			<p>The list could walk home. We thought the page could too.</p>
			<h2>The count still broadcasts</h2>
			<p>
				The topic chips are not a lookup. They are a <code>terms</code>{" "}
				aggregation. <code>size: 0</code>. No hits come back. A search can ask
				an inverted index where this product lives. A <code>terms</code> agg
				cannot return topic counts from that index alone. Each shard that
				receives the request walks documents and increments a bucket per topic.
			</p>
			<pre className="bg-muted p-4  overflow-x-auto">
				<code>{`for shard in shards_that_got_the_request:
  for doc in shard:
    if doc.productId == productId:
      counts[doc.topic] += 1`}</code>
			</pre>
			<p>
				Without <code>_routing</code>, the outer loop is twelve. The inner loop
				is about eleven million documents on each shard. Almost none match. They
				still pay the for. With <code>_routing</code>, the outer loop is one.
				The inner loop is only that product's questions on one shard.
			</p>
			<p>
				Elasticsearch says the same thing in two steps. Collect on each shard.
				Then merge.
			</p>
			<blockquote>
				<p>
					To get more accurate results, the <code>terms</code> agg fetches more
					than the top <code>size</code> terms from each shard. It fetches the
					top <code>shard_size</code> terms […] it still takes more bytes over
					the wire and waiting in memory on the coordinating node.
				</p>
			</blockquote>
			<p>
				That is the{" "}
				<a href="https://www.elastic.co/guide/en/elasticsearch/reference/8.13/search-aggregations-bucket-terms-aggregation.html">
					terms aggregation
				</a>{" "}
				in 8.13: a collect on every shard that got the request, then a merge on
				the data node that accepted HTTP. The for is the collect. Our query
				still had the product filter. It did not have <code>_routing</code>. So
				we paid twelve collects, then a merge of twelve almost-empty results.
			</p>
			<p>
				Last year we put <code>_routing</code> on the list. The aggregation
				still only carried a term on product id inside the query body. That term
				is a filter. Elasticsearch does not use it as a routing key. Omit{" "}
				<code>_routing</code> on the aggregation, and the receiving data node
				fans that for to all twelve shards. Eleven of them hold none of the
				product. They still scan. Send the wrong routing value, and you land on
				a shard that does not hold the product. The counts come back empty, or
				short. The documents did not move. The query did.
			</p>
			<p>
				So the page still paid twelve fors for every load of topic counts. Last
				year's stick helped the list. It did not help the counts. This year's
				work was the aggregation.
			</p>
			<pre className="bg-muted p-4  overflow-x-auto">
				<code>{`GET /questions/_search
{
  "size": 0,
  "query": { "term": { "productId": "{productId}" } },
  "aggs": { "topics": { "terms": { "field": "topic" } } }
}`}</code>
			</pre>
			<p>
				<img
					src="/assets/forgotten-routing/02-count-broadcasts.svg"
					alt="Architecture diagram: topic-count aggregation fans to all twelve shards"
				/>
			</p>
			<p>The documents were home. The count query was not.</p>
			<p>
				<img
					src="/assets/forgotten-routing/02-agg-cost.svg"
					alt="Architecture diagram: work per topic-count query on one shard versus twelve"
				/>
			</p>
			<p>
				Routed, work follows the product. Unrouted, work follows the whole
				index.
			</p>
			<p>
				We did not remove the for. A <code>terms</code> agg still walks
				documents. We stopped the walk from running on twelve shards. One
				collect, on the shard that actually holds the product. That is the whole
				gain.
			</p>
			<h2>The count sticks</h2>
			<p>
				This year we put <code>_routing</code> on the aggregation. Same product
				id the indexer already used. Same shard the list already walked. The for
				still runs. It runs once.
			</p>
			<pre className="bg-muted p-4  overflow-x-auto">
				<code>{`GET /questions/_search?routing={productId}
{
  "size": 0,
  "query": { "term": { "productId": "{productId}" } },
  "aggs": { "topics": { "terms": { "field": "topic" } } }
}`}</code>
			</pre>
			<p>
				<img
					src="/assets/forgotten-routing/03-count-sticks.svg"
					alt="Architecture diagram: topic-count aggregation routes by product id to one shard"
				/>
			</p>
			<p>One collect. Eleven shards idle.</p>
			<p>
				Last year the questions page hit a wall around 600 thousand requests per
				minute. Night jobs off. Indexing off. This night we left the night jobs
				on. Indexing on. Cache off. The same page held 2.1 million requests per
				minute. With the night jobs, about 3 million. Elasticsearch did not
				fall. The cluster still had room. What throttled us was Java CPU on the
				applications. A quiet day peaks around 200 thousand.
			</p>
			<h2>Looking past the one-line fix</h2>
			<p>
				The routing key on the aggregation was not a new idea. The list already
				sent it. The indexer already sent it. The count query did not. That gap
				sat in the house for a year.
			</p>
			<p>
				In an architecture review we talked about taking topic counts out of
				Elasticsearch. A table. The keys we already filter on. Increment on
				write. Decrement on archive. Dual-write. Backfill. A high refactor. AI
				made that path feel close. So we aimed at it. We did not see the easier,
				cleaner move: put <code>_routing</code> on the aggregation we already
				had. We did not need the new store. We did not need the rewrite.
			</p>
			<p>
				AI did not hide the line by writing too slow. It hid the line by making
				the big change feel like the work. We looked past the cheapest collect
				we could still skip.
			</p>
			<p>
				<strong>In conclusion</strong>,{" "}
				<strong>
					<em>The Forgotten Routing Key</em>
				</strong>{" "}
				is the cheap instruction that tells Elasticsearch which shard holds this
				product. A term in the query body is not that instruction. The body
				still filters. Only <code>_routing</code> points. Two jobs sat on one
				page. We pointed the list. We did not point the count. The count is a{" "}
				<code>terms</code> collect: a for over documents on every shard that
				receives the request. Last year we taught the documents and the list to
				go home. The aggregation still woke twelve shards. Eleven held none of
				the product. They still paid the for. This year we put the same key on
				the aggregation. One collect. The for is still there. We did not kill
				it. We stopped splitting it.
			</p>
			<p>
				The line was already in the house. The rewrite was not required.{" "}
				<strong>We must control our urge to produce more code.</strong> The walk
				is the reason. When a bigger system feels close, the query we already
				fear is still the first place to look.
			</p>
		</div>
	),

	"conways-law": () => (
		<div className="max-w-none">
			<p>
				We; humans, have been communicating since we stared living together.
				Firstly, maybe we were just communicating with each other about where to
				hunt, where to find food etc... But we evolve over time, and the reason
				why we communicate is changed. We started to communicate for more
				complex reasons like find out how to live together, building
				relationships, expressing emotions,{" "}
				<strong>
					<em>sharing knowledge</em>
				</strong>{" "}
				and so on.
			</p>
			<p>
				As we navigate the complexities of modern work, have you ever stopped to
				consider how our organizational structures might be influencing the very
				systems we're trying to build? We started to work with high number of
				co-workers in our jobs. With a simple math, if there is 100x work to do,
				we may hire 100 people to do that job correctly. We may think this will
				fasten the process. But it's not like that. Just as our earliest human
				ancestors likely communicated effectively around the campfire, so too do
				our teams and departments today rely on effective communication to get
				things done. Even we are using all kind of tools for communication and
				have a great communication between us, the ending result of the job may
				not be the one we wanted. That's why <strong>John Conway</strong>, an
				American computer scientist, came up with the Conway's law. But what
				happens when these communication structures become outdated or
				mismatched with the systems they're supposed to support? In this
				article, we'll explore Conway's Law, a powerful principle that reveals
				the complex relationship between organizational design and system
				architecture. Join me as we examine how understanding this law can help
				us build better systems and stronger teams.
			</p>
			<blockquote>
				<p>
					"Any organization that designs a system will produce a design whose
					structure is a copy of the organization's communication structure." --
					John Conway
				</p>
			</blockquote>
			<p>
				So what is that even mean? Copy of a communication structure? How could
				it be? Let's examine this concept with an example. Imagine there is
				three different teams in a department. Now let's say the first team has
				a very good communication between them, they know each other well, they
				have a clear understanding about what they need to do. And the second
				team also has a great communication structure among themselves and they
				have a clear understanding about what they need to do aswell. And the
				third aswell.
			</p>
			<p>
				Now let's say that, there has to be a new project which requires all the
				teams to work together. So we put them in one room and tell them "Hey
				guys, you are going to work on this project together". What happens? The
				first team starts talking about their own things, they start using their
				own language, they start thinking about how they can do it themselves.
				And the second team also does the same thing. They start talking about
				their own things, they start using their own language, they start
				thinking about how they can do it themselves. And the third team does
				the same thing. Even if they are in the same room, they won't be able to
				communicate effectively with each other. Because they have different
				communication structures. The first team has a structure that is based
				on their own way of communicating and the second team also has its own
				structure and the third too. And when you put them together, it's like
				trying to merge three different systems.
			</p>
			<p>
				So the project starts, all the teams start to work and develop parts of
				the project. Every team will fill the needs of the project as they know.
				At the end, the result will have 3 main structures. It may be a good
				system but it won't be a single system. It will certainly be three
				systems that are connected together somehow because of there will be 4
				different perspective to the project.
			</p>
			<p>
				As previosly mentioned, The system does not have to be bad, unusable
				system. But what if we wanted the system to consist of 4 modules? It is
				clear that we can't create 4 different modules with 3 different teams.
				Yes, we could do it on paper but the result will be no different than
				the current system. Instead of 3 big systems, we would have 4 small
				systems that connected with 3 domains.
			</p>
			<p>
				<img src="/assets/conways-law/conway.svg" alt="alt text" />
			</p>
			<p>
				To overcome this problem, we have to remember Conway's Law. Conway's Law
				is closely tied to organizational design and systems thinking
				principles. By understanding how organization shapes technology and vice
				versa, we can gain valuable insights into the complexities of modern
				software development and with this insights, we can adjust our
				organizational shapes according to our needs. That's{" "}
				<strong>
					<em>The Inverse Conway Maneuver</em>
				</strong>
			</p>
			<h3>The Inverse Conway Maneuver (ICM)</h3>
			<p>
				The term "maneuver" suggests a tactical approach to overcoming
				weaknesses in communication and organization.
			</p>
			<p>
				As organizations evolve, it's crucial to adapt their design accordingly.
				The Inverse Conway Maneuver involves proactively adjusting
				organizational structures to better accommodate changing requirements.
			</p>
			<p>
				<img
					src="/assets/conways-law/inverse_conway_0.svg"
					alt="Inverse Conway Maneuver"
				/>
			</p>
			<p>
				The Inverse Conway Maneuver is an amazing tool that can help
				organizations achieve their desired system architecture. By
				intentionally structuring their teams and communication patterns to
				mirror their system architecture, organizations can set clear goals and
				objectives for each team or department, align them with the
				organization's overall strategy, and foster collaboration among teams.
				For instance, a software development team might create separate squads
				for front-end and back-end development, mirroring the layers of their
				desired architecture. This approach can help organizations avoid common
				pitfalls like duplicated efforts or communication breakdowns and achieve
				their desired system architecture. By structuring their teams in this
				way, they can ensure that each component is developed with the same
				level of attention to detail as the entire system. This intentional
				approach helps organisations achieve their desired architecture and
				avoid common pitfalls like duplicated efforts or communication
				breakdowns. It's a win-win!
			</p>
			<p>
				Long story short, applying the Inverse Conway Maneuver is basically
				means, instead of dealing with the outcome of your current
				organizational shape, you shape your organization to mirror desired
				system architecture.
			</p>
			<p>
				<img
					src="/assets/conways-law/inverse_conway_1.svg"
					alt="Inverse Conway Maneuver"
				/>
			</p>
			<p>
				We often use conway's law and microservices side by side. but this does
				not mean that we must use microservices to benefit from conway's law. It
				is just a reflection of the Conway's law to a deployment/responsibility
				strategy.
			</p>
			<h4>Case Study: Amazon and the Inverse Conway Maneuver</h4>
			<h4>
				How did align their organizational structure with their system
				architecture?
			</h4>
			<ul>
				<li>
					<strong>Two-Pizza Teams:</strong> A famous Amazon principle is the
					"two-pizza rule." Teams are ideally small enough to be fed by two
					pizzas. This helps everyone to get along and work together, which
					means that the systems are more modular and easier to maintain. This
					is because the teams themselves are so streamlined.
				</li>
				<li>
					<strong>Focus on Loose Coupling:</strong> The microservices
					architecture minimizes tight coupling between services. This enables
					independent scaling and deployment, reflecting the autonomy of the
					two-pizza teams.
				</li>
				<li>
					<strong>APIs and Communication:</strong> Communication between
					microservices is made easy thanks to well-defined APIs. This reduces
					dependencies between teams, allowing them to work independently on
					their services.
				</li>
			</ul>
			<h4>What were the benefits or outcomes of this approach?</h4>
			<ul>
				<li>
					<strong>Faster Development Cycles:</strong> Smaller, independent teams
					can move quickly with innovation and improvements within their
					microservice.
				</li>
				<li>
					<strong>Enhanced Agility:</strong> The modular nature allows for
					easier adaptation to changing market demands.
				</li>
			</ul>
			<h4>Were there any challenges they faced during implementation?</h4>
			<ul>
				<li>
					<strong>Initial Investment:</strong> Shifting to microservices
					requires upfront investment in tooling, infrastructure, and
					potentially cultural changes within the organization.
				</li>
				<li>
					<strong>Complexity in Overall System:</strong> Managing a large number
					of independent services/teams requires robust monitoring and
					orchestration tools both technically and non-technically.
				</li>
				<li>
					<strong>Integration Challenges:</strong> Defining clear APIs/contracts
					and ensuring smooth communication between services can be complex.
				</li>
			</ul>
			<h4>
				Applying the Inverse Conway Maneuver can bring it's own challanges
			</h4>
			<ul>
				<li>
					<strong>Resistance to Change:</strong> Teams who are used to a
					different structure might resist the shift. Effective communication
					and highlighting the benefits are key.
				</li>
				<li>
					<strong>Alignment Across Departments:</strong> Coordinating diverse
					teams with potentially conflicting priorities requires strong
					leadership and a shared vision.
				</li>
				<li>
					<strong>Measuring Effectiveness:</strong> Quantifying the impact of
					the Inverse Conway Maneuver can be difficult. Focusing on metrics like
					development speed, deployment frequency, and system uptime can provide
					insights.
				</li>
			</ul>
			<p>
				<strong>In conclusion</strong>, Conway's Law highlights the crucial
				connection between an organization's communication structure and its
				system architecture. By understanding this principle, we can proactively
				shape our teams and processes to mirror our desired system architecture.
				The Inverse Conway Maneuver offers a powerful tool for achieving this
				alignment, as demonstrated by Amazon's success with microservices. It's
				important to remember that Conway's Law is an observation, not a
				prescription. Organizations can choose to leverage it or not.
				Microservices, while often discussed in conjunction with Conway's Law,
				are an architectural style and not a requirement for applying its
				principles. By applying Conway's Law and the Inverse Conway Maneuver,
				you'll be well on your way to creating a system that truly reflects your
				organization's vision.
			</p>
		</div>
	),
};
