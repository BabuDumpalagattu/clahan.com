import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import DevOpsCourse from "./pages/DevOpsCourse";
import SQLCourse from "./pages/SQLCourse";
import PythonCourse from "./pages/PythonCourse";
import NotFound from "./pages/NotFound";
import MessagesTable from "./pages/MessagesTable";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/devops" element={<DevOpsCourse />} />
          <Route path="/courses/sql" element={<SQLCourse />} />
          <Route path="/courses/python" element={<PythonCourse />} />
             <Route path="messages" element={<MessagesTable />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;