'use client';

import { useState, useRef, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { useAuth } from '@/contexts/auth-context';
import { MessageCircle, Send, Bot, User, Lightbulb, BookOpen, Briefcase, Users } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestions?: string[];
  recommendations?: {
    type: 'course' | 'job' | 'mentor';
    items: any[];
  };
}

export default function ChatPage() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: `Hello ${user?.name || 'there'}! I'm your AI Career Assistant. I can help you discover career paths, recommend courses, and connect you with mentors based on your interests and academic background. What would you like to explore today?`,
      timestamp: new Date(),
      suggestions: [
        "What career suits me if I love AI and am from an ECE background?",
        "Show me the best free courses in embedded systems",
        "I'm interested in robotics and entrepreneurship",
        "Help me find mentors in data science"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response with recommendations
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('ai') && lowerMessage.includes('ece')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "Great question! With an ECE background and passion for AI, you have excellent opportunities in AI Hardware Engineering, Machine Learning Engineering, and Computer Vision. Here are some tailored recommendations:",
        timestamp: new Date(),
        recommendations: {
          type: 'course',
          items: [
            {
              title: 'AI for Hardware Engineers',
              platform: 'Coursera',
              duration: '6 weeks',
              price: 'Free',
              rating: 4.8,
              skills: ['Neural Networks', 'FPGA', 'Edge AI']
            },
            {
              title: 'Computer Vision Specialization',
              platform: 'edX',
              duration: '4 months',
              price: '$49/month',
              rating: 4.7,
              skills: ['OpenCV', 'Deep Learning', 'Image Processing']
            }
          ]
        }
      };
    }

    if (lowerMessage.includes('embedded systems') || lowerMessage.includes('courses')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "Here are the best embedded systems courses I found for you, including both free and premium options:",
        timestamp: new Date(),
        recommendations: {
          type: 'course',
          items: [
            {
              title: 'Embedded Systems Fundamentals',
              platform: 'Udemy',
              duration: '12 hours',
              price: 'Free',
              rating: 4.6,
              skills: ['C Programming', 'Microcontrollers', 'Real-time Systems']
            },
            {
              title: 'ARM Cortex-M Programming',
              platform: 'Coursera',
              duration: '8 weeks',
              price: '$39/month',
              rating: 4.9,
              skills: ['ARM Assembly', 'RTOS', 'Hardware Debugging']
            }
          ]
        }
      };
    }

    if (lowerMessage.includes('mentor') || lowerMessage.includes('professional')) {
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: "I found some excellent mentors in your field of interest. Here are professionals who can guide your career:",
        timestamp: new Date(),
        recommendations: {
          type: 'mentor',
          items: [
            {
              name: 'Dr. Priya Sharma',
              role: 'Senior AI Engineer at Google',
              experience: '8 years',
              expertise: ['Machine Learning', 'Computer Vision', 'AI Hardware'],
              rating: 4.9,
              sessions: 150,
              price: '₹2,500/hour'
            },
            {
              name: 'Rajesh Kumar',
              role: 'Principal Engineer at Intel',
              experience: '12 years',
              expertise: ['Embedded Systems', 'IoT', 'Edge Computing'],
              rating: 4.8,
              sessions: 200,
              price: '₹3,000/hour'
            }
          ]
        }
      };
    }

    return {
      id: Date.now().toString(),
      type: 'assistant',
      content: "I understand you're looking for guidance. Could you tell me more about your academic background, current year of study, and specific interests? This will help me provide more personalized recommendations for courses, career paths, and mentors.",
      timestamp: new Date(),
      suggestions: [
        "I'm in 3rd year Computer Science",
        "I'm interested in robotics and automation",
        "Show me high-paying tech jobs",
        "I want to start my own tech company"
      ]
    };
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const renderRecommendations = (recommendations: any) => {
    if (recommendations.type === 'course') {
      return (
        <div className="mt-4 space-y-3">
          <h4 className="font-semibold text-gray-900 flex items-center">
            <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
            Recommended Courses
          </h4>
          {recommendations.items.map((course: any, index: number) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-medium text-gray-900">{course.title}</h5>
                  <Badge variant={course.price === 'Free' ? 'secondary' : 'outline'}>
                    {course.price}
                  </Badge>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Platform: {course.platform} • Duration: {course.duration}</p>
                  <p>Rating: ⭐ {course.rating}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {course.skills.map((skill: string) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button size="sm" className="mt-3 bg-blue-600 hover:bg-blue-700">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      );
    }

    if (recommendations.type === 'mentor') {
      return (
        <div className="mt-4 space-y-3">
          <h4 className="font-semibold text-gray-900 flex items-center">
            <Users className="h-4 w-4 mr-2 text-green-600" />
            Available Mentors
          </h4>
          {recommendations.items.map((mentor: any, index: number) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="font-medium text-gray-900">{mentor.name}</h5>
                    <p className="text-sm text-gray-600">{mentor.role}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    {mentor.price}
                  </Badge>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Experience: {mentor.experience} • Rating: ⭐ {mentor.rating}</p>
                  <p>{mentor.sessions} sessions completed</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {mentor.expertise.map((skill: string) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button size="sm" className="mt-3 bg-green-600 hover:bg-green-700">
                  Book Session
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Career Assistant</h1>
          <p className="text-gray-600 mt-2">Get personalized career guidance powered by AI</p>
        </div>

        <Card className="rounded-xl shadow-lg h-[600px] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
              Chat with AI Assistant
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-hidden p-0">
            <div className="h-full flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div
                        className={`rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.type === 'assistant' && (
                            <Bot className="h-4 w-4 mt-0.5 text-blue-600" />
                          )}
                          {message.type === 'user' && (
                            <User className="h-4 w-4 mt-0.5 text-white" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm">{message.content}</p>
                            {message.recommendations && renderRecommendations(message.recommendations)}
                          </div>
                        </div>
                      </div>
                      
                      {/* Suggestions */}
                      {message.suggestions && (
                        <div className="mt-3 space-y-2">
                          {message.suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="block w-full text-left p-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <Lightbulb className="h-3 w-3 inline mr-2 text-yellow-500" />
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-blue-600" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me about careers, courses, or mentors..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    disabled={isLoading}
                  />
                  <Button
                    onClick={() => handleSendMessage(inputValue)}
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}