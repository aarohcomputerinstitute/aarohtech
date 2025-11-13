const list = [
  ['Aenean quam ornare. Curabitur blandit.', 'Nullam quis risus eget urna mollis ornare.'],
  ['Etiam porta euismod malesuada mollis.', 'Vivamus sagittis lacus vel augue rutrum.']
];


const blogList = [
  {
    id: 1,
    category: 'Coding',
    date: '14 Apr 2022',
    image: '/img/photos/b4.jpg',
    title: 'Mastering React Hooks in 2024',
    description: `Discover the power of React Hooks and how they can simplify your components.`,
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks have revolutionized how we write React components. In this post, we'll explore the most commonly used hooks and their practical applications.</p>
      
      <h3>useState: Managing State</h3>
      <p>The <code>useState</code> hook allows you to add state to functional components. Here's a simple example:</p>
      <pre><code>const [count, setCount] = useState(0);</code></pre>
      
      <h3>useEffect: Side Effects</h3>
      <p>Handle side effects like data fetching with <code>useEffect</code>:</p>
      <pre><code>useEffect(() => {
        fetchData().then(data => setData(data));
      }, []);</code></pre>
      
      <h3>Custom Hooks</h3>
      <p>Create reusable logic with custom hooks:</p>
      <pre><code>function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        // Implementation...
      }</code></pre>
    `
  },
  {
    id: 2,
    category: 'Workspace',
    date: '29 Mar 2022',
    image: '/img/photos/b5.jpg',
    title: 'Creating the Perfect Developer Workspace',
    description: `Transform your workspace into a productivity powerhouse with these expert tips.`,
    content: `
      <h2>Ergonomics First</h2>
      <p>Your workspace should support your body. Consider these ergonomic essentials:</p>
      <ul>
        <li>Adjustable chair with lumbar support</li>
        <li>Monitor at eye level</li>
        <li>Keyboard and mouse at elbow height</li>
      </ul>
      
      <h3>Lighting Matters</h3>
      <p>Proper lighting reduces eye strain. Aim for:</p>
      <ul>
        <li>Natural light when possible</li>
        <li>Adjustable desk lamp</li>
        <li>Bias lighting behind monitors</li>
      </ul>
      
      <blockquote>
        "A well-designed workspace isn't a luxury, it's a necessity for sustainable productivity."
      </blockquote>
    `
  },
  {
    id: 3,
    category: 'Meeting',
    date: '26 Feb 2022',
    image: '/img/photos/b6.jpg',
    title: 'Effective Remote Team Meetings',
    description: `Learn how to conduct productive and engaging remote meetings that your team will love.`,
    content: `
      <h2>Before the Meeting</h2>
      <p>Set your team up for success with proper preparation:</p>
      <ol>
        <li>Share an agenda 24 hours in advance</li>
        <li>Assign clear roles (facilitator, note-taker, timekeeper)</li>
        <li>Test all technology beforehand</li>
      </ol>
      
      <h3>During the Meeting</h3>
      <p>Keep engagement high with these strategies:</p>
      <ul>
        <li>Start with a quick check-in question</li>
        <li>Use video when possible</li>
        <li>Encourage participation with polls or chat</li>
      </ul>
      
      <h3>After the Meeting</h3>
      <p>Ensure accountability with clear follow-up:</p>
      <ul>
        <li>Send meeting notes within 1 hour</li>
        <li>Include action items with owners and deadlines</li>
        <li>Schedule any necessary follow-ups</li>
      </ul>
    `
  },
  {
    id: 4,
    category: 'Business Tips',
    date: '7 Jan 2022',
    image: '/img/photos/b7.jpg',
    title: 'Morbi leo risus porta eget',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  },
  {
    id: 5,
    category: 'Business Tips',
    date: '7 Jan 2022',
    image: '/img/photos/b7.jpg',
    title: 'Morbi leo risus porta eget',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  },
  {
    id: 6,
    category: 'Business Tips',
    date: '7 Jan 2022',
    image: '/img/photos/b7.jpg',
    title: 'Morbi leo risus porta eget',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  },
  {
    id: 7,
    category: 'Business Tips',
    date: '7 Jan 2022',
    image: '/img/photos/b7.jpg',
    title: 'Morbi leo risus porta eget',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  },
  {
    id: 8,
    category: 'Business Tips',
    date: '7 Jan 2022',
    image: '/img/photos/b7.jpg',
    title: 'Morbi leo risus porta eget',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  },
  {
    id: 9,
    category: 'Business Tips',
    date: '7 Jan 2022',
    image: '/img/photos/b7.jpg',
    title: 'Morbi leo risus porta eget',
    description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.`
  },
];


export { list, blogList };
