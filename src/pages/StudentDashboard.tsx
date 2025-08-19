import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { 
  Home, 
  AlertTriangle, 
  Clock, 
  CheckCircle, 
  XCircle,
  Plus,
  User,
  MapPin,
  Calendar
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentDashboard = () => {
  const { toast } = useToast();
  const [showNewRequest, setShowNewRequest] = useState(false);

  const studentInfo = {
    name: "John Doe",
    studentId: "IJA2024001",
    department: "Law",
    year: "2nd Year",
    room: "302",
    block: "Block B",
    status: "Occupied"
  };

  const requestHistory = [
    {
      id: 1,
      type: "Maintenance",
      description: "Air conditioning not working",
      date: "2024-01-15",
      status: "Resolved",
      response: "Technician visited and fixed the AC unit."
    },
    {
      id: 2,
      type: "Room Change",
      description: "Request to move to a quieter room",
      date: "2024-01-10",
      status: "Pending",
      response: null
    },
    {
      id: 3,
      type: "Cleaning",
      description: "Weekly cleaning schedule inquiry",
      date: "2024-01-05",
      status: "Resolved",
      response: "Cleaning schedule has been updated and shared."
    }
  ];

  const handleNewRequest = () => {
    toast({
      title: "Request Submitted",
      description: "Your request has been submitted and will be reviewed by admin.",
    });
    setShowNewRequest(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Resolved":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case "Rejected":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Welcome back, {studentInfo.name}!
          </h1>
          <p className="text-muted-foreground">
            Manage your accommodation and submit requests
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student & Room Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Student Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm text-muted-foreground">Student ID</Label>
                  <p className="font-medium">{studentInfo.studentId}</p>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Department</Label>
                  <p className="font-medium">{studentInfo.department}</p>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Year of Study</Label>
                  <p className="font-medium">{studentInfo.year}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Room Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-primary">
                      Room {studentInfo.room}
                    </p>
                    <p className="text-muted-foreground">{studentInfo.block}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    {studentInfo.status}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>2nd Floor, West Wing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Check-in: Sep 1, 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Submit New Request
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => setShowNewRequest(!showNewRequest)}
                  className="w-full"
                  variant={showNewRequest ? "secondary" : "default"}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {showNewRequest ? "Cancel" : "New Request"}
                </Button>
                
                {showNewRequest && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="requestType">Request Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                          <SelectItem value="cleaning">Cleaning</SelectItem>
                          <SelectItem value="room-change">Room Change</SelectItem>
                          <SelectItem value="facilities">Facilities</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea 
                        id="description"
                        placeholder="Please describe your request in detail..."
                        rows={3}
                      />
                    </div>
                    <Button onClick={handleNewRequest} className="w-full">
                      Submit Request
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Request History */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Request History</CardTitle>
                <CardDescription>
                  Track your accommodation requests and their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {requestHistory.map((request) => (
                    <div 
                      key={request.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(request.status)}
                          <div>
                            <h4 className="font-semibold text-primary">
                              {request.type}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {request.date}
                            </p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                      </div>
                      
                      <p className="text-sm mb-3">{request.description}</p>
                      
                      {request.response && (
                        <div className="bg-muted p-3 rounded-md">
                          <Label className="text-xs text-muted-foreground">
                            Admin Response:
                          </Label>
                          <p className="text-sm mt-1">{request.response}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {requestHistory.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <AlertTriangle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No requests submitted yet</p>
                    <p className="text-sm">Submit your first request using the form above</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;