import React, { useState } from 'react';
import { Code, Zap, Eye, Server, ArrowRight, Check, Copy, Terminal, Palette, Layout, Sparkles } from 'lucide-react';
import emailjs from 'emailjs-com';

const UIVaultLanding = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [copiedCode, setCopiedCode] = useState('');

  const handleEarlyAccess = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_el8ixrs',
        'template_t7wts2m',
        {
          user_email: email,
          message: `New early access request from ${email}`,
        },
        'nmG_8kMJ6PofAHE3-'
      );
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const mcpIntegrationCode = `# Install UIVault MCP Server
npm install @uivault/mcp-server

# Add to your MCP config
{
  "mcpServers": {
    "uivault": {
      "command": "npx",
      "args": ["@uivault/mcp-server"]
    }
  }
}

# Usage with AI Assistant
"Build a glassmorphism dashboard using UIVault components"
"Create a minimalist hero section with UIVault patterns"`;

  const examplePrompt = `// UIVault optimized prompt for Glassmorphism Dashboard
const prompt = \`Create a modern dashboard with these exact specifications:

Layout: Sidebar + main content area
Colors: bg-gray-900, glass effects with bg-white/10
Components needed:
- Navigation with backdrop-blur-md
- Stats cards with border border-white/20
- Chart container with rounded-xl glass effect
- User avatar dropdown in top-right

Use these exact Tailwind classes for glass effect:
bg-white/10 backdrop-blur-md border border-white/20

Output clean, production-ready React JSX.\`;`;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 backdrop-blur-md bg-gray-900/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Layout className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">UIVault</span>
            </div>
            <button 
              onClick={() => document.getElementById('early-access').scrollIntoView()}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              Request Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Vision Stage: Seeking Early Adopters</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Stop Gambling with
            <br />AI-Generated UIs
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Preview, validate, and implement proven UI designs through our MCP-powered platform. 
            No more expensive trial-and-error with unpredictable AI outputs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => document.getElementById('early-access').scrollIntoView()}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => document.getElementById('demo').scrollIntoView()}
              className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              See How It Works
            </button>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto">
              <div className="text-left">
                <div className="flex items-center space-x-2 mb-4">
                  <Terminal className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-mono text-sm">ai-assistant</span>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <span className="text-blue-300">You:</span> <span className="text-white">"Build a glassmorphism dashboard using UIVault"</span>
                  <br />
                  <span className="text-green-300">Assistant:</span> <span className="text-gray-300">✨ Found UIVault pattern: Glassmorphism Dashboard</span>
                  <br />
                  <span className="text-purple-300">UIVault:</span> <span className="text-gray-300">Delivering optimized prompt + preview...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">The Developer Frustration</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expensive Guesswork</h3>
              <p className="text-gray-300">Burning through AI tokens with unpredictable results. No way to preview before generation.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">No Preview Control</h3>
              <p className="text-gray-300">Can't see what you're getting until it's generated. Trial and error costs time and money.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inconsistent Quality</h3>
              <p className="text-gray-300">Same prompt, different results. No standardization or reliability in AI-generated UIs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="demo" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The UIVault Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A curated design system with live previews, optimized prompts, and MCP server integration
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features */}
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Live Interactive Previews</h3>
                    <p className="text-gray-300">See exactly what you're getting before generation. No surprises, no wasted tokens.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Server className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">MCP Server Integration</h3>
                    <p className="text-gray-300">Simple commands like "build using Glassmorphism Dashboard" with guaranteed results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tailwind-First Architecture</h3>
                    <p className="text-gray-300">Production-ready components with utility classes. Copy-paste and customize instantly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MCP Integration Example */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">MCP Integration</span>
                </div>
                <button 
                  onClick={() => copyCode(mcpIntegrationCode, 'mcp')}
                  className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'mcp' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="text-sm">{copiedCode === 'mcp' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                <code>{mcpIntegrationCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* UI Examples Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Curated Design Categories</h2>
            <p className="text-xl text-gray-300">Battle-tested UI patterns with optimized prompts</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Glassmorphism Example */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="w-full h-40 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Palette className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Glassmorphism UI</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Glassmorphism</h3>
              <p className="text-gray-300 text-sm mb-3">Modern glass effects with backdrop blur and transparency</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-400 bg-blue-600/20 px-2 py-1 rounded">12 components</span>
                <span className="text-xs text-gray-400">Most Popular</span>
              </div>
            </div>

            {/* Minimalist Example */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="w-full h-40 bg-gray-700/50 border border-gray-600 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Layout className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Clean & Minimal</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Minimalist</h3>
              <p className="text-gray-300 text-sm mb-3">Clean, spacious designs focusing on content and usability</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-green-400 bg-green-600/20 px-2 py-1 rounded">8 components</span>
                <span className="text-xs text-gray-400">Clean Code</span>
              </div>
            </div>

            {/* Dashboard Example */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="w-full h-40 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Server className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Admin Dashboard</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Admin Dashboards</h3>
              <p className="text-gray-300 text-sm mb-3">Complete dashboard layouts with charts and data tables</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-purple-400 bg-purple-600/20 px-2 py-1 rounded">15 components</span>
                <span className="text-xs text-gray-400">Enterprise Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Optimized Prompts, Guaranteed Results</h2>
            <p className="text-xl text-gray-300">Every UI pattern comes with battle-tested prompts</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">Optimized Prompt Example</span>
              </div>
              <button 
                onClick={() => copyCode(examplePrompt, 'prompt')}
                className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
              >
                {copiedCode === 'prompt' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span className="text-sm">{copiedCode === 'prompt' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
              <code>{examplePrompt}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="early-access" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Beta</h2>
          <p className="text-xl text-gray-300 mb-8">
            Be among the first to experience predictable AI-generated UIs. Help us shape the future of design automation.
          </p>
          
          <form onSubmit={handleEarlyAccess} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white" 
                required 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg font-medium transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Request Access'}
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Free beta access • No credit card required
            </p>
            {submitStatus === 'success' && (
              <p className="text-green-400 text-sm mt-2">Thanks! We'll be in touch soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Layout className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">UIVault</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 UIVault. Built for developers who value predictable results.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UIVaultLanding;