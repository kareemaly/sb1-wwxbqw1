import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Brain, Users, BookOpen, Zap, Rocket, Lock, Award, Star, CheckCircle2,
  Briefcase, GraduationCap, Trophy, Mail, Phone, Linkedin, Target
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function App() {
  const certifications = [
    {
      provider: "Google",
      name: "AI-Powered Performance Ads",
      validUntil: "October 16, 2025",
      icon: <CheckCircle2 className="h-4 w-4" />,
      color: "bg-blue-500"
    },
    {
      provider: "Google",
      name: "Authorized Partner",
      validUntil: "October 2024",
      icon: <Award className="h-4 w-4" />,
      color: "bg-purple-500"
    },
    {
      provider: "Highfield",
      name: "International Training Award",
      icon: <Trophy className="h-4 w-4" />,
      color: "bg-emerald-500"
    }
  ]

  const experience = [
    {
      role: "Sr. Business Development Consultant",
      company: "Classera",
      period: "Feb 2023 - Present",
      description: "Spearheading business development strategies in the education sector."
    },
    {
      role: "Digital Marketing Manager",
      company: "Freelance",
      period: "2021 - 2023",
      description: "Executed comprehensive digital marketing strategies focusing on SEO and e-commerce."
    },
    {
      role: "Sr. Sales Manager",
      company: "Mekdam Holding Group, Qatar",
      period: "2014 - 2021",
      description: "Led business development initiatives, achieving annual sales targets."
    },
    {
      role: "Customer Service Lead",
      company: "Nokia Qatar",
      period: "2010 - 2014",
      description: "Managed customer service operations and developed training programs."
    }
  ]

  return (
    <ScrollArea className="h-screen">
      <div className="min-h-screen bg-[#1a1f2e] text-white">
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-[#1a1f2e]/80 border-b border-[#2a3142]">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Brain className="h-8 w-8 text-[#7c3aed]" />
              <span className="text-2xl font-bold">Ahmed Elbahrawy</span>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <a href="mailto:ahmedbahrawyqa@gmail.com" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>ahmedbahrawyqa@gmail.com</span>
              </a>
              <a href="tel:+97470218848" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+974-7021 8848</span>
              </a>
              <a href="https://linkedin.com/in/ahmed-el-bahrawy-042499190" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
              Business Growth Strategist
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {certifications.map((cert, index) => (
                <Badge key={index} className={`${cert.color} text-white flex items-center gap-1`}>
                  {cert.icon}
                  {cert.name}
                </Badge>
              ))}
            </div>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              15+ years of expertise in Business Development, Digital Marketing, and CRM. 
              Specialized in AI-powered business solutions and strategic growth.
            </p>
          </section>

          <section className="container mx-auto px-4 py-20">
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="expertise">Expertise</TabsTrigger>
              </TabsList>
              
              <TabsContent value="experience">
                <div className="grid gap-6">
                  {experience.map((job, index) => (
                    <Card key={index} className="bg-[#2a3142] border-none">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{job.role}</span>
                          <Badge variant="outline">{job.period}</Badge>
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          {job.company}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{job.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="projects">
                <Card className="bg-[#2a3142] border-none">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Rocket className="h-6 w-6 text-[#7c3aed]" />
                      KEFUSION - Google Partner Program
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Leading the development of KEFUSION, a comprehensive business growth platform 
                      integrating 4000+ APIs. The platform leverages AI and automation to streamline 
                      business operations and drive growth through digital transformation.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education">
                <div className="grid gap-6">
                  <Card className="bg-[#2a3142] border-none">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-[#7c3aed]" />
                        Master of Arts in Marketing
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        Charisma University (2018 - 2020)
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-[#2a3142] border-none">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-[#7c3aed]" />
                        Bachelor of Business Administration
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        Suez Canal University, Egypt (2004 - 2008)
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="expertise">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Strategic Growth & Development",
                    "Digital Marketing & Performance Optimization",
                    "Sales Forecasting & Planning",
                    "Client Relationship Management",
                    "Market Research & Analysis",
                    "Lead & Conversion Generation"
                  ].map((skill, index) => (
                    <Card key={index} className="bg-[#2a3142] border-none">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-[#7c3aed]" />
                          {skill}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </main>

        <footer className="bg-[#2a3142]">
          <div className="container mx-auto px-4 py-8 text-center text-gray-400">
            <div className="flex justify-center space-x-4 mb-4">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="bg-transparent">
                  {cert.provider} Certified
                </Badge>
              ))}
            </div>
            <p>&copy; 2024 Ahmed Elbahrawy. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ScrollArea>
  )
}