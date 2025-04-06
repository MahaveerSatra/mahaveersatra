import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  link: string;
  image: string;
}

const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: "post1",
      title: "Dealing with Uncertainty in Machine Learning",
      excerpt: "In this article, we'll explore how to handle uncertainty in machine learning models, and why it's crucial for reliable AI systems.",
      content: `
        <h2>Dealing with Uncertainty in Machine Learning</h2>
        <p>Machine learning models are increasingly being used to make important decisions in fields ranging from healthcare to finance. However, these models are not infallible and can make errors. Understanding and quantifying the uncertainty in model predictions is crucial for building reliable AI systems.</p>
        
        <h3>Types of Uncertainty</h3>
        <p>There are two main types of uncertainty in machine learning:</p>
        <ul>
          <li><strong>Aleatoric uncertainty</strong>: This is uncertainty due to the inherent noise in the data. No matter how much data we collect, this uncertainty cannot be reduced.</li>
          <li><strong>Epistemic uncertainty</strong>: This is uncertainty due to our lack of knowledge or data. This type of uncertainty can be reduced by collecting more data.</li>
        </ul>
        
        <h3>Methods for Quantifying Uncertainty</h3>
        <p>Several methods exist for quantifying uncertainty in machine learning models:</p>
        <ol>
          <li><strong>Bayesian Neural Networks</strong>: These networks learn a distribution over weights, allowing them to express uncertainty in predictions.</li>
          <li><strong>Monte Carlo Dropout</strong>: This technique uses dropout at inference time to sample from an approximate posterior distribution.</li>
          <li><strong>Ensemble Methods</strong>: By training multiple models and averaging their predictions, we can get a measure of uncertainty.</li>
        </ol>
        
        <p>Incorporating uncertainty quantification into machine learning models is essential for building robust AI systems that can be trusted in critical applications.</p>
      `,
      date: "Apr 15, 2022",
      link: "https://mahaveersatra.medium.com/",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: "post2",
      title: "Control Systems in Everyday Life",
      excerpt: "Control systems are all around us, from simple thermostats to complex industrial machinery. Let's explore their impact.",
      content: `
        <h2>Control Systems in Everyday Life</h2>
        <p>Control systems are an integral part of modern life, governing everything from the temperature in our homes to the flight of commercial aircraft. These systems monitor and adjust variables to maintain desired conditions or achieve specific goals.</p>
        
        <div class="mb-6">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Control Systems Team" class="w-full h-auto rounded-lg mb-4">
          <p class="text-sm text-gray-500 italic">Modern control systems require collaboration between engineers across disciplines.</p>
        </div>
        
        <h3>Common Examples of Control Systems</h3>
        <p>Here are some everyday examples of control systems:</p>
        <ul>
          <li><strong>Thermostats</strong>: These simple control systems maintain a desired temperature by turning heating or cooling systems on and off.</li>
          <li><strong>Cruise Control</strong>: This automotive feature maintains a set speed by adjusting the throttle position.</li>
          <li><strong>Water Level Controllers</strong>: Found in toilets and water tanks, these systems maintain water at appropriate levels.</li>
        </ul>
        
        <h3>Industrial Applications</h3>
        <p>In industrial settings, control systems become more complex:</p>
        <ol>
          <li><strong>Process Control</strong>: Systems that maintain conditions such as temperature, pressure, flow rate, and level in industrial processes.</li>
          <li><strong>Motion Control</strong>: Systems that control position, velocity, and acceleration in manufacturing equipment.</li>
          <li><strong>Distributed Control Systems (DCS)</strong>: Large-scale systems that monitor and control entire industrial plants.</li>
        </ol>
        
        <p>Understanding how control systems work helps us appreciate the complexity behind seemingly simple automated tasks in our daily lives.</p>
      `,
      date: "Jan 23, 2022",
      link: "https://mahaveersatra.medium.com/",
      image: "https://images.unsplash.com/photo-1581094488379-6a16f14fb17c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: "post3",
      title: "The Future of Simulation in Engineering",
      excerpt: "Simulation technologies are evolving rapidly, transforming how engineers design and test new products and systems.",
      content: `
        <h2>The Future of Simulation in Engineering</h2>
        <p>Simulation has become an essential tool in modern engineering, allowing engineers to test designs, predict performance, and identify potential issues before physical prototyping begins. As computing power increases and simulation algorithms become more sophisticated, the capabilities and applications of simulation continue to expand.</p>
        
        <h3>Emerging Trends in Simulation</h3>
        <p>Several trends are shaping the future of simulation in engineering:</p>
        <ul>
          <li><strong>AI-Enhanced Simulation</strong>: Machine learning is being integrated with simulation to speed up computations and provide more accurate results.</li>
          <li><strong>Digital Twins</strong>: Virtual replicas of physical assets that can be used to monitor, analyze, and optimize performance.</li>
          <li><strong>Real-Time Simulation</strong>: Simulations that run fast enough to provide immediate feedback, enabling interactive design and testing.</li>
        </ul>
        
        <h3>Impact on Industries</h3>
        <p>These advancements in simulation are transforming various industries:</p>
        <ol>
          <li><strong>Automotive</strong>: Reducing the need for physical crash tests and enabling the design of more efficient and safer vehicles.</li>
          <li><strong>Aerospace</strong>: Allowing for more comprehensive testing of aircraft systems without expensive flight tests.</li>
          <li><strong>Manufacturing</strong>: Optimizing production processes and reducing waste through virtual factory models.</li>
        </ol>
        
        <p>As simulation technologies continue to advance, they will play an increasingly important role in accelerating innovation and reducing costs across all engineering disciplines.</p>
      `,
      date: "Nov 7, 2021",
      link: "https://mahaveersatra.medium.com/",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const openBlog = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closeBlog = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="blog" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">From My Blog</h2>
          <div className="h-1 w-20 bg-accent-yellow mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Insights and thoughts on engineering, technology, and my other interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold text-navy mb-3 hover:text-highlight-orange transition-colors">
                  <button onClick={() => openBlog(post)} className="text-left hover:text-highlight-orange">
                    {post.title}
                  </button>
                </h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <button 
                  onClick={() => openBlog(post)} 
                  className="inline-flex items-center text-highlight-orange hover:text-highlight-orange/80 font-medium transition-colors"
                >
                  Read More <ExternalLink className="ml-1 h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://mahaveersatra.medium.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-navy border border-navy rounded-md hover:bg-navy hover:text-white transition-colors font-medium"
          >
            View All Articles <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-primary-blue">{selectedPost.title}</h2>
              <Button variant="ghost" onClick={closeBlog} size="sm" className="rounded-full h-10 w-10 p-0">
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-auto rounded-lg object-cover max-h-[400px]"
                />
              </div>
              
              <div className="text-sm text-gray-500 mb-4">{selectedPost.date}</div>
              
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a 
                  href={selectedPost.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-highlight-orange text-white rounded-md hover:bg-highlight-orange/90 transition-colors font-medium"
                >
                  Read Full Article <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
