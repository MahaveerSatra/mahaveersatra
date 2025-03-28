
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  link: string;
  image: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Dealing with Uncertainty in Machine Learning",
      excerpt: "In this article, we'll explore how to handle uncertainty in machine learning models, and why it's crucial for reliable AI systems.",
      date: "Apr 15, 2022",
      link: "https://mahaveersatra.medium.com/",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Control Systems in Everyday Life",
      excerpt: "Control systems are all around us, from simple thermostats to complex industrial machinery. Let's explore their impact.",
      date: "Jan 23, 2022",
      link: "https://mahaveersatra.medium.com/",
      image: "https://images.unsplash.com/photo-1581094488379-6a16f14fb17c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "The Future of Simulation in Engineering",
      excerpt: "Simulation technologies are evolving rapidly, transforming how engineers design and test new products and systems.",
      date: "Nov 7, 2021",
      link: "https://mahaveersatra.medium.com/",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">From My Blog</h2>
          <div className="h-1 w-20 bg-liverpool mx-auto"></div>
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
                <h3 className="text-xl font-semibold text-navy mb-3 hover:text-liverpool transition-colors">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-liverpool hover:text-liverpool/80 font-medium transition-colors"
                >
                  Read More <ExternalLink className="ml-1 h-4 w-4" />
                </a>
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
    </section>
  );
};

export default BlogSection;
