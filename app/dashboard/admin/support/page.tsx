"use client";

import { useState, useEffect } from "react";

// Define the Ticket type
interface Ticket {
  id: number;
  user: string;
  email?: string;
  issue: string;
  status: "Pending" | "Resolved" | "Open" | "Closed" | "In Progress";
  createdAt?: string;
  priority?: "Low" | "Medium" | "High" | "Urgent";
  messages?: Message[];
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "admin";
  timestamp: Date;
}

export default function AdminSupport() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - replace with API call
  const mockTickets: Ticket[] = [
    {
      id: 1,
      user: "Vishal Rana",
      email: "vishal@example.com",
      issue: "Payment not processing",
      status: "Pending",
      priority: "High",
      createdAt: "2024-05-15T10:30:00Z",
    },
    {
      id: 2,
      user: "John Doe",
      email: "john@example.com",
      issue: "Unable to login",
      status: "Resolved",
      priority: "Medium",
      createdAt: "2024-05-14T15:45:00Z",
    },
    {
      id: 3,
      user: "Sarah Smith",
      email: "sarah@example.com",
      issue: "Subscription expired issue",
      status: "Open",
      priority: "Urgent",
      createdAt: "2024-05-15T09:15:00Z",
    },
  ];

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      setError(null);

      // Replace with actual API call
      // const response = await fetch("/api/support/tickets");
      // if (!response.ok) throw new Error("Failed to fetch tickets");
      // const data = await response.json();

      // Using mock data for now
      const data = mockTickets;
      setTickets(data);
      
      // Select first ticket by default
      if (data.length > 0 && !selectedTicket) {
        setSelectedTicket(data[0]);
      }
    } catch (err) {
      console.error("Error fetching tickets:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch tickets");
    } finally {
      setLoading(false);
    }
  };

  const handleReply = async () => {
    if (!reply.trim()) {
      alert("Please enter a reply");
      return;
    }

    if (!selectedTicket) {
      alert("Please select a ticket first");
      return;
    }

    try {
      // Replace with actual API call
      // const response = await fetch(`/api/support/tickets/${selectedTicket.id}/reply`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ message: reply, adminName: "Admin" }),
      // });
      
      // if (!response.ok) throw new Error("Failed to send reply");

      alert(`Reply sent successfully to ${selectedTicket.user}`);
      setReply("");
      
      // Optionally update ticket status
      updateTicketStatus(selectedTicket.id, "In Progress");
    } catch (err) {
      console.error("Error sending reply:", err);
      alert("Failed to send reply. Please try again.");
    }
  };

  const updateTicketStatus = async (ticketId: number, newStatus: Ticket["status"]) => {
    try {
      // Replace with actual API call
      // await fetch(`/api/support/tickets/${ticketId}`, {
      //   method: "PATCH",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ status: newStatus }),
      // });

      // Update local state
      setTickets(prevTickets =>
        prevTickets.map(ticket =>
          ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
        )
      );
      
      if (selectedTicket?.id === ticketId) {
        setSelectedTicket(prev => prev ? { ...prev, status: newStatus } : null);
      }
    } catch (err) {
      console.error("Error updating ticket status:", err);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-600";
      case "resolved":
        return "bg-green-600";
      case "open":
        return "bg-blue-600";
      case "closed":
        return "bg-gray-600";
      case "in progress":
        return "bg-purple-600";
      default:
        return "bg-purple-600";
    }
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority?.toLowerCase()) {
      case "urgent":
        return "text-red-400 bg-red-500/20";
      case "high":
        return "text-orange-400 bg-orange-500/20";
      case "medium":
        return "text-yellow-400 bg-yellow-500/20";
      case "low":
        return "text-green-400 bg-green-500/20";
      default:
        return "text-gray-400 bg-gray-500/20";
    }
  };

  const getFilteredTickets = () => {
    let filtered = tickets;
    
    // Filter by status
    if (filter !== "all") {
      filtered = filtered.filter(ticket => 
        ticket.status.toLowerCase() === filter.toLowerCase()
      );
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(ticket =>
        ticket.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.issue.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.email?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const getStatusCount = (status: string) => {
    if (status === "all") return tickets.length;
    return tickets.filter(t => t.status.toLowerCase() === status.toLowerCase()).length;
  };

  if (loading) {
    return (
      <main className="flex-1 flex justify-center items-center h-64 p-8 text-white">
        <div className="text-white">Loading tickets...</div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto p-8 text-white">
        {/* PAGE HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Support Center</h1>
          <p className="text-white/60 mt-2">Manage user support tickets and responses</p>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
            Error: {error}
          </div>
        )}

        {/* FILTERS AND SEARCH */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex gap-2 flex-wrap">
            {["all", "open", "pending", "in progress", "resolved", "closed"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg transition text-sm ${
                  filter === status
                    ? "bg-purple-600 text-white"
                    : "bg-[#091548] text-white/60 hover:text-white hover:bg-[#0d1b5c]"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
                <span className="ml-2 text-xs opacity-75">
                  ({getStatusCount(status)})
                </span>
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search by user, email, or issue..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#091548] border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 sm:w-64"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* TICKETS LIST */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Support Tickets</h2>
            
            {getFilteredTickets().length === 0 ? (
              <div className="bg-[#091548] p-8 rounded-2xl border border-white/10 text-center">
                <p className="text-white/60">No tickets found</p>
              </div>
            ) : (
              getFilteredTickets().map((ticket) => (
                <div
                  key={ticket.id}
                  onClick={() => setSelectedTicket(ticket)}
                  className={`bg-[#091548] p-5 rounded-2xl border cursor-pointer transition-all ${
                    selectedTicket?.id === ticket.id
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-white/10 hover:border-purple-500/50"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-xl font-bold">{ticket.user}</h3>
                        {ticket.priority && (
                          <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(ticket.priority)}`}>
                            {ticket.priority}
                          </span>
                        )}
                      </div>
                      <p className="text-white/70 text-sm mb-2">{ticket.issue}</p>
                      {ticket.email && (
                        <p className="text-white/40 text-xs">{ticket.email}</p>
                      )}
                      {ticket.createdAt && (
                        <p className="text-white/30 text-xs mt-1">
                          {new Date(ticket.createdAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                    <div>
                      <span className={`${getStatusColor(ticket.status)} px-3 py-1 rounded-lg text-xs font-medium`}>
                        {ticket.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* REPLY SECTION */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {selectedTicket ? `Reply to ${selectedTicket.user}` : "Select a Ticket"}
            </h2>
            
            {selectedTicket ? (
              <div className="bg-[#091548] rounded-2xl border border-white/10">
                {/* Ticket Details */}
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-lg font-semibold mb-2">Ticket Details</h3>
                  <p className="text-white/70 text-sm mb-2">
                    <span className="text-white/50">Issue:</span> {selectedTicket.issue}
                  </p>
                  {selectedTicket.email && (
                    <p className="text-white/70 text-sm">
                      <span className="text-white/50">User Email:</span> {selectedTicket.email}
                    </p>
                  )}
                </div>

                {/* Reply Form */}
                <div className="p-6">
                  <label className="block text-sm font-medium mb-2">Your Reply</label>
                  <textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Write your support reply..."
                    className="w-full h-40 bg-[#020b2d] rounded-xl p-4 outline-none border border-white/10 focus:border-purple-500 transition resize-none"
                  />
                  
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={handleReply}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                    >
                      Send Reply
                    </button>
                    
                    {selectedTicket.status !== "Resolved" && selectedTicket.status !== "Closed" && (
                      <button
                        onClick={() => updateTicketStatus(selectedTicket.id, "Resolved")}
                        className="px-6 py-3 rounded-xl font-semibold bg-green-600 hover:bg-green-700 transition"
                      >
                        Mark Resolved
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#091548] p-12 rounded-2xl border border-white/10 text-center">
                <p className="text-white/60">Select a ticket from the list to reply</p>
              </div>
            )}
          </div>
        </div>
    </main>
  );
}