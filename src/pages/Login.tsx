import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("login");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome to your dashboard!",
    });
    navigate("/dashboard");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful",
      description: "Your account has been created. Please login.",
    });
    setActiveTab("login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Student Portal</h1>
            <p className="text-muted-foreground">Institute of Judicial Administration</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Student Login</CardTitle>
                  <CardDescription>
                    Access your accommodation dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john.doe@student.ija.edu"
                        defaultValue="john.doe@student.ija.edu"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••"
                        defaultValue="password123"
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Sign In
                    </Button>
                  </form>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Don't have an account?{" "}
                    <button 
                      onClick={() => setActiveTab("register")}
                      className="text-primary hover:underline"
                    >
                      Register here
                    </button>
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Student Registration</CardTitle>
                  <CardDescription>
                    Create your accommodation account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input 
                        id="fullName" 
                        placeholder="John Doe"
                        defaultValue="John Doe"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="regEmail">Email</Label>
                      <Input 
                        id="regEmail" 
                        type="email" 
                        placeholder="john.doe@student.ija.edu"
                        defaultValue="john.doe@student.ija.edu"
                        required 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="regPassword">Password</Label>
                        <Input 
                          id="regPassword" 
                          type="password" 
                          placeholder="••••••••"
                          defaultValue="password123"
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input 
                          id="confirmPassword" 
                          type="password" 
                          placeholder="••••••••"
                          defaultValue="password123"
                          required 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 123-4567"
                        defaultValue="+1 (555) 123-4567"
                        required 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="studentId">Student ID</Label>
                        <Input 
                          id="studentId" 
                          placeholder="IJA2024001"
                          defaultValue="IJA2024001"
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="year">Year of Study</Label>
                        <Select defaultValue="2">
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1st Year</SelectItem>
                            <SelectItem value="2">2nd Year</SelectItem>
                            <SelectItem value="3">3rd Year</SelectItem>
                            <SelectItem value="4">4th Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select defaultValue="law">
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="law">Law</SelectItem>
                          <SelectItem value="judicial-admin">Judicial Administration</SelectItem>
                          <SelectItem value="legal-studies">Legal Studies</SelectItem>
                          <SelectItem value="public-admin">Public Administration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full">
                      Register Now
                    </Button>
                  </form>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Already have an account?{" "}
                    <button 
                      onClick={() => setActiveTab("login")}
                      className="text-primary hover:underline"
                    >
                      Login here
                    </button>
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;