import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Home, 
  Users, 
  Shield, 
  Award, 
  BookOpen,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Home,
      title: "Room Management",
      description: "Efficient allocation and management of student accommodation with real-time status updates."
    },
    {
      icon: Users,
      title: "Student Portal",
      description: "Dedicated portal for students to view room status, submit requests, and track concerns."
    },
    {
      icon: Shield,
      title: "Admin Control",
      description: "Comprehensive admin dashboard for managing accommodations, students, and requests."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Streamlined process for handling maintenance requests and ensuring quality living standards."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <GraduationCap className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-primary mb-6">
            Institute of Judicial Administration
          </h1>
          <h2 className="text-3xl font-semibold text-secondary mb-4">
            Student Accommodation System
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A comprehensive digital platform designed to streamline student accommodation 
            management, providing efficient room allocation, request handling, and administrative 
            oversight for the Institute of Judicial Administration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link to="/login">
                <Users className="h-5 w-5 mr-2" />
                Student Login
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
              <Link to="/admin">
                <Shield className="h-5 w-5 mr-2" />
                Admin Access
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">System Features</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our accommodation system provides a complete solution for managing student 
              housing with modern efficiency and transparency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">About the System</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Student Accommodation System is a specialized platform developed for the 
                Institute of Judicial Administration to modernize and streamline the management 
                of student housing facilities. This system enhances the experience for both 
                students and administrators through digital efficiency.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Academic Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Seamlessly integrated with academic programs and student lifecycle
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Student-Centered Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Intuitive interface designed with student needs and preferences in mind
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Secure & Reliable</h4>
                    <p className="text-sm text-muted-foreground">
                      Built with robust security measures and reliable infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Institute of Judicial Administration</p>
                    <p className="text-sm text-muted-foreground">
                      123 Justice Avenue, Legal District
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Accommodation Office</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">accommodation@ija.edu</p>
                    <p className="text-sm text-muted-foreground">Student Housing Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6" />
            <span className="text-lg font-semibold">IJA Accommodation System</span>
          </div>
          <p className="text-sm opacity-90">
            © 2024 Institute of Judicial Administration. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
