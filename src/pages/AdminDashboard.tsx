import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { 
  Users, 
  Home, 
  AlertTriangle, 
  Edit, 
  Trash2, 
  MessageSquare,
  Plus,
  Search
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  const studentData = [
    {
      id: "IJA2024001",
      name: "John Doe",
      email: "john.doe@student.ija.edu",
      department: "Law",
      year: "2nd Year",
      room: "302",
      block: "Block B",
      status: "Occupied",
      checkIn: "2024-09-01",
      concerns: true
    },
    {
      id: "IJA2024002",
      name: "Jane Smith",
      email: "jane.smith@student.ija.edu",
      department: "Judicial Administration",
      year: "3rd Year",
      room: "405",
      block: "Block A",
      status: "Occupied",
      checkIn: "2024-09-01",
      concerns: false
    },
    {
      id: "IJA2024003",
      name: "Mike Johnson",
      email: "mike.johnson@student.ija.edu",
      department: "Legal Studies",
      year: "1st Year",
      room: "201",
      block: "Block C",
      status: "Occupied",
      checkIn: "2024-09-01",
      concerns: true
    }
  ];

  const pendingRequests = [
    {
      id: 1,
      studentName: "John Doe",
      studentId: "IJA2024001",
      type: "Room Change",
      description: "Request to move to a quieter room",
      date: "2024-01-10",
      urgency: "Medium"
    },
    {
      id: 2,
      studentName: "Mike Johnson",
      studentId: "IJA2024003",
      type: "Maintenance",
      description: "Heating system not working properly",
      date: "2024-01-12",
      urgency: "High"
    }
  ];

  const availableRooms = [
    { room: "103", block: "Block A", type: "Single", status: "Vacant" },
    { room: "205", block: "Block B", type: "Double", status: "Vacant" },
    { room: "307", block: "Block C", type: "Single", status: "Vacant" },
    { room: "401", block: "Block A", type: "Double", status: "Maintenance" }
  ];

  const handleAction = (action: string, item?: any) => {
    toast({
      title: `${action} Action`,
      description: `${action} action has been processed successfully.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Occupied":
        return "bg-green-100 text-green-800";
      case "Vacant":
        return "bg-blue-100 text-blue-800";
      case "Maintenance":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredStudents = studentData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.room.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage student accommodations and requests
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold text-primary">245</p>
                </div>
                <Users className="h-8 w-8 text-primary opacity-70" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Occupied Rooms</p>
                  <p className="text-2xl font-bold text-primary">189</p>
                </div>
                <Home className="h-8 w-8 text-primary opacity-70" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Available Rooms</p>
                  <p className="text-2xl font-bold text-primary">56</p>
                </div>
                <Home className="h-8 w-8 text-secondary opacity-70" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Requests</p>
                  <p className="text-2xl font-bold text-primary">12</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-destructive opacity-70" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="students" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="students">Student Management</TabsTrigger>
            <TabsTrigger value="requests">Pending Requests</TabsTrigger>
            <TabsTrigger value="rooms">Room Management</TabsTrigger>
          </TabsList>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Student Accommodation Details</CardTitle>
                    <CardDescription>
                      Manage student room assignments and information
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Student
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student Info</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Room</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Concerns</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <p className="text-sm text-muted-foreground">{student.id}</p>
                            <p className="text-sm text-muted-foreground">{student.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p>{student.department}</p>
                            <p className="text-sm text-muted-foreground">{student.year}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">Room {student.room}</p>
                            <p className="text-sm text-muted-foreground">{student.block}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(student.status)}>
                            {student.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {student.concerns ? (
                            <Badge className="bg-red-100 text-red-800">Yes</Badge>
                          ) : (
                            <Badge className="bg-green-100 text-green-800">No</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleAction("Update", student)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleAction("Delete", student)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Student Requests</CardTitle>
                <CardDescription>
                  Review and respond to student accommodation requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {pendingRequests.map((request) => (
                    <div key={request.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-primary">{request.type}</h4>
                          <p className="text-sm text-muted-foreground">
                            {request.studentName} ({request.studentId})
                          </p>
                          <p className="text-sm text-muted-foreground">{request.date}</p>
                        </div>
                        <Badge className={getUrgencyColor(request.urgency)}>
                          {request.urgency} Priority
                        </Badge>
                      </div>
                      
                      <p className="text-sm mb-4">{request.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor={`response-${request.id}`}>Admin Response</Label>
                          <Textarea 
                            id={`response-${request.id}`}
                            placeholder="Type your response here..."
                            rows={3}
                          />
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            onClick={() => handleAction("Approve", request)}
                          >
                            Approve
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleAction("Reject", request)}
                          >
                            Reject
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleAction("Respond", request)}
                          >
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Send Response
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Room Management</CardTitle>
                    <CardDescription>
                      Monitor room availability and manage allocations
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Room
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Room</TableHead>
                      <TableHead>Block</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {availableRooms.map((room, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">Room {room.room}</TableCell>
                        <TableCell>{room.block}</TableCell>
                        <TableCell>{room.type}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(room.status)}>
                            {room.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleAction("Allocate", room)}
                            >
                              Allocate
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleAction("Edit", room)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;